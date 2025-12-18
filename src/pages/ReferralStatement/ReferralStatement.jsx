/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { DatePicker } from "rsuite";
import "rsuite/DateRangePicker/styles/index.css";
import useGetReferralStatement from "../../hooks/useGetReferralStatement";

const ReferralStatement = () => {
  const [fetchData, setFetchData] = useState(false);
  const [startDate, setStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 7))
  );
  const [endDate, setEndDate] = useState(new Date());
  const { data } = useGetReferralStatement(
    startDate,
    endDate,
    fetchData,
    setFetchData
  );

  return (
    <div className="w-full h-full mb-10 nw-affi-how-to-get-bonus">
      <p style={{ color: "var(--bg-active-primary)" }}>Referral Date</p>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <div>
          <p
            style={{
              marginBottom: "2px",
              marginLeft: "4px",
              fontSize: "12px",
              color: "white",
            }}
          >
            From Date
          </p>
          <DatePicker
            onChange={(date) => setStartDate(date)}
            defaultValue={startDate}
          />
        </div>
        <div>
          <p
            style={{
              marginBottom: "2px",
              marginLeft: "4px",
              fontSize: "12px",
              color: "white",
            }}
          >
            To Date
          </p>
          <DatePicker
            onChange={(date) => setEndDate(date)}
            defaultValue={endDate}
          />
        </div>

        <button
          className="text-primary"
          onClick={() => setFetchData(true)}
          style={{
            backgroundColor: "var(--bg-active-primary)",
            border: "none",
            padding: "10px 20px",

            borderRadius: "4px",
            cursor: "pointer",
            height: "34px",
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Submit
        </button>
      </div>
      {data && (
        <div style={{ marginTop: "10px" }}>
          <div
            style={{
              backgroundColor: "#d5d5d5",
              color: "#000",
              borderRadius: "10px",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <div>
              <ul>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    fontSize: "11px",
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      flex: 1,
                    }}
                  >
                    Total Clients <span>{data?.total_clients}</span>
                  </p>
                  <p
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      flex: 1,
                    }}
                  >
                    Total Deposit <span>{data?.total_deposit}</span>
                  </p>
                  <p
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      width: "100%",
                      flex: 1,
                    }}
                  >
                    <span>Total Withdraw</span>
                    <span style={{ marginRight: "70px" }}>
                      {data?.total_withdraw}
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferralStatement;
