import React from "react";
import BetButton from "../bet-button/BetButton";

const Card = ({ EventDataItem }) => {
  return (
    <div className="flex justify-between">
      <div>
        <div className="card-size flex flex-col justify-between">
          <div className="flex justify-between items-center ">
            <div className="flex items-end gap-1 text-size-11 ">
              <img className="w-4 h-4" src={EventDataItem.icon} alt="icon" />
              <div>{EventDataItem.country}/</div>
              <div>{EventDataItem.league}</div>
            </div>

            <div className="text-size-11 uppercase font-semibold">
              <span
                className={` ${
                  EventDataItem.date === "live" ? "text-skin-red" : ""
                }`}
              >
                {EventDataItem.date}
              </span>
              <span className="ml-1">{EventDataItem.time}</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 mt-4/">
            <div className="flex justify-between text-sm">
              <p>{EventDataItem.homeTeam.name}</p>
              <p>{EventDataItem.homeTeam.score}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>{EventDataItem.exteriorTeam.name}</p>
              <p>{EventDataItem.exteriorTeam.score}</p>
            </div>
          </div>
          <div className="mt-4/">
            <p className="text-size-11 text-center text-skin-grey-dark">
              {EventDataItem.betCategory}
            </p>
            <div className="flex gap-1">
              {EventDataItem.bet.map((item, index) => (
                <BetButton
                  coefficient={item.coefficient}
                  value={item.value}
                  colorStatus={item.colorStatus}
                  blocked={item.blocked}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-px basis-auto flex-grow-0 flex-shrink-0 bg-skin-grey-iron mx-5"></div>
    </div>
  );
};

export default Card;
