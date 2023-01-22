import classNames from "classnames";

const StrengthBar = ({ strength }) => {
  return (
    <div className="mt-5 flex items-center justify-between bg-[#191820] px-7 py-6">
      <div className="select-none">STRENGTH</div>
      <div className="flex gap-4">
        <div className="text-2xl text-[#e7e6eb]">{strength}</div>
        <div className="flex gap-1">
          <div
            className={classNames({
              "h-7 w-[10px] border-2 border-[#e7e6eb] transition-all duration-500": true,
              "h-7 w-[10px] border-2 border-[#f74b4b] bg-[#f74b4b]": strength === "TOO WEAK !",
              "h-7 w-[10px] border-2 border-[#fb7a56] bg-[#fb7a56]": strength === "WEAK",
              "h-7 w-[10px] border-2 border-[#f8cb63] bg-[#f8cb63]": strength === "MEDIUM",
              "h-7 w-[10px] border-2 !border-[#a3ffae] !bg-[#a3ffae]": strength === "STRONG",
            })}
          ></div>
          <div
            className={classNames({
              "h-7 w-[10px] border-2 border-[#e7e6eb] transition-all duration-500": true,
              "h-7 w-[10px] border-2 border-[#fb7a56] bg-[#fb7a56]": strength === "WEAK",
              "h-7 w-[10px] border-2 border-[#f8cb63] bg-[#f8cb63]": strength === "MEDIUM",
              "h-7 w-[10px] border-2 !border-[#a3ffae] !bg-[#a3ffae]": strength === "STRONG",
            })}
          ></div>
          <div
            className={classNames({
              "h-7 w-[10px] border-2 border-[#e7e6eb] transition-all duration-500": true,
              "h-7 w-[10px] border-2 border-[#f8cb63] bg-[#f8cb63]": strength === "MEDIUM",
              "h-7 w-[10px] border-2 !border-[#a3ffae] !bg-[#a3ffae]": strength === "STRONG",
            })}
          ></div>
          <div
            className={classNames({
              "h-7 w-[10px] border-2 border-[#e7e6eb] transition-all duration-500": true,
              "h-7 w-[10px] border-2 !border-[#a3ffae] !bg-[#a3ffae]": strength === "STRONG",
            })}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StrengthBar;
