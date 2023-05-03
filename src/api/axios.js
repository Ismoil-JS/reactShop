import axios from "axios";

const instance = axios.create({
  baseURL: "https://seal-app-42lge.ondigitalocean.app",
  timeout: 10000
})

export default instance