import { useEffect, useState } from "react";
import { useBankAccount } from "../../../../hooks/bankAccount";
import { useBankAccountMutation } from "../../../../redux/features/deposit/event.api";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { AxiosSecure } from "../../../../lib/AxiosSecure";
import { API, Settings } from "../../../../api";
import { jwtDecode } from "jwt-decode";

const NewAccount = ({ setTab }) => {
  const bankData = {
    type: "getBankAccounts",
    status: "1",
  };
  const { refetch: refetchBankAccounts } = useBankAccount(bankData);
  const [addNewBank] = useBankAccountMutation();
  const [isFormValid, setIsFormValid] = useState(false);
  const [mobile, setMobile] = useState(null);
  const { token } = useSelector((state) => state.auth);
  const [orderId, setOrderId] = useState(null);
  const [timer, setTimer] = useState(null);
  const [bankDetails, setBankDetails] = useState({
    accountName: "",
    ifsc: "",
    accountNumber: "",
    confirmAccountNumber: "",
    upiId: "",
    otp: "",
  });

  /* Handle add bank function */
  const handleAddBank = async (e) => {
    e.preventDefault();

    if (bankDetails.accountNumber != bankDetails.confirmAccountNumber) {
      return toast.error("Account number not matched!");
    }

    if (mobile && !bankDetails.otp && Settings.otp) {
      return toast.error("Please enter otp to add new account");
    }
    /* generating random token for post data */

    let bankData = {
      accountName: bankDetails.accountName,
      ifsc: bankDetails.ifsc,
      accountNumber: bankDetails.accountNumber,
      upiId: bankDetails.upiId,
      type: "addBankAccount",
    };
    if (mobile) {
      bankData.mobile = mobile;
      bankData.otp = bankDetails.otp;
      bankData.orderId = orderId;
    }

    const res = await addNewBank(bankData).unwrap();
    if (res?.success) {
      setBankDetails({
        accountName: "",
        ifsc: "",
        accountNumber: "",
        confirmAccountNumber: "",
        otp: "",
      });
      toast.success(res?.result?.message);
      setTab("oldAccount");
      refetchBankAccounts();
    } else {
      toast.error(res?.result?.message);
    }
  };

  const validateForm = (bankDetails) => {
    const isaccountNameFilled = bankDetails.accountName.trim() !== "";
    const isaccountNumberFilled = bankDetails.accountNumber.trim() !== "";
    const isIfscFilled = bankDetails.ifsc.trim() !== "";
    const isOTPFilled =
      mobile && Settings.otp ? bankDetails.otp.trim() !== "" : true;
    const isFormValid =
      isaccountNameFilled &&
      isIfscFilled &&
      isaccountNumberFilled &&
      isOTPFilled;
    setIsFormValid(isFormValid);
  };

  useEffect(() => {
    validateForm(bankDetails);
  }, [bankDetails]);

  const getOtp = async () => {
    const otpData = {
      mobile,
    };

    const res = await AxiosSecure.post(API.otp, otpData);
    const data = res.data;
    if (data?.success) {
      setTimer(60);
      setOrderId(data?.result?.orderId);
      toast.success(data?.result?.message);
    } else {
      toast.error(data?.error?.errorMessage);
    }
  };

  useEffect(() => {
    const getMobile = () => {
      const decode = jwtDecode(token);
      if (decode?.mobile) {
        setMobile(decode?.mobile);
      }
    };
    getMobile();
  }, [token]);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setTimer(null);
    }
  }, [timer]);

  const getOtpOnWhatsapp = async () => {
    const otpData = {
      mobile: mobile,
      type: "otpsend",
    };

    const res = await AxiosSecure.post(API.otpless, otpData);
    const data = res.data;

    if (data?.success) {
      toast.success(data?.result?.message);
    } else {
      toast.error(data?.error?.errorMessage);
    }
  };
  return (
    <form onSubmit={handleAddBank} className="w-full font font-lato">
      <div className="rounded-lg bg-bg_color_primary text-text_color_primary1 py-2 px-3.5 flex flex-col items-start justify-start w-full gap-y-0.5">
        <div className="flex flex-col w-full">
          <div className="ml-1 text-sm font">UPI ID (Optional)</div>
          <div className="flex items-center w-full bg-bg_color_input_bg w-full py-2 px-2 rounded-lg border">
            <input
              className="text-sm px-1 flex-grow min-w-0 border-none focus:outline-none bg-transparent"
              placeholder="Enter UPI ID"
              aria-label="Account No"
              id="accountNo"
              type="text"
              onChange={(e) => {
                setBankDetails({
                  ...bankDetails,
                  upiId: e.target.value,
                });
              }}
              value={bankDetails.upiId}
            />
          </div>
          <div className="flex items-start w-full justify-between leading-normal px-1">
            <div className="w-max min-h-[18px] h-max" />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="ml-1 text-sm">
            Account Name
            <span className="text-text_color_danger">*</span>
          </div>
          <div className="flex items-center w-full bg-bg_color_input_bg w-full py-2 px-2 rounded-lg border">
            <input
              onChange={(e) => {
                setBankDetails({
                  ...bankDetails,
                  accountName: e.target.value,
                });
              }}
              className="text-sm px-1 flex-grow min-w-0 border-none focus:outline-none bg-transparent"
              placeholder="Enter Account Name"
              aria-label="Confirm Account No"
              id="confirmAccountNo"
              type="text"
              value={bankDetails.accountName}
            />
          </div>
          <div className="flex items-start w-full justify-between leading-normal px-1">
            <div className="w-max min-h-[18px] h-max" />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="ml-1 text-sm">
            Account No <span className="text-text_color_danger">*</span>
          </div>
          <div className="flex items-center w-full bg-bg_color_input_bg w-full py-2 px-2 rounded-lg border">
            <input
              onChange={(e) => {
                setBankDetails({
                  ...bankDetails,
                  accountNumber: e.target.value,
                });
              }}
              className="text-sm px-1 flex-grow min-w-0 border-none focus:outline-none bg-transparent"
              placeholder="Enter Account No"
              aria-label="Account Name"
              id="accountName"
              type="text"
              value={bankDetails.accountNumber}
            />
          </div>
          <div className="flex items-start w-full justify-between leading-normal px-1">
            <div className="w-max min-h-[18px] h-max" />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="ml-1 text-sm">
            Confirm Account No <span className="text-text_color_danger">*</span>
          </div>
          <div className="flex items-center w-full bg-bg_color_input_bg w-full py-2 px-2 rounded-lg border">
            <input
              onChange={(e) => {
                setBankDetails({
                  ...bankDetails,
                  confirmAccountNumber: e.target.value,
                });
              }}
              className="text-sm px-1 flex-grow min-w-0 border-none focus:outline-none bg-transparent"
              placeholder="Re-enter Account No"
              aria-label="Account Name"
              id="accountName"
              type="text"
              value={bankDetails.confirmAccountNumber}
            />
          </div>
          <div className="flex items-start w-full justify-between leading-normal px-1">
            <div className="w-max min-h-[18px] h-max" />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="ml-1 text-sm">
            IFSC Code <span className="text-text_color_danger">*</span>
          </div>
          <div className="flex items-center w-full bg-bg_color_input_bg w-full py-2 px-2 rounded-lg border">
            <input
              onChange={(e) => {
                setBankDetails({
                  ...bankDetails,
                  ifsc: e.target.value,
                });
              }}
              className="text-sm px-1 flex-grow min-w-0 border-none focus:outline-none bg-transparent"
              placeholder="Enter IFSC Code"
              aria-label="Account Name"
              id="accountName"
              type="text"
              value={bankDetails.ifsc}
            />
          </div>
          <div className="flex items-start w-full justify-between leading-normal px-1">
            <div className="w-max min-h-[18px] h-max" />
          </div>
        </div>
        {mobile && Settings.otp && (
          <div className="flex flex-col w-full">
            <div className="ml-1 text-sm">
              Mobile <span className="text-text_color_danger">*</span>
            </div>
            <div className="flex items-center w-full bg-bg_color_input_bg w-full py-2 px-2 rounded-lg border">
              <input
                readOnly
                className="text-sm px-1 flex-grow min-w-0 border-none focus:outline-none bg-transparent"
                placeholder="Enter Mobile No"
                aria-label="Account Name"
                id="accountName"
                type="text"
                value={mobile}
              />{" "}
              <div className="w-max">
                {timer ? (
                  <button
                    onClick={getOtp}
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato-bold h-fit bg-bg_Primary text-text_Quaternary transition-all ease-in-out text-xs whitespace-nowrap mr-1 py-1 px-3 rounded active:scale-[0.98] active:opacity-95 disabled:bg-bg_Slate500 disabled:opacity-50 font-medium relative flex items-center justify-center cursor-pointer"
                    type="button"
                  >
                    <span className=" ">Retry in {timer}</span>
                    {/* <span className="shimmer"></span> */}
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    {Settings.otpWhatsapp && (
                      <button
                        onClick={getOtpOnWhatsapp}
                        className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato-bold h-fit bg-bg_Primary text-text_Quaternary transition-all ease-in-out text-xs whitespace-nowrap mr-1 py-1 px-3 rounded active:scale-[0.98] active:opacity-95 disabled:bg-bg_Slate500 disabled:opacity-50 font-medium relative flex items-center justify-center cursor-pointer bg-bg_text_brand_primary"
                        type="button"
                      >
                        <span className="text-primary">Get OTP Whatsapp</span>
                        <span className="shimmer"></span>
                      </button>
                    )}

                    <button
                      onClick={getOtp}
                      className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato-bold h-fit bg-bg_Primary text-text_Quaternary transition-all ease-in-out text-xs whitespace-nowrap mr-1 py-1 px-3 rounded active:scale-[0.98] active:opacity-95 disabled:bg-bg_Slate500 disabled:opacity-50 font-medium relative flex items-center justify-center cursor-pointer bg-bg_text_brand_primary"
                      type="button"
                    >
                      <span className="text-primary">Get OTP SMS</span>
                      <span className="shimmer"></span>
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-start w-full justify-between leading-normal px-1">
              <div className="w-max min-h-[18px] h-max" />
            </div>
          </div>
        )}
        {mobile && Settings.otp && (
          <div className="flex flex-col w-full">
            <div className="ml-1 text-sm">
              OTP <span className="text-text_color_danger">*</span>
            </div>
            <div className="flex items-center w-full bg-bg_color_input_bg w-full py-2 px-2 rounded-lg border">
              <input
                maxLength={6}
                onChange={(e) => {
                  setBankDetails({
                    ...bankDetails,
                    otp: e.target.value,
                  });
                }}
                className="text-sm px-1 flex-grow min-w-0 border-none focus:outline-none bg-transparent"
                placeholder="Enter OTP"
                aria-label="Account Name"
                id="accountName"
                type="text"
                value={bankDetails.otp}
              />{" "}
              <div className="w-max"></div>
            </div>
            <div className="flex items-start w-full justify-between leading-normal px-1">
              <div className="w-max min-h-[18px] h-max" />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-start justify-center gap-x-2">
        <div className="inline-flex items-center">
          <label
            className="relative flex cursor-pointer items-center rounded-full bg-bg_color_quaternary4"
            htmlFor="blue"
          >
            <input
              className="before:content[''] before:bg-bg_color_quaternary8 rounded-md peer relative cursor-pointer appearance-none border border-undefined transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-max before:w-max before:-translate-x-2/4 before:-translate-y-2/4 before:opacity-0 before:transition-opacity checked:border-undefined checked:bg-bg_color_success hover:before:opacity-10 h-5 w-5"
              id="blue"
              type="checkbox"
              defaultChecked
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
        <span className="text-sm text-text_color_primary1 font-[400] leading-5">
          I have read and agree with
          <span className="underline text-sm bg-bg_text_brand_primary bg-clip-text text-transparent font-[400] leading-4 cursor-pointer">
            the terms of payment and withdrawal policy.
          </span>
        </span>
      </div>
      <div className="w-full sticky bottom-0 left-0 pb-2 app-bg pt-2">
        <button
          disabled={!isFormValid}
          className="relative overflow-hidden bg-bg_text_brand_primary w-full text-text_color_primary2 h-10 text-base shadow-lg rounded-md font-[900] leading-4 disabled:opacity-70 flex gap-x-1 items-center justify-center text-primary"
          type="submit"
        >
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default NewAccount;
