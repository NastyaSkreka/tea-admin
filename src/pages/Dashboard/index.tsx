import { Navigate, Outlet} from "react-router-dom";
import SideBar from "../../components/ui/SideBar";
import { MainContent } from "./styles";
import { useAuth } from "../../hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <MainContent>
        {user ? <Outlet /> : <Navigate to="/explore" />}
      </MainContent>
    </div>
  );
}
