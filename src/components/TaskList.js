import { useState, useEffect } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete, onEditTask, onDeleteTask, searchQuery, activeFilter }) => {
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    let filtered = [...tasks];

    if (activeFilter === 'completed') {
      filtered = filtered.filter(task => task.completed);
    } else if (activeFilter === 'pending') {
      filtered = filtered.filter(task => !task.completed);
    }

    if (searchQuery) {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    filtered.sort((a, b) => {
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
      }
      
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      const aPriority = priorityOrder[a.priority] || 1;
      const bPriority = priorityOrder[b.priority] || 1;
      
      if (aPriority !== bPriority) {
        return bPriority - aPriority;
      }
      
      if (a.dueDate && b.dueDate) {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    setFilteredTasks(filtered);
  }, [tasks, activeFilter, searchQuery]);

  if (filteredTasks.length === 0) {
    return (
      <div className="empty-state">
        <p>
          {searchQuery
            ? 'No tasks found matching your search.'
            : activeFilter === 'all'
            ? 'No tasks yet. Add your first task to get started!'
            : activeFilter === 'completed'
            ? 'No completed tasks.'
            : 'No pending tasks.'}
        </p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;