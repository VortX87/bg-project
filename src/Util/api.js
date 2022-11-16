import axios from 'axios';

const myApi = axios.create({
    baseURL: "https://nc-games-server-kp.herokuapp.com/api"
})

export const getAllCategories = () => {
    return myApi.get("/categories").then((res) => {
        return res.data.categories
    })
}

export const getAllReviews = () => {
    return myApi.get("/reviews").then((res) => {
        return res.data.reviews
    })
}

export const getUserByUsername = () => {
    return myApi.get("/users/:username").then((res) => {
        return res.data.username
    })
}

export const getReviewByID = () => {
    return myApi.get("reviews/:review_id").then((res) => {
        return res.data.review
    })
}

export const getCommentByReviewID = () => {
    return myApi.get("reviews/:review_id/comments").then((res) => {
        return res.data.comments
    })
}