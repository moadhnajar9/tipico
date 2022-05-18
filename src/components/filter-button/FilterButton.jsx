import React from "react";

const FilterButton = ({ title, isActive }) => {
  return (
    <button
      className={`flex-1 button--filter ${
        isActive ? "button--filter--active tab-button--active" : ""
      }`}
    >
      {title}
    </button>
  );
};

export default FilterButton;
