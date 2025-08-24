# Sistema de Gestión de Tareas - TP3 DevOps 2025

## Descripción del Proyecto

Sistema web completo para gestión de tareas desarrollado como trabajo práctico de Azure DevOps. Implementa funcionalidades de autenticación, CRUD de tareas y dashboard con métricas, siguiendo metodologías ágiles y mejores prácticas de DevOps.

## Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Autenticación**: Sistema local con localStorage
- **Gestión de Estado**: JavaScript nativo
- **Estilos**: CSS responsive con diseño moderno
- **Control de Versiones**: Git con Azure Repos

## Estructura del Proyecto

\`\`\`
├── src/
│   ├── index.html          # Página principal del sistema
│   ├── styles.css          # Estilos CSS responsive
│   ├── app.js             # Lógica principal de gestión de tareas
│   └── auth.js            # Sistema de autenticación
├── README.md              # Este archivo
└── decisiones.md          # Documentación de decisiones técnicas
\`\`\`

## Funcionalidades Implementadas

### 🔐 Sistema de Autenticación
- Login con email y contraseña
- Usuarios demo preconfigurados
- Persistencia de sesión con localStorage
- Logout seguro

**Usuarios de prueba:**
- `admin@tasks.com` / `admin123`
- `user@tasks.com` / `user123`

### ✅ Gestión de Tareas (CRUD)
- Crear nuevas tareas con título y descripción
- Visualizar lista de tareas del usuario
- Marcar tareas como completadas
- Eliminar tareas
- Filtrado por usuario autenticado

### 📊 Dashboard y Métricas
- Interfaz responsive y moderna
- Visualización de tareas por estado
- Acciones rápidas sobre tareas
- Diseño intuitivo y profesional

## Instalación y Ejecución

### Prerrequisitos
- Navegador web moderno
- Servidor web local (opcional)

### Pasos para ejecutar

1. **Clonar el repositorio:**
   \`\`\`bash
   git clone https://dev.azure.com/delfisalinas/TP3-DevOps-2025/_git/TP3-DevOps-2025
   cd TP3-DevOps-2025
   \`\`\`

2. **Ejecutar localmente:**
   - Opción 1: Abrir `src/index.html` directamente en el navegador
   - Opción 2: Usar servidor local:
     \`\`\`bash
     # Con Python
     python -m http.server 8000
     
     # Con Node.js
     npx serve src
     \`\`\`

3. **Acceder al sistema:**
   - URL: `http://localhost:8000` (si usas servidor)
   - O directamente el archivo HTML

## Metodología de Desarrollo

### Proceso Ágil Implementado
- **Framework**: Agile con Scrum
- **Sprints**: 2 semanas de duración
- **Work Items**: Epic → User Stories → Tasks → Bugs
- **Planificación**: 29 story points distribuidos

### Estructura de Work Items
- **1 Epic**: Sistema de Gestión de Tareas
- **3 User Stories**: Autenticación, CRUD, Dashboard
- **6 Tasks**: Implementación técnica específica
- **2 Bugs**: Defectos simulados para testing

### Control de Versiones
- **Branching Strategy**: Git Flow simplificado
- **Branch Protection**: Políticas en `main`
- **Code Review**: Pull Requests obligatorios
- **Work Item Linking**: Trazabilidad completa

## Políticas de Branch Implementadas

- ✅ **Pull Requests obligatorios** para merge a main
- ✅ **Revisión de código requerida** (mínimo 1 revisor)
- ✅ **Work items vinculados** obligatorios
- ✅ **Sin conflictos de merge** verificados automáticamente

## Evidencia de Funcionamiento

### Azure DevOps - Boards
- Epic y User Stories creados y organizados
- Tasks con estimaciones de esfuerzo
- Sprint configurado con 29 story points
- Bugs documentados para testing

### Azure DevOps - Repos
- Código fuente completo y funcional
- Branch `main` protegido con políticas
- Branch `development` para nuevas funcionalidades
- Pull Request #12 aprobado y funcional

### Sistema Web
- Autenticación funcional con usuarios demo
- CRUD completo de tareas
- Interfaz responsive y profesional
- Persistencia de datos local

## Acceso al Proyecto

**Azure DevOps:** https://dev.azure.com/delfisalinas/TP3-DevOps-2025

**Repositorio:** https://dev.azure.com/delfisalinas/TP3-DevOps-2025/_git/TP3-DevOps-2025

## Autor

**Delfina Salinas**  
Trabajo Práctico 03 - Azure DevOps 2025  
Cátedra de DevOps y Metodologías Ágiles
