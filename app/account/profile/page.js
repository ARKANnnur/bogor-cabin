import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

export const metadata = {
  title: "Update profile",
};

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);

  return (
    <div>
      <h2 className="mb-4 text-center text-2xl font-semibold text-secondary-50 sm:text-justify">
        Update your guest profile
      </h2>

      <p className="mb-4 text-center text-lg text-secondary-200 sm:text-justify">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="w-full rounded-full border border-secondary-50 bg-dark-200 px-5 py-3 text-secondary-200 shadow-sm disabled:cursor-not-allowed disabled:text-secondary-400"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
