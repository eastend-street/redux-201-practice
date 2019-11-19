import React from "react";
import { getText, updateText } from "../actions/text";
// high order component
import { connect } from "react-redux";

const TextUI = ({ updateText, text }) => {
  return <div>{text}</div>;
};

const mapStateToProps = state => {
  const { text } = state;
  return text;
};

const mapDispatchToProps = dispatch => ({
  updateText: newText => dispatch(updateText(newText))
});

export default connect(
  mapStateToProps, // get the whole store(mapStateToProps)
  mapDispatchToProps // get dispatch actions (mapDispatchToProps)
)(TextUI);
