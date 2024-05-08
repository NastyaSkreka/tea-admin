import { useQuery } from "@tanstack/react-query";
import { StatisticsService } from "../../services/statistics/statistics.service";
import {
  StatisticContainer,
  StatisticCardContainer,
  StatisticCardTitle,
  StatisticCardValue,
} from "./styles";
import Title from "../ui/Title";
import Banner from "../ui/Banner";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

export default function Statistic() {
  const { data: statistics } = useQuery({
    queryKey: ["statistics"],
    queryFn: () => StatisticsService.getMain(),
  });
  return (
    <> 
      <StatisticContainer>
        {statistics?.data.map((statistic, index) => (
          <Link to={`/admin/${statistic.name.toLowerCase()}`}>
            <StatisticCardContainer key={index}>
              <StatisticCardTitle>{statistic.name}</StatisticCardTitle>
              <StatisticCardValue>{statistic.value}</StatisticCardValue>
            </StatisticCardContainer>
          </Link>
        ))}
      </StatisticContainer>
      <Title text="Go to the main page " />
      <Banner />
    </>
  );
}
