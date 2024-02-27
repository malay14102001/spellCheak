import React, { useState, useEffect } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const XSpellCheck = () => {
  const [text, setText] = useState("");
  const [correction, setCorrection] = useState("");

  useEffect(() => {
    checkSpelling(text);
  }, [text]);

  const checkSpelling = (text) => {
    const words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase().replace(/[^a-zA-Z]/g, "");
      if (customDictionary.hasOwnProperty(word)) {
        setCorrection(`Did you mean: ${customDictionary[word]}?`);
        return;
      }
    }
    setCorrection("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>XSpellCheck</h1>
      <textarea value={text} onChange={handleChange} />
      {correction && <p>{correction}</p>}
    </div>
  );
};

export default XSpellCheck;
