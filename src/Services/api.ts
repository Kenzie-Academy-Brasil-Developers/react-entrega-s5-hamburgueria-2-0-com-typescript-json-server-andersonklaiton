import axios from "axios"

const api = axios.create({
    baseURL: "https://server-anderson-hamburguer.herokuapp.com/"
})
export default api