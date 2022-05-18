import React from "react";
import NavigationList from "../../components/navigation-list/NavigationList";
import ButtonNavigationFilter from "../../components/button-navigation-filter/ButtonNavigationFilter";

const quickLinksNavigationData = {
  title: "Quick Links",
  isNew: false,
  games: [
    {
      icon: "https://sports.tipico.de/images/recommended.d716084b9e5d253141313477d6423345.png",
      name: "Recommended",
    },
    {
      icon: "https://sports.tipico.de/images/today.a77d563b914a9636a446b158aa25ccf4.svg",
      name: "Today's Matches",
    },
    {
      icon: "https://sports.tipico.de/images/de.2bb0a9a4600d9104e2c4eef21f23051a.svg",
      name: "German Football",
    },
    {
      icon: "https://sports.tipico.de/images/european-football.a9da3884565da3dae364a6941ac05a7b.svg",
      name: "European Football",
    },
  ],
};
const topCompetitions = {
  title: "Top Competitions",
  isNew: true,
  games: [
    {
      icon: "https://sports.tipico.de/images/soccer.ea0962a1c4c3fa7ae9d88d94f58e0eb9.png",
      name: "Premier League",
    },
    {
      icon: "https://sports.tipico.de/images/soccer.ea0962a1c4c3fa7ae9d88d94f58e0eb9.png",
      name: "Primera Division, Apertura",
    },
    {
      icon: "https://sports.tipico.de/images/europaLeague.3d86061be5995f934a145aa9146d1a6e.png",
      name: "Europa League",
    },
    {
      icon: "https://sports.tipico.de/images/soccer.ea0962a1c4c3fa7ae9d88d94f58e0eb9.png",
      name: "Campeonato Brasileiro, Serie A1, Women",
    },
    {
      icon: "https://sports.tipico.de/images/soccer.ea0962a1c4c3fa7ae9d88d94f58e0eb9.png",
      name: "Brasileiro Serie B",
    },
  ],
};
const topSports = {
  title: "Top Sports",
  isNew: false,
  games: [
    {
      icon: "https://sports.tipico.de/images/soccer.ea0962a1c4c3fa7ae9d88d94f58e0eb9.png",
      name: "Football",
    },
    {
      icon: "https://sports.tipico.de/images/handball.637a58514a077d5b543e8fc664c39702.png",
      name: "Handball",
    },
    {
      icon: "https://sports.tipico.de/images/basketball.31e04eddb02f9ed8a91c2fed355336d9.png",
      name: "Basketball",
    },
    {
      icon: "https://sports.tipico.de/images/ice-hockey.75f44519d15cc41a4225e1f21f7af291.png",
      name: "Ice Hockey",
    },
    {
      icon: "https://sports.tipico.de/images/baseball.ec3ebc5d071328b9983b422a75a52832.png",
      name: "Baseball",
    },
  ],
};

const filter = [
  { title: "All", isActive: true },
  { title: "Today", isActive: false },
  { title: "3 Hrs", isActive: false },
  { title: "48 Hrs", isActive: false },
];

const NavigationLeft = () => {
  return (
    <div className="max-width-screen flex-col flex-grow-0 flex-full ">
      <NavigationList navigationData={quickLinksNavigationData} />
      <NavigationList navigationData={topCompetitions} />
      <ButtonNavigationFilter filter={filter} />
      <NavigationList navigationData={topSports} />
    </div>
  );
};

export default NavigationLeft;
