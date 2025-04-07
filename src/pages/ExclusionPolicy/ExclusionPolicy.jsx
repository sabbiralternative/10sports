const ExclusionPolicy = () => {
  return (
    <div
      className="w-full h-full
                   lg:w-[54%] lg:pt-2"
    >
      <article className="w-full px-2 py-2 sm:px-4 sm:py-4 block font-lato">
        <div className="flex flex-col gap-2 text-text_color_primary1">
          <h1 className="text-2xl font-bold text-text_color_primary1">
            Self Exclusion
          </h1>
          <h2 className=" font-extrabold text-lg text-text_color_secondary">
            What is a Self-Exclusion?
          </h2>
          <p className="text-sm sm:text-base">
            Self-exclusion is a facility that the Site offers to help those
            customers who feel that their gambling is out of control and want us
            to help them stop. By entering into a self-exclusion agreement with
            the Site, you will be prevented from using your Account (as defined
            in the terms and conditions) for a specific period, as determined by
            you, of between 6 months and 5 years.
          </p>
          <ul className="list-disc pl-5" />
        </div>
        <div className="flex flex-col gap-2 text-text_color_primary1">
          <h1 className="text-2xl font-bold text-text_color_primary1" />
          <h2 className=" font-extrabold text-lg text-text_color_secondary">
            How to self-exclude from the Site
          </h2>
          <p className="text-sm sm:text-base">
            If at any time you should you wish to exclude yourself from use of
            the Site (as defined in the terms and conditions), you must submit
            this request by email to
          </p>
          <ul className="list-disc pl-5">
            <li>
              <h3 className=" text-base sm:text-lg font-bold" />
              <p className="text-sm sm:text-base">
                Please inform us of the period for which you wish to
                self-exclude. The minimum is 6 months and the maximum is 5
                years.
              </p>
            </li>
            <li>
              <h3 className=" text-base sm:text-lg font-bold" />
              <p className="text-sm sm:text-base">
                If you request self-exclusion but do not specify a period, we
                will exclude you for the minimum period of 6 months.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 text-text_color_primary1">
          <h1 className="text-2xl font-bold text-text_color_primary1" />
          <h2 className=" font-extrabold text-lg text-text_color_secondary">
            How soon after requesting a self-exclusion will it be activated?
          </h2>
          <p className="text-sm sm:text-base">
            We will endeavour to apply your exclusion as soon as practically
            possible. Normally, we will be able to reset your password to
            prevent you accessing the Site within 24 hours of your request.
          </p>
          <ul className="list-disc pl-5" />
        </div>
        <div className="flex flex-col gap-2 text-text_color_primary1">
          <h1 className="text-2xl font-bold text-text_color_primary1" />
          <h2 className=" font-extrabold text-lg text-text_color_secondary">
            What happens if I self-exclude?
          </h2>
          <p className="text-sm sm:text-base">
            We will make all reasonable efforts to:
          </p>
          <ul className="list-disc pl-5">
            <li>
              <h3 className=" text-base sm:text-lg font-bold" />
              <p className="text-sm sm:text-base">
                Prevent any marketing material being forwarded to you;
              </p>
            </li>
            <li>
              <h3 className=" text-base sm:text-lg font-bold" />
              <p className="text-sm sm:text-base">
                Remove you from any marketing databases operated by us;
              </p>
            </li>
            <li>
              <h3 className=" text-base sm:text-lg font-bold" />
              <p className="text-sm sm:text-base">
                Suspend your activity by cancelling your ability to access the
                Site for the period requested by you, or if no period is
                requested by you, for the Minimum Period;
              </p>
            </li>
            <li>
              <h3 className=" text-base sm:text-lg font-bold" />
              <p className="text-sm sm:text-base">
                Permanently close your Customer Account if instructed to do so
                by you, and return all funds owed to you to your nominated bank
                account.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 text-text_color_primary1">
          <h1 className="text-2xl font-bold text-text_color_primary1" />
          <h2 className=" font-extrabold text-lg text-text_color_secondary">
            Can I re-activate my Account or open a new Account during the
            self-exclusion period?
          </h2>
          <p className="text-sm sm:text-base">
            Accounts that have been self-excluded cannot be reactivated under
            any circumstances until the expiry of the self-exclusion period.
            During the period of your exclusion, you must not attempt to re-open
            any existing Account(s), seek to open any new Accounts or seek to
            place bets through any other customer’s Account.
          </p>
          <ul className="list-disc pl-5" />
        </div>
        <div className="flex flex-col gap-2 text-text_color_primary1">
          <h1 className="text-2xl font-bold text-text_color_primary1" />
          <h2 className=" font-extrabold text-lg text-text_color_secondary">
            If I would like to re-activate my Account, is this possible?
          </h2>
          <p className="text-sm sm:text-base">
            At the end of the self-exclusion period, you must contact us in
            person and confirm such intention in writing. If it is decided (in
            the Site’s absolute discretion) to permit you to re-open your
            Account/open a new Account, you should be aware that a 24-hour
            waiting period will be imposed prior to the Account being available
            for use.
          </p>
          <ul className="list-disc pl-5" />
        </div>
      </article>
    </div>
  );
};

export default ExclusionPolicy;
