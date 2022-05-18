import React from "react";
import FilterButton from "../filter-button/FilterButton";

const ButtonNavigationFilter = ({ filter }) => {
  return (
    <div className="flex gap-2 mb-3">
      {filter.map((item, index) => (
        <FilterButton title={item.title} isActive={item.isActive} key={index} />
      ))}
    </div>
  );
};

export default ButtonNavigationFilter;
