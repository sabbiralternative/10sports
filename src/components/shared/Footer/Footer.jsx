import { useSelector } from "react-redux";
import images from "../../../assets/images";
import { userToken } from "../../../redux/features/auth/authSlice";
import useWhatsApp from "../../../hooks/whatsapp";
import { Settings } from "../../../api";

const Footer = () => {
  const token = useSelector(userToken);
  const { data: socialLink } = useWhatsApp();
  const handleOpenSocialLink = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  const openWhatsapp = () => {
    if (token && socialLink?.branchWhatsapplink) {
      window.open(socialLink?.branchWhatsapplink, "_blank");
    } else {
      window.open(socialLink?.whatsapplink, "_blank");
    }
  };

  const handleDownloadAPK = (e) => {
    e.preventDefault();
    if (Settings.apkLink) {
      const fileUrl = Settings.apkLink;
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", "site.apk");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    }
  };

  return (
    <footer className="pb-12 px-3 md:px-0 mt-1 w-full md:pr-0 mb:pb-0 md:pl-0 font-lato">
      <div
        id="homeFooterDesktop"
        className="w-full flex flex-col gap-y-4 bg-bg_color_primary p-6"
      >
        <div className="grid w-full grid-cols-12">
          <div className="col-span-8 lg:col-span-5">
            <h2 className="text-text_color_primary1 text-start text-lg md:text-xl font-bold relative w-max">
              <span>Quick Links</span>
              <span className="absolute bottom-0 origin-left popUpOpenAnimation left-0 w-[75%] h-0.5 bg-bg_text_brand_primary rounded-full" />
            </h2>
            <div className="w-full grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 gap-3 py-2">
              <a
                className="text-sm md:text-base transition-all duration-300 active:text-text_brand_primary hover:text-text_brand_primary relative h-max w-max whitespace-pre max-w-full col-span-1 text-text_color_primary1"
                title="Responsible Gambling"
              >
                <span className="tw-text-nowrap">Responsible Gambling</span>
              </a>
              <a
                className="text-sm md:text-base transition-all duration-300 active:text-text_brand_primary hover:text-text_brand_primary relative h-max w-max whitespace-pre max-w-full col-span-1 text-text_color_primary1"
                title="Privacy Policy"
              >
                <span className="tw-text-nowrap">Privacy Policy</span>
              </a>
              <a
                className="text-sm md:text-base transition-all duration-300 active:text-text_brand_primary hover:text-text_brand_primary relative h-max w-max whitespace-pre max-w-full col-span-1 text-text_color_primary1"
                title="Exclusion Policy"
              >
                <span className="tw-text-nowrap">Exclusion Policy</span>
              </a>
              <a
                className="text-sm md:text-base transition-all duration-300 active:text-text_brand_primary hover:text-text_brand_primary relative h-max w-max whitespace-pre max-w-full col-span-1 text-text_color_primary1"
                title="Rules & Regulations"
              >
                <span className="tw-text-nowrap">Rules &amp; Regulations</span>
              </a>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-3 w-full h-max flex items-start flex-col gap-y-2 text-xs xs:text-sm px-3"></div>
          <div className="col-span-4 flex flex-col gap-y-2">
            {socialLink?.telegramLink ||
            socialLink?.whatsapplink ||
            socialLink?.branchWhatsapplink ||
            socialLink?.instagramLink ? (
              <h3 className="hidden md:block text-text_color_primary1 font-normal text-start text-lg md:text-xl font-bold w-full">
                Connect with us
              </h3>
            ) : null}

            <div className="w-full flex justify-center items-center md:items-start md:justify-start gap-2 lg:gap-2.5">
              {socialLink?.telegramLink && (
                <div
                  onClick={() => handleOpenSocialLink(socialLink?.telegramLink)}
                  className="flex items-center justify-center overflow-hidden rounded-md"
                >
                  <a
                    target="_blank"
                    className="flex items-center justify-center rounded-md bg-bg_color_secondary size-[45px] md:size-[50px] hover:scale-[110%] transition-all duration-300 hover:shadow-lg hover:opacity-90"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 25 24"
                      fill="none"
                      className="w-6 h-6 md:w-[28px] md:h-[28px]"
                    >
                      <g clipPath="url(#clip0_140_22026)">
                        <path
                          d="M9.917 15.1809L9.52 20.7649C10.088 20.7649 10.334 20.5209 10.629 20.2279L13.292 17.6829L18.81 21.7239C19.822 22.2879 20.535 21.9909 20.808 20.7929L24.43 3.82092L24.431 3.81992C24.752 2.32392 23.89 1.73892 22.904 2.10592L1.61399 10.2569C0.160995 10.8209 0.182995 11.6309 1.36699 11.9979L6.81 13.6909L19.453 5.77992C20.048 5.38592 20.589 5.60392 20.144 5.99792L9.917 15.1809Z"
                          fill="url(#paint0_linear_140_22026)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_140_22026"
                          x1="-1.74013"
                          y1="1.99951"
                          x2="28.9377"
                          y2="5.12347"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="var(--icon-color-brand-secondary)" />
                          <stop
                            offset={1}
                            stopColor="var(--icon-color-brand-tertiary)"
                          />
                        </linearGradient>
                        <clipPath id="clip0_140_22026">
                          <rect
                            width={24}
                            height={24}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              )}
              {socialLink?.whatsapplink || socialLink?.branchWhatsapplink ? (
                <div
                  onClick={openWhatsapp}
                  className="flex items-center justify-center overflow-hidden rounded-md"
                >
                  <a className="flex items-center justify-center rounded-md bg-bg_color_secondary size-[45px] md:size-[50px] hover:scale-[110%] transition-all duration-300 hover:shadow-lg hover:opacity-90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-6 h-6 md:w-[28px] md:h-[28px]"
                    >
                      <g clipPath="url(#clip0_140_22030)">
                        <path
                          d="M12.003 0H11.997C5.3805 0 0 5.382 0 12C0 14.625 0.846 17.058 2.2845 19.0335L0.789 23.4915L5.4015 22.017C7.299 23.274 9.5625 24 12.003 24C18.6195 24 24 18.6165 24 12C24 5.3835 18.6195 0 12.003 0ZM18.9855 16.9455C18.696 17.763 17.547 18.441 16.6305 18.639C16.0035 18.7725 15.1845 18.879 12.4275 17.736C8.901 16.275 6.63 12.6915 6.453 12.459C6.2835 12.2265 5.028 10.5615 5.028 8.8395C5.028 7.1175 5.9025 6.279 6.255 5.919C6.5445 5.6235 7.023 5.4885 7.482 5.4885C7.6305 5.4885 7.764 5.496 7.884 5.502C8.2365 5.517 8.4135 5.538 8.646 6.0945C8.9355 6.792 9.6405 8.514 9.7245 8.691C9.81 8.868 9.8955 9.108 9.7755 9.3405C9.663 9.5805 9.564 9.687 9.387 9.891C9.21 10.095 9.042 10.251 8.865 10.47C8.703 10.6605 8.52 10.8645 8.724 11.217C8.928 11.562 9.633 12.7125 10.671 13.6365C12.0105 14.829 13.0965 15.21 13.485 15.372C13.7745 15.492 14.1195 15.4635 14.331 15.2385C14.5995 14.949 14.931 14.469 15.2685 13.9965C15.5085 13.6575 15.8115 13.6155 16.1295 13.7355C16.4535 13.848 18.168 14.6955 18.5205 14.871C18.873 15.048 19.1055 15.132 19.191 15.2805C19.275 15.429 19.275 16.1265 18.9855 16.9455Z"
                          fill="url(#paint0_linear_140_22030)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_140_22030"
                          x1="-2.24"
                          y1="-7.70251e-08"
                          x2="28.5351"
                          y2="2.61163"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="var(--icon-color-brand-secondary)" />
                          <stop
                            offset={1}
                            stopColor="var(--icon-color-brand-tertiary)"
                          />
                        </linearGradient>
                        <clipPath id="clip0_140_22030">
                          <rect width={24} height={24} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              ) : null}
              {socialLink?.instagramLink && (
                <div className="flex items-center justify-center overflow-hidden rounded-md">
                  <a
                    title="https://instagram.com/_u/10sportsofficial/"
                    onClick={() =>
                      handleOpenSocialLink(socialLink?.instagramLink)
                    }
                    className="flex items-center justify-center rounded-md bg-bg_color_secondary size-[45px] md:size-[50px] hover:scale-[110%] transition-all duration-300 hover:shadow-lg hover:opacity-90"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-6 h-6 md:w-[28px] md:h-[28px]"
                    >
                      <g clipPath="url(#clip0_140_22052)">
                        <path
                          d="M16.8503 0H7.14973C3.20735 0 0 3.20735 0 7.14973V16.8503C0 20.7926 3.20735 24 7.14973 24H16.8503C20.7926 24 24 20.7926 24 16.8503V7.14973C24 3.20735 20.7926 0 16.8503 0ZM21.5856 16.8503C21.5856 19.4655 19.4655 21.5856 16.8503 21.5856H7.14973C4.5345 21.5856 2.4144 19.4655 2.4144 16.8503V7.14973C2.4144 4.53446 4.5345 2.4144 7.14973 2.4144H16.8503C19.4655 2.4144 21.5856 4.53446 21.5856 7.14973V16.8503Z"
                          fill="url(#paint0_linear_140_22052)"
                        />
                        <path
                          d="M12 5.79272C8.57731 5.79272 5.79275 8.57729 5.79275 11.9999C5.79275 15.4226 8.57731 18.2072 12 18.2072C15.4227 18.2072 18.2073 15.4226 18.2073 11.9999C18.2073 8.57725 15.4227 5.79272 12 5.79272ZM12 15.7928C9.90525 15.7928 8.20715 14.0947 8.20715 12C8.20715 9.90523 9.90529 8.20712 12 8.20712C14.0948 8.20712 15.7929 9.90523 15.7929 12C15.7929 14.0947 14.0947 15.7928 12 15.7928Z"
                          fill="url(#paint1_linear_140_22052)"
                        />
                        <path
                          d="M18.2193 7.32682C19.0407 7.32682 19.7067 6.6609 19.7067 5.83944C19.7067 5.01798 19.0407 4.35205 18.2193 4.35205C17.3978 4.35205 16.7319 5.01798 16.7319 5.83944C16.7319 6.6609 17.3978 7.32682 18.2193 7.32682Z"
                          fill="url(#paint2_linear_140_22052)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_140_22052"
                          x1="-2.24"
                          y1="-7.70251e-08"
                          x2="28.5351"
                          y2="2.61163"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="var(--icon-color-brand-secondary)" />
                          <stop
                            offset={1}
                            stopColor="var(--icon-color-brand-tertiary)"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_140_22052"
                          x1="4.63406"
                          y1="5.79272"
                          x2="20.5531"
                          y2="7.14365"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="var(--icon-color-brand-secondary)" />
                          <stop
                            offset={1}
                            stopColor="var(--icon-color-brand-tertiary)"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_140_22052"
                          x1="16.4542"
                          y1="4.35205"
                          x2="20.2688"
                          y2="4.67576"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="var(--icon-color-brand-secondary)" />
                          <stop
                            offset={1}
                            stopColor="var(--icon-color-brand-tertiary)"
                          />
                        </linearGradient>
                        <clipPath id="clip0_140_22052">
                          <rect width={24} height={24} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        {Settings?.apkLink && (
          <div className="flex items-center justify-center gap-x-2 py-4">
            <div className="w-full px-2 gap-4 justify-items-center items-center h-full flex items-center justify-center">
              <button
                onClick={handleDownloadAPK}
                title="Android App"
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out w-full max-w-[200px] min-h-[52px] max-h-full md:max-w-[350px] flex items-center justify-between p-2 pr-3 bg-bg_scoreAndAndroidAppBtn rounded-lg shadow-lg active:scale-[98%] transition-all duration-300 cursor-pointer"
                aria-label="Download Android App"
                type="button"
              >
                <div className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M2.86361 6.323C2.20466 6.323 1.59089 6.84291 1.59089 7.48341V12.4518C1.59089 13.0926 2.20466 13.6122 2.86361 13.6122C3.52225 13.6122 4.13634 13.0926 4.13634 12.4518V7.48373C4.13634 6.84291 3.52225 6.323 2.86361 6.323Z"
                      fill="#62DF2E"
                    />
                    <path
                      d="M13.2392 1.67272L13.4613 1.3469L13.6837 1.0249L14.1791 0.301037C14.2412 0.21131 14.2154 0.0916734 14.1241 0.0328097C14.0337 -0.0273267 13.9087 -0.0021903 13.8495 0.0869006L13.0932 1.18876L12.8657 1.52063C12.1469 1.2489 11.346 1.09745 10.5 1.09745C9.65584 1.09745 8.85339 1.24922 8.13462 1.52063L7.90839 1.18908L7.68471 0.863583L7.15334 0.087537C7.09193 -0.00187211 6.96848 -0.0254176 6.87684 0.0334461C6.78616 0.0926279 6.76102 0.212264 6.82148 0.301673L7.31657 1.02586L7.53898 1.34817L7.76234 1.67304C6.07471 2.43826 4.93275 3.95472 4.93275 5.54563H16.0675C16.0675 3.95472 14.9259 2.43826 13.2392 1.67272ZM8.11393 4.00086C7.78334 4.00086 7.51702 3.7409 7.51702 3.41986C7.51702 3.09881 7.78334 2.84013 8.11393 2.84013C8.44357 2.84013 8.71052 3.09881 8.71052 3.41986C8.71052 3.7409 8.44389 4.00086 8.11393 4.00086ZM12.8867 4.00086C12.5564 4.00086 12.2894 3.7409 12.2894 3.41986C12.2894 3.09881 12.5564 2.84013 12.8867 2.84013C13.2163 2.84013 13.4833 3.09881 13.4833 3.41986C13.4833 3.7409 13.2163 4.00086 12.8867 4.00086Z"
                      fill="#62DF2E"
                    />
                    <path
                      d="M2.92025 8.91666C2.4242 8.91666 1.90907 8.44862 1.59089 7.7063V12.452C1.59089 13.0928 2.20466 13.6124 2.86361 13.6124C3.52225 13.6124 4.13634 13.0928 4.13634 12.452V7.95384C3.81816 8.55012 3.35807 8.91666 2.92025 8.91666Z"
                      fill="#62DF2E"
                    />
                    <path
                      d="M18.1363 6.323C17.4774 6.323 16.8636 6.84291 16.8636 7.48341V12.4518C16.8636 13.0926 17.4774 13.6122 18.1363 13.6122C18.795 13.6122 19.4091 13.0926 19.4091 12.4518V7.48373C19.4091 6.84291 18.795 6.323 18.1363 6.323Z"
                      fill="#62DF2E"
                    />
                    <path
                      d="M18.193 8.91691C17.6969 8.91691 17.1818 8.44886 16.8636 7.70654V12.4522C16.8636 13.093 17.4774 13.6126 18.1363 13.6126C18.795 13.6126 19.4091 13.093 19.4091 12.4522V7.95409C19.0909 8.55036 18.6308 8.91691 18.193 8.91691Z"
                      fill="#62DF2E"
                    />
                    <path
                      d="M13.4833 3.41959C13.4833 3.74063 13.2163 4.00059 12.8867 4.00059C12.5564 4.00059 12.2894 3.74063 12.2894 3.41959C12.2894 3.24554 12.3693 3.09186 12.4937 2.98559C11.8647 2.88059 11.1955 2.823 10.5 2.823C9.80443 2.823 9.13562 2.88059 8.50625 2.98559C8.63098 3.09154 8.71084 3.24554 8.71084 3.41959C8.71084 3.74063 8.44389 4.00059 8.11425 4.00059C7.78366 4.00059 7.51734 3.74063 7.51734 3.41959C7.51734 3.3375 7.53548 3.25954 7.56698 3.18859C6.61307 3.43932 5.79343 3.80523 5.17489 4.25482C5.01898 4.66432 4.93275 5.2275 4.93275 5.54568H16.0675C16.0675 5.2275 15.9813 4.66463 15.8257 4.25545C15.2075 3.80523 14.3875 3.43868 13.4343 3.18795C13.4654 3.25891 13.4833 3.33782 13.4833 3.41959Z"
                      fill="#62DF2E"
                    />
                    <path
                      d="M10.5 6.11108C8.35637 6.11108 6.61107 6.11108 5.09089 6.11108V14.839C5.09089 15.5151 5.49689 16.0455 6.19275 16.0455H7.10116C7.06998 16.0455 6.99998 16.275 6.99998 16.3876V18.8395C6.99998 19.4803 7.61439 19.9999 8.27271 19.9999C8.93134 19.9999 9.54543 19.4803 9.54543 18.8395V16.3876C9.54543 16.275 9.42262 16.0455 9.39239 16.0455H11.6082C11.578 16.0455 11.4545 16.275 11.4545 16.3876V18.8395C11.4545 19.4803 12.0677 19.9999 12.726 19.9999C13.3859 19.9999 14 19.4803 14 18.8395V16.3876C14 16.275 13.9303 16.0455 13.8991 16.0455H14.8088C15.5047 16.0455 15.9091 15.5151 15.9091 14.839V6.11108C14 6.28272 12.6436 6.11108 10.5 6.11108Z"
                      fill="#62DF2E"
                    />
                  </svg>
                  <div className="flex flex-col items-start justify-center text-xs">
                    <span className="text-text_color_primary3 font-normal">
                      Download
                    </span>
                    <span className="text-text_color_primary2 font-semibold uppercase">
                      Android App
                    </span>
                  </div>
                </div>
                <span className="w-5 h-5 -rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={20}
                    viewBox="0 0 7 12"
                    fill="none"
                  >
                    <path
                      d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                      fill="var(--icon-color-secondary)"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        )}

        <div className="w-full grid py-4 px-3 grid-cols-2 xxs:grid-cols-3 sm:grid-cols-5 gap-4 place-items-center justify-center">
          <div className="w-full max-w-[150px] aspect-[3/1] relative">
            <div className="relative overflow-hidden absolute inset-0 h-full w-full">
              <img
                src={images.upiIcon}
                alt="Upi"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-contain"
                title="Upi"
                width={300}
                height={100}
                loading="eager"
              />
            </div>
          </div>
          <div className="w-full max-w-[150px] aspect-[3/1] relative">
            <div className="relative overflow-hidden absolute inset-0 h-full w-full">
              <img
                src={images.bankTransfer}
                alt="Bank Transfer"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-contain"
                title="Bank Transfer"
                width={300}
                height={100}
                loading="eager"
              />
            </div>
          </div>
          <div className="w-full max-w-[150px] aspect-[3/1] relative">
            <div className="relative overflow-hidden absolute inset-0 h-full w-full">
              <img
                src={images.BeGambleAware}
                alt="BeGamble Aware"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-contain"
                title="BeGamble Aware"
                width={300}
                height={100}
                loading="eager"
              />
            </div>
          </div>
          <div className="w-full max-w-[150px] aspect-[3/1] relative">
            <div className="relative overflow-hidden absolute inset-0 h-full w-full">
              <img
                src={images.cograE}
                alt="Ecogra"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-contain"
                title="Ecogra"
                width={300}
                height={100}
                loading="eager"
              />
            </div>
          </div>
          <div className="w-full max-w-[150px] aspect-[3/1] relative">
            <div className="relative overflow-hidden absolute inset-0 h-full w-full">
              <img
                src={images.gamblingCommission}
                alt="Gambling Commission"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-contain"
                title="Gambling Commission"
                width={300}
                height={100}
                loading="eager"
              />
            </div>
          </div>
        </div>
        <div className="text-center text-sm py-3 text-text_color_tertiary1">
          © All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
