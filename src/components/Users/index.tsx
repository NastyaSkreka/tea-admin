import { useQuery } from "@tanstack/react-query";
import { UserService } from "../../services/user/user.service";
import UserItem from "./UserItem";
import {  RoleContainer, ItemRoleTitle, Container, ItemContainer  } from './styles'
import { useViewMode } from "../../hooks/useViewMode";
import NotFoundText from "../ui/NotFoundText";
import { Role } from "../../store/user/user.interface";

export default function Users() {
    const { viewMode, ListButton, GridButton } = useViewMode("list");
 

  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () => UserService.getUsers(),
  });


  return (
    <Container>
        {
            users && users?.data.length > 0 ? (
                <>
                 <div>
        <ListButton active={viewMode === "list"} />
        <GridButton active={viewMode === "grid"} />
      </div>
      <ItemContainer>
       <ItemRoleTitle>ADMIN</ItemRoleTitle>
        <RoleContainer viewMode={viewMode}>
        {users?.data.map((user) => (
        
         user.role == Role.ADMIN  && <UserItem user={user} key={user.id} viewMode={viewMode} />
        ))}
        </RoleContainer>

        <ItemRoleTitle>USERS</ItemRoleTitle>
        <RoleContainer viewMode={viewMode}>
        
        {users?.data.map((user) => (
         user.role == Role.USER &&  <UserItem user={user} key={user.id} viewMode={viewMode} />
        ))}
        </RoleContainer>
      </ItemContainer>
                </>
            ) :  ( 
                <NotFoundText text="No users yet." />
            )
        }
     
    </Container>
  );
}
