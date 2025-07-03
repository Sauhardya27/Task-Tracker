# Personal Task Tracker

## 📖 Description
A simple and intuitive personal task management application built with React. This app allows users to create, edit, delete, and organize their tasks with a clean, responsive interface. Features include task filtering, completion tracking, and persistent data storage using localStorage.

## 🚀 Features
- **Simple Login System**: Basic username-based login with localStorage persistence
- **Task Management**: Create, edit, delete, and toggle completion status of tasks
- **Task Filtering**: Filter tasks by All, Completed, or Pending status
- **Data Persistence**: Tasks are saved to localStorage and persist across browser sessions
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Real-time Updates**: Task counts update dynamically as you interact with tasks
- **Confirmation Dialogs**: Safe deletion with confirmation prompts
- **Inline Editing**: Edit tasks directly in the interface
- **Visual Status Indicators**: Clear visual distinction between completed and pending tasks

## 🛠 Setup Instructions
1. Clone the repository
   ```bash
   git clone https://github.com/Sauhardya27/Task-Tracker.git
   ```
2. Navigate to the project directory
   ```bash
   cd task-tracker
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🧰 Technologies Used
- **React.js** - Frontend framework
- **React Hooks** - State management (useState, useEffect)
- **CSS3** - Styling and responsive design
- **localStorage** - Data persistence
- **HTML5** - Structure and semantics

## 🔗 Live Demo
**[View Live Application](https://task-tracker-eta-ten.vercel.app/)**

## 🖼 Screenshots

### Login Screen
![Login Screen](/public/Login.png)
*Simple and clean login interface*

### Task Dashboard
![Task Dashboard](/public/Dashboard.png)
*Main dashboard showing task management features*

### Task Filtering
![Task Filtering](/public/Filtering.png)
*Filter tasks by completion status*

## 🏗 Project Structure
```
task-tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── TaskForm.js
│   │   ├── TaskItem.js
│   │   ├── TaskList.js
│   │   └── TaskFilter.js
│   ├── utils/
│   │   └── localStorage.js
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   └── index.js
├── README.md
└── package.json
```

## 💡 Key Features Explained

### Task Management
- **Add Tasks**: Simple form with title (required) and description (optional)
- **Edit Tasks**: Inline editing functionality for quick updates
- **Delete Tasks**: Confirmation dialog prevents accidental deletions
- **Toggle Status**: One-click completion toggle with visual feedback

### Filtering System
- **All Tasks**: View complete task list
- **Completed**: Show only finished tasks
- **Pending**: Display tasks that need attention
- **Dynamic Counts**: Real-time count updates for each filter

### Data Persistence
- Automatic saving to localStorage
- Tasks persist across browser sessions
- User login state maintained

## 🎯 Usage Guide
1. **Login**: Enter any username to access the dashboard
2. **Add Task**: Click "Add Task" and fill in the title and optional description
3. **Complete Task**: Click the checkbox to mark tasks as complete
4. **Edit Task**: Click the edit button to modify task details
5. **Delete Task**: Click delete and confirm to remove tasks
6. **Filter Tasks**: Use the filter buttons to view specific task categories

## 🔧 Development Notes
- Built with React functional components and hooks
- Uses CSS Grid and Flexbox for responsive layouts
- Implements proper error handling and edge cases
- Follows React best practices and component organization
- Clean code structure with reusable components

## 🚀 Deployment
This application is deployed on Vercel with automatic deployments from the main branch. The live version includes all features and is optimized for production use.

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License
This project is open source and available under the MIT License.

---

**Built with ❤️ by Sauhardya**
