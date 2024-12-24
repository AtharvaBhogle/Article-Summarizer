import React from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState(null);
  const [summary, setSummary] = useState("");

  const inputValue = (e) => {
    setText(e.target.value);
  };

  const summarize = async () => {
    const options = {
      method: "GET",
      url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
      params: {
        url: text,
        lang: "en",
        engine: "2",
      },
      headers: {
        "x-rapidapi-key": "67d4042c58msh23c14962f1cf63bp162b49jsn5452993e067a",
        "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    setSummary(response.data.summary);
  };

  return (
    <div className="text-[#f73b63] text-xl">
      <div className="h-screen w-screen bg-[#9696a2] flex items-center justify-center flex-col gap-y-[50px]">
        <h1 className="text-4xl font-bold text-pink-230">Article Summarizer</h1>
        <div className="flex items-center justify-center gap-x-2">
          <input
            type="text"
            className="outline-none border-none rounded-xl px-3 w-[500px] h-[40px]"
            onChange={inputValue}
          />
          <button
             className="px-4 py-2 text-violet-600 bg-black rounded-lg hover:bg-violet-600 hover:text-black transition-colors duration-300"
            onClick={summarize}>
                  Summarize
          </button>
        </div>
        <div className="h-80 w-[600px] bg-[#1e293b] overflow-x-hidden p-5 rounded-md text-white">
          {summary}
        </div>
      </div>
    </div>
  );
}

export default App;
