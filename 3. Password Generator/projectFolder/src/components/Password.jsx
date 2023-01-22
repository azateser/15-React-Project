import React from "react";

const Password = ({password, copyButton}) => {
  return (
    <div className="flex items-center justify-between bg-[#23222a] p-4 text-3xl text-[#807c92]">
      <div>{password}</div>
      <div onClick={copyButton} className="cursor-pointer transition-all duration-500 hover:scale-125">
        <img src="./assets/copy.svg" alt="" />
      </div>
    </div>
  );
};

export default Password;
