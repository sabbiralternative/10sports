import { useForm } from "react-hook-form";
import { useChangePasswordMutation } from "../../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [handleChangePassword] = useChangePasswordMutation();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ password, newPassword, newPasswordConfirm }) => {
    const payload = {
      oldPassword: password,
      password: newPassword,
      passVerify: newPasswordConfirm,
    };

    const res = await handleChangePassword(payload).unwrap();
    if (res.success) {
      toast.success(res?.result?.message);
      navigate("/");
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };
  return (
    <div
      className="w-full h-full
     lg:w-[54%] lg:pt-2"
    >
      <div
        title="Change Password"
        className="p-2 space-y-2 mx-2 my-2 rounded-lg bg-bg_color_primary shadow"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2 font-lato">
            <div className="flex flex-col w-full">
              <div className="text-text_color_primary1 text-sm">
                Old Password{" "}
              </div>
              <div className=" relative undefined">
                <span className="px-2 absolute top-1/2 -translate-y-1/2 w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    height={16}
                    width={16}
                    fill="var(--bg-active-primary)"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z" />
                  </svg>
                </span>
                <input
                  {...register("password", { required: true })}
                  label="Old Password"
                  id="oldPassword"
                  placeholder="Old Password"
                  className=" rounded h-10 col-span-8 md:col-span-10 w-full bg-bg_color_input_bg placeholder:text-sm font-lato font-[400] text-text_color_primary1
                      pl-10
                      pr-8
                      ml-0
                      mr-0
                      "
                  autoComplete="off"
                  type={!showPassword ? "password" : "text"}
                />
                <span className="px-2 absolute top-1/2 -translate-y-1/2 right-0">
                  {!showPassword ? (
                    <button
                      onClick={() => setShowPassword((prev) => !prev)}
                      type="button"
                      className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out undefined 
           cursor-pointer
           "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        fill="var(--bg-active-primary)"
                        viewBox="0 0 512 512"
                        title="Hide Password"
                        className="cursor-pointer active:scale-95 transition-all duration-300 ml-1"
                      >
                        <title>Hide Password</title>
                        <path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z"></path>
                        <path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z"></path>
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowPassword((prev) => !prev)}
                      type="button"
                      className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out undefined 
           cursor-pointer
           "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={22}
                        width={22}
                        viewBox="0 0 512 512"
                        fill="var(--bg-active-primary)"
                      >
                        <title>Eye</title>
                        <path
                          d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                          fill="none"
                          stroke="var(--bg-active-primary)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                        />
                        <circle
                          cx={256}
                          cy={256}
                          r={80}
                          fill="none"
                          stroke="var(--bg-active-primary)"
                          strokeMiterlimit={10}
                          strokeWidth={32}
                        />
                      </svg>
                    </button>
                  )}
                </span>
              </div>
              <div className="text-text_color_error_message text-xs text-text_brand_primary">
                {" "}
              </div>
            </div>
            <div className=" relative">
              <div className="w-full h-full">
                <div className="flex flex-col w-full">
                  <div className="text-text_color_primary1 text-sm">
                    New Password{" "}
                  </div>
                  <div className=" relative undefined">
                    <span className="px-2 absolute top-1/2 -translate-y-1/2 w-max">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        height={16}
                        width={16}
                        fill="var(--bg-active-primary)"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z" />
                      </svg>
                    </span>
                    <input
                      {...register("newPassword", {
                        required: true,
                      })}
                      id="newPassword"
                      label="New Password"
                      className=" rounded h-10 col-span-8 md:col-span-10  bg-bg_color_input_bg w-full placeholder:text-sm font-lato font-[400] text-text_color_primary1
                            pl-10
                            pr-8
                            ml-0
                            mr-0
                            "
                      placeholder="New Password"
                      autoComplete="off"
                      type={!showNewPass ? "password" : "text"}
                    />
                    <span className="px-2 absolute top-1/2 -translate-y-1/2 right-0">
                      {!showNewPass ? (
                        <button
                          onClick={() => setShowNewPass((prev) => !prev)}
                          type="button"
                          className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out undefined 
           cursor-pointer
           "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            fill="var(--bg-active-primary)"
                            viewBox="0 0 512 512"
                            title="Hide Password"
                            className="cursor-pointer active:scale-95 transition-all duration-300 ml-1"
                          >
                            <title>Hide Password</title>
                            <path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z"></path>
                            <path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z"></path>
                          </svg>
                        </button>
                      ) : (
                        <button
                          onClick={() => setShowNewPass((prev) => !prev)}
                          type="button"
                          className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out undefined 
           cursor-pointer
           "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={22}
                            width={22}
                            viewBox="0 0 512 512"
                            fill="var(--bg-active-primary)"
                          >
                            <title>Eye</title>
                            <path
                              d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                              fill="none"
                              stroke="var(--bg-active-primary)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={32}
                            />
                            <circle
                              cx={256}
                              cy={256}
                              r={80}
                              fill="none"
                              stroke="var(--bg-active-primary)"
                              strokeMiterlimit={10}
                              strokeWidth={32}
                            />
                          </svg>
                        </button>
                      )}
                    </span>
                  </div>
                  <div className="text-text_color_error_message text-text_brand_primary" />
                </div>
              </div>
            </div>
            <div>
              <div className="w-full h-full">
                <div className="flex flex-col w-full">
                  <div className="text-text_color_primary1 text-sm">
                    Confirm Password{" "}
                  </div>
                  <div className=" relative undefined">
                    <span className="px-2 absolute top-1/2 -translate-y-1/2 w-max">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        height={16}
                        width={16}
                        fill="var(--bg-active-primary)"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z" />
                      </svg>
                    </span>
                    <input
                      {...register("newPasswordConfirm", {
                        required: true,
                      })}
                      autoComplete="new-password"
                      label="Confirm Password"
                      placeholder="Confirm Password"
                      className=" rounded h-10 col-span-8 md:col-span-10 w-full bg-bg_color_input_bg placeholder:text-sm font-lato font-[400] text-text_color_primary1
                            pl-10
                            pr-8
                            ml-0
                            mr-0
                            "
                      type={!showConfirmPass ? "password" : "text"}
                    />
                    <span className="px-2 absolute top-1/2 -translate-y-1/2 right-0">
                      {!showConfirmPass ? (
                        <button
                          onClick={() => setShowConfirmPass((prev) => !prev)}
                          type="button"
                          className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out undefined 
           cursor-pointer
           "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            fill="var(--bg-active-primary)"
                            viewBox="0 0 512 512"
                            title="Hide Password"
                            className="cursor-pointer active:scale-95 transition-all duration-300 ml-1"
                          >
                            <title>Hide Password</title>
                            <path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z"></path>
                            <path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z"></path>
                          </svg>
                        </button>
                      ) : (
                        <button
                          onClick={() => setShowConfirmPass((prev) => !prev)}
                          type="button"
                          className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out undefined 
           cursor-pointer
           "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={22}
                            width={22}
                            viewBox="0 0 512 512"
                            fill="var(--bg-active-primary)"
                          >
                            <title>Eye</title>
                            <path
                              d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                              fill="none"
                              stroke="var(--bg-active-primary)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={32}
                            />
                            <circle
                              cx={256}
                              cy={256}
                              r={80}
                              fill="none"
                              stroke="var(--bg-active-primary)"
                              strokeMiterlimit={10}
                              strokeWidth={32}
                            />
                          </svg>
                        </button>
                      )}
                    </span>
                  </div>
                  <div className="text-text_color_error_message text-xs text-text_brand_primary" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-2 w-full gap-x-2">
              <button
                onClick={() => navigate(-1)}
                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out max-w-[180px] p-2 bg-bg_color_primary mt-2 w-full rounded-lg font-semibold bg-clip-text text-transparent bg-bg_text_brand_primary border border-[var(--bg-active-primary)] 
                cursor-pointer
                "
                type="button"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out max-w-[180px] cursor-pointer disabled:cursor-not-allowed p-2 bg-bg_text_brand_primary mt-2 w-full rounded-lg font-semibold text-text_color_primary2  disabled:opacity-40 flex  items-center justify-center 
                cursor-pointer text-primary
                "
              >
                <span>Save</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
