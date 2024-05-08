import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  UserItemContainer,
  UserAuthorInfo,
  DeleteIcon,
} from "./styles";
import { UserService } from "../../../services/user/user.service";
import { useProfile } from "../../../hooks/useProfile";
import { Role } from "../../../store/user/user.interface";
import { useState } from "react";
import { motion } from 'framer-motion';

export default function UserItem({ user, viewMode }: any) {
  const queryClient = useQueryClient();
  const { profile } = useProfile()
  const [isDeleted, setIsDeleted] = useState(false);

  const { mutate} = useMutation({
    mutationKey: ["delete user"],
    mutationFn: (userId: number) => UserService.delete(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setIsDeleted(true)
    },
    
  });

  const handleDeleteUser = () => {
    mutate(user.id);
  };

  const isCurrentUser = profile && user.id === profile.data.id;

  return (
    <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: isDeleted ? 0 : 1 }}
    transition={{ duration: 0.3 }}
    >
    <UserItemContainer viewMode={viewMode} isCurrentUser={isCurrentUser}>
      <UserAuthorInfo viewMode={viewMode}>
        <div>Email: {user.email}</div>
        <div>Phone: {user.phone}</div>
        <div>Role: {user.role} </div>
        { isCurrentUser &&  <div>Current User</div> }
      { user.role === Role.USER && <DeleteIcon onClick={handleDeleteUser} />} 
      </UserAuthorInfo>

    </UserItemContainer>
    </motion.div>
  )
}
