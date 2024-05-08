import styled from "styled-components";

interface IViewMode {
  viewMode: "list" | "grid";
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.div<IViewMode>`
  display: ${(props) => (props.viewMode === "list" ? "block" : "grid")};
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
`;

export const ReviewItemContainer = styled.div<IViewMode>`
  margin: 15px 0;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: ${(props) => (props.viewMode === "grid" ? "center" : "")};
`;

export const ReviewAuthorInfo = styled.div<IViewMode>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.viewMode === "list" ? "space-between" : "center"};
  flex-direction: ${(props) => (props.viewMode === "grid" ? "column" : "")};
  gap: ${(props) => (props.viewMode === "grid" ? "10px" : "")};
`;
