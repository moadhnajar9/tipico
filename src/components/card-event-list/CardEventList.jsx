import React from "react";
import Card from "../card/Card";
const EventData = [
  {
    icon: "https://sports.tipico.de/images/soccer.ea0962a1c4c3fa7ae9d88d94f58e0eb9.png",
    country: "England",
    league: "Premier League",
    date: "Today",
    time: "19:45",
    homeTeam: { name: "Southampton FC", score: "0" },
    exteriorTeam: { name: "Liverpool FC", score: "0" },
    betCategory: "Over/Under rest of the game",
    bet: [
      { coefficient: "1", value: "8.00", colorStatus: "", blocked: false },
      { coefficient: "X", value: "5.50", colorStatus: "", blocked: false },
      { coefficient: "2", value: "1.33", colorStatus: "", blocked: false },
    ],
  },
  {
    icon: "https://sports.tipico.de/images/soccer.ea0962a1c4c3fa7ae9d88d94f58e0eb9.png",
    country: "Australia",
    league: "A-league Playoffs",
    date: "Live",
    time: "74'",
    homeTeam: { name: "Kingborough Lions", score: "0" },
    exteriorTeam: { name: "EventTeams-styles-team-title", score: "0" },
    betCategory: "Over/Under rest of the game",
    bet: [
      { coefficient: "+", value: "1.80", colorStatus: "red", blocked: false },
      { coefficient: "-", value: "1.35", colorStatus: "green", blocked: false },
    ],
  },
  {
    icon: "https://sports.tipico.de/images/soccer.ea0962a1c4c3fa7ae9d88d94f58e0eb9.png",
    country: "Australia",
    league: "A-league Playoffs",
    date: "Live",
    time: "74'",
    homeTeam: { name: "Kingborough Lions", score: "0" },
    exteriorTeam: { name: "EventTeams-styles-team-title", score: "0" },
    betCategory: "Over/Under rest of the game",
    bet: [
      { coefficient: "+", value: "1.80", colorStatus: "", blocked: true },
      { coefficient: "-", value: "1.35", colorStatus: "", blocked: true },
    ],
  },
];

const CardEventList = () => {
  return (
    <div
      className="flex 
    bg-white 
    rounded-md 
    box-shadow--cardEventList
    p-5
    items-center
    overflow-hidden
    relative
    "
    >
      <div className="w-56 flex">
        <img
          src="https://sports.tipico.de/images/EventCards_Promo_EN.55c4ed1236865b4c0bd1718ce600b354.jpg"
          alt=""
        />
      </div>
      <div className="flex">
        <div className="w-px basis-auto flex-grow-0 flex-shrink-0 bg-skin-grey-iron mx-5 h-32"></div>
      </div>

      <div className="flex">
        {EventData.map((item) => (
          <Card EventDataItem={item} />
        ))}
      </div>
      <div className="cardEvent__arrow-style right-8 flex items-center justify-center z-10 cursor-pointer bg-white ">
        <img
          src="https://sports.tipico.de/images/scroll-arrow-right.73a29e44cac452eb7ee113a4e3b624de.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CardEventList;
