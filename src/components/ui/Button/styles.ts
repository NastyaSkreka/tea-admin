import styled from 'styled-components';

interface IStyledButtonProps {
    color: 'green' | 'white';
    position?: string;
  }

export const StyledButton = styled.button<IStyledButtonProps>`
  background-color: ${(props) => (props.color === 'green' ? 'teal' : 'white')};
  color: ${(props) => (props.color === 'green' ? 'white' : 'teal')};
  border: ${(props) => (props.color === 'white' ? '1px solid #000' : 'teal')};
  width: 223px;
  height: 41px;
  border-radius: 20.5px;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);

    ${(props) => props.position === 'absolute' && `
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 500;
    `}
`;