import React, { Component } from "react";

const Circle = ({ bgColor }) => {
  var diameter = Math.random() * 250;
  var height = Math.random() * 1800;
  var width = Math.random() * 900;

  var circleStyle = {
    padding: 10,
    margin: 20,
    display: "inline-block",
    backgroundColor: bgColor,
    borderRadius: "50%",
    width: diameter,
    height: diameter,
    opacity: 0.18,
    zIndex: 0,
    position: "absolute",
    top: height + "px",
    left: width + "px"
  };
  return <div style={circleStyle} />;
};

class Background extends Component {
  state = {
    colors: [
      "#393E41",
      "#E94F37",
      "#1C89BF",
      "#A1D363",
      "#85FFC7",
      "#297373",
      "#FF8552",
      "#A40E4C",
      "#393E41",
      "#E94F37",
      "#1C89BF",
      "#A1D363",
      "#85FFC7",
      "#297373",
      "#FF8552",
      "#A40E4C",
      "#393E41",
      "#E94F37",
      "#1C89BF",
      "#A1D363"
    ]
  };

  render() {
    return (
      <div className="circles">
        {this.state.colors.map(color => (
          <Circle key={color + 1} bgColor={color} />
        ))}
      </div>
    );
  }
}

export default Background;