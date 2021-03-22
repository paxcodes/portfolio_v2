import ApiClient from "./ApiClient.js";

export default {
    GetFeaturedPRs() {
        return ApiClient.get('pull-requests/featured');
    }
}