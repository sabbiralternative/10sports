import { Settings } from "../../api";

const TrustWorthy = () => {
  return (
    <div
      className="w-full h-full
            } lg:w-[54%]"
    >
      <div className="hidden lg:flex sticky top-0 z-[1000] app-bg font-lato-bold w-full justify-between items-center lg:pt-2">
        <div />
      </div>
      <article className="w-full px-2 py-2 sm:px-4 sm:py-4 block font-lato">
        <div className="flex flex-col gap-2 text-text_color_primary1">
          <h1 className="text-2xl font-bold text-text_color_primary1">
            Is {Settings.site_name} Trustworthy?
          </h1>
          <h2 className=" font-extrabold text-lg text-text_color_secondary" />
          <p className="text-sm sm:text-base">
            At {Settings.site_name}, we prioritize the safety, security, and
            satisfaction of our customers above all else. We understand that
            trust is paramount when choosing a sportsbook and casino provider,
            and we are committed to maintaining the highest standards of
            integrity and reliability.
          </p>
          <ul className="list-disc pl-5" />
        </div>
        <div className="flex flex-col gap-2 text-text_color_primary1">
          <h1 className="text-2xl font-bold text-text_color_primary1" />
          <h2 className=" font-extrabold text-lg text-text_color_secondary">
            Licensing and Regulation
          </h2>
          <p className="text-sm sm:text-base">
            {Settings.site_name} is fully licensed and regulated by reputable
            authorities in the gaming industry. Our compliance with stringent
            regulatory requirements ensures that we operate transparently and
            fairly. We adhere to all legal standards, providing a secure
            environment for our players.
          </p>
          <ul className="list-disc pl-5" />
        </div>
        <div className="flex flex-col gap-2 text-text_color_primary1">
          <h1 className="text-2xl font-bold text-text_color_primary1" />
          <h2 className=" font-extrabold text-lg text-text_color_secondary">
            Secure Transactions
          </h2>
          <p className="text-sm sm:text-base">
            We use advanced encryption technologies to safeguard all
            transactions on our platform. Whether you are depositing funds,
            placing bets, or withdrawing your winnings, you can be confident
            that your personal and financial information is protected from
            unauthorized access.
          </p>
          <ul className="list-disc pl-5" />
        </div>
        <div className="flex flex-col gap-2 text-text_color_primary1">
          <h1 className="text-2xl font-bold text-text_color_primary1" />
          <h2 className=" font-extrabold text-lg text-text_color_secondary">
            Responsible Gaming
          </h2>
          <p className="text-sm sm:text-base">
            {Settings.site_name} is dedicated to promoting responsible gaming.
            We provide tools and resources to help our players manage their
            gaming activities, including setting deposit limits, self-exclusion
            options, and access to support services. Our goal is to ensure that
            gaming remains a fun and enjoyable experience for everyone.
          </p>
          <ul className="list-disc pl-5" />
        </div>
        <div className="flex flex-col gap-2 text-text_color_primary1">
          <h1 className="text-2xl font-bold text-text_color_primary1" />
          <h2 className=" font-extrabold text-lg text-text_color_secondary">
            Customer Support
          </h2>
          <p className="text-sm sm:text-base">
            Our customer support team is available 24/7 to assist you with any
            questions or concerns. We pride ourselves on delivering prompt and
            professional service to address any issues you may encounter. Your
            satisfaction is our top priority, and we are here to ensure you have
            a positive experience on our platform.
          </p>
          <ul className="list-disc pl-5" />
        </div>
        <div className="flex flex-col gap-2 text-text_color_primary1">
          <h1 className="text-2xl font-bold text-text_color_primary1" />
          <h2 className=" font-extrabold text-lg text-text_color_secondary">
            Positive Customer Feedback
          </h2>
          <p className="text-sm sm:text-base">
            The positive feedback and testimonials from our satisfied customers
            speak volumes about our commitment to excellence. We strive to
            continuously improve our services based on your feedback to provide
            the best possible gaming experience.
          </p>
          <ul className="list-disc pl-5" />
        </div>
        <div className="flex flex-col gap-2 text-text_color_primary1">
          <h1 className="text-2xl font-bold text-text_color_primary1" />
          <h2 className=" font-extrabold text-lg text-text_color_secondary">
            Conclusion
          </h2>
          <p className="text-sm sm:text-base">
            {Settings.site_name} is a trustworthy and reliable choice for your
            gaming needs. Our commitment to security, fairness, and customer
            satisfaction sets us apart in the industry. Join us today and
            experience the peace of mind that comes with playing on a secure and
            reputable platform.
          </p>
          <ul className="list-disc pl-5" />
        </div>
      </article>
    </div>
  );
};

export default TrustWorthy;
