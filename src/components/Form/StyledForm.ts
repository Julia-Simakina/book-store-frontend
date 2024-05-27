import styled from "styled-components";

type PropsType = {
  marginTop?: string;
  width?: string;
};

export const StyleForm = styled.form<PropsType>`
  width: ${(props) => props.width || "413px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .auth__form-element {
    margin: 0;
    padding: 0;
    border: none;
    display: flex;
    flex-direction: column;
  }

  .auth__form-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const InputWrapper = styled.div`
  height: 75px;

  .input-error {
    outline: 2px solid #ed2e7e;
  }

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
    top: 15px;
    left: 65px;
    transform: translateY(-50%);
    font-size: 12px;
    color: #344966;
    pointer-events: none;
    transition: all 0.3s;
  }

  .field {
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

  .error-massage {
    color: #344966;
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  .label-error {
    color: #c30052;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const EditButton = styled.button`
  font-size: 14px;
  color: #8d9f4f;
  font-weight: 500;
  line-height: 30px;
  border: none;
  background: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline 1px solid #8d9f4f;
  }
`;
