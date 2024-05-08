import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: var(--primary-color);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SidebarItem = styled.div`
  padding: 20px;
  cursor: pointer;
  font-size: 18px;
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--textSecondary-color);

  &.active {
    text-decoration: underline;
  }
`;

export const LogOutContainer = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: auto; 
    cursor: pointer;
`;
export const LogOutIcon = styled(IoIosLogOut)`
  font-size: 24px;
`;
export const LogOutText = styled.div`


`;
