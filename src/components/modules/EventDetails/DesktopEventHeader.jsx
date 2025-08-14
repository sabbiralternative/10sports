const DesktopEventHeader = ({ data }) => {
  return (
    <div className=" sm:flex flex-col w-full hidden">
      <div className="flex flex-row w-full justify-between items-center px-2 mt-2 bg-bg_color_primary rounded-sm py-2">
        <div
          className=" flex items-center justify-start gap-x-3 w-[92%]"
          id="playIcon"
        >
          {/* <span className="min-w-[4%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 21 20"
              fill="none"
            >
              <g clipPath="url(#clip0_1717_31137)">
                <path
                  d="M10.5 19.8571C8.55041 19.8571 6.64463 19.279 5.02363 18.1959C3.40264 17.1128 2.13922 15.5733 1.39316 13.7721C0.647093 11.971 0.451889 9.98903 0.832229 8.07694C1.21257 6.16484 2.15137 4.40846 3.52992 3.02992C4.90846 1.65137 6.66484 0.712569 8.57694 0.332229C10.489 -0.0481111 12.471 0.147093 14.2721 0.893157C16.0733 1.63922 17.6128 2.90264 18.6959 4.52363C19.779 6.14463 20.3571 8.05041 20.3571 9.99997C20.3541 12.6133 19.3146 15.1188 17.4667 16.9667C15.6188 18.8146 13.1133 19.8541 10.5 19.8571ZM10.5 1.5714C8.83296 1.5714 7.20338 2.06572 5.81731 2.99187C4.43123 3.91801 3.35092 5.23437 2.71298 6.77449C2.07505 8.31461 1.90813 10.0093 2.23335 11.6443C2.55857 13.2793 3.36131 14.7811 4.54007 15.9599C5.71883 17.1386 7.22065 17.9414 8.85564 18.2666C10.4906 18.5918 12.1853 18.4249 13.7254 17.787C15.2656 17.149 16.5819 16.0687 17.5081 14.6826C18.4342 13.2966 18.9285 11.667 18.9285 9.99997C18.926 7.76536 18.0371 5.62302 16.457 4.04291C14.8769 2.4628 12.7346 1.57397 10.5 1.5714Z"
                  fill="url(#paint0_linear_1717_31137)"
                />
                <path
                  d="M15.6915 11.5172H10.5629C10.3735 11.5172 10.1918 11.4419 10.0578 11.308C9.92389 11.174 9.84863 10.9923 9.84863 10.8029V5.67376C9.84863 5.48432 9.92389 5.30264 10.0578 5.16868C10.1918 5.03473 10.3735 4.95947 10.5629 4.95947C10.7524 4.95947 10.934 5.03473 11.068 5.16868C11.2019 5.30264 11.2772 5.48432 11.2772 5.67376V10.0886H15.6915C15.8809 10.0886 16.0626 10.1639 16.1966 10.2978C16.3305 10.4318 16.4058 10.6135 16.4058 10.8029C16.4058 10.9923 16.3305 11.174 16.1966 11.308C16.0626 11.4419 15.8809 11.5172 15.6915 11.5172Z"
                  fill="url(#paint1_linear_1717_31137)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1717_31137"
                  x1="0.642822"
                  y1="21.0893"
                  x2="22.3721"
                  y2="18.475"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="var(--bg-active-primary)" />
                  <stop
                    offset={1}
                    stopColor="var(--bg-active-primary)"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1717_31137"
                  x1="9.84863"
                  y1="11.927"
                  x2="17.076"
                  y2="11.0576"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="var(--bg-active-primary)" />
                  <stop
                    offset={1}
                    stopColor="var(--bg-active-primary)"
                  ></stop>
                </linearGradient>
                <clipPath id="clip0_1717_31137">
                  <rect
                    width={20}
                    height={20}
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span> */}
          <span className=" bg-bg_text_brand_primary text-transparent bg-clip-text font-lato text-xl font-bold">
            <span className=" capitalize w-max break-words">
              {data?.result?.[0]?.eventName}
            </span>
            {/* <span className="ml-[2px]">vs</span>
            <span className=" capitalize w-max ml-[2px] break-words">
              Punjab Kings
            </span> */}
          </span>
        </div>
        {/* <div className=" flex items-center justify-center gap-x-2">
          <span className=" w-max break-words bg-bg_text_brand_primary text-transparent bg-clip-text font-lato text-xs font-bold">
            Opens in 3 hours 44 minutes
          </span>
          <span>
            <svg
              width={17}
              height={17}
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1717_31141)">
                <path
                  d="M8.5 0.5C4.07841 0.5 0.5 4.078 0.5 8.5C0.5 12.9215 4.078 16.5 8.5 16.5C12.9216 16.5 16.5 12.922 16.5 8.5C16.5 4.07847 12.922 0.5 8.5 0.5ZM8.5 15.3837C4.70431 15.3837 1.61628 12.2957 1.61628 8.5C1.61628 4.70428 4.70431 1.61628 8.5 1.61628C12.2957 1.61628 15.3837 4.70428 15.3837 8.5C15.3837 12.2957 12.2957 15.3837 8.5 15.3837Z"
                  fill="var(--bg-active-primary)"
                />
                <path
                  d="M8.5003 7.1687C8.02642 7.1687 7.68945 7.36883 7.68945 7.66367V11.6757C7.68945 11.9285 8.02642 12.1812 8.5003 12.1812C8.95311 12.1812 9.32164 11.9285 9.32164 11.6757V7.66361C9.32164 7.36879 8.95311 7.1687 8.5003 7.1687Z"
                  fill="var(--bg-active-primary)"
                />
                <path
                  d="M8.50019 4.69409C8.01578 4.69409 7.63672 5.04159 7.63672 5.44175C7.63672 5.84194 8.01581 6.19997 8.50019 6.19997C8.97406 6.19997 9.35319 5.84194 9.35319 5.44175C9.35319 5.04159 8.97403 4.69409 8.50019 4.69409Z"
                  fill="var(--bg-active-primary)"
                />
              </g>
              <defs>
                <clipPath id="clip0_1717_31141">
                  <rect
                    width={16}
                    height={16}
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default DesktopEventHeader;
