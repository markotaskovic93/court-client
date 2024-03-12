interface LocalStorageService {
  setItem: (key: string, value: string | null) => void;
  getItem: (key: string) => string | null;
  removeItem: (key: string) => void;
}

const localStorageService: LocalStorageService = {
  setItem: (key, value) => {
    localStorage.setItem(key, value);
  },
  getItem: (key) => {
    return localStorage.getItem(key);
  },
  removeItem: (key) => {
    localStorage.removeItem(key);
  }
};

export default localStorageService;
