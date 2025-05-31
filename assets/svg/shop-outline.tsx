import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ShopOutlineSvg = (props) => (
  <Svg
    fill="#000000"
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    id="bag"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    {...props}
  >
    <Path
      id="primary"
      d="M17.92,21H6.08a1,1,0,0,1-1-1.08l.85-11a1,1,0,0,1,1-.92H17.07a1,1,0,0,1,1,.92l.85,11A1,1,0,0,1,17.92,21Z"
      style={{
        fill: "none",
        stroke: "rgb(0, 0, 0)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <Path
      id="secondary"
      d="M9,11V6a3,3,0,0,1,3-3h0a3,3,0,0,1,3,3v5"
      style={{
        fill: "none",
        stroke: "rgb(44, 169, 188)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </Svg>
);
export default ShopOutlineSvg;
