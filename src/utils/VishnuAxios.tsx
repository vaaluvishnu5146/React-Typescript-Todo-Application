import { Axios } from "axios";

const VishnuAxios = new Axios({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
    hello: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Request interceptor to serialize data to JSON
VishnuAxios.interceptors.request.use((config) => {
  if (config.data) {
    config.data = JSON.stringify(config.data);
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

// Response interceptor to parse JSON responses
VishnuAxios.interceptors.response.use((response) => {
  if (response.data && typeof response.data === "string") {
    try {
      response.result = JSON.parse(response.data);
    } catch (e) {
      // Ignore if response is not JSON
    }
  }
  return response;
});

export default VishnuAxios;
