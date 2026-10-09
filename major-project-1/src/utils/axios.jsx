import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        // This one is a temporary solution, you should use your own API key and keep it secret. You can get your own API key from https://www.themoviedb.org/settings/api .
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDEwYzA5NmQzODU4NDViYTVhNzQyNTYzZGJlY2E5OCIsIm5iZiI6MTc4ODM2OTQ3NS44NzM5OTk4LCJzdWIiOiI2YTk4NWE0MzEyZGRlZjc1YWQxMWY1YTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Bi7orOw-qV_TBGHXboAdtO3KN9fNpy477WESQGTptos'
    },
});

export default instance;