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

export const getCommentsById = (review_id) => {
    return myApi.get(`/reviews/${review_id}/comments`).then((res) => {
        return res.data.comments
    })
}

export const postComment = (review_id, { username, body }) => {
    return myApi.post(`/reviews/${review_id}/comments`, { username, body }).then((res) => {
        return res.data.comments
    })
}

export const patchReview = (review_id, increase) => {
    return myApi.patch(`/reviews/${review_id}`, { inc_votes: increase }).then((res) => {
        return res.data.comment
    })
}

export const deleteComment = (comment_id) => {
    return myApi.delete(`/comments/${comment_id}`).then((res) => {
        return res.data
    })
}