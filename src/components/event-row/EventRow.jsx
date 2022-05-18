import React from "react";
import BetButton from "../bet-button/BetButton";
import downloadIcon from "../../assets/Navigation-icons/download.svg";
import rightArrow from "../../assets/Navigation-icons/rightarrow.svg";
import iconTitle from "../../assets/Navigation-icons/icon title.svg";
const EventRowHead = () => {
  return (
    <div className="text-skin-grey-ash leading-6 grid-event grid grid-flow-col items-center  bg-skin-grey-not-so-light border-b">
      <div>
        <p className="text-size-11 pl-2 text-skin-base font-semibold flex gap-2">
          Europa League / Final Round{" "}
          <span>
            <img src={iconTitle} alt="" />
          </span>
        </p>
      </div>
      <div className="flex items-center justify-center gap-10 text-sm">
        <span>1</span>
        <span>X</span>
        <span>2</span>
      </div>
      <div className="flex items-center justify-center gap-10 text-sm">
        <span>+</span>
        <span>-</span>
      </div>
      <div className="flex items-center justify-center gap-10 text-sm">
        <span>1</span>
        <span>x</span>
        <span>2</span>
      </div>
      <div className="flex items-center justify-center gap-10 text-sm">
        <span>J</span>
        <span>N</span>
      </div>
      <div className="flex items-center justify-center gap-10 text-sm">
        <span>+</span>
        <span>-</span>
      </div>
      <dir></dir>
    </div>
  );
};

const EventRowGame = () => {
  return (
    <div className="grid grid-flow-col grid-event  bg-white border-b-grey-pale py-1">
      <div className="flex items-center gap-9">
        <div className="text-size-13 pl-2">
          <p>Today</p>
          <p>20:00</p>
        </div>
        <div className="text-size-15 ">
          <p>Eintracht Frankfurt</p>
          <p>Rangers FC</p>
        </div>
      </div>
      <div className="flex items-center gap-1 pl-1">
        <BetButton value={2.35} />
        <BetButton value={3.35} />
        <BetButton value={1.31} />
      </div>
      <div className="flex items-center gap-1 pl-1">
        <span className="text-xs">2.5</span>
        <BetButton value={3.35} />
        <BetButton value={1.31} />
      </div>
      <div className="flex items-center gap-1 pl-1">
        <span className="text-xs">0.1</span>
        <BetButton value={2.35} />
        <BetButton value={3.35} />
        <BetButton value={1.31} />
      </div>
      <div className="flex items-center gap-1 pl-1">
        <BetButton value={3.35} />
        <BetButton value={1.31} />
      </div>
      <div className="flex items-center gap-1 pl-1">
        <span className="text-xs">0.1</span>
        <BetButton value={2.35} />
        <BetButton value={3.35} />
        <BetButton value={1.31} />
      </div>
      <div className="flex items-center gap-1 pl-1 ">
        <img src={downloadIcon} alt="" />
        <div className="flex items-center">
          <p className="text-size-13">150</p>
          <img src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};
const EventRow = () => {
  return (
    <div>
      <EventRowHead />
      <EventRowGame />
    </div>
  );
};

export default EventRow;
