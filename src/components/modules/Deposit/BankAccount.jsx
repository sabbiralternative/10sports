import { useEffect, useRef, useState } from "react";
import { useBankAccountMutation } from "../../../redux/features/deposit/event.api";
import images from "../../../assets/images";
import { FaQrcode } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import Bank from "./PaymentMethod/Bank";
import UploadTransaction from "./UploadTransaction";
import { AxiosSecure } from "../../../lib/AxiosSecure";
import { API } from "../../../api";
import toast from "react-hot-toast";
import { scrollToLeft, scrollToRight } from "../../../utils/scroll";
import UPI from "./PaymentMethod/UPI";
import QR from "./PaymentMethod/QR";
import USDT from "./PaymentMethod/USDT";
import PG from "./PaymentMethod/PG";

const BankAccount = ({ amount }) => {
  const paymentMethodRef = useRef();
  const [getPaymentMethod, { data }] = useBankAccountMutation();
  const [methodType, setMethodType] = useState(null);
  const [depositData, setDepositData] = useState({});
  const [paymentId, setPaymentId] = useState(null);

  useEffect(() => {
    getPaymentMethod({
      type: "depositMethods",
      amount,
    });
  }, [amount, getPaymentMethod]);

  const handleVisibleBankMethod = async (method) => {
    setMethodType(method?.type);
    setPaymentId(method?.paymentId);
    if (method?.type === "pg") {
      const depositDetailForPg = {
        paymentId: method?.paymentId,
        amount,
      };
      const res = await AxiosSecure.post(API.pg, depositDetailForPg);
      const data = res?.data;

      if (data?.success) {
        window.location.href = data?.result?.link;
      } else {
        toast.error(data?.result?.message);
      }
    } else {
      const depositDetail = {
        type: "depositDetails",
        paymentId: method?.paymentId,
        amount,
      };

      const res = await AxiosSecure.post(API.bankAccount, depositDetail);
      const data = res?.data;
      if (data?.success) {
        if (method?.type === "whatsapp") {
          window.location.href = data?.result?.link;
        } else {
          setDepositData(data?.result);
        }
      }
    }
  };

  return (
    <div className="w-full h-full } lg:w-[54%] lg:pt-2">
      <div className="mx-2 font-lato h-full pb-10">
        <div className="w-full flex flex-col gap-y-2">
          <div className="w-full h-1" />
          <form>
            <section className="w-full bg-bg_color_primary rounded-md font-lato pt-[11px] text-text_color_primary1 mb-2.5">
              <p className="text-text_primary text-sm font-normal px-3">
                You are paying:
              </p>
              <p className="text-text_primary text-sm font-normal mt-[7px] pb-[13px] px-3">
                <span className="text-text_color_primary6 text-base font-semibold leading-normal not-italic">
                  ₹{amount}
                </span>
              </p>
              <p className="bg-bg_color_quaternary py-2.5 w-full px-3 rounded-b-md font-normal text-text_color_primary1 text-xs leading-normal not-italic">
                You will get
                <span className="text-text_brand_primary"> ₹{amount}</span> in
                your main wallet<span>.</span>
              </p>
            </section>
            <div className="rounded-lg bg-bg_color_primary overflow-hidden text-text_color_primary1 transition-height duration-500 ease-in-out h-max px-3 pt-[15px] pb-[20px]">
              <div className="flex flex-row justify-end items-center w-full">
                <span className="text-base font-lato font-bold leading-5 w-full">
                  Payment Options
                  <span className="text-text_color_success font-normal leading-4">
                    ({data?.result?.length})
                  </span>
                </span>
                <button
                  onClick={() => scrollToLeft(paymentMethodRef)}
                  className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex size-[22px] sm:size-[24px] md:size-[26px] justify-center items-center gap-[10px] bg-bg_color_quaternary rounded shadow-sm cursor-pointer"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
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
                  onClick={() => scrollToRight(paymentMethodRef)}
                  className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex size-[22px] sm:size-[24px] md:size-[26px] justify-center ml-[4px] items-center gap-[10px] bg-bg_color_quaternary rounded shadow-sm cursor-pointer"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
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
              <div
                ref={paymentMethodRef}
                id="payMentOptions"
                className="flex items-center gap-x-1.5 pt-[18px] pb-[8px] overflow-x-auto no-scrollbar scroll-smooth cursor-pointer w-full transition-all ease-in-out duration-150"
              >
                {data?.result?.map((method) => (
                  <div
                    key={method?.paymentId}
                    onClick={() => handleVisibleBankMethod(method)}
                    className={`flex justify-start items-center flex-col gap-y-2 rounded-[10px] bg-transparent py-2 w-full px-[20px] relative border  shadow-depositGateWayBoxShadows min-w-[117px] max-w-[130px] ${
                      method?.type === methodType
                        ? "border-border_color_depositPaymentMethod"
                        : ""
                    }`}
                  >
                    {/* <div className="absolute top-0 right-0.5">
                      <div className="inline-flex items-center">
                        <label
                          className="relative flex cursor-pointer items-center rounded-full"
                          htmlFor="blue"
                        >
                          <input
                            className="before:content[''] before:bg-transperent peer relative cursor-pointer appearance-none rounded-full border border-border_color_primary transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-max before:w-max before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-border_color_brand_primary checked:bg-bg_text_brand_primary hover:before:opacity-10 undefined"
                            id="blue"
                            type="checkbox"
                            style={{ width: "14px", height: "14px" }}
                          />
                          <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-text_color_primary2 opacity-0 transition-opacity peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 w-3.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth={1}
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </label>
                      </div>
                    </div> */}
                    <div className="flex items-center gap-y-1 flex-col w-full">
                      {method?.type == "qr" && (
                        <FaQrcode size={20} color="gray" />
                      )}
                      {method?.type == "bank" && (
                        <CiBank size={20} color="gray" />
                      )}
                      {method?.type == "upi" || method?.type == "pg" ? (
                        <img
                          style={{ height: "20px", width: "20px" }}
                          src={"/icon/upi.png"}
                        />
                      ) : null}
                      {method?.type == "usdt" ? (
                        <img
                          style={{ height: "20px", width: "20px" }}
                          src={"/icon/usdt.png"}
                        />
                      ) : null}
                      {method?.type == "whatsapp" ? (
                        <img
                          style={{ height: "20px", width: "20px" }}
                          src={images.whatsapp}
                        />
                      ) : null}

                      <span className="text-xs font-lato font-medium truncate w-full uppercase">
                        {method?.titles}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs md:text-sm pt-2 font-lato font-normal leading-4">
                1. Deposit money only in the below available accounts to get the
                fastest credits and avoid possible delays.
              </p>
              <p className="text-text_color_tertiary1 pt-1 font-sans text-xs md:text-sm font-normal cursor-pointer">
                See More..
              </p>
            </div>
            {/* Payment Method */}
            {methodType === "bank" && (
              <Bank amount={amount} depositData={depositData} />
            )}
            {methodType === "upi" && (
              <UPI amount={amount} depositData={depositData} />
            )}
            {methodType === "qr" && <QR depositData={depositData} />}
            {methodType === "usdt" && <USDT depositData={depositData} />}
            {methodType === "pg" && <PG depositData={depositData} />}
            <UploadTransaction paymentId={paymentId} amount={amount} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BankAccount;
