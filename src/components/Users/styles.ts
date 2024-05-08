import styled from "styled-components";

interface IViewMode {
    viewMode: "list" | "grid";
  }

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
 
`;

export const RoleContainer = styled.div<IViewMode>`
 display: ${(props) => (props.viewMode === "list" ? "block" : "grid")};
 grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
 grid-gap: 10px;
 
`
export const ItemRoleTitle = styled.div`
 padding: 10px 0;
 text-transform: uppercase;
 font-weight: 600;
 color: var(--primary-color);
`