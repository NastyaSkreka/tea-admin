import { instance } from "../../api/api.interceptor"
import { IReview } from "../../types/review.interface"

const REVIEWS = 'reviews'

export const ReviewService = {
    async getAll() {
        return instance<IReview[]>({
            url: REVIEWS,
            method: 'GET'
        })
    }, 
}