export const BASE_URL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:8000/v1"
    : "http://filter.nobullapp.com/api";
