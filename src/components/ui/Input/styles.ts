import styled from "styled-components";

export const InputContainer = styled.div`
    margin: 10px 0;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
    border-bottom: 1px solid #000; 
    margin-bottom: 2px;
    padding: 5px;
    outline: none;
    width: 100%;
`;

export const ErrorMessage = styled.div`
    color: var(--error-color);
    font-size: 14px;
    margin: 0;
`;

export const StyledTextArea = styled.textarea`
    border: 1px solid #000; 
    margin-bottom: 2px;
    padding: 5px;
    outline: none;
    height: 200px;
    font-size: 14px;
    width: 100%;
`;

export const InputWithIcon = styled.div`
    position: relative;
  
`;

export const IconContainer = styled.div`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
`;

