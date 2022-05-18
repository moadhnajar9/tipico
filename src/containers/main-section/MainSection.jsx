import React from "react";
import CardEventList from "../../components/card-event-list/CardEventList";
import Program from "../../components/program/Program";
const RecommendedProgram = {
  title: "Recommended",
  programFilter: [
    { title: "Football", isActive: true },
    { title: "Basketball", isActive: false },
    { title: "Tennis", isActive: false },
    { title: "Ice Hockey", isActive: false },
  ],
};

const MainSection = () => {
  return (
    <div className=" flex-grow-0 flex-full min-width--main-section">
      <CardEventList />
      <Program programData={RecommendedProgram} />
    </div>
  );
};

export default MainSection;
