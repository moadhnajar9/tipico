import React from "react";
const SportTabs = ({ tabs }) => {
  return (
    <div className="Sport-tabs__box-shadow flex h-12 bg-white overflow-hidden  ">
      {tabs.map((item, index) => (
        <div
          key={index}
          className={`leading-snug font-semibold  text-sm px-5 h-full flex items-center ${
            item.isActive ? "tab-button--active" : ""
          }`}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default SportTabs;
