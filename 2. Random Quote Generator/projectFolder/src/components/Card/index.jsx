import { useState, useEffect } from "react";

const Index = ({language}) => {
  const [quote, setQuote] = useState("");
  const [spinner, setSpinner] = useState(false);

  const getquote = async () => {
    setSpinner(true);
    try {
      // no-cache because the api caches the quote for 2 seconds.
      const response = await fetch(`https://ataturk.vercel.app/${language}`, {
        cache: "no-cache",
      });

      const data = await response.json();

      setQuote(data);
    } catch (err) {
      console.log(err);
    }
    setSpinner(false);
  };

  useEffect(() => {
    getquote();
  }, []);

  return (
    <div className="card">
      {spinner && (
        <div className="mb-12">
          <img src="./images/spinner.svg" alt="" />
        </div>
      )}

      {!spinner && (
        <>
          <div className="title">
            Mustafa Kemal Atatürk - Quote Generator
          </div>
          <div className="quote_text">"{quote.quote}"</div>
        </>
      )}

      <div className="divider">
        <div>
          <img
            className="divider_desktop"
            src="./images/pattern-divider-desktop.svg"
            alt=""
          />
        </div>
        <div>
          <img
            className="divider_mobile"
            src="./images/pattern-divider-mobile.svg"
            alt=""
          />
        </div>
      </div>
      <div onClick={() => getquote()} className="getquote_button">
        <img src="./images/icon-dice.svg" alt="" />
      </div>
    </div>
  );
};

export default Index;
