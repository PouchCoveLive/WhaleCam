import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:8080/api", //might need to change me later
    headers: {
        "Content-type": "applications/json"
    }
});