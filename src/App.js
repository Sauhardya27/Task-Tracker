import { useState, useEffect } from 'react';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';
import localStorageUtils from './utils/localStorage';
import { Search, Plus, Moon, Sun } from 'lucide-react';
import './styles/App.css';

const App = () => {
  const [user, setUser] = useState("");
  const [tasks, setTasks] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedUser = localStorageUtils.getUser();
    const savedTasks = localStorageUtils.getTasks();
    const savedDarkMode = localStorageUtils.getDarkMode();

    if (savedUser) {
      setUser(savedUser);
    }
    setTasks(savedTasks);
    setDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    localStorageUtils.saveUser("");
    setUser("");
    setTasks([]);
    setSearchQuery("");
    setActiveFilter("all");
  };

  const handleAddTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      ...taskData,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorageUtils.saveTasks(updatedTasks);
  };

  const handleUpdateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    localStorageUtils.saveTasks(updatedTasks);
    setEditingTask(null);
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorageUtils.saveTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorageUtils.saveTasks(updatedTasks);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowTaskForm(true);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorageUtils.saveDarkMode(newDarkMode);
  };

  const getTaskCounts = () => {
    const completed = tasks.filter((task) => task.completed).length;
    const pending = tasks.filter((task) => !task.completed).length;

    return {
      all: tasks.length,
      completed,
      pending,
    };
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const taskCounts = getTaskCounts();

  return (
    <div className="app">
      <div className="app-header">
        <div className="header-content">
          <div className="header-left">
            <h1>📋 Task Tracker</h1>
            <span className="welcome-text">Welcome, {user}!</span>
          </div>

          <div className="header-right">
            <button onClick={toggleDarkMode} className="theme-toggle">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="app-main">
        <div className="task-controls">
          <div className="search-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <button
            onClick={() => setShowTaskForm(true)}
            className="add-task-btn"
          >
            <Plus size={20} />
            Add Task
          </button>
        </div>

        <TaskFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          taskCounts={taskCounts}
        />

        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
          searchQuery={searchQuery}
          activeFilter={activeFilter}
        />
      </div>

      {showTaskForm && (
        <TaskForm
          onAddTask={handleAddTask}
          onClose={() => {
            setShowTaskForm(false);
            setEditingTask(null);
          }}
          taskToEdit={editingTask}
          onUpdateTask={handleUpdateTask}
        />
      )}
    </div>
  );
};

export default App;