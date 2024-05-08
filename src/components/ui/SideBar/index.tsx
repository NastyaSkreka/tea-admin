import {
  Sidebar,
  SidebarItem,
  StyledNavLink,
  LogOutContainer,
  LogOutIcon,
  LogOutText,
} from "./styles";
import { useActions } from "../../../hooks/useActions";
import { sidebarItems } from "../../../utils/routes";

export default function SideBar() {
  const { logout } = useActions();

  return (
    <Sidebar>
      {sidebarItems.map(({ to, label }) => (
        <StyledNavLink to={to} key={label}>
          <SidebarItem>{label}</SidebarItem>
        </StyledNavLink>
      ))}
      <LogOutContainer onClick={() => logout()}>
        <LogOutIcon />
        <LogOutText>LogOut</LogOutText>
      </LogOutContainer>
    </Sidebar>
  );
}
