import { useState } from 'react';
import { X } from 'lucide-react';

const TaskForm = ({ onAddTask, onClose, taskToEdit, onUpdateTask }) => {
  const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : '');
  const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');
  const [priority, setPriority] = useState(taskToEdit ? taskToEdit.priority : 'medium');
  const [dueDate, setDueDate] = useState(taskToEdit ? taskToEdit.dueDate : '');
  const [category, setCategory] = useState(taskToEdit ? taskToEdit.category : '');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Task title is required');
      return;
    }

    const taskData = {
      title: title.trim(),
      description: description.trim(),
      priority,
      dueDate,
      category: category.trim(),
      createdAt: taskToEdit ? taskToEdit.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    if (taskToEdit) {
      onUpdateTask({ ...taskToEdit, ...taskData });
    } else {
      onAddTask(taskData);
    }
    
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{taskToEdit ? 'Edit Task' : 'Add New Task'}</h3>
          <button onClick={onClose} className="close-btn">
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="task-form">
          <div className="form-group">
            <label>Task Title *</label>
            <input
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setError('');
              }}
              className={error ? 'error' : ''}
            />
            {error && <span className="error-message">{error}</span>}
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              placeholder="Enter task description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Priority</label>
              <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="form-group">
              <label>Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              placeholder="e.g., Work, Personal, Study"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              {taskToEdit ? 'Update Task' : 'Add Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;