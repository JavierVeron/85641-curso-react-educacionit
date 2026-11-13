import axios from "axios"

const APIClient = axios.create({
    baseURL:"https://fakestoreapi.com"
})

export default APIClient