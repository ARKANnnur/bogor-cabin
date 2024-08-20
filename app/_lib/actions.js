'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth, signIn, signOut } from './auth';
import { getBookings } from './data-service';
import supabase from './supabase';

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error('You must be logged in');

  const nationalID = formData.get('nationalID');
  const [nationality, countryFlag] = formData.get('nationality').split('%');

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error('Please provide a valid national ID');

  const updateData = { nationality, countryFlag, nationalID };

  const { error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', session.user.guestId);

  if (error) throw new Error('Guest could not be updated');

  revalidatePath('/account/profile');
}

export async function updateReservation(formData) {
  const session = await auth();
  if (!session) throw new Error('You must be logged in');

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingId = guestBookings.map((booking) => booking.id);

  const id = Number(formData.get('reservationId'));

  if (!guestBookingId.includes(id))
    throw new Error('You are not allowed to delet this booking');

  const updatedFields = {
    numGuests: Number(formData.get('numGuests')),
    observations: formData.get('observations'),
  };

  const { error } = await supabase
    .from('bookings')
    .update(updatedFields)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be updated');
  }
  revalidatePath(`/account/reservations/edit/${id}`);
  revalidatePath('/account/reservations');
  redirect('/account/reservations');
}

export async function createReservation(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error('You Must be Login');

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get('numGuests')),
    observations: formData.get('observations').slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: 'unconfirmed',
  };

  const { error } = await supabase.from('bookings').insert([newBooking]);

  if (error) {
    console.error(error);
    throw new Error('Booking could not be created');
  }

  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect('/cabins/thankyou');
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error('You Must be Login');

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingId = guestBookings.map((booking) => booking.id);

  if (!guestBookingId.includes(bookingId))
    throw new Error('You are not allowed to delet this booking');

  const { error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', bookingId);

  if (error) {
    console.error(error);
    throw new Error('Booking could not be deleted');
  }
  revalidatePath('/account/reservations');
}

export async function signInAction() {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
  await signOut('google', { redirectTo: '/' });
}
