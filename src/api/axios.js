import axios from "axios";

// Tworzymy instancję Axios z domyślną konfiguracją
const apiClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
    timeout: 5000,
});

// Dodajemy interceptor do obsługi tokena
apiClient.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token"); // Pobieramy token (np. z localStorage)
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
);

// Dodajemy interceptor do odpowiedzi, by obsługiwać błędy (np. 401 Unauthorized)
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response && error.response.status === 403) {
            console.error("Token expired or unauthorized, attempting to refresh token...");
            // Tutaj możesz dodać logikę odświeżania tokenu
            localStorage.removeItem("token")
            // Przykładowo: await refreshAuthToken();
        }
        return Promise.reject(error);
    }
);

// Funkcja do wykonywania zapytań HTTP
export const apiRequest = (method, url, data = null, customHeaders = {}) => {
  return apiClient({
    method: method,
    url: url,
    data: data,
    headers: {
      ...customHeaders, // Możemy dodać dodatkowe nagłówki, jeśli potrzebne
    },
  });
};
