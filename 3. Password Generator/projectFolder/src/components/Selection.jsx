import StrengthBar from "./StrengthBar";

const Selection = ({ passwordRange, handlePasswordRange, handleUpperCase, handleLowerCase, handleNumbers, handleSymbols, strength, generatePassword }) => {
  return (
    <div className="bg-[#23222a] p-4 text-[#807c92]">
      <div>
        <div className="flex items-center justify-between">
          <div className="text-[#e7e6eb]">Character Length</div>
          <div className="text-3xl text-[#a3ffae]">{passwordRange}</div>
        </div>
        <div>
          <input type="range" min="1" max="20" value={passwordRange} onChange={handlePasswordRange} />
        </div>
      </div>
      <div className="flex flex-col gap-5 text-[17px] font-semibold text-[#e7e6eb]">
        <div className="flex items-center gap-3">
          <div onClick={handleUpperCase}>
            <input type="checkbox" name="" id="uppercasen" defaultChecked />
          </div>
          <label className="cursor-pointer select-none" htmlFor="uppercasen">
            Include Uppercase Letters
          </label>
        </div>
        <div className="flex items-center gap-3">
          <div onClick={handleLowerCase}>
            <input type="checkbox" name="" id="lowercase" />
          </div>
          <label className="cursor-pointer select-none" htmlFor="lowercase">
            Include Lowercase Letters
          </label>
        </div>
        <div className="flex items-center gap-3">
          <div onClick={handleNumbers}>
            <input type="checkbox" name="" id="numbers" />
          </div>
          <label className="cursor-pointer select-none" htmlFor="numbers">
            Include Numbers
          </label>
        </div>
        <div className="flex items-center gap-3">
          <div onClick={handleSymbols}>
            <input type="checkbox" name="" id="symbols" />
          </div>
          <label className="cursor-pointer select-none" htmlFor="symbols">
            Include Symbols
          </label>
        </div>
      </div>
      <StrengthBar strength={strength} />
      <div onClick={generatePassword} className="group mt-5 flex cursor-pointer select-none items-center justify-center gap-4 border border-[#a3ffae] bg-[#a3ffae] p-5 text-center font-bold tracking-wider text-[#000000] transition-all duration-500 hover:bg-[#23222a] hover:text-[#a3ffae]">
        <div>GENERATE</div>
        <div>
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path className="transition-all duration-500 group-hover:fill-[#a3ffae]" fill="#000000" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Selection;
