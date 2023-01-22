import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Password from "./components/Password";
import Selection from "./components/Selection";

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}]|:;<,>.?/";

const App = () => {
  const [passwordPool, setPasswordPool] = useState("");

  const [password, setPassword] = useState("P4$5W0rD!");

  const [passwordRange, setPasswordRange] = useState(10);

  const [uppercaseStatus, setUppercaseStatus] = useState(true);
  const [lowercaseStatus, setLowercaseStatus] = useState(false);
  const [numbersStatus, setNumbers] = useState(false);
  const [symbolsStatus, setSymbolsStatus] = useState(false);

  useEffect(() => {
    let pool = "";
    if (uppercaseStatus) pool += uppercaseLetters;
    if (lowercaseStatus) pool += lowercaseLetters;
    if (numbersStatus) pool += numbers;
    if (symbolsStatus) pool += symbols;
    setPasswordPool(pool);
  }, [uppercaseStatus, lowercaseStatus, numbersStatus, symbolsStatus]);

  const generatePassword = () => {
    if (passwordPool.length === 0)
      return toast.error("Please select at least one option", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        width: "300px",
      });
    let password = "";
    for (let i = 0; i < passwordRange; i++) {
      const randomIndex = Math.floor(Math.random() * passwordPool.length);
      password += passwordPool[randomIndex];
    }

    setPassword(password);
  };

  const handlePasswordRange = (e) => {
    setPasswordRange(e.target.value);
  };

  const handleUpperCase = () => {
    setUppercaseStatus(!uppercaseStatus);
  };

  const handleLowerCase = () => {
    setLowercaseStatus(!lowercaseStatus);
  };

  const handleNumbers = () => {
    setNumbers(!numbersStatus);
  };

  const handleSymbols = () => {
    setSymbolsStatus(!symbolsStatus);
  };

  const [strength, setStrength] = useState(0);

  useEffect(() => {
    let strength = 0;
    if (uppercaseStatus) strength += 1;
    if (lowercaseStatus) strength += 1;
    if (numbersStatus) strength += 1;
    if (symbolsStatus) strength += 1;
    if (passwordRange > 15) strength += 1;

    switch (strength) {
      case 1:
        setStrength("TOO WEAK !");
        break;
      case 2:
        setStrength("WEAK");
        break;
      case 3:
        setStrength("MEDIUM");
        break;
      case 4:
        setStrength("STRONG");
        break;

      default:
        break;
    }
  }, [uppercaseStatus, lowercaseStatus, numbersStatus, symbolsStatus, passwordRange]);

  const copyButton = () => {
    navigator.clipboard.writeText(password);

    toast.success("Password Copied", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="mt-2 flex h-screen flex-col items-center justify-center sm:mt-16 sm:h-auto">
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      <div className="text-[#807c92]">Password Generator</div>
      <div className="mt-4 w-full max-w-lg">
        <div className="flex flex-col gap-4">
          <Password password={password} copyButton={copyButton} />
          <Selection passwordRange={passwordRange} handleUpperCase={handleUpperCase} handleLowerCase={handleLowerCase} handleNumbers={handleNumbers} handleSymbols={handleSymbols} strength={strength} generatePassword={generatePassword} handlePasswordRange={handlePasswordRange} />
        </div>
      </div>
    </div>
  );
};

export default App;
