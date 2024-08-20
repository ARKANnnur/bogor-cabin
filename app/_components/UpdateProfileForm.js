"use client";
import { updateGuest } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function UpdateProfileForm({ guest, children }) {
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="flex flex-col gap-6 py-8 text-lg"
    >
      <div className="relative space-y-2">
        <label
          htmlFor="fullName"
          class="absolute -top-2 left-10 rounded-full bg-dark-200 px-4 py-1 text-sm text-secondary-50 sm:text-base"
        >
          Full name
        </label>
        <input
          disabled
          defaultValue={fullName}
          name="fullName"
          className="w-full rounded-full border border-secondary-50 bg-dark-200 px-5 py-3 text-secondary-200 shadow-sm disabled:cursor-not-allowed disabled:text-secondary-400"
        ></input>
      </div>

      <div className="relative space-y-2">
        <label
          htmlFor="email"
          class="absolute -top-2 left-10 rounded-full bg-dark-200 px-4 py-1 text-sm text-secondary-50 sm:text-base"
        >
          Email address
        </label>
        <input
          disabled
          defaultValue={email}
          name="email"
          className="w-full rounded-full border border-secondary-50 bg-dark-200 px-5 py-3 text-secondary-200 shadow-sm disabled:cursor-not-allowed disabled:text-secondary-400"
        />
      </div>

      <div className="relative space-y-2">
        <div className="flex items-center justify-end">
          <label
            htmlFor="nationality"
            class="absolute top-2 left-10 rounded-full bg-dark-200 px-4 py-1 text-sm text-secondary-50 sm:text-base"
          >
            Where are you from?
          </label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-5 rounded-sm -translate-x-5"
          />
        </div>

        {children}
      </div>

      <div className="relative space-y-2">
        <label
          htmlFor="nationalID"
          class="absolute -top-2 left-10 rounded-full bg-dark-200 px-4 py-1 text-sm text-secondary-50 sm:text-base"
        >
          National ID number
        </label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          className="w-full rounded-full border border-secondary-50 bg-dark-200 px-5 py-3 text-secondary-200 shadow-sm disabled:cursor-not-allowed disabled:text-secondary-400"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <SubmitButton pendingLabel="Updating...">Update profile</SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
