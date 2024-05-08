import { styled, css } from "styled-components";
import { IoMdClose } from "react-icons/io";

interface IViewMode {
    viewMode: 'list' | 'grid';
    isCurrentUser?: boolean;
  }

export const UserItemContainer = styled.div<IViewMode>`
    position: relative;
    margin: 10px 0;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    ${(props) =>
    props.isCurrentUser &&
    css`
      background-color: var(--backgroundGrayLight-color); 
    `}
`

export const UserAuthorInfo = styled.div<IViewMode>`
        display: flex;
        align-items: start;
        flex-direction:  ${props => props.viewMode === 'grid' ? 'column' : ''};
        gap:   ${props => props.viewMode === 'grid' ? '10px' : '20px'};
`

export const DeleteIcon = styled(IoMdClose)`
    position: absolute;
    right: 0px;
    top: 0px;
    border-radius: 50%;
    border: 2px solid var(--textSecondary-color);
    background-color:var(--backgroundGrayLight-color);
    padding: 2px; 
    color: var(--primary-color);
    cursor: pointer;
`

