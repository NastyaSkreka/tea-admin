import styled from "styled-components";
import { IoImageSharp } from "react-icons/io5";


export const InputContainer = styled.div`
    width: 500px;
    position: relative;
    overflow: hidden;
    display: flex;
    gap: 10px;
    margin: 20px 0 5px 0;
`

export const StyledInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
`

export const UploadButton = styled.button`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 15px;
    justify-content: center;
    font-size: 10px;
    padding: 10px;
    width: 200px;
    height: 100px;
    color: black;
    border-radius: 10px;
    cursor: pointer;
    border: 1px dashed var(--primary-color);
`

export const UploadImageIcon = styled(IoImageSharp)`
    font-size: 45px;
    color: var(--primary-color);
`

export const UploadText = styled.div`
    font-size: 14px; 
    line-height: 20px;
`
export const UploadedImageContainer = styled.div`
    width: 500px;
    display: flex;
    gap: 10px;
    margin: 20px 0 5px 0;
    
`
export const StyledImage = styled.img`
    margin: 0 auto;
    width: 200px;
    height: 200px;
    object-fit: cover;
`