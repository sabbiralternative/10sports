const IndianCardGame = () => {
  return (
    <div title="IndianCardGames" className="px-[6px] w-full">
      <div className="flex flex-col w-full font-lato bg-bg_color_primary rounded-[10px] divide-y-[1px] divide-border_color_primary shadow-homeCasinoCardGamesShadow">
        <div className="w-[100%] flex flex-row justify-between px-3 py-1.5">
          <div className="max-w-[85%] text-text_color_primary1 font-semibold capitalize cursor-pointer">
            <div className="flex items-center w-full gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={20}
                height={20}
                x={0}
                y={0}
                viewBox="0 0 511.643 511.643"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M453.209 184.081C373.725 121.725 300.804 41.437 270.565 6.713c-7.795-8.951-21.691-8.951-29.486 0-30.24 34.723-103.16 115.011-182.644 177.368C22.372 212.373 1.267 254.915 1.267 299.99c0 80 66.652 144.853 148.871 144.853 27.807 0 53.101-10.455 71.97-27.539v28.247c0 34.386-24.644 38.65-43.766 54.707-4.599 3.862-1.775 11.384 4.23 11.384h145.994c5.984 0 8.811-7.47 4.262-11.358-18.926-16.176-43.294-19.786-43.294-54.478v-28.503c18.869 17.084 44.163 27.539 71.97 27.539 82.219 0 148.871-64.853 148.871-144.853.001-45.074-21.104-87.616-57.166-115.908z"
                    fill="var(--icon-color-brand-primary)"
                    opacity={1}
                  />
                </g>
              </svg>
              <span className="text-text_color_primary1 font-semibold capitalize">
                Indian Card Games
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
        <div
          title="Indian Card Games"
          className="p-2.5 transition-all ease-in-out duration-200 w-full gap-1 overflow-x-auto scroll-smooth no-scrollbar grid grid-flow-col grid-rows-3"
        >
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indiangamesposters-04.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="Live Teenpatti"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="Live Teenpatti"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-26.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="2 Cards Teenpatti"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="2 Cards Teenpatti"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-02.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="TENNPATTI T20"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="TENNPATTI T20"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-07.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="Hi-Low"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="Hi-Low"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-24.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="Dragon Tiger"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="Dragon Tiger"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-25.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="Teenpatti Test"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="Teenpatti Test"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-01.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="7UP 7DOWN"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="7UP 7DOWN"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-22.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="Casino War"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="Casino War"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-20.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="Queen Race"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="Queen Race"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-18.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="Roulette"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="Roulette"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-16.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="The Trio"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="The Trio"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-10.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="Poker 20-20"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="Poker 20-20"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-15.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="Muflis Teenpatti"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="Muflis Teenpatti"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-13.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="Baccarat"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="Baccarat"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-12.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="Bollywood Casino"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="Bollywood Casino"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-14.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="Race 2020"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="Race 2020"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-03.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="Matka"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="Matka"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-06.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="6 Player Poker"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="6 Player Poker"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-08.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="Poker"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="Poker"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-09.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="32 Cards Casino"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="32 Cards Casino"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-19.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="Sicbo"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="Sicbo"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-05.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="Andar Bahar"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="Andar Bahar"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-11.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="Amar Akbar Anthony"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="Amar Akbar Anthony"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-31.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="super over"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="super over"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-23.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="Teenaptti open"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="Teenaptti open"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-17.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="dream catcher"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="dream catcher"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-27.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="3 card judgement"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="3 card judgement"
              />
            </div>
          </div>
          <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px] aspect-square rounded-md cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden w-full h-full object-cover">
              <img
                src="https://auraimgs.imgix.net/indian%20games%20posters-29.webp?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                alt="29 card baccarat"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                title="29 card baccarat"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianCardGame;
