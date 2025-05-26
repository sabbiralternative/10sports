import { handleCopyToClipBoard } from "../../../../utils/handleCopyToClipBoard";

const QR = ({ depositData, amount }) => {
  return (
    <div>
      {" "}
      <div className="w-full mt-2.5 rounded-[10px] bg-bg_color_primary text-text_color_primary1 px-3 py-[15px]">
        <div className="w-full relative bottom-[4px] right-[4px]">
          <span className="text-sm bg-bg_text_brand_primary rounded text-text_color_primary2 shadow-md px-2 py-1 text-primary">
            Current Available Balance: ₹ {amount}
          </span>
        </div>
        <div className="font-bold mt-[4px] text-base leading-5">
          <span>Payment Details</span>
        </div>
        <div className="flex items-center justify-center">
          <img src={depositData?.qrCodeLink} alt="qrCodeLink" />
        </div>
        {depositData?.qrDisplayName && (
          <div className="mt-2 w-full">
            <span className="flex flex-col items-start justify-start">
              <span className="text-text_color_tertiary1 text-[10px] leading-4 sm:text-xs md:text-sm">
                Display Name
              </span>
              <div className="flex items-center justify-between w-full text-base font-semibold leading-5 tracking-wide">
                <span>{depositData?.qrDisplayName}</span>
                <span
                  onClick={() =>
                    handleCopyToClipBoard(depositData?.qrDisplayName)
                  }
                  className="relative float-right cursor-pointer"
                >
                  <div>
                    <span className="bg-bg_color_primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 14 14"
                        fill="var(--bg-active-primary)"
                      >
                        <g clipPath="url(#clip0_1711_2966)">
                          <path
                            d="M8.50391 14H3.28125C2.07503 14 1.09375 13.0187 1.09375 11.8125V4.40234C1.09375 3.19612 2.07503 2.21484 3.28125 2.21484H8.50391C9.71013 2.21484 10.6914 3.19612 10.6914 4.40234V11.8125C10.6914 13.0187 9.71013 14 8.50391 14ZM3.28125 3.30859C2.67819 3.30859 2.1875 3.79929 2.1875 4.40234V11.8125C2.1875 12.4156 2.67819 12.9062 3.28125 12.9062H8.50391C9.10696 12.9062 9.59766 12.4156 9.59766 11.8125V4.40234C9.59766 3.79929 9.10696 3.30859 8.50391 3.30859H3.28125ZM12.8789 10.4453V2.1875C12.8789 0.981277 11.8976 0 10.6914 0H4.62109C4.31903 0 4.07422 0.244812 4.07422 0.546875C4.07422 0.848938 4.31903 1.09375 4.62109 1.09375H10.6914C11.2945 1.09375 11.7852 1.58444 11.7852 2.1875V10.4453C11.7852 10.7474 12.03 10.9922 12.332 10.9922C12.6341 10.9922 12.8789 10.7474 12.8789 10.4453Z"
                            fill="var(--bg-active-primary)"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1711_2966">
                            <rect width={14} height={14} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </span>
              </div>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default QR;
