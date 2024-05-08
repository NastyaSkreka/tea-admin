import { ReviewStarsContainer, StarIcon } from './styles'; 

const RatingStars = ({ rating }: any) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<StarIcon key={i} />);
        }
        return stars;
    };

    return <ReviewStarsContainer>{renderStars()}</ReviewStarsContainer>;
};

export default RatingStars;
