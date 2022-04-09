import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjRmMDIyMjU5MzUxMmNjZjMxMTdhMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTU5NzgzMiwiZXhwIjoxNjM5Njg0MjMyfQ.qSF0kpJgAHFCeiH-6eZKnqo9PMsnFtIQSETqf8e8CLc"


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.creatae({
    baseURL: BASE_URL,
    header: {token: `${TOKEN}`}
})

