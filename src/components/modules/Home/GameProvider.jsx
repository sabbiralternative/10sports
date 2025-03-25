const GameProvider = () => {
  return (
    <div title="Game Providers" className="px-[6px] w-full">
      <div className="bg-bg_color_primary rounded-[10px] flex flex-col divide-y divide-divide_color_primary">
        <div className="w-[100%] flex flex-row justify-between px-3 py-1.5">
          <div className="max-w-[85%] text-text_color_primary1 font-semibold capitalize cursor-pointer">
            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clipPath="url(#clip0_140_6590)">
                  <path
                    d="M13.9436 6.83181C13.8951 6.77099 13.8362 6.78294 13.8054 6.79535C13.7796 6.80583 13.7204 6.8393 13.7285 6.92318C13.7384 7.0239 13.7439 7.12659 13.745 7.22844C13.7494 7.65095 13.5799 8.06488 13.28 8.36409C12.982 8.66138 12.5901 8.82155 12.1728 8.81691C11.6028 8.80963 11.13 8.51231 10.8055 7.95709C10.5372 7.49798 10.6552 6.90585 10.78 6.27891C10.853 5.91195 10.9286 5.53247 10.9286 5.17131C10.9286 2.3592 9.0381 0.736805 7.91121 0.0200039C7.8879 0.00520312 7.86571 0 7.84606 0C7.8141 0 7.78879 0.0137812 7.77631 0.0222187C7.75212 0.0386016 7.71342 0.0759375 7.72586 0.142031C8.1566 2.42937 6.87185 3.80507 5.51165 5.26152C4.10962 6.7628 2.52052 8.46439 2.52052 11.5333C2.52052 15.0991 5.42151 18.0001 8.98734 18.0001C11.9233 18.0001 14.5119 15.9531 15.2822 13.0223C15.8075 11.0239 15.2571 8.47832 13.9436 6.83181ZM9.14867 16.6197C8.25577 16.6604 7.40661 16.3402 6.75801 15.72C6.11637 15.1065 5.74836 14.2503 5.74836 13.3709C5.74836 11.7206 6.37934 10.5091 8.07648 8.90079C8.10425 8.87446 8.13269 8.86613 8.15748 8.86613C8.17994 8.86613 8.19942 8.87298 8.21281 8.87941C8.24104 8.89302 8.28745 8.9267 8.28119 8.99954C8.22051 9.70566 8.22157 10.2917 8.28428 10.7416C8.4446 11.8907 9.28578 12.6628 10.3776 12.6628C10.9128 12.6628 11.4227 12.4613 11.8133 12.0955C11.8586 12.053 11.9092 12.0585 11.9286 12.0626C11.9543 12.0681 11.9887 12.0839 12.0068 12.1274C12.1687 12.5183 12.2515 12.9334 12.2527 13.3608C12.2579 15.0808 10.8654 16.5428 9.14867 16.6197Z"
                    fill="var(--icon-color-brand-secondary)"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_140_6590">
                    <rect width={18} height={18} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-base text-text_color_primary1 font-extrabold font-medium font-extrabold">
                Game Providers
              </span>
            </div>
          </div>
          <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato bg-bg_text_brand_secondary text-transparent bg-clip-text font-semibold text-[12px] leading-[18px] transition-all ease-in-out duration-200 cursor-pointer"
              type="button"
            >
              See All
            </button>
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] justify-center items-center bg-bg_color_quaternary rounded cursor-pointer"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="var(--icon-color-brand-secondary)"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </button>
            <button
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] justify-center items-center bg-bg_color_quaternary rounded cursor-pointer"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="var(--icon-color-brand-secondary)"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full p-2.5 gap-y-2 gap-x-2 grid grid-rows-3 grid-flow-col overflow-x-auto no-scrollbar scroll-smooth">
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/evo/logo_3_2_cl_dark.svg"
              alt="Evolution Gaming"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Evolution Gaming"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/rtg/logo_3_2_cl_dark.svg"
              alt="Red Tiger"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Red Tiger"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/ntn/logo_3_2_cl_dark.svg"
              alt="NetEnt"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="NetEnt"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/sms/logo_3_2_cl_dark.svg"
              alt="Smartsoft Gaming"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Smartsoft Gaming"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/spb/logo_3_2_cl_dark.svg"
              alt="Spribe"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Spribe"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/ezg/logo_3_2_cl_dark.svg"
              alt="Ezugi"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Ezugi"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/avx/logo_3_2_cl_dark.svg"
              alt="Aviatrix"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Aviatrix"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/png/logo_3_2_cl_dark.svg"
              alt="Play'n Go"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Play'n Go"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/btsl/logo_3_2_cl_dark.svg"
              alt="Betsolutions"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Betsolutions"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/crc/logo_3_2_cl_dark.svg"
              alt="Charismatic"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Charismatic"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/hbn/logo_3_2_cl_dark.svg"
              alt="Habanero"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Habanero"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/qps/logo_3_2_cl_dark.svg"
              alt="Quickspin"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Quickspin"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/gmz/logo_3_2_cl_dark.svg"
              alt="Gamzix"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Gamzix"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/ygg/logo_3_2_cl_dark.svg"
              alt="Yggdrasil"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Yggdrasil"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/nrl/logo_3_2_cl_dark.svg"
              alt="Northern Lights Gaming"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Northern Lights Gaming"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/ftp/logo_3_2_cl_dark.svg"
              alt="4ThePlayer"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="4ThePlayer"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/rfg/logo_3_2_cl_dark.svg"
              alt="Reflex Gaming"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Reflex Gaming"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/rpl/logo_3_2_cl_dark.svg"
              alt="ReelPlay"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="ReelPlay"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/pas/logo_3_2_cl_dark.svg"
              alt="Peter & Sons"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Peter & Sons"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/bbg/logo_3_2_cl_dark.svg"
              alt="Bang Bang Games"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Bang Bang Games"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/hrg/logo_3_2_cl_dark.svg"
              alt="Hot Rise Games"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Hot Rise Games"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/bpg/logo_3_2_cl_dark.svg"
              alt="Bulletproof Games"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Bulletproof Games"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/jdr/logo_3_2_cl_dark.svg"
              alt="Jade Rabbit Studio"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Jade Rabbit Studio"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/rlg/logo_3_2_cl_dark.svg"
              alt="Reel Life Games"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Reel Life Games"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/gmv/logo_3_2_cl_dark.svg"
              alt="GameVy"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="GameVy"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/jly/logo_3_2_cl_dark.svg"
              alt="Jelly"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Jelly"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/brg/logo_3_2_cl_dark.svg"
              alt="Boomerang Studios"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Boomerang Studios"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/ngg/logo_3_2_cl_dark.svg"
              alt="Naga Games"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Naga Games"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/onegame/logo_3_2_cl_dark.svg"
              alt="OneGame"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="OneGame"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/plt/logo_3_2_cl_dark.svg"
              alt="Playtech"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Playtech"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/pltl/logo_3_2_cl_dark.svg"
              alt="Playtech Live"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Playtech Live"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/nlc/logo_3_2_cl_dark.svg"
              alt="Nolimit City"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Nolimit City"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/btg/logo_3_2_cl_dark.svg"
              alt="Big Time Gaming"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Big Time Gaming"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/reg/logo_3_2_cl_dark.svg"
              alt="Relax Gaming"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Relax Gaming"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/pgs/logo_3_2_cl_dark.svg"
              alt="PGSoft"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="PGSoft"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/jil/logo_3_2_cl_dark.svg"
              alt="Jili Games"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Jili Games"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/mnc/logo_3_2_cl_dark.svg"
              alt="Mancala Gaming"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Mancala Gaming"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/oak/logo_3_2_cl_dark.svg"
              alt="3 Oaks Gaming"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="3 Oaks Gaming"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/kng/logo_3_2_cl_dark.svg"
              alt="Kingmidas"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Kingmidas"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/aes/logo_3_2_cl_dark.svg"
              alt="AE Sexy"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="AE Sexy"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/spn/logo_3_2_cl_dark.svg"
              alt="Spinomenal"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Spinomenal"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/tvb/logo_3_2_cl_dark.svg"
              alt="TVBet"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="TVBet"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/fnt/logo_3_2_cl_dark.svg"
              alt="Fantasma Games"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Fantasma Games"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/wzd/logo_3_2_cl_dark.svg"
              alt="Wazdan"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Wazdan"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/btr/logo_3_2_cl_dark.svg"
              alt="Beter Live"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Beter Live"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/fgs/logo_3_2_cl_dark.svg"
              alt="Fugaso"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Fugaso"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/sml/logo_3_2_cl_dark.svg"
              alt="Slotmill"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Slotmill"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/jdb/logo_3_2_cl_dark.svg"
              alt="JDB"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="JDB"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/tmh/logo_3_2_cl_dark.svg"
              alt="Tom Horn Gaming"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Tom Horn Gaming"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/end/logo_3_2_cl_dark.svg"
              alt="Endorphina"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Endorphina"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/ntg/logo_3_2_cl_dark.svg"
              alt="NetGaming"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="NetGaming"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/hcw/logo_3_2_cl_dark.svg"
              alt="Hacksaw Gaming"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Hacksaw Gaming"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/bgm/logo_3_2_cl_dark.svg"
              alt="BGaming"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="BGaming"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/gmb/logo_3_2_cl_dark.svg"
              alt="Gamebeat"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Gamebeat"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/aux/logo_3_2_cl_dark.svg"
              alt="AvatarUX"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="AvatarUX"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/blg/logo_3_2_cl_dark.svg"
              alt="Blueprint Gaming"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Blueprint Gaming"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/mnn/logo_3_2_cl_dark.svg"
              alt="Manna Play"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Manna Play"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/mbl/logo_3_2_cl_dark.svg"
              alt="Mobilots"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Mobilots"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/rts/logo_3_2_cl_dark.svg"
              alt="RTG Slots"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="RTG Slots"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/tdk/logo_3_2_cl_dark.svg"
              alt="Thunderkick"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Thunderkick"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/kir/logo_3_2_cl_dark.svg"
              alt="Kiron Interactive"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Kiron Interactive"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/bfg/logo_3_2_cl_dark.svg"
              alt="BF Games"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="BF Games"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/rbp/logo_3_2_cl_dark.svg"
              alt="RubyPlay"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="RubyPlay"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/bmg/logo_3_2_cl_dark.svg"
              alt="Booming Games"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Booming Games"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/raw/logo_3_2_cl_dark.svg"
              alt="Raw iGaming"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Raw iGaming"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/lea/logo_3_2_cl_dark.svg"
              alt="Leander Games"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Leander Games"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/cqc/logo_3_2_cl_dark.svg"
              alt="CQ9"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="CQ9"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/atm/logo_3_2_cl_dark.svg"
              alt="Atmosfera"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Atmosfera"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/nvm/logo_3_2_cl_dark.svg"
              alt="Novomatic"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Novomatic"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/win/logo_3_2_cl_dark.svg"
              alt="Winfinity"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Winfinity"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/onl/logo_3_2_cl_dark.svg"
              alt="Onlyplay"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Onlyplay"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/dwg/logo_3_2_cl_dark.svg"
              alt="Darwin Gaming"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Darwin Gaming"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/bng/logo_3_2_cl_dark.svg"
              alt="Booongo"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Booongo"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/ply/logo_3_2_cl_dark.svg"
              alt="Playson"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Playson"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/ylt/logo_3_2_cl_dark.svg"
              alt="Yolted"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Yolted"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/imn/logo_3_2_cl_dark.svg"
              alt="iMoon Games"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="iMoon Games"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/iog/logo_3_2_cl_dark.svg"
              alt="InOut Games"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="InOut Games"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/pnt/logo_3_2_cl_dark.svg"
              alt="Print Studios"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Print Studios"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/bcs/logo_3_2_cl_dark.svg"
              alt="Backseat Gaming"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Backseat Gaming"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/spi/logo_3_2_cl_dark.svg"
              alt="SpinOro"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="SpinOro"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/phx/logo_3_2_cl_dark.svg"
              alt="PHOENIX 7"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="PHOENIX 7"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/bls/logo_3_2_cl_dark.svg"
              alt="Bullshark Games"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Bullshark Games"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/qbt/logo_3_2_cl_dark.svg"
              alt="Qubit Games"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Qubit Games"
            />
          </div>
          <div className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md">
            <img
              src="https://luckmedia.link/providers/hbg/logo_3_2_cl_dark.svg"
              alt="Hungry Bear Gaming"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title="Hungry Bear Gaming"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameProvider;
