import * as React from "react";
import { styled, alpha, Box } from "@mui/system";
import { Slider as BaseSlider, sliderClasses } from "@mui/base/Slider";

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 413, height: 151, padding: "40px 16px" }}>
      <Slider
        sx={{ padding: 40 }}
        value={value}
        onChange={handleChange}
        getAriaLabel={() => "Prise range"}
        getAriaValueText={valuetext}
        min={0}
        max={100}
      />
    </Box>
  );
}

function valuetext(value: number) {
  return `$ ${value}`;
}

const Slider = styled(BaseSlider)(
  () => `
  color: #D6D8E7;
  height: 26px;
  width: 379px;
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  &.${sliderClasses.disabled} {
    pointer-events: none;
    cursor: default;
    color: 'grey';
    opacity: 0.4;
  }

  & .${sliderClasses.rail} {
    display: block;
    position: absolute;
    width: 379px;
    height: 12px;
    border-radius: 40px;
    background-color: #D6D8E7;
    opacity: 0.3;
  }

  & .${sliderClasses.track} {
    display: block;
    position: absolute;
    height: 12px;
    border-radius: 40px;
    background-color: #BFCC94;
  }

  & .${sliderClasses.thumb} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left: -6px;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    background-color: #F7F7FC;
    border: 2px solid #BFCC94;
    transition-property: box-shadow, transform;
    transition-timing-function: ease;
    transition-duration: 120ms;
    transform-origin: center;

    &:hover {
      box-shadow: 0 0 0 6px ${alpha("#BFCC94", 0.3)};
    }

    &.${sliderClasses.focusVisible} {
      box-shadow: 0 0 0 8px ${alpha("#BFCC94", 0.5)};
      outline: none;
    }

    &.${sliderClasses.active} {
      box-shadow: 0 0 0 8px ${alpha("#BFCC94", 0.5)};
      outline: none;
      transform: scale(1.2);
    }
  }

  & .${sliderClasses.mark} {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 99%;
    background-color: 'red;
    top: 44%;
    transform: translateX(-50%);
  }

  & .${sliderClasses.markActive} {
    background-color: "red";
  }
`
);
