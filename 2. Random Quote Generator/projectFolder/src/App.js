import { useState } from "react";
import Card from "./components/Card";
const App = () => {
  const [language, setLanguage] = useState();
  return (
    <div className="container">
      {!language && (
        <div className="card">
          <div className="title">Select Language</div>
          <div className="language">
            <button onClick={() => setLanguage("tr")} className="language-tr_button">Turkish</button>
            <button onClick={() => setLanguage("en")}  className="language-eng_button">English</button>
          </div>
        </div>
      )}

      {language && <Card language={language} />}
    </div>
  );
};

export default App;
