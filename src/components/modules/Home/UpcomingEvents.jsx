const UpcomingEvents = () => {
  return (
    <div title="Upcoming Events" className="px-[6px] w-full">
      <div className="w-full font-helvetica-neue">
        <div className="w-full flex items-center justify-between border-b border-border_color_primary rounded-t-[10px] py-1.5 px-[7px] bg-bg_UpcomingBg">
          <div className="flex items-center text-text_color_primary2 font-semibold text-[18px] tracking-wide justify-start w-full gap-[5px]">
            <svg
              width={20}
              height={20}
              viewBox="0 0 16 16"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="var(--icon-color-secondary)"
              strokeWidth={1}
            >
              <rect width={16} height={16} id="icon-bound" fill="none" />
              <path d="M7,9h2V4H7V9z M9,11c0-0.553-0.447-1-1-1s-1,0.447-1,1s0.447,1,1,1S9,11.553,9,11z M16,8c0-4.419-3.581-8-8-8S0,3.581,0,8 s3.581,8,8,8S16,12.419,16,8z M14,8c0,1.603-0.625,3.109-1.756,4.244C11.109,13.375,9.603,14,8,14s-3.109-0.625-4.244-1.756 C2.625,11.109,2,9.603,2,8s0.625-3.109,1.756-4.244C4.891,2.625,6.397,2,8,2s3.109,0.625,4.244,1.756C13.375,4.891,14,6.397,14,8z" />
            </svg>
            <span>Upcoming Events</span>
          </div>
        </div>
        <div className="bg-bg_color_primary border border-border_color_primary border-b-0 shadow-lg border-t-0 rounded-b">
          <div className="eventHeadName grid grid-cols-12">
            <div className="text-text_color_primary1 px-2 h-full py-2.5 col-span-6 lg:col-span-5 pl-2 flex items-center justify-start w-full gap-x-2">
              <svg
                width={18}
                height={18}
                viewBox="0 0 19 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.36255 16.7108C4.35063 16.7037 4.34109 16.6966 4.32917 16.6895C3.88333 16.4077 3.4518 16.107 3.05842 15.7566C2.91299 15.6263 2.77709 15.489 2.63404 15.3564C2.59828 15.3256 2.61974 15.3067 2.63642 15.283C2.81524 15.0533 2.99643 14.8213 3.17524 14.5916C3.92148 13.635 4.6701 12.676 5.41634 11.7194C6.27225 10.6231 7.12578 9.52678 7.98169 8.43047C8.8066 7.37204 9.6339 6.31125 10.4588 5.25282C11.329 4.14231 12.1969 3.02942 13.0647 1.9189C13.2292 1.70816 13.3961 1.49506 13.5582 1.28195C13.5797 1.25354 13.5916 1.24644 13.6274 1.26538C13.9468 1.45244 14.2472 1.67028 14.5333 1.90233C14.6692 2.01125 14.8123 2.1107 14.9458 2.22199C15.0817 2.34038 15.2128 2.46351 15.3439 2.58663C15.3773 2.61742 15.3535 2.63162 15.3368 2.65293C15.1008 2.95602 14.8623 3.26147 14.6263 3.56455C13.9254 4.46433 13.222 5.36411 12.5211 6.26389C11.7343 7.27259 10.9476 8.28129 10.1584 9.29C9.42648 10.2277 8.69693 11.1653 7.965 12.103C7.12101 13.1827 6.2794 14.2648 5.43542 15.3446C5.08971 15.7874 4.7464 16.2278 4.40069 16.6706C4.39116 16.6848 4.38401 16.7037 4.36255 16.7108Z"
                  fill="var(--icon-color-quaternary)"
                />
                <path
                  d="M17.9928 8.49706C17.9761 8.16556 17.9451 7.83643 17.8927 7.50967C17.8283 7.11424 17.7305 6.72591 17.6137 6.33995C17.3777 5.55146 17.0225 4.8198 16.5814 4.12365C16.4336 3.89161 16.2762 3.66903 16.1022 3.45119C16.0879 3.46776 16.0736 3.48197 16.0617 3.49854C15.7231 3.93423 15.3869 4.36991 15.0484 4.80322C14.2426 5.84271 13.4367 6.88219 12.6309 7.92167C11.7988 8.99431 10.9691 10.0669 10.1371 11.1372C9.34792 12.1554 8.55639 13.1759 7.76724 14.1941C6.99001 15.1981 6.2104 16.202 5.43317 17.2036C5.40456 17.2391 5.40695 17.251 5.44986 17.2699C6.43213 17.6867 7.45492 17.9211 8.52063 17.9803C9.05468 18.0087 9.58872 17.9921 10.1204 17.9258C10.571 17.869 11.0144 17.7814 11.4483 17.6511C12.247 17.412 13.0052 17.0852 13.7157 16.6495C14.4619 16.1925 15.1247 15.6385 15.7112 14.9897C16.0998 14.5587 16.4455 14.097 16.7411 13.5998C17.1917 12.8421 17.5136 12.0346 17.7353 11.1846C17.8736 10.6518 17.9594 10.1096 17.988 9.56022C18.0095 9.20741 18.0119 8.85224 17.9928 8.49706ZM9.17865 15.8587C8.93547 16.1618 8.70182 16.472 8.46579 16.7821C8.3299 16.9621 8.15586 17.0473 7.92936 16.9952C7.69572 16.9408 7.54552 16.7443 7.5479 16.5051C7.54552 16.382 7.58843 16.2754 7.66472 16.1783C7.90075 15.8776 8.13678 15.5745 8.37281 15.2738C8.52778 15.0797 8.7805 15.0063 8.98792 15.1128C9.31931 15.2809 9.336 15.6598 9.17865 15.8587ZM11.105 13.2612C11.0955 13.3606 11.055 13.4435 10.9954 13.5216C10.7569 13.8271 10.5233 14.1349 10.2873 14.4403C10.1633 14.6014 10.0012 14.6795 9.79853 14.644C9.58157 14.6061 9.44567 14.4688 9.39322 14.2557C9.38369 14.2201 9.38369 14.1823 9.3813 14.1444C9.3813 14.026 9.42183 13.9194 9.49336 13.8271C9.73654 13.5169 9.97972 13.2043 10.2253 12.8941C10.3588 12.726 10.6115 12.6621 10.807 12.7426C10.9977 12.8231 11.1265 13.0457 11.105 13.2612ZM12.8407 11.1443C12.5927 11.4569 12.3519 11.7742 12.0992 12.082C11.98 12.2264 11.8131 12.3069 11.6176 12.2643C11.4078 12.2169 11.2695 12.082 11.2242 11.8689C11.1932 11.7268 11.2266 11.5918 11.3172 11.4734C11.5485 11.1704 11.7845 10.872 12.0134 10.5666C12.2494 10.2493 12.7501 10.28 12.9098 10.666C12.936 10.7276 12.9432 10.7915 12.9432 10.8554C12.9432 10.9644 12.9098 11.0591 12.8407 11.1443ZM14.6645 8.77646C14.419 9.09139 14.1758 9.41105 13.9326 9.72834C13.7991 9.90119 13.5678 9.97459 13.358 9.90829C13.1602 9.84673 13.0195 9.66204 13.0123 9.44656C13.0076 9.31633 13.0576 9.19794 13.1363 9.09849C13.3747 8.79067 13.6203 8.48996 13.8635 8.18687C14.0018 8.01639 14.2235 7.95009 14.4238 8.02112C14.624 8.09216 14.7575 8.27922 14.7599 8.49943C14.7528 8.59414 14.7313 8.69122 14.6645 8.77646ZM16.5099 6.40152C16.2667 6.71644 16.0235 7.03373 15.7827 7.34866C15.6254 7.55466 15.4084 7.62333 15.1795 7.53808C14.9888 7.46705 14.86 7.27288 14.8648 7.03847C14.8624 6.94375 14.9077 6.8372 14.9816 6.74012C15.2153 6.44177 15.4465 6.14342 15.6826 5.84508C15.8638 5.61303 16.1308 5.56804 16.3835 5.72432C16.5933 5.85691 16.6601 6.20736 16.5099 6.40152Z"
                  fill="var(--icon-color-quaternary)"
                />
                <path
                  d="M12.5188 0.709924C11.5127 0.274241 10.4589 0.0469281 9.36222 0.00667475C8.58975 -0.0217394 7.82444 0.0398245 7.06866 0.205573C6.33911 0.364219 5.63817 0.605739 4.97299 0.94434C3.79522 1.54104 2.7915 2.35084 1.96896 3.38559C1.49213 3.98702 1.09398 4.63344 0.784041 5.33432C0.469333 6.04467 0.245222 6.78581 0.116478 7.55062C0.0592586 7.88212 0.0306488 8.21598 0.0163439 8.54985C0.00203901 8.85057 0.00203901 9.14891 0.0163439 9.44963C0.0282647 9.72904 0.0521062 10.0108 0.0902526 10.2878C0.142704 10.6738 0.233302 11.0527 0.338204 11.4268C0.457412 11.8577 0.602845 12.2816 0.791193 12.6888C0.979541 13.0937 1.19888 13.4821 1.4373 13.8609C1.57796 14.0835 1.72816 14.2966 1.89029 14.5097C5.44744 9.91609 8.99982 5.32248 12.5522 0.733602C12.5451 0.717027 12.5308 0.71466 12.5188 0.709924ZM3.05375 11.1379C2.81057 11.4505 2.56739 11.7654 2.31943 12.0732C2.17162 12.2579 1.91651 12.3171 1.70909 12.2082C1.45637 12.0732 1.3014 11.7441 1.5279 11.4741C1.61134 11.3747 1.68525 11.2681 1.76393 11.1639C1.92366 10.9532 2.07863 10.7377 2.24076 10.5294C2.37427 10.3565 2.55308 10.2831 2.77004 10.3328C2.987 10.3826 3.11097 10.5246 3.15627 10.7401C3.15865 10.7472 3.15865 10.7567 3.16104 10.7638C3.16104 10.7851 3.16104 10.8064 3.16104 10.8277C3.16342 10.9414 3.12528 11.0456 3.05375 11.1379ZM4.8824 8.78427C4.68213 9.03999 4.48186 9.29809 4.28159 9.55382C4.24583 9.60117 4.21006 9.64853 4.17192 9.69352C4.06463 9.82849 3.91681 9.89952 3.6784 9.89715C3.5282 9.89242 3.38753 9.77166 3.29932 9.5917C3.21349 9.42122 3.24687 9.2602 3.36369 9.10866C3.60449 8.79611 3.83814 8.47882 4.07655 8.16389C4.20291 7.99814 4.37457 7.92711 4.57722 7.96263C4.78226 7.99814 4.91816 8.1189 4.97538 8.32254C5.02544 8.49302 4.98968 8.64693 4.8824 8.78427ZM6.69673 6.43063C6.4607 6.73372 6.22467 7.03443 5.98864 7.33515C5.85275 7.508 5.66917 7.55772 5.46413 7.508C5.27101 7.46064 5.14704 7.32804 5.09697 7.13625C5.05882 6.98471 5.09935 6.84264 5.18995 6.72424C5.4379 6.40222 5.69301 6.08729 5.95049 5.77C6.07209 5.62083 6.23659 5.5711 6.42017 5.61136C6.61806 5.65398 6.74203 5.78421 6.79687 5.98074C6.80879 6.02099 6.81117 6.06125 6.80879 6.11571C6.81594 6.227 6.77303 6.33355 6.69673 6.43063ZM8.59452 3.9515C8.52538 4.09831 8.41332 4.21433 8.31796 4.33983C8.15107 4.55767 7.98179 4.77551 7.81013 4.98862C7.68139 5.14963 7.50496 5.21119 7.30708 5.17094C7.09727 5.12832 6.96138 4.99572 6.91369 4.78498C6.90654 4.75183 6.90654 4.71395 6.90177 4.67843C6.90416 4.5553 6.95422 4.45348 7.02575 4.35877C7.25701 4.05332 7.49066 3.75023 7.72669 3.44715C7.88166 3.24825 8.13199 3.17722 8.34657 3.2814C8.6279 3.42347 8.71134 3.70288 8.59452 3.9515ZM10.3683 1.70679C10.1299 2.02408 9.88673 2.33663 9.64355 2.65155C9.5148 2.8173 9.28115 2.8836 9.08089 2.81967C8.88062 2.75574 8.74234 2.57105 8.73518 2.35557C8.7328 2.22534 8.78287 2.10695 8.85678 2.00513C9.09042 1.69495 9.32884 1.38713 9.56725 1.07931C9.665 0.953812 9.79852 0.885144 9.97494 0.878041C10.1704 0.894616 10.3254 0.998801 10.4232 1.17639C10.5281 1.36108 10.4899 1.54577 10.3683 1.70679Z"
                  fill="var(--icon-color-quaternary)"
                />
              </svg>
              <div className="text-text_color_primary1 mt-0.5 md:text-[18px] text-base font-semibold leading-3 tracking-wide text-center">
                Cricket
              </div>
            </div>
            <div className="col-span-6 py-2.5 lg:col-span-7 grid grid-cols-12 h-full">
              <span className="text-text_color_primary1 mt-0.5 text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                1
              </span>
              <span className="text-text_color_primary1 mt-0.5 text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                X
              </span>
              <span className="text-text_color_primary1 mt-0.5 text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                2
              </span>
            </div>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-border_color_primary1">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_color_UpcomingEventsScoreAndTime text-[8px] xs:text-[9px] md:text-[10px] font-semibold w-full text-center">
                  Tomorrow 7:15 AM
                </span>
              </span>
              <div
                id="inPlayTeamName"
                className="cursor-pointer text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-border_color_primary active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]" />
                    <span className="text-[11px] font-bold text-text_color_primary1 truncate sm:text-xs md:text-sm">
                      New Zealand Women
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]" />
                    <span className="text-[11px] font-bold text-text_color_primary1 truncate sm:text-xs md:text-sm">
                      Australia Women
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-border_color_primary1">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full gap-x-0.5 py-[1px] pr-[2px]">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        5.9
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        44
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        6
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        127
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        -
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      />
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        -
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        1.2
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        636
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        1.21
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        3,404
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-border_color_primary1">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_color_UpcomingEventsScoreAndTime text-[8px] xs:text-[9px] md:text-[10px] font-semibold w-full text-center">
                  Tomorrow 11:45 AM
                </span>
              </span>
              <div
                id="inPlayTeamName"
                className="cursor-pointer text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-border_color_primary active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]" />
                    <span className="text-[11px] font-bold text-text_color_primary1 truncate sm:text-xs md:text-sm">
                      New Zealand
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]" />
                    <span className="text-[11px] font-bold text-text_color_primary1 truncate sm:text-xs md:text-sm">
                      Pakistan
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-border_color_primary1">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full gap-x-0.5 py-[1px] pr-[2px]">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        1.52
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        2,127
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        1.54
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        51
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        -
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      />
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        -
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        2.84
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        28
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        2.92
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        71
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-border_color_primary1">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_color_UpcomingEventsScoreAndTime text-[8px] xs:text-[9px] md:text-[10px] font-semibold w-full text-center">
                  Tomorrow 7:30 PM
                </span>
              </span>
              <div
                id="inPlayTeamName"
                className="cursor-pointer text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-border_color_primary active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]" />
                    <span className="text-[11px] font-bold text-text_color_primary1 truncate sm:text-xs md:text-sm">
                      Rajasthan Royals
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]" />
                    <span className="text-[11px] font-bold text-text_color_primary1 truncate sm:text-xs md:text-sm">
                      Kolkata Knight Riders
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-border_color_primary1">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full gap-x-0.5 py-[1px] pr-[2px]">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        2.26
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        9
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        2.28
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        30
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        -
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      />
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        -
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        1.78
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        43
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        1.79
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        11
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-border_color_primary1">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_color_UpcomingEventsScoreAndTime text-[8px] xs:text-[9px] md:text-[10px] font-semibold w-full text-center">
                  27-03-2025 7:30 PM
                </span>
              </span>
              <div
                id="inPlayTeamName"
                className="cursor-pointer text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-border_color_primary active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]" />
                    <span className="text-[11px] font-bold text-text_color_primary1 truncate sm:text-xs md:text-sm">
                      Sunrisers Hyderabad
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]" />
                    <span className="text-[11px] font-bold text-text_color_primary1 truncate sm:text-xs md:text-sm">
                      Lucknow Super Giants
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-border_color_primary1">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full gap-x-0.5 py-[1px] pr-[2px]">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        1.56
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        23
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        1.58
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        2
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        -
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      />
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        -
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        2.72
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        1
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        2.8
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        22
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-border_color_primary1 border-b">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_color_UpcomingEventsScoreAndTime text-[8px] xs:text-[9px] md:text-[10px] font-semibold w-full text-center">
                  28-03-2025 7:30 PM
                </span>
              </span>
              <div
                id="inPlayTeamName"
                className="cursor-pointer text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-border_color_primary active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]" />
                    <span className="text-[11px] font-bold text-text_color_primary1 truncate sm:text-xs md:text-sm">
                      Chennai Super Kings
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]" />
                    <span className="text-[11px] font-bold text-text_color_primary1 truncate sm:text-xs md:text-sm">
                      Royal Challengers Bengaluru
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-border_color_primary1 border-b">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full gap-x-0.5 py-[1px] pr-[2px]">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        1.81
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        227
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        1.82
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        100
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        -
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      />
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        -
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        2.2
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        98
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                      <span
                        id="oddBtnPrice"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                      >
                        2.24
                      </span>
                      <span
                        id="oddBtnSize"
                        className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                      >
                        183
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
