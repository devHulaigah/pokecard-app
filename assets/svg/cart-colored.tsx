import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CartColoredSvg = (props) => (
  <Svg
    fill="#000000"
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    id="cart"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color"
    {...props}
  >
    <Path
      id="secondary"
      d="M18.5,20.5A1.5,1.5,0,1,1,17,19,1.5,1.5,0,0,1,18.5,20.5ZM11,19a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,11,19Z"
      style={{
        fill: "rgb(44, 169, 188)",
      }}
    />
    <Path
      id="primary"
      d="M21.79,6.38A1,1,0,0,0,21,6H7.48L7.12,3.69A2,2,0,0,0,5.14,2H3A1,1,0,0,0,3,4H5.14L7,16.15A1,1,0,0,0,8,17h.09l11-1a1,1,0,0,0,.88-.76l2-8A1,1,0,0,0,21.79,6.38Z"
      style={{
        fill: "rgb(0, 0, 0)",
      }}
    />
  </Svg>
);
export default CartColoredSvg;
