import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--primary-color);
`;

export const Title = styled.div`
  font-size: 50px;
  color: var(--textSecondary-color);
  margin-bottom: 5px;
  text-align: center;
`;

export const Description = styled.div`
  color: var(--textSecondary-color);
  width: 215px;
  text-align: center;
  transition: opacity 0.3s ease-in-out;
`;

export const StyledForm = styled.div`
   margin-top: 10px;
    background: var(--textSecondary-color);
    height: auto;
    border-radius: 10px;

    
`
export const FormSwitcher = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 5px 0 ;
`;

export const SwitchButton = styled.button<{ isActive: boolean }>`
    cursor: pointer;
    font-size: 18px;
    font-weight: ${({ isActive }) => (isActive ? "600" : "normal")};

`;
export const Spacer = styled.div`
    width: 4px;
    height: 40px;
    background-color: var(--backgroundGrayLight-color);
`;