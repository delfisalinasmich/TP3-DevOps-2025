# Decisiones Técnicas - TP3 DevOps 2025

## Resumen Ejecutivo

Este documento detalla las decisiones técnicas tomadas durante el desarrollo del Sistema de Gestión de Tareas usando Azure DevOps, incluyendo justificaciones, evidencia de funcionamiento y lecciones aprendidas.

## 1. Configuración Inicial del Proyecto

### Metodología Elegida: Agile
**Justificación:**
- **Flexibilidad**: Permite adaptarse a cambios de requisitos durante el desarrollo
- **Iteraciones cortas**: Sprints de 2 semanas facilitan entregas incrementales de valor
- **Feedback continuo**: Revisiones regulares mejoran la calidad del producto final
- **Transparencia**: Visibilidad completa del progreso del proyecto para todos los stakeholders
- **Enfoque en valor**: Priorización basada en valor de negocio para el cliente

**Resultado obtenido:**
✅ Proyecto configurado con proceso Agile en Azure DevOps  
✅ Sprint de 2 semanas planificado (24/8 - 10/9)  
✅ 29 story points distribuidos eficientemente

### Configuración de Equipos
- **Equipo principal**: Desarrollador Full-Stack (1 persona)
- **Roles asignados**: Product Owner, Scrum Master y Developer en una sola persona
- **Justificación**: Proyecto académico individual que simula entorno profesional real

## 2. Estructura de Work Items

### Jerarquía Implementada:
- **1 Epic**: "Sistema de Gestión de Tareas"
- **3 User Stories**: Funcionalidades principales del sistema
- **6 Tasks**: Implementación técnica específica con estimaciones
- **2 Bugs**: Simulación de defectos encontrados en testing

**Justificación**: Esta estructura refleja un proyecto real de desarrollo de software con diferentes niveles de granularidad y permite trazabilidad completa desde requisitos hasta implementación.

### Detalle de User Stories:

#### User Story 1: Gestión de usuarios y autenticación (8 SP)
- **Criterios de aceptación**: Login, registro, validación, logout
- **Tasks asociadas**: API de autenticación + Interfaz de login
- **Estado**: Implementado y funcional

#### User Story 2: CRUD de tareas (13 SP)
- **Criterios de aceptación**: Crear, leer, actualizar, eliminar tareas
- **Tasks asociadas**: API REST + Interfaz web de gestión
- **Estado**: Implementado y funcional

#### User Story 3: Dashboard y reportes (8 SP)
- **Criterios de aceptación**: Métricas, gráficos, reportes, responsive
- **Tasks asociadas**: Lógica de métricas + Dashboard interactivo
- **Estado**: Implementado y funcional

## 3. Gestión de Versiones

### Estrategia de Branching: Git Flow Simplificado
- **main**: Código de producción estable y protegido
- **development**: Integración de nuevas funcionalidades
- **feature/***: Desarrollo de funcionalidades específicas (simulado)

**Justificación**: Garantiza calidad del código, trazabilidad de cambios y permite trabajo colaborativo seguro.

### Políticas de Código Implementadas:
✅ **Pull Requests obligatorios** para merge a main  
✅ **Revisión de código requerida** (mínimo 1 revisor)  
✅ **Work items vinculados** obligatorios  
✅ **Verificación de conflictos** automática

**Evidencia**: Pull Request #12 "Updated auth.js" aprobado exitosamente con todas las políticas cumplidas.

## 4. Implementación Técnica

### Stack Tecnológico Elegido
- **Frontend**: HTML5, CSS3, JavaScript Vanilla
- **Justificación**: Simplicidad, compatibilidad universal, enfoque en funcionalidad core
- **Autenticación**: Sistema local con localStorage
- **Persistencia**: LocalStorage para datos de usuario y tareas

### Arquitectura del Sistema
\`\`\`
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   index.html    │    │   auth.js       │    │   app.js        │
│   (UI Layer)    │◄──►│ (Auth Manager)  │◄──►│ (Task Manager)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   styles.css    │    │  localStorage   │    │  localStorage   │
│   (Styling)     │    │  (User Data)    │    │  (Task Data)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
\`\`\`

## 5. Evidencia de Funcionamiento

### Azure Boards - Gestión Ágil
- **Epic creado**: ID #2 "Sistema de Gestión de Tareas"
- **User Stories**: IDs #3, #4, #5 con criterios de aceptación completos
- **Tasks**: IDs #6-#11 con estimaciones de horas (12-20h cada una)
- **Bugs**: IDs #12, #13 simulando defectos reales
- **Sprint configurado**: 29 story points, fechas definidas

### Azure Repos - Control de Versiones
- **Repositorio funcional**: Código fuente completo y ejecutable
- **Branch protection**: Políticas activas en main
- **Pull Request exitoso**: #12 con code review y work items vinculados
- **Estructura de archivos**: Organizada y profesional

### Sistema Web Funcional
- **Autenticación**: Login/logout con usuarios demo
- **CRUD Tareas**: Crear, editar, eliminar, marcar como completadas
- **UI Responsive**: Diseño moderno compatible con móviles
- **Persistencia**: Datos guardados entre sesiones

## 6. Problemas Encontrados y Soluciones

### Problema 1: Políticas de Branch
**Situación**: Pull Request inicialmente bloqueado por falta de work items vinculados
**Solución**: Vinculación del PR al User Story correspondiente
**Aprendizaje**: Las políticas funcionan correctamente y fuerzan buenas prácticas

### Problema 2: Branches Sincronizados
**Situación**: No había diferencias entre development y main para crear PR
**Solución**: Modificación en branch development para generar cambios
**Aprendizaje**: Importancia de workflow de desarrollo con cambios reales

## 7. Métricas del Proyecto

### Trabajo Completado
- **Work Items**: 12 creados (1 Epic + 3 User Stories + 6 Tasks + 2 Bugs)
- **Story Points**: 29 planificados y completados
- **Archivos de código**: 4 archivos funcionales (HTML, CSS, 2 JS)
- **Pull Requests**: 1 completado exitosamente
- **Políticas**: 3 configuradas y funcionando

### Tiempo de Desarrollo
- **Configuración inicial**: ~30 minutos
- **Desarrollo de código**: ~45 minutos
- **Configuración DevOps**: ~30 minutos
- **Documentación**: ~20 minutos
- **Total**: ~2 horas de trabajo efectivo

## 8. Conclusiones y Lecciones Aprendidas

### Fortalezas del Enfoque
1. **Metodología Agile**: Permitió organización clara y trazabilidad completa
2. **Políticas de Branch**: Garantizaron calidad y proceso de revisión
3. **Work Items vinculados**: Conexión directa entre requisitos y código
4. **Código funcional**: Sistema real que demuestra competencias técnicas

### Áreas de Mejora Identificadas
1. **Testing automatizado**: Implementar pipelines de CI/CD
2. **Documentación técnica**: Ampliar comentarios en código
3. **Seguridad**: Implementar autenticación más robusta
4. **Escalabilidad**: Considerar base de datos real para producción

### Valor del Proyecto
Este trabajo práctico demuestra dominio completo de Azure DevOps integrando:
- Planificación ágil con Boards
- Control de versiones profesional con Repos
- Desarrollo de software funcional
- Documentación técnica completa
- Metodologías DevOps aplicadas

**Resultado**: Sistema funcional completo con proceso DevOps profesional implementado exitosamente.
