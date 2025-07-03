import { useState } from 'react';
import { Edit2, Trash2, Calendar, Flag, Tag } from 'lucide-react';

const TaskItem = ({ task, onToggleComplete, onEditTask, onDeleteTask }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDelete = () => {
    onDeleteTask(task.id);
    setShowDeleteConfirm(false);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const isOverdue = (dueDate) => {
    if (!dueDate) return false;
    return new Date(dueDate) < new Date() && !task.completed;
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''} ${isOverdue(task.dueDate) ? 'overdue' : ''}`}>
      <div className="task-main">
        <div className="task-checkbox">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
          />
        </div>
        
        <div className="task-content">
          <div className="task-header">
            <h4 className="task-title">{task.title}</h4>
            <div className="task-meta">
              <span className="priority-badge" style={{ color: getPriorityColor(task.priority) }}>
                <Flag size={12} />
                {task.priority}
              </span>
              {task.category && (
                <span className="category-badge">
                  <Tag size={12} />
                  {task.category}
                </span>
              )}
            </div>
          </div>
          
          {task.description && (
            <p className="task-description">{task.description}</p>
          )}
          
          <div className="task-dates">
            <span className="created-date">
              Created: {formatDate(task.createdAt)}
            </span>
            {task.dueDate && (
              <span className={`due-date ${isOverdue(task.dueDate) ? 'overdue' : ''}`}>
                <Calendar size={12} />
                Due: {formatDate(task.dueDate)}
              </span>
            )}
          </div>
        </div>
        
        <div className="task-actions">
          <button
            onClick={() => onEditTask(task)}
            className="action-btn edit-btn"
            title="Edit task"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="action-btn delete-btn"
            title="Delete task"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      
      {showDeleteConfirm && (
        <div className="delete-confirm">
          <p>Are you sure you want to delete this task?</p>
          <div className="confirm-actions">
            <button onClick={() => setShowDeleteConfirm(false)} className="cancel-btn">
              Cancel
            </button>
            <button onClick={handleDelete} className="delete-btn">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;