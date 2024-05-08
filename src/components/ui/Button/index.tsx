import { StyledButton } from './styles';

interface IButtonProps {
  color: 'green' | 'white';
  label: string;
  position?: string; 
  onClick?: () => void; 
}

export default function Button({ color, label, position, onClick}: IButtonProps) {
  return <StyledButton position={position} color={color} onClick={onClick}>{label}</StyledButton>;
}