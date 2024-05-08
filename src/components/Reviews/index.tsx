import { useQuery } from "@tanstack/react-query";
import { ReviewService } from "../../services/reviews/reviewa.service";
import {
  Container,
  ItemContainer,
  ReviewItemContainer,
  ReviewAuthorInfo,
} from "./styles";
import { useViewMode } from "../../hooks/useViewMode";
import { formatCreatedAt } from "../../utils/date.format";
import RatingStars from "../ui/Rating";
import NotFoundText from "../ui/NotFoundText";

export default function Reviews() {
  const { viewMode, ListButton, GridButton } = useViewMode("list");

  const { data: reviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => ReviewService.getAll(),
  });

  return (
    <Container>
      {reviews && reviews?.data.length > 0 ? (
        <>
          <div>
            <ListButton active={viewMode === "list"} />
            <GridButton active={viewMode === "grid"} />
          </div>
          <ItemContainer viewMode={viewMode}>
            {reviews?.data.map((review) => (
                <ReviewItemContainer key={review.createdAt} viewMode={viewMode}>
                <ReviewAuthorInfo viewMode={viewMode}>
                 <div>{review.user.email}</div> 
                 <div>{ formatCreatedAt(review.createdAt)}</div> 
                </ReviewAuthorInfo>
                <RatingStars rating={review.rating} />
              </ReviewItemContainer> 
            ))}
          </ItemContainer>
        </>
      ) : (
        <NotFoundText text="No reviews yet." />
      )}
    </Container>
  );
}

