import axios from 'axios';

const myApi = axios.create({
    baseURL: "https://nc-games-server-kp.herokuapp.com/api"
})

export const getAllCategories = () => {
    return myApi.get("/categories").then((res) => {
        return res.data.categories
    })
}

export const getAllReviews = (req) => {
    return myApi.get("/reviews", { params: req }).then((res) => {
        return res.data.reviews
    })
}

export const getReviewById = (review_id) => {
    return myApi.get(`/reviews/${review_id}`).then((res) => {
        return res.data.review
    })
}

export const getUserByUsername = (username) => {
    return myApi.get(`/users/${username}`).then((res) => {
        return res.data.user
    })
}