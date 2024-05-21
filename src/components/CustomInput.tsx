import React from "react";
import styled from "styled-components";
import { Field, ErrorMessage as Error } from "formik";

type InputType = {
  htmlFor: string;
  id: string;
  name: string;
  labelTitle: string;
  src: string;
  hintTitle: string;
  disabled?: boolean;
};

const CustomInput: React.FC<InputType> = (props) => {
  return (
    <InputContainerWrapper isFilled={true}>
      <div className="input-container">
        <img className="input-img" src={props.src} alt="icon" />
        <label className="label" htmlFor={props.htmlFor}>
          {props.labelTitle}
        </label>
        <Field
          disabled={props.disabled}
          className="input"
          id={props.id}
          name={props.name}
        />
      </div>
      <Error name={props.name}>
        {(error) => <span className="hint">{error}</span>}
      </Error>
      {/* <span className="hint">{props.hintTitle}</span> */}
    </InputContainerWrapper>
  );
};

const InputContainerWrapper = styled.div<{ isFilled: boolean }>`
  .input-container {
    position: relative;
    display: flex;
    padding: 20px 22px;
    background-color: #f0f4ef;
    box-sizing: border-box;
    border-radius: 16px;
    height: 64px;
  }

  .input-img {
    width: 24px;
    height: 24px;
    margin-right: 20px;
  }

  .label {
    position: absolute;
    top: ${(props) => (props.isFilled ? "15px" : "50%")};
    left: 65px;
    transform: translateY(-50%);
    font-size: ${(props) => (props.isFilled ? "12px" : "16px")};
    color: ${(props) => (props.isFilled ? "#344966" : "#b9bac3")};
    pointer-events: none;
    transition: all 0.3s;
  }

  .input {
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
  }

  .hint {
    color: #344966;
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export default CustomInput;
