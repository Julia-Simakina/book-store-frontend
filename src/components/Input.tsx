import React from "react";
import styled from "styled-components";

type InputType = {
  src: string;
  type: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  inputTitle: string;
  hintTitle?: string;
};

const Input: React.FC<InputType> = (props) => {
  const isInputFilled = props.value.length > 0;

  return (
    <InputContainerWrapper>
      <InputContainer>
        <InputImg src={props.src} alt="Search icon" />
        <StyledInput {...props} />
        <Label htmlFor={props.id} isFilled={isInputFilled}>
          {props.inputTitle}
        </Label>
      </InputContainer>
      <span className="hint">{props.hintTitle}</span>
    </InputContainerWrapper>
  );
};

const InputContainerWrapper = styled.div`
  .hint {
    color: #344966;
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;

const HintSpan = styled.span`
  color: #344966;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  padding: 20px 22px;
  background-color: #f0f4ef;
  box-sizing: border-box;
  border-radius: 16px;
  height: 64px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  border: none;
  font-size: 16px;
  transition: all 0.3s;
  color: #344966;
  background-color: #f0f4ef;

  &:focus {
    font-size: 16px;
    line-height: 25px;
    outline: none;
  }
`;

const Label = styled.label<{ isFilled: boolean }>`
  position: absolute;
  top: ${(props) => (props.isFilled ? "15px" : "50%")};
  left: 65px;
  transform: translateY(-50%);
  font-size: ${(props) => (props.isFilled ? "12px" : "16px")};
  color: ${(props) => (props.isFilled ? "#344966" : "#b9bac3")};
  pointer-events: none;
  transition: all 0.3s;
`;

const InputImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;

export default Input;
