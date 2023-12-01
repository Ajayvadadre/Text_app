import React from "react";
import {useState} from 'react';
import PropTypes from "prop-types";
import "../components/TextArea.css";

export default function TextArea(props) {
  const [text, setText] = useState("");
  const [sliceStart, setSliceStart] = useState("");
  const [sliceEnd, setSliceEnd] = useState("");


  //All the functions
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };

  const handledownClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };

  // text = text.join(text.split(" ").map((word)=>word[0].toUpperCase() + word.slice(1,text.length).toLowerCase()))

  // text = text[0].toUpperCase() + text.slice(1,text.length).toLowerCase()

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const ClearClick = () => {
    setText("");
  };

  const TrimClick = () => {
    let textdata = document.getElementById("textarea");
    let textvalue = textdata.value;
    let cleanedtext = textvalue.replace(/\s+/g, " ").trim();
    textdata.value = cleanedtext;
  };
  const FirstupClick = () => {
  };

  const handleSliceClick = () => {
    if (sliceStart.length !== 1 || sliceEnd.length !== 1) {
      console.error("From and To should be single characters.");
      return;
    }

    let start = text.indexOf(sliceStart) + 1;
    let end = text.indexOf(sliceEnd);

    if (start !== -1 && end !== -1 && end > start) {
      const slicedText = text.slice(start, end);
      setText(slicedText);
    } else {
      console.error("Invalid slice range or characters not found.");
    }

    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
  };

  return (
    <div
      className="container my-4 p-4"
      style={{
        backgroundColor: props.mode === "dark" ? "#555" : "white",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h3>{props.title}</h3>
        </label>
        {/* text-input */}
        <textarea
          className="form-control"
          id="textarea"
          value={text}
          onChange={handleOnChange}
          rows="3"
          style={{
            backgroundColor: props.mode === "dark" ? "#888" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {" "}
        </textarea>
        <h4
          style={{
            backgroundColor: props.mode === "dark" ? "#888" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {text.split(" ").length}/{text.length}
        </h4>
      </div>

      {/* upprer/lower function */}
      <button className="btn btn-primary mb-4 " onClick={handleUpClick}>
        To Uppercase
      </button>
      <button className="lower btn btn-primary mb-4" onClick={handledownClick}>
        To Lowercase{" "}
      </button>
      <button className="lower btn btn-primary mb-4" onClick={FirstupClick}>
        First uppercase{" "}
      </button>
      <button className="lower btn btn-primary mb-4" onClick={TrimClick}>
        Trim spaces{" "}
      </button>
      <button className="lower btn btn-primary mb-4" onClick={ClearClick}>
        Clear{" "}
      </button>

      {/* slice function */}
      <div className="input-group mb-3">
        {/* input 1 */}
        <span
          className="from input-group-text"
          id="inputGroup-sizing-default"
          style={{
            backgroundColor: props.mode === "dark" ? "#666" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          from
        </span>
        <input
          onChange={(e) => setSliceStart(e.target.value)}
          type="text"
          className="form-control"
          id="input1"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          style={{
            backgroundColor: props.mode === "dark" ? "#888" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        />
        {/* input 2 */}
        <span
          className="to input-group-text rounded-start  "
          id="inputGroup-sizing-default"
          style={{
            backgroundColor: props.mode === "dark" ? "#666" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          To
        </span>
        <input
          onChange={(e) => setSliceEnd(e.target.value)}
          type="text"
          id="input2"
          className="to form-control "
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          style={{
            backgroundColor: props.mode === "dark" ? "#888" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        />
        <button className="to btn btn-success " onClick={handleSliceClick}>
          Slice
        </button>
      </div>
    </div>
  );
}

TextArea.propTypes = {
  title: PropTypes.string.isRequired,
};

TextArea.defaultProps = {
  title: "Enter Title Here",
};
