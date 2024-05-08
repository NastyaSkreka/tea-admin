import styled from "styled-components";

export const BannerWrapper = styled.div`
  position: relative;
  cursor: pointer;
  margin: 20px 0 5px 0;
  width: 100%;
  height: 415px;
  background-color: var(--primary-color);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
  transition: background-color 0.3s ease;

  &:hover {
    &::after {
      content: "Click here to visit the tea shop";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: white;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items:center;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 1; 
    }
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BannerText = styled.div`
  padding: 10px;
  font-size: 55px;
  color: var(--textSecondary-color);
`;
export const BannerImage = styled.img`
  object-fit: cover;
  height: 420px;
  width: 80%;
`;
