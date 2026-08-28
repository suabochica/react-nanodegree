import { createElement, useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);

  return createElement(
    "div",
    { className: "demo-card" },
    createElement("input", {
      className: "text-input",
      onChange: (event) => {
        setInputText(event.target.value);
        setHistoryList([...historyList, event.target.value]);
      },
      placeholder: "Enter some text",
    }),
    createElement("p", { className: "echo" }, inputText),
    createElement("hr", { className: "divider" }),
    createElement(
      "ul",
      { className: "history-list" },
      historyList.map((record, index) =>
        createElement("li", { key: index }, record),
      ),
    ),
  );
};

export default InputElement;
