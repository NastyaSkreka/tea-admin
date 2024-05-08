import { useQuery } from '@tanstack/react-query'
import { useAuth } from "./useAuth";
import { UserService } from '../services/user/user.service';

export const useProfile = () => {
    const { user} = useAuth()
    
    const { data, isLoading} = useQuery({
        queryKey: ['get profile'],
        queryFn: () => UserService.getProfile(), 
        enabled: !!user
    });
    
    return { profile: data, profileLoading: isLoading};
}