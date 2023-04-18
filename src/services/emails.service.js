import http from "../http-common";
class EmailsDataService {
    create(data) {
        return http.post("/emails", JSON.stringify(data))
    }
}

export default new EmailsDataService();