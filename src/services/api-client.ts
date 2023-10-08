import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'bcc25d3be5134c1d9deab73747ce75eb'
    }
})