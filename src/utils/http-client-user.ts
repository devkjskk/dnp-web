import axios from "axios";
import { getSession } from "next-auth/react";
import { HttpError } from "./http-error";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.baseURL = `${baseURL}/user`;

axios.interceptors.request.use(async (request) => {
  const session = await getSession();

  if (session) {
    request.headers.Authorization = `Bearer ${session?.user.accessToken}`;
  }

  return request;
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const { response } = error;

    return Promise.reject(new HttpError(response?.data));
  }
);

export const httpClientUser = axios;
