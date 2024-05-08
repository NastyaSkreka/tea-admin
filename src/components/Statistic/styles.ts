import styled from "styled-components";

export const StatisticContainer = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const StatisticCardContainer = styled.div`
    width: 200px;
    padding: 20px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 1.5);
    }
`

export const StatisticCardTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
`

export const StatisticCardValue = styled.div``