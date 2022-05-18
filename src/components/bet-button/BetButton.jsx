import React from "react";

const BetButton = ({
  coefficient = "",
  value,
  colorStatus = "",
  blocked = false,
}) => {
  const [isActive, setIsActive] = React.useState(false);

  const [isBlocked, setIsBlocked] = React.useState(blocked);
  const [status, setStatus] = React.useState(colorStatus);

  const handleButtonClick = () => {
    setStatus("");
    setIsActive((prevState) => !prevState);
  };

  return (
    <>
      {isBlocked ? (
        <div
          className="
      
        flex  
        flex-1 
        justify-center 
        bet__Button 
        select-none 
        cursor-default 
        bg-skin-black-haze"
        >
          <div>
            <img
              className="py-2  "
              src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='15'%3E%3Cg fill='none' fill-rule='evenodd' transform='translate(0 1)'%3E%3Crect width='11' height='9' y='5' fill='%23BBB' rx='1'/%3E%3Cpath stroke='%23BBB' stroke-width='1.5' d='M3 6.106c-.017 0 4.543.003 5 0v-3.66C8 1.094 6.88 0 5.5 0S3 1.095 3 2.445v3.66z'/%3E%3C/g%3E%3C/svg%3E"
              alt=""
            />
          </div>
        </div>
      ) : (
        <div
          onClick={handleButtonClick}
          className={`
          
      bet__Button 
      select-none 
      relative 
      justify-center
      ${isActive ? "text-white bg-skin-blue-dark border-blue-dark" : ""}
      ${
        status !== "" ? (status === "red" ? "red-status" : "green-status") : ""
      }`}
        >
          <div
            className={` h-8 leading-none flex justify-center items-center  p-2`}
          >
            {coefficient && (
              <span
                className={`text-sm font-normal mr-3 ${
                  isActive ? "text-white" : "text-skin-grey-light "
                }`}
              >
                {coefficient}
              </span>
            )}
            <p>{value}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BetButton;
