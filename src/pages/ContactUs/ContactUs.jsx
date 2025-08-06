import { Settings } from "../../api";

const ContactUs = () => {
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
          <h1 className="text-2xl font-bold text-text_color_primary1" />
          <h2 className=" font-extrabold text-lg text-text_color_secondary">
            At {Settings.siteTitle}, we are dedicated to providing our players
            with the best possible experience. Your feedback, questions, and
            concerns are important to us. Our customer support team is here to
            help you every step of the way.
          </h2>
          <p className="text-sm sm:text-base" />
          <ul className="list-disc pl-5" />
        </div>
        <div className="flex flex-col gap-2 text-text_color_primary1">
          <h1 className="text-2xl font-bold text-text_color_primary1" />
          <h2 className=" font-extrabold text-lg text-text_color_secondary">
            Customer Support:
          </h2>
          <p className="text-sm sm:text-base" />
          <ul className="list-disc pl-5">
            <li>
              <h3 className=" text-base sm:text-lg font-bold">Live Chat</h3>
              <p className="text-sm sm:text-base">
                Available 24/7 on our website
              </p>
            </li>
            <li>
              <h3 className=" text-base sm:text-lg font-bold">Phone</h3>
              <p className="text-sm sm:text-base" />
              <a
                href="tel:18008896851"
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-bg_text_brand_secondary bg-clip-text text-transparent underline"
              >
                tel:18008896851
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 text-text_color_primary1">
          <h1 className="text-2xl font-bold text-text_color_primary1" />
          <h2 className=" font-extrabold text-lg text-text_color_secondary">
            Follow Us:
          </h2>
          <p className="text-sm sm:text-base" />
          <ul className="list-disc pl-5">
            <li>
              <h3 className=" text-base sm:text-lg font-bold">Instagram</h3>
              <p className="text-sm sm:text-base" />
              <a
                href={`https://www.instagram.com/${Settings.siteTitle}/`}
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-bg_text_brand_secondary bg-clip-text text-transparent underline"
              >
                https://www.instagram.com/{Settings.siteTitle}/
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 text-text_color_primary1">
          <h1 className="text-2xl font-bold text-text_color_primary1" />
          <h2 className=" font-extrabold text-lg text-text_color_secondary" />
          <p className="text-sm sm:text-base">
            We value your input and strive to respond to all inquiries as
            quickly as possible. Whether you have a question about our services,
            need assistance with your account, or want to share your feedback,
            dont hesitate to get in touch. Thank you for choosing{" "}
            {Settings.siteTitle}!
          </p>
          <ul className="list-disc pl-5" />
        </div>
      </article>
    </div>
  );
};

export default ContactUs;
