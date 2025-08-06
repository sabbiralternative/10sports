import { useState } from "react";
import { Settings } from "../../api";

const FAQS = () => {
  const [tab, setTab] = useState(null);

  const handleToggleTab = (t) => {
    if (t === tab) {
      setTab(null);
    } else {
      setTab(t);
    }
  };
  return (
    <div
      className="w-full h-full
            } lg:w-[54%]"
    >
      <div className="hidden lg:flex sticky top-0 z-[1000] app-bg font-lato-bold w-full justify-between items-center lg:pt-2">
        <div />
      </div>
      <main className="container mx-auto  py-3">
        <div className="flex flex-col gap-y-2">
          <div className="border border-border_color_primary1  rounded-lg overflow-hidden">
            <button
              onClick={() => handleToggleTab(1)}
              id="accordion-button-1"
              aria-expanded="false"
              aria-controls="accordion-content-1"
              className="flex justify-between items-center  w-full px-2 py-3 text-left transition-colors duration-200 bg-bg_color_primary hover:bg-bg_color_quaternary "
            >
              <span className="font-medium text-text_color_primary1">
                1. How do I create an account?
              </span>
              <svg
                className={`w-6 h-6 transition-transform duration-200 text-text_color_primary1 ${
                  tab === 1 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id="accordion-content-1"
              role="region"
              aria-labelledby="accordion-button-1"
              className={`p-4 bg-bg_color_primary  ${
                tab === 1 ? "block" : "hidden"
              }`}
            >
              <p className="text-text_color_primary1">
                To create an account, click on the Sign Up button at the top
                right corner of our homepage. Fill in the required information,
                agree to our terms and conditions, and click Register. You will
                receive a confirmation email to verify your account.
              </p>
            </div>
          </div>
          <div className="border border-border_color_primary1  rounded-lg overflow-hidden">
            <button
              onClick={() => handleToggleTab(2)}
              id="accordion-button-2"
              aria-expanded="false"
              aria-controls="accordion-content-2"
              className="flex justify-between items-center  w-full px-2 py-3 text-left transition-colors duration-200 bg-bg_color_primary hover:bg-bg_color_quaternary "
            >
              <span className="font-medium text-text_color_primary1">
                2. How do I reset my password?
              </span>
              <svg
                className={`w-6 h-6 transition-transform duration-200 text-text_color_primary1 ${
                  tab === 2 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id="accordion-content-2"
              role="region"
              aria-labelledby="accordion-button-2"
              className={`p-4 bg-bg_color_primary  ${
                tab === 2 ? "block" : "hidden"
              }`}
            >
              <p className="text-text_color_primary1">
                If you have forgotten your password, click on the Forgot
                Password? link on the login page. Enter your registered email
                address, and we will send you instructions on how to reset your
                password.
              </p>
            </div>
          </div>
          <div className="border border-border_color_primary1  rounded-lg overflow-hidden">
            <button
              onClick={() => handleToggleTab(3)}
              id="accordion-button-3"
              aria-expanded="false"
              aria-controls="accordion-content-3"
              className="flex justify-between items-center  w-full px-2 py-3 text-left transition-colors duration-200 bg-bg_color_primary hover:bg-bg_color_quaternary "
            >
              <span className="font-medium text-text_color_primary1">
                3. What payment methods do you accept?
              </span>
              <svg
                className={`w-6 h-6 transition-transform duration-200 text-text_color_primary1 ${
                  tab === 3 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id="accordion-content-3"
              role="region"
              aria-labelledby="accordion-button-3"
              className={`p-4 bg-bg_color_primary  ${
                tab === 3 ? "block" : "hidden"
              }`}
            >
              <p className="text-text_color_primary1">
                We accept various payment methods, including credit/debit cards,
                bank transfers, and popular e-wallets such as PayPal and Skrill.
                For a complete list of payment options, please visit our
                Payments page.
              </p>
            </div>
          </div>
          <div className="border border-border_color_primary1  rounded-lg overflow-hidden">
            <button
              onClick={() => handleToggleTab(4)}
              id="accordion-button-4"
              aria-expanded="false"
              aria-controls="accordion-content-4"
              className="flex justify-between items-center  w-full px-2 py-3 text-left transition-colors duration-200 bg-bg_color_primary hover:bg-bg_color_quaternary "
            >
              <span className="font-medium text-text_color_primary1">
                4. How can I withdraw my winnings?
              </span>
              <svg
                className={`w-6 h-6 transition-transform duration-200 text-text_color_primary1 ${
                  tab === 4 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id="accordion-content-4"
              role="region"
              aria-labelledby="accordion-button-4"
              className={`p-4 bg-bg_color_primary  ${
                tab === 4 ? "block" : "hidden"
              }`}
            >
              <p className="text-text_color_primary1">
                To withdraw your winnings, log in to your account and navigate
                to the Withdrawal section. Select your preferred withdrawal
                method, enter the amount you wish to withdraw, and follow the
                on-screen instructions. Withdrawals are typically processed
                within 24-48 hours.
              </p>
            </div>
          </div>
          <div className="border border-border_color_primary1  rounded-lg overflow-hidden">
            <button
              onClick={() => handleToggleTab(5)}
              id="accordion-button-5"
              aria-expanded="false"
              aria-controls="accordion-content-5"
              className="flex justify-between items-center  w-full px-2 py-3 text-left transition-colors duration-200 bg-bg_color_primary hover:bg-bg_color_quaternary "
            >
              <span className="font-medium text-text_color_primary1">
                5. Is my personal information safe?
              </span>
              <svg
                className={`w-6 h-6 transition-transform duration-200 text-text_color_primary1 ${
                  tab === 5 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id="accordion-content-5"
              role="region"
              aria-labelledby="accordion-button-5"
              className={`p-4 bg-bg_color_primary  ${
                tab === 5 ? "block" : "hidden"
              }`}
            >
              <p className="text-text_color_primary1">
                Yes, we use state-of-the-art encryption technologies to ensure
                that your personal and financial information is secure. We are
                committed to protecting your privacy and providing a safe
                betting environment.
              </p>
            </div>
          </div>
          <div className="border border-border_color_primary1  rounded-lg overflow-hidden">
            <button
              onClick={() => handleToggleTab(6)}
              id="accordion-button-6"
              aria-expanded="false"
              aria-controls="accordion-content-6"
              className="flex justify-between items-center  w-full px-2 py-3 text-left transition-colors duration-200 bg-bg_color_primary hover:bg-bg_color_quaternary "
            >
              <span className="font-medium text-text_color_primary1">
                6. How can I contact customer support?
              </span>
              <svg
                className={`w-6 h-6 transition-transform duration-200 text-text_color_primary1 ${
                  tab === 6 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id="accordion-content-6"
              role="region"
              aria-labelledby="accordion-button-6"
              className={`p-4 bg-bg_color_primary  ${
                tab === 6 ? "block" : "hidden"
              }`}
            >
              <p className="text-text_color_primary1">
                You can contact our customer support team via email at support@f
                {Settings.siteTitle}.com or through our 24/7 live chat on the
                website.
              </p>
            </div>
          </div>
          <div className="border border-border_color_primary1  rounded-lg overflow-hidden">
            <button
              onClick={() => handleToggleTab(7)}
              id="accordion-button-7"
              aria-expanded="false"
              aria-controls="accordion-content-7"
              className="flex justify-between items-center  w-full px-2 py-3 text-left transition-colors duration-200 bg-bg_color_primary hover:bg-bg_color_quaternary "
            >
              <span className="font-medium text-text_color_primary1">
                7. What types of bets can I place?
              </span>
              <svg
                className={`w-6 h-6 transition-transform duration-200 text-text_color_primary1 ${
                  tab === 7 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id="accordion-content-7"
              role="region"
              aria-labelledby="accordion-button-7"
              className={`p-4 bg-bg_color_primary  ${
                tab === 7 ? "block" : "hidden"
              }`}
            >
              <p className="text-text_color_primary1">
                {Settings.siteTitle} offers a wide range of betting options,
                including sports betting on football, basketball, e-sports, and
                more. We also offer live betting, casino games, and special
                markets. Visit our Betting Options page for more details.
              </p>
            </div>
          </div>
          <div className="border border-border_color_primary1  rounded-lg overflow-hidden">
            <button
              onClick={() => handleToggleTab(8)}
              id="accordion-button-8"
              aria-expanded="false"
              aria-controls="accordion-content-8"
              className="flex justify-between items-center  w-full px-2 py-3 text-left transition-colors duration-200 bg-bg_color_primary hover:bg-bg_color_quaternary "
            >
              <span className="font-medium text-text_color_primary1">
                8. How do I claim a bonus?
              </span>
              <svg
                className={`w-6 h-6 transition-transform duration-200 text-text_color_primary1 ${
                  tab === 8 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id="accordion-content-8"
              role="region"
              aria-labelledby="accordion-button-8"
              className={`p-4 bg-bg_color_primary  ${
                tab === 8 ? "block" : "hidden"
              }`}
            >
              <p className="text-text_color_primary1">
                To claim a bonus, visit our Promotions page and choose the bonus
                you want. Follow the instructions to activate it. Bonuses are
                subject to specific terms and conditions, which you can find on
                the same page.
              </p>
            </div>
          </div>
          <div className="border border-border_color_primary1  rounded-lg overflow-hidden">
            <button
              onClick={() => handleToggleTab(9)}
              id="accordion-button-9"
              aria-expanded="false"
              aria-controls="accordion-content-9"
              className="flex justify-between items-center  w-full px-2 py-3 text-left transition-colors duration-200 bg-bg_color_primary hover:bg-bg_color_quaternary "
            >
              <span className="font-medium text-text_color_primary1">
                9. What are the terms and conditions?
              </span>
              <svg
                className={`w-6 h-6 transition-transform duration-200 text-text_color_primary1 ${
                  tab === 9 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id="accordion-content-9"
              role="region"
              aria-labelledby="accordion-button-9"
              className={`p-4 bg-bg_color_primary  ${
                tab === 9 ? "block" : "hidden"
              }`}
            >
              <p className="text-text_color_primary1">
                Our terms and conditions are available at the bottom of our
                website. We encourage you to read them carefully to understand
                our policies regarding betting, bonuses, and account management.
              </p>
            </div>
          </div>
          <div className="border border-border_color_primary1  rounded-lg overflow-hidden">
            <button
              onClick={() => handleToggleTab(10)}
              id="accordion-button-10"
              aria-expanded="false"
              aria-controls="accordion-content-10"
              className="flex justify-between items-center  w-full px-2 py-3 text-left transition-colors duration-200 bg-bg_color_primary hover:bg-bg_color_quaternary "
            >
              <span className="font-medium text-text_color_primary1">
                10. How can I bet responsibly?
              </span>
              <svg
                className={`w-6 h-6 transition-transform duration-200 text-text_color_primary1 ${
                  tab === 10 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id="accordion-content-10"
              role="region"
              aria-labelledby="accordion-button-10"
              className={`p-4 bg-bg_color_primary  ${
                tab === 10 ? "block" : "hidden"
              }`}
            >
              <p className="text-text_color_primary1">
                We promote responsible gambling and encourage players to set
                personal limits and recognize the signs of problem gambling.
                Visit our Responsible Gambling page for resources and tools to
                help you gamble responsibly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQS;
