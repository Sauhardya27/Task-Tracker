const TaskFilter = ({ activeFilter, onFilterChange, taskCounts }) => {
  const filters = [
    { key: 'all', label: 'All', count: taskCounts.all },
    { key: 'pending', label: 'Pending', count: taskCounts.pending },
    { key: 'completed', label: 'Completed', count: taskCounts.completed }
  ];

  return (
    <div className="task-filter">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
        >
          {filter.label}
          <span className="count">{filter.count}</span>
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;