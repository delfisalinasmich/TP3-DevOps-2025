// Sistema de autenticación simple
class AuthManager {
    constructor() {
        this.currentUser = null;
        this.users = [
            { email: 'admin@tasks.com', password: 'admin123', name: 'Administrador' },
            { email: 'user@tasks.com', password: 'user123', name: 'Usuario Demo' }
        ];
    }

    login(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        if (user) {
            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            return true;
        }
        return false;
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }

    isAuthenticated() {
        if (!this.currentUser) {
            const stored = localStorage.getItem('currentUser');
            if (stored) {
                this.currentUser = JSON.parse(stored);
            }
        }
        return this.currentUser !== null;
    }

    getCurrentUser() {
        return this.currentUser;
    }
}

// Instancia global del gestor de autenticación
const authManager = new AuthManager();