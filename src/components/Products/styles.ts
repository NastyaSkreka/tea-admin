import styled from "styled-components";

export const FormContainer = styled.div`
    padding: 5px 25px;
     display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px

`;

export const InputValuesContainer = styled.div`
    margin: 15px 0;
    display: flex;
    gap: 25px;
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