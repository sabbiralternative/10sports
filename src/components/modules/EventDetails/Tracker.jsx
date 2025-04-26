const Tracker = ({ score }) => {
  return (
    <>
      <div className=" col-span-1 ">
        <div className=" relative w-full h-auto overflow-hidden bg-transparent ">
          <div
            draggable="false"
            className="
                      w-full flex items-center justify-center overflow-y-auto bg-transparent relative z-10 transition-all ease-in-out duration-100"
          >
            {score && score?.tracker !== null && (
              <div className="w-full overflow-hidden h-[125px]">
                <iframe
                  id="videoComponent"
                  className="w-full h-auto relative overflow-hidden   bg-transparent"
                  src={score?.tracker}
                  width="100%"
                  allowfullscreen=""
                ></iframe>
              </div>
            )}
          </div>
          {/* <div className=" absolute top-0 w-full max-h-[309px] sm:max-h-[144px] lg:max-h-[309px]  overflow-hidden h-[55vw] md:h-[58vw] bg-transparent z-0"></div> */}
        </div>
      </div>
    </>
  );
};

export default Tracker;
