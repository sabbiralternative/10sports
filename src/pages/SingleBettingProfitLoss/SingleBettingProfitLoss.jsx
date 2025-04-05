import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSingleProfitLoss } from "../../hooks/settledBets";

const SingleBettingProfitLoss = () => {
  const [backTotal, setBackTotal] = useState(0);
  const [layTotal, setLayTotal] = useState(0);
  const { marketId } = useParams();
  const { data } = useSingleProfitLoss(marketId);

  useEffect(() => {
    if (data?.result?.length > 0) {
      const back = data?.result?.filter((item) => item?.betType === "Back");
      let backTotal = 0;
      for (const item of back) {
        backTotal = backTotal + item.win;
      }
      const lay = data?.result?.filter((item) => item?.betType === "Lay");
      let layTotal = 0;
      for (const item of lay) {
        layTotal = layTotal + item.win;
      }

      setBackTotal(backTotal);
      setLayTotal(layTotal);
    }
  }, [data]);

  let total = 0;
  if (data?.result) {
    for (const item of data.result) {
      total = total + item.win;
    }
  }

  return (
    <div className="w-full h-full flex flex-col gap-2 p-2 text-text_color_primary1 font-manrope-regular text-sm">
      <div className="flex flex-col bg-bg_color_primary rounded-md overflow-hidden shadow-lg">
        <div className="bg-bg_text_brand_primary py-2 px-4 text-text_color_primary2 font-semibold">
          {data?.result?.[0]?.eventName}
        </div>
        <div className="flex flex-col divide-y">
          {data?.result?.map((item) => {
            return (
              <div
                key={item?.betId}
                className="w-full overflow-hidden flex flex-col gap-2 text-text_color_primary1"
              >
                <div className="flex px-4 pt-2 justify-between">
                  <span>Selection</span>
                  <span className="capitalize text-end"> {item?.nation}</span>
                </div>
                <div className="flex px-4 justify-between gap-x-2">
                  <span>Competition Name</span>
                  <span className="capitalize text-end max-w-[60%]">
                    {item?.eventName}
                  </span>
                </div>
                <div className="flex px-4 justify-between">
                  <span>Market Name</span>
                  <span className="capitalize"> {item?.marketName}</span>
                </div>
                <div className="flex px-4 py-2 border mx-4 rounded justify-between bg-bg_color_accountStatementBg2">
                  <div>
                    P&amp;L:
                    <span
                      className={`font-semibold  ${
                        item?.win > 0
                          ? "text-text_color_success"
                          : "text-text_color_danger"
                      }`}
                    >
                      ₹ {item?.win}
                    </span>
                  </div>
                  <div>
                    <span
                      className={`font-semibold capitalize ${
                        item?.win > 0
                          ? "text-text_color_success"
                          : "text-text_color_danger"
                      }`}
                    >
                      ${item?.win > 0 ? "win" : "lost"}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between px-4 text-text_color_primary1">
                  <div>Bet ID</div>
                  <div>{item?.betId}</div>
                </div>
                <div className="flex justify-between px-4 text-text_color_primary1">
                  <div>Placed Date</div>
                  <div>{item?.placeDates}</div>
                </div>
                <div className="px-4 py-4 text-center text-sm text-text_color_primary1">
                  <div className="overflow-hidden rounded-lg border">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-bg_color_tertiary1 text-text_color_primary1">
                          <th className="border-r px-3 py-1 first:rounded-tl-lg last:rounded-tr-lg">
                            Type
                          </th>
                          <th className="border-r px-3 py-1">Odds</th>
                          <th className="border-b px-3 py-1 first:rounded-tr-lg">
                            Stake
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-r border-t px-3 py-1">
                            {item?.betType}
                          </td>
                          <td className="border border-b-0 px-3 py-1">
                            {item?.userRate}
                          </td>
                          <td className="px-3 py-1">{item?.amount}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-bg_color_primary py-2 px-4 rounded-md flex flex-col gap-2 shadow-lg">
        <div className="flex justify-between border-dashed border-border_color_primary text-text_color_primary1">
          <div>Back Subtotal</div>
          <div
            className={`font-bold ${
              backTotal > 0
                ? "text-text_color_success"
                : "text-text_color_danger"
            }`}
          >
            ₹ {backTotal}
          </div>
        </div>
        <div className="flex justify-between border-dashed border-border_color_primary text-text_color_primary1">
          <div>Lay subtotal</div>
          <div
            className={`font-bold ${
              layTotal > 0
                ? "text-text_color_success"
                : "text-text_color_danger"
            }`}
          >
            ₹ {layTotal}
          </div>
        </div>
        <div className="flex justify-between border-dashed border-border_color_primary text-text_color_primary1">
          <div>Market Subtotal</div>
          <div
            className={`font-bold ${
              layTotal + backTotal > 0
                ? "text-text_color_success"
                : "text-text_color_danger"
            }`}
          >
            ₹ {layTotal + backTotal}
          </div>
        </div>
        <div className="flex justify-between border-dashed border-border_color_primary text-text_color_primary1">
          <div>Commission</div>
          <div className="font-bold">₹ 0.0</div>
        </div>
        <div className="flex justify-between border-t border-dashed border-border_color_primary text-text_color_primary1">
          <div className="relative top-[3px]">Net Market Total</div>
          <div
            className={`font-bold relative top-[3px] ${
              layTotal + backTotal > 0
                ? "text-text_color_success"
                : "text-text_color_danger"
            }`}
          >
            ₹ {layTotal + backTotal}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBettingProfitLoss;
