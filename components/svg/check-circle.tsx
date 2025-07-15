import * as React from "react";
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg";

interface CheckCircleProps extends SvgProps {
  color?: string;
}

export const CheckCircle = ({
  width = 24,
  height = 24,
  color = "#28A389",
  ...props
}: CheckCircleProps) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 24 25" {...props}>
    <Mask
      id="a"
      width={24}
      height={25}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M0 .114h24v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill={color}
        d="m10.6 16.714 7.05-7.05-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4 4.25 4.25Zm1.4 5.4a9.738 9.738 0 0 1-3.9-.787 10.099 10.099 0 0 1-3.175-2.138 10.1 10.1 0 0 1-2.137-3.175 9.738 9.738 0 0 1-.788-3.9c0-1.383.263-2.683.788-3.9A10.099 10.099 0 0 1 4.925 5.04c.9-.9 1.958-1.612 3.175-2.137a9.738 9.738 0 0 1 3.9-.788c1.383 0 2.683.263 3.9.788a10.098 10.098 0 0 1 3.175 2.137c.9.9 1.613 1.959 2.137 3.175a9.737 9.737 0 0 1 .788 3.9 9.738 9.738 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175c-.9.9-1.958 1.613-3.175 2.138a9.738 9.738 0 0 1-3.9.787Z"
      />
    </G>
  </Svg>
);
