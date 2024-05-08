import { StyledTitle } from './styles'

interface ITitle {
    text: string;
}

export default function Title({ text }: ITitle) {
    return <StyledTitle>{text}</StyledTitle>;
  }