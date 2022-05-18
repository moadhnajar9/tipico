import React from "react";
import ProgramTitle from "../program-title/ProgramTitle";
import SportTabs from "../sport-tabs/SportTabs";
import BetSelect from "../bet-select/BetSelect";
import EventRow from "../event-row/EventRow";
const Program = ({ programData }) => {
  return (
    <div>
      <ProgramTitle title={programData.title} />
      <SportTabs tabs={programData.programFilter} />
      <BetSelect />
      <EventRow />
      <EventRow />
      <EventRow />
      <EventRow />
    </div>
  );
};

export default Program;
