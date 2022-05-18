import React from "react";

const BetSelect = () => {
  return (
    <div
      className="
    bg-skin-grey-not-so-light 
    sticky top-14 
    overflow-hidden 
    z-10 
    grid 
    grid-event 
    grid-flow-col 
    items-center
    pt-3
    grid-end 
    "
    >
      <div className="min-widh--before-select"></div>
      <div>
        <select className="bit-select  ">
          <option>3-Way</option>
          <option>Handicap</option>
          <option>Both Teams to Score</option>
          <option>Halftime-Over/Under</option>
          <option>Double chance</option>
          <option>Draw no bet</option>
          <option>Which team will score first?</option>
        </select>
      </div>
      <div>
        <select className="bit-select">
          <option>Handicap</option>
          <option>3-Way</option>
          <option>Both Teams to Score</option>
          <option>Halftime-Over/Under</option>
          <option>Double chance</option>
          <option>Draw no bet</option>
          <option>Which team will score first?</option>
        </select>
      </div>
      <div>
        <select className="bit-select">
          <option>Both Teams to Score</option>
          <option>3-Way</option>
          <option>Handicap</option>
          <option>Halftime-Over/Under</option>
          <option>Double chance</option>
          <option>Draw no bet</option>
          <option>Which team will score first?</option>
        </select>
      </div>
      <div>
        <select className="bit-select">
          <option>Halftime-Over/Under</option>
          <option>3-Way</option>
          <option>Handicap</option>
          <option>Both Teams to Score</option>
          <option>Double chance</option>
          <option>Draw no bet</option>
          <option>Which team will score first?</option>
        </select>
      </div>
      <div>
        <select className="bit-select">
          <option>Draw no bet</option>
          <option>3-Way</option>
          <option>Handicap</option>
          <option>Both Teams to Score</option>
          <option>Halftime-Over/Under</option>
          <option>Double chance</option>
          <option>Which team will score first?</option>
        </select>
      </div>
      <div></div>
    </div>
  );
};

export default BetSelect;
