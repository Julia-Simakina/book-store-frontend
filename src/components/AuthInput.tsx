import React from "react";
import styled from "styled-components";

type AuthInputType = {
  src: string;
  type: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  inputTitle: string;
  hintTitle: string;
};

const AuthInput: React.FC<AuthInputType> = (props) => {
  return (
    <div>
      <InputContainer>
        <InputImg src={props.src} alt="Search icon" />
        <Input {...props} />
        <Label htmlFor={props.id}>{props.inputTitle}</Label>
      </InputContainer>
      <HintSpan className="hint">{props.hintTitle}</HintSpan>
    </div>
  );
};

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

  &:focus-within {
    outline: 2px solid #344966;
  }
`;

const Input = styled.input`
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

  &:focus + label {
    transform: translateY(-25px);
    font-size: 12px;
    color: #344966;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 65px;
  transform: translateY(-50%);
  font-size: 16px;
  color: #b9bac3;
  pointer-events: none;
  transition: all 0.3s;
`;

const InputImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;

export default AuthInput;
