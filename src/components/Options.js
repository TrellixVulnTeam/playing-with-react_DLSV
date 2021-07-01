import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header--title">Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>

    {props.options.length === 0 && (
      <p className="widget--message">Please add an option to get started!</p>
    )}
    {props.options.map((item) => (
      <Option
        key={item}
        optionText={item}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
