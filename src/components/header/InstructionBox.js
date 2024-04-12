import React from 'react';
import "./InstructionBox.css";

const InstructionBox = () => {
  return (
    <div className="instruction-box">
      <div className="instruction-content">
        <h2>Welcome UserName!</h2>

        <p>Follow the instructions below to embark on your coding journey:</p>
        <ol>
          <li>Include a doctype declaration at the beginning.</li>
          <li>{"<!DOCTYPE html>"}</li>
          <li>The {"<!DOCTYPE html>"} declaration is an instruction to the web browser about what version of HTML the page is written in.</li>
          <li>Click the "Run" button to see the output.</li>
          <li>It must be the first thing in your HTML document, before the {"<html"} tag.</li>
          <li>Collect badges as you progress!</li>
        </ol>
      </div>
      <button className="next-button">Next -> </button>
    </div>
  );
};

export default InstructionBox;
