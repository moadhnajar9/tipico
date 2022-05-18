import React from "react";

const BetSelected = () => {
  return (
    <div className="bg-white py-6 aside--box-shadow  ">
      <img
        className="icon--selected mb-9"
        src="https://sports.tipico.de/images/empty-betslip.699e9937f49e513f2fdc6a91f522cc4e.svg"
        alt=""
      />
      <div className="text-size-14 text-skin-grey-ash">
        <p className="text-center">Your betslip is empty.</p>
        <p className="text-center">Start selecting some bets.</p>
      </div>
    </div>
  );
};
const Aside = () => {
  return (
    <div className="  w-full ">
      <div className="font-semibold flex items-center aside--box-shadow   bg-white ">
        <buton className=" flex-1 tab-button--active py-3">
          <div className="flex flex-col items-center ">
            <div className="text-2xl font-bold">0</div>
            <div className="text-xs">Betslip</div>
          </div>
        </buton>
        <buton className="flex-1">
          <div className="flex flex-col items-center ">
            <div className="text-2xl font-bold">0</div>
            <div className="text-xs">Open Bets</div>
          </div>
        </buton>
      </div>
      <BetSelected />
    </div>
  );
};

export default Aside;
