import { useNavigate } from "react-router-dom";
import { useEditButtonValuesMutation } from "../../redux/features/events/events";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const StakeSetting = () => {
  const [editButtonValue] = useEditButtonValuesMutation();
  const navigate = useNavigate();
  const stakes = JSON.parse(localStorage.getItem("buttonValue"));
  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      buttonGameValues: stakes,
    },
  });

  const buttonGameValues = watch("buttonGameValues");

  const onSubmit = async () => {
    const payload = {
      game: buttonGameValues?.map((btn) => ({
        label: parseFloat(btn?.value),
        value: parseFloat(btn?.value),
      })),
    };

    const res = await editButtonValue(payload).unwrap();
    if (res.success) {
      toast.success(res?.result?.message);
      localStorage.removeItem("buttonValue");
      const gameButtonsValues = buttonGameValues;
      localStorage.setItem("buttonValue", JSON.stringify(gameButtonsValues));
      navigate("/");
    }
  };
  return (
    <div
      className="w-full h-full
    lg:w-[54%] lg:pt-2"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full flex flex-col items-center justify-start gap-y-2 px-2">
          <div className="p-2 w-full space-y-2  mt-[14px] md:mt-[0px] rounded-lg bg-bg_color_primary shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
            <div className=" w-full space-y-2">
              <span className="text-base text-text_color_primary1  font-lato font-semibold px-2">
                Stakes
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {stakes?.map((_, idx) => {
                return (
                  <div key={idx} className=" bg-bg_color_input_bg">
                    <input
                      {...register(`buttonGameValues.${idx}.value`)}
                      className=" w-full rounded h-10 px-3 bg-bg_color_input_bg flex justify-center items-center text-base text-text_color_primary1 font-lato  border border-border_color_primary focus:border-[var(--bg-active-primary)] shadow-sm"
                    />
                  </div>
                );
              })}
            </div>
            <div className=" w-full flex items-center justify-center">
              <button
                type="submit"
                className="flex items-center justify-center gap-1 p-2 bg-[var(--bg-active-primary)] mt-2 w-full sm:max-w-[350px] rounded font-semibold text-text_color_primary2 disabled:opacity-80 text-primary"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StakeSetting;
