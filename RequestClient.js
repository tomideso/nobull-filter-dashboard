const axios = require("axios");

const base_uri = "/v1/webflow/";

// instance.defaults.crossdomain = true;
// axios.defaults.withCredentials = true;

class HttpClient {
  access_token;
  client;

  constructor(token) {
    this.client = axios.create({
      baseURL: base_uri,
      timeout: 20000,
      headers: { "Content-Type": "application/json" },
    });
    this.access_token = token;
  }

  get(endpoint) {
    return this.client
      .get("/v1" + endpoint, {
        headers: { Authorization: "Bearer " + this.access_token },
      })
      .then((res) => {
        return res.data;
      });
  }

  post(endpoint, body) {
    if (!body) {
      body = {};
    }
    return this.client
      .post("/v1" + endpoint, body, {
        headers: { Authorization: "Bearer " + this.access_token },
      })
      .then((res) => {
        return res.data;
      });
  }

  put(endpoint, body) {
    if (!body) {
      body = {};
    }
    return this.client
      .put("/v1" + endpoint, body, {
        headers: { Authorization: "Bearer " + this.access_token },
      })
      .then((res) => {
        return res.data;
      });
  }

  delete(endpoint, body) {
    return this.client
      .delete(endpoint, {
        data: body,
        headers: { Authorization: "Bearer " + this.access_token },
      })
      .then((res) => {
        return res.data;
      });
  }
}

export default HttpClient;
