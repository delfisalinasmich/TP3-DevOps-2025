// Sistema de gestión de tareas
class TaskManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.taskIdCounter = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
    }

    addTask(title, description) {
        const task = {
            id: this.taskIdCounter++,
            title,
            description,
            completed: false,
            createdAt: new Date().toISOString(),
            userId: authManager.getCurrentUser()?.email
        };
        this.tasks.push(task);
        this.saveTasks();
        return task;
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
    }

    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
        }
    }

    getUserTasks() {
        const currentUser = authManager.getCurrentUser();
        return this.tasks.filter(task => task.userId === currentUser?.email);
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}

// Inicialización de la aplicación
const taskManager = new TaskManager();

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    const loginForm = document.getElementById('loginForm');
    const taskForm = document.getElementById('taskForm');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    // Event listeners
    loginForm.addEventListener('submit', handleLogin);
    taskForm.addEventListener('submit', handleAddTask);
    loginBtn.addEventListener('click', showLogin);
    logoutBtn.addEventListener('click', handleLogout);

    // Verificar si ya está autenticado
    updateUI();
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (authManager.login(email, password)) {
        updateUI();
        renderTasks();
    } else {
        alert('Credenciales incorrectas');
    }
}

function handleLogout() {
    authManager.logout();
    updateUI();
}

function handleAddTask(e) {
    e.preventDefault();
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDesc').value;

    taskManager.addTask(title, description);
    document.getElementById('taskForm').reset();
    renderTasks();
}

function updateUI() {
    const loginSection = document.getElementById('loginSection');
    const tasksSection = document.getElementById('tasksSection');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (authManager.isAuthenticated()) {
        loginSection.style.display = 'none';
        tasksSection.style.display = 'block';
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
        renderTasks();
    } else {
        loginSection.style.display = 'block';
        tasksSection.style.display = 'none';
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    }
}

function renderTasks() {
    const tasksList = document.getElementById('tasksList');
    const tasks = taskManager.getUserTasks();

    tasksList.innerHTML = tasks.map(task => `
        <div class="task ${task.completed ? 'completed' : ''}">
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <div class="task-actions">
                <button onclick="taskManager.toggleTask(${task.id}); renderTasks()">
                    ${task.completed ? 'Desmarcar' : 'Completar'}
                </button>
                <button onclick="taskManager.deleteTask(${task.id}); renderTasks()">
                    Eliminar
                </button>
            </div>
        </div>
    `).join('');
}

function showLogin() {
    updateUI();
}