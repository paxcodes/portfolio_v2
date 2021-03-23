import ApiClient from "./ApiClient.js";

export default {
    GetFeaturedPRs() {
        return ApiClient.get('pull-requests/featured');
    },
    GetOtherPRs() {
        return ApiClient.get('pull-requests/other');
    },
    GetProjects() {
        return ApiClient.get('projects');
    },
}