import localStorageService from "../../storage/local-storage";

export const apiHeaders: {} = {
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  credentials: "omit", //it will bypass CORS
  prepareHeaders(headers: { set: (arg0: string, arg1: string) => void; }) {
    const token = localStorageService.getItem('access_token');
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
};
