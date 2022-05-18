import React from "react";

const NavigationList = ({ navigationData }) => {
  return (
    <div className="flex justify-between flex-col gap-1 mb-3">
      <div className="flex items-center">
        <h3 className="text-skin-grey-ash px-1 pb-1 text-xs">
          {navigationData.title}
        </h3>
        {navigationData.isNew && (
          <span className="bg-skin-base text-white New uppercase mb-1">
            New
          </span>
        )}
      </div>
      <div>
        {navigationData.games.map((item, index) => (
          <a
            className="flex navigation--match--list hover:bg-white "
            href={`#${item.name}`}
            key={index}
          >
            <img
              className="w-5 h-5 mr-4"
              src={item.icon}
              alt={`${item.name}`}
            />
            <span className="truncate">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavigationList;
