import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

api.interceptors.request.use((config) => {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWJmOTI1ZjJmZTdlZmM3ZGE0YmExN2QyZDNjYjJlMCIsIm5iZiI6MTc1NTMyNDQ0OC40MjQsInN1YiI6IjY4YTAyMDIwZmU3NWNlNjg4MTBiZjg0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aBRQcpRQ8ox3uQs4RzagPsYKum4zBDv_8gP89iKYKCQ"

    config.headers.Authorization = `Bearer ${token}`

    return config
})