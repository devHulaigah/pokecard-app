import * as React from "react";
import Svg, { G, Rect } from "react-native-svg";
const BurgerMenuSvg = (props) => (
  <Svg
    width="800px"
    height="800px"
    viewBox="0 0 12 12"
    enableBackground="new 0 0 12 12"
    id="\u0421\u043B\u043E\u0439_1"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <G>
      <Rect fill="#1D1D1B" height={1} width={11} x={0.5} y={5.5} />
      <Rect fill="#1D1D1B" height={1} width={11} x={0.5} y={2.5} />
      <Rect fill="#1D1D1B" height={1} width={11} x={0.5} y={8.5} />
    </G>
  </Svg>
);
export default BurgerMenuSvg;
