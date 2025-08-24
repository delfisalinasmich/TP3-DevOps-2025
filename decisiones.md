# Decisiones Técnicas - TP3 DevOps 2025

## 1. Configuración inicial del proyecto

### Metodología elegida: Agile
**Justificación:**
- **Flexibilidad**: Permite adaptarse a cambios de requisitos durante el desarrollo
- **Iteraciones cortas**: Sprints de 2 semanas facilitan entregas incrementales
- **Feedback continuo**: Revisiones regulares mejoran la calidad del producto
- **Transparencia**: Visibilidad completa del progreso del proyecto
- **Enfoque en valor**: Priorización basada en valor de negocio para el cliente

### Configuración de equipos
- **Equipo principal**: Desarrollador Full-Stack (1 persona)
- **Roles asignados**: Product Owner, Scrum Master y Developer en una sola persona
- **Justificación**: Proyecto académico individual que simula entorno profesional

## 2. Estructura de Work Items

### Jerarquía elegida:
- **1 Epic**: "Sistema de Gestión de Tareas"
- **3 User Stories**: Funcionalidades principales del sistema
- **6 Tasks**: Implementación técnica específica
- **2 Bugs**: Simulación de defectos encontrados en testing

**Justificación**: Esta estructura refleja un proyecto real de desarrollo de software con diferentes niveles de granularidad.

## 3. Gestión de versiones

### Estrategia de branching: Git Flow simplificado
- **main**: Código de producción estable
- **develop**: Integración de nuevas funcionalidades
- **feature/***: Desarrollo de funcionalidades específicas

### Políticas de código:
- Pull Requests obligatorios para merge a main
- Revisión de código requerida
- Tests automáticos (simulados)

**Justificación**: Garantiza calidad del código y trazabilidad de cambios.