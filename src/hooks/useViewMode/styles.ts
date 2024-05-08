import styled, { css } from "styled-components";

  const baseButtonStyles = css`
  margin-right: 10px;
  padding: 5px 10px;
  font-size: 20px;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  ${baseButtonStyles}
`;

export const StyledListButton = styled(StyledButton)<{ active: boolean }>`
  color: ${({ active }) => active ? 'var(--primary-color)' : 'black'}; 
`;

export const StyledGridButton = styled(StyledButton)<{ active: boolean }>`
  color: ${({ active }) => active ? 'var(--primary-color)' : 'black'}; 
`;

export const Icon = styled.span`
  margin-right: 5px;
`;