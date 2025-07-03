const localStorageUtils = {
  getTasks: () => {
    try {
      const tasks = localStorage.getItem("tasks");
      return tasks ? JSON.parse(tasks) : [];
    } catch (error) {
      console.error("Error loading tasks:", error);
      return [];
    }
  },

  saveTasks: (tasks) => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks:", error);
    }
  },

  getUser: () => {
    return localStorage.getItem("username") || "";
  },

  saveUser: (username) => {
    localStorage.setItem("username", username);
  },

  getDarkMode: () => {
    return localStorage.getItem("darkMode") === "true";
  },

  saveDarkMode: (isDark) => {
    localStorage.setItem("darkMode", isDark.toString());
  },
};

export default localStorageUtils;