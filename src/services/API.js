import axios from "axios";

const ENV_IS_PRODUCTION = process.env.NODE_ENV === "production";

const BASE_URL = ENV_IS_PRODUCTION ? "" : "";

class API {
  get = async (url, config) => {
    return await axios.get(`${BASE_URL}${url}`, config);
  };

  put = async (url, data, config) => {
    return await axios.put(`${BASE_URL}${url}`, data, config);
  };

  post = async (url, data, config) => {
    return await axios.post(`${BASE_URL}${url}`, data, config);
  };

  delete = async (url, config) => {
    return await axios.delete(`${BASE_URL}${url}`, config);
  };
}

const api = new API();

export default api;
