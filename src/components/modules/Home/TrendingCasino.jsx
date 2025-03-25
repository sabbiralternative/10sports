/* eslint-disable react/no-unknown-property */
const TrendingCasino = () => {
  return (
    <div title="Originals & Trending Casino" className="px-[6px] w-full">
      <div className="flex flex-col bg-bg_color_primary rounded-[10px] w-full h-full divide-y divide-border_color_primary">
        <div className="w-[100%] flex flex-row justify-between px-0.5 pr-1">
          <div className="max-w-[83%] text-text_color_primary1 font-semibold capitalize cursor-pointer">
            <div className="flex items-center w-full justify-start overflow-scroll no-scrollbar scroll-smooth">
              <div className="flex items-center justify-start py-1.5 px-2 rounded-t-[6px] h-full relative">
                <span className="text-sm capitalize whitespace-nowrap w-full text-center bg-bg_text_brand_secondary text-transparent bg-clip-text font-normal">
                  Originals
                </span>
                <div className="absolute bottom-0 left-0 right-0 w-full h-[2px] rounded bg-bg_text_brand_secondary" />
              </div>
              <div className="flex items-center justify-start py-1.5 px-2 rounded-t-[6px] h-full relative">
                <span className="text-sm capitalize whitespace-nowrap w-full text-center text-text_color_primary font-normal">
                  Crash Games
                </span>
                <div className="absolute bottom-0 left-0 right-0 w-full h-[2px] rounded" />
              </div>
              <div className="flex items-center justify-start py-1.5 px-2 rounded-t-[6px] h-full relative">
                <span className="text-sm capitalize whitespace-nowrap w-full text-center text-text_color_primary font-normal">
                  Live Roulette
                </span>
                <div className="absolute bottom-0 left-0 right-0 w-full h-[2px] rounded" />
              </div>
              <div className="flex items-center justify-start py-1.5 px-2 rounded-t-[6px] h-full relative">
                <span className="text-sm capitalize whitespace-nowrap w-full text-center text-text_color_primary font-normal">
                  Money Wheel
                </span>
                <div className="absolute bottom-0 left-0 right-0 w-full h-[2px] rounded" />
              </div>
            </div>
          </div>
          <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
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
        <div className="flex overflow-x-scroll no-scrollbar scroll-smooth gap-x-1 p-2.5">
          <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.8640] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://mac.imgix.net/promotions/aviator10sp.webp?auto=format&fit=max&w=600&q=65?q=65&w=625&px=auto&auto=format&ar=0.75030012004&fit=crop&blur=0"
              alt="Aviator - 10Sports"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105"
              title="Aviator - 10Sports"
            />
          </div>
          <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.8640] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://mac.imgix.net/promotions/tower10sp.webp?auto=format&fit=max&w=600&q=65?q=65&w=625&px=auto&auto=format&ar=0.75030012004&fit=crop&blur=0"
              alt="Tower Legends - 10Sports"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105"
              title="Tower Legends - 10Sports"
            />
          </div>
          <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.8640] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://mac.imgix.net/promotions/mines10sp.webp?auto=format&fit=max&w=600&q=65?q=65&w=625&px=auto&auto=format&ar=0.75030012004&fit=crop&blur=0"
              alt="Mines - 10Sports"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105"
              title="Mines - 10Sports"
            />
          </div>
          <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.8640] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://mac.imgix.net/promotions/cricket10sp.webp?auto=format&fit=max&w=600&q=65?q=65&w=625&px=auto&auto=format&ar=0.75030012004&fit=crop&blur=0"
              alt="Cricket - 10Sports"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105"
              title="Cricket - 10Sports"
            />
          </div>
          <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.8640] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://auraimgs.imgix.net/crash%20banner-01.webp?auto=format&fit=max&w=600&q=65?q=65&w=625&px=auto&auto=format&ar=0.75030012004&fit=crop&blur=0"
              alt="Crash - 10Sports"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105"
              title="Crash - 10Sports"
            />
          </div>
          <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.8640] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://mac.imgix.net/promotions/coin10sp.webp?auto=format&fit=max&w=600&q=65?q=65&w=625&px=auto&auto=format&ar=0.75030012004&fit=crop&blur=0"
              alt="Coin Toss - 10Sports"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105"
              title="Coin Toss - 10Sports"
            />
          </div>
          <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.8640] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://mac.imgix.net/promotions/slot10sp.webp?auto=format&fit=max&w=600&q=65?q=65&w=625&px=auto&auto=format&ar=0.75030012004&fit=crop&blur=0"
              alt="Slot Games - 10Sports"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105"
              title="Slot Games - 10Sports"
            />
          </div>
          <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.8640] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://auraimgs.imgix.net/Untitled-2.png?auto=format&fit=max&w=600&q=65?q=65&w=625&px=auto&auto=format&ar=0.75030012004&fit=crop&blur=0"
              alt="RPS - 10Sports"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105"
              title="RPS - 10Sports"
            />
          </div>
          <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.8640] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://auraimgs.imgix.net/1-04.webp?auto=format&fit=max&w=600&q=65?q=65&w=625&px=auto&auto=format&ar=0.75030012004&fit=crop&blur=0"
              alt="Classic Dice - 10Sports"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105"
              title="Classic Dice - 10Sports"
            />
          </div>
          <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.8640] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://mac.imgix.net/promotions/limbo10sp.webp?auto=format&fit=max&w=600&q=65?q=65&w=625&px=auto&auto=format&ar=0.75030012004&fit=crop&blur=0"
              alt="Limbo - 10Sports"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105"
              title="Limbo - 10Sports"
            />
          </div>
          <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.8640] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://mac.imgix.net/promotions/spin10sp.webp?auto=format&fit=max&w=600&q=65?q=65&w=625&px=auto&auto=format&ar=0.75030012004&fit=crop&blur=0"
              alt="Fortune Wheel - 10Sports"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105"
              title="Fortune Wheel - 10Sports"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-bg_color_primary rounded-[10px] w-full h-full divide-y divide-border_color_primary mt-2">
        <div className="w-[100%] flex flex-row justify-between px-0.5 pr-1">
          <div className="max-w-[83%] text-text_color_primary1 font-semibold capitalize cursor-pointer">
            <div className="flex items-center w-full justify-start overflow-scroll no-scrollbar scroll-smooth">
              <div className="flex items-center justify-start py-1.5 px-2 rounded-t-[6px] h-full relative">
                <span className="text-sm capitalize whitespace-nowrap w-full text-center bg-bg_text_brand_secondary text-transparent bg-clip-text font-normal">
                  Game Show
                </span>
                <div className="absolute bottom-0 left-0 right-0 w-full h-[2px] rounded bg-bg_text_brand_secondary" />
              </div>
              <div className="flex items-center justify-start py-1.5 px-2 rounded-t-[6px] h-full relative">
                <span className="text-sm capitalize whitespace-nowrap w-full text-center text-text_color_primary font-normal">
                  Lottery
                </span>
                <div className="absolute bottom-0 left-0 right-0 w-full h-[2px] rounded" />
              </div>
              <div className="flex items-center justify-start py-1.5 px-2 rounded-t-[6px] h-full relative">
                <span className="text-sm capitalize whitespace-nowrap w-full text-center text-text_color_primary font-normal">
                  Scratch Card
                </span>
                <div className="absolute bottom-0 left-0 right-0 w-full h-[2px] rounded" />
              </div>
            </div>
          </div>
          <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
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
        <div className="flex overflow-x-scroll no-scrollbar scroll-smooth gap-x-1 p-2.5">
          <div className="w-max h-max">
            <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.86885245901] object-cover rounded-md cursor-pointer">
              <img
                src="https://luckmedia.link/evo_lightning_storm/thumb_3_4_custom.webp"
                alt="Lightning Storm"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                title="Lightning Storm - 10sports"
                btnscontainerclassname="flex w-[108.75px] items-center justify-end gap-[5px]"
              />
            </div>
          </div>
          <div className="w-max h-max">
            <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.86885245901] object-cover rounded-md cursor-pointer">
              <img
                src="https://luckmedia.link/evo_crazy_time/thumb_3_4_custom.webp"
                alt="Crazy Time"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                title="Crazy Time - 10sports"
                btnscontainerclassname="flex w-[108.75px] items-center justify-end gap-[5px]"
              />
            </div>
          </div>
          <div className="w-max h-max">
            <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.86885245901] object-cover rounded-md cursor-pointer">
              <img
                src="https://luckmedia.link/evo_cash_or_crash/thumb_3_4_custom.webp"
                alt="Cash or Crash"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                title="Cash or Crash - 10sports"
                btnscontainerclassname="flex w-[108.75px] items-center justify-end gap-[5px]"
              />
            </div>
          </div>
          <div className="w-max h-max">
            <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.86885245901] object-cover rounded-md cursor-pointer">
              <img
                src="https://luckmedia.link/pltl_buffalo_blitz_live_slots/thumb_3_4_custom.webp"
                alt="Buffalo Blitz Live Slots"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                title="Buffalo Blitz Live Slots - 10sports"
                btnscontainerclassname="flex w-[108.75px] items-center justify-end gap-[5px]"
              />
            </div>
          </div>
          <div className="w-max h-max">
            <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.86885245901] object-cover rounded-md cursor-pointer">
              <img
                src="https://luckmedia.link/evo_crazy_coin_flip/thumb_3_4_custom.webp"
                alt="Crazy Coin Flip"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                title="Crazy Coin Flip - 10sports"
                btnscontainerclassname="flex w-[108.75px] items-center justify-end gap-[5px]"
              />
            </div>
          </div>
          <div className="w-max h-max">
            <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.86885245901] object-cover rounded-md cursor-pointer">
              <img
                src="https://luckmedia.link/pltl_everybodys_jackpot_live/thumb_3_4_custom.webp"
                alt="Everybody's Jackpot Live"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                title="Everybody's Jackpot Live - 10sports"
                btnscontainerclassname="flex w-[108.75px] items-center justify-end gap-[5px]"
              />
            </div>
          </div>
          <div className="w-max h-max">
            <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.86885245901] object-cover rounded-md cursor-pointer">
              <img
                src="https://luckmedia.link/pltl_the_greatest_cards_show/thumb_3_4_custom.webp"
                alt="The Greatest Cards Show"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                title="The Greatest Cards Show - 10sports"
                btnscontainerclassname="flex w-[108.75px] items-center justify-end gap-[5px]"
              />
            </div>
          </div>
          <div className="w-max h-max">
            <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.86885245901] object-cover rounded-md cursor-pointer">
              <img
                src="https://luckmedia.link/atm_cocktail_roulette/thumb_3_4_custom.webp"
                alt="Cocktail Roulette"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                title="Cocktail Roulette - 10sports"
                btnscontainerclassname="flex w-[108.75px] items-center justify-end gap-[5px]"
              />
            </div>
          </div>
          <div className="w-max h-max">
            <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.86885245901] object-cover rounded-md cursor-pointer">
              <img
                src="https://luckmedia.link/evo_stock_market/thumb_3_4_custom.webp"
                alt="Stock Market"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                title="Stock Market - 10sports"
                btnscontainerclassname="flex w-[108.75px] items-center justify-end gap-[5px]"
              />
            </div>
          </div>
          <div className="w-max h-max">
            <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.86885245901] object-cover rounded-md cursor-pointer">
              <img
                src="https://luckmedia.link/evo_balloon_race/thumb_3_4_custom.webp"
                alt="Balloon Race"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                title="Balloon Race - 10sports"
                btnscontainerclassname="flex w-[108.75px] items-center justify-end gap-[5px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCasino;
