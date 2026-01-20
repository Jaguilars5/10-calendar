# 📅 Calendar App - Gestión de Eventos

Aplicación de calendario interactiva desarrollada con React y Redux Toolkit, que permite gestionar eventos con autenticación de usuarios.

> 🎓 **Curso**: React de Cero a Experto (Hooks y MERN) - [Fernando Herrera](https://fernando-herrera.com/) | [DevTalles](https://cursos.devtalles.com/)

---

## 📋 Tabla de Contenidos

- [🚀 Descripción](#-descripción)
- [✨ Características](#-características)
- [🛠️ Tecnologías](#️-tecnologías)
- [📦 Instalación](#-instalación)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🎯 Scripts Disponibles](#-scripts-disponibles)
- [🔐 Autenticación](#-autenticación)
- [📚 Funcionalidades](#-funcionalidades)
- [👨‍💻 Autor y Créditos](#-autor-y-créditos)

---

## 🚀 Descripción

Aplicación web de calendario completa que permite a los usuarios gestionar sus eventos de manera visual e interactiva. Incluye sistema de autenticación, creación, edición y eliminación de eventos con una interfaz moderna y responsive.

El proyecto implementa gestión de estado global con Redux Toolkit, enrutamiento con React Router, y una interfaz de calendario potente usando React Big Calendar.

---

## ✨ Características

- ✅ Sistema de autenticación (Login/Logout)
- ✅ Calendario interactivo mensual
- ✅ Creación de eventos con título, descripción y fechas
- ✅ Edición de eventos existentes
- ✅ Eliminación de eventos
- ✅ Modal para gestión de eventos
- ✅ Validación de formularios
- ✅ Selector de fechas intuitivo
- ✅ Gestión de estado global con Redux Toolkit
- ✅ Diseño responsive
- ✅ Estilos modernos con gradientes

---

## 🛠️ Tecnologías

### Core

- ⚛️ **React 18.2** - Biblioteca de UI
- 🔄 **Redux Toolkit 2.2** - Gestión de estado
- 🧭 **React Router DOM 6.22** - Enrutamiento

### Bibliotecas Principales

- 📅 **React Big Calendar 1.10** - Componente de calendario
- 📆 **React DatePicker 6.1** - Selector de fechas
- 📝 **React Modal 3.16** - Modales
- 🎨 **SweetAlert2 11.10** - Alertas bonitas
- 📅 **date-fns 3.3** - Manipulación de fechas

### Herramientas de Desarrollo

- ⚡ **Vite 5.0** - Build tool y dev server
- 🎨 **ESLint** - Linting
- 🔧 **SWC** - Compilador rápido de JavaScript

---

## 📦 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/Jaguilars5/10-calendar.git
cd 10-calendar
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar la aplicación

```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

---

## 📁 Estructura del Proyecto

```
10-calendar/
│
├── 📄 index.html              # HTML principal
├── 📄 package.json            # Dependencias y scripts
├── 📄 vite.config.js          # Configuración de Vite
├── 📄 README.md               # Este archivo
│
└── 📁 src/
    │
    ├── 📄 main.jsx            # ⭐ Punto de entrada
    ├── 📄 CalendarApp.jsx     # Componente principal
    ├── 📄 styles.css          # Estilos globales
    │
    ├── 📁 auth/               # 🔐 Módulo de autenticación
    │   ├── index.js
    │   └── pages/
    │       ├── LoginPage.jsx      # Página de login/registro
    │       └── LoginPage.css      # Estilos de autenticación
    │
    ├── 📁 calendar/           # 📅 Módulo de calendario
    │   ├── index.js
    │   ├── components/
    │   │   ├── CalendarEvent.jsx  # Evento del calendario
    │   │   ├── CalendarModal.jsx  # Modal de evento
    │   │   ├── FabAddNew.jsx      # Botón agregar evento
    │   │   ├── FabDelete.jsx      # Botón eliminar evento
    │   │   └── NavBar.jsx         # Barra de navegación
    │   └── pages/
    │       ├── CalendarPages.jsx  # Página del calendario
    │       └── index.js
    │
    ├── 📁 helpers/            # 🛠️ Utilidades
    │   ├── calendarLocalizer.js   # Configuración de idioma
    │   ├── getMessages.js         # Mensajes del calendario
    │   └── index.js
    │
    ├── 📁 hooks/              # 🎣 Custom Hooks
    │   ├── useAuthStore.js        # Hook de autenticación
    │   ├── useCalendarStore.js    # Hook del calendario
    │   ├── useUiStore.js          # Hook de UI
    │   └── index.js
    │
    ├── 📁 router/             # 🧭 Enrutamiento
    │   ├── AppRouter.jsx          # Configuración de rutas
    │   └── index.js
    │
    └── 📁 store/              # 🗄️ Redux Store
        ├── store.js               # Configuración del store
        ├── index.js
        ├── auth/
        │   └── authSlice.js       # Slice de autenticación
        ├── calendar/
        │   └── calendarSlice.js   # Slice del calendario
        └── ui/
            └── uiSlice.js         # Slice de UI
```

---

## 🎯 Scripts Disponibles

### Desarrollo

```bash
npm run dev
```

Inicia el servidor de desarrollo en `http://localhost:5173` con hot reload.

### Build

```bash
npm run build
```

Crea una versión optimizada para producción en la carpeta `/dist`.

### Preview

```bash
npm run preview
```

Previsualiza la build de producción localmente.

### Lint

```bash
npm run lint
```

Ejecuta ESLint para verificar la calidad del código.

---

## 🔐 Autenticación

### Login

El sistema de autenticación permite a los usuarios iniciar sesión con email y contraseña. Por ahora es una simulación (sin backend).

**Funcionalidades**:

- Formulario de login con validación
- Formulario de registro con validación de contraseñas
- Gestión de estado de autenticación con Redux
- Redirección automática al calendario tras login
- Persistencia del estado de usuario

### Logout

Los usuarios pueden cerrar sesión desde la barra de navegación, lo que:

- Limpia el estado de autenticación
- Redirige a la página de login
- Muestra el nombre del usuario en la navbar

---

## 📚 Funcionalidades

### 📅 Gestión de Eventos

#### Crear Evento

1. Click en el botón flotante "+" (esquina inferior derecha)
2. Completar el formulario:
   - Título del evento
   - Notas adicionales
   - Fecha y hora de inicio
   - Fecha y hora de fin
3. Guardar el evento

#### Editar Evento

1. Click en un evento existente en el calendario
2. Se abre el modal con los datos del evento
3. Modificar los campos necesarios
4. Guardar cambios

#### Eliminar Evento

1. Seleccionar un evento en el calendario
2. Click en el botón de eliminar (icono de basura)
3. Confirmar la eliminación

### 🎨 Interfaz de Usuario

- **Calendario mensual**: Vista completa del mes actual
- **Navegación**: Cambio entre meses
- **Eventos visuales**: Los eventos se muestran con colores y diseño atractivo
- **Modal responsive**: Formulario adaptable a diferentes tamaños de pantalla
- **Estilos modernos**: Gradientes y animaciones suaves

---

## 🏗️ Arquitectura

### Patrones Implementados

1. **Modular por Features**: Organización por módulos (auth, calendar, etc.)
2. **Redux Toolkit**: Gestión de estado global centralizada
3. **Custom Hooks**: Lógica reutilizable separada de la UI
4. **Slices de Redux**: Estado dividido por dominio
5. **Enrutamiento Protegido**: Rutas condicionadas por autenticación

### Custom Hooks Disponibles

| Hook               | Descripción                        |
| ------------------ | ---------------------------------- |
| `useAuthStore`     | Gestión de autenticación y usuario |
| `useCalendarStore` | CRUD de eventos del calendario     |
| `useUiStore`       | Gestión del estado del modal       |

### Slices de Redux

| Slice      | Estado                                 |
| ---------- | -------------------------------------- |
| `auth`     | Usuario autenticado y estado de sesión |
| `calendar` | Eventos y evento activo                |
| `ui`       | Estado de apertura del modal           |

---

## 🎨 Estilos y Diseño

- **Login**: Diseño moderno con gradientes morados y animaciones
- **Calendario**: Interface limpia y profesional
- **Modal**: Formulario estilizado con validación visual
- **Responsive**: Adaptable a móviles y tablets
- **Iconos**: Font Awesome para iconografía

---

## 📖 Recursos de Aprendizaje

- [React Documentation](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com)
- [React Big Calendar](https://jquense.github.io/react-big-calendar/)
- [Date-fns](https://date-fns.org/)

---

## 👨‍💻 Autor y Créditos

**Estudiante**: Jefferson Aguilar  
**GitHub**: [@Jaguilars5](https://github.com/Jaguilars5)

**Instructor del Curso**: [Fernando Herrera](https://fernando-herrera.com/)

- 🎓 Curso: React de Cero a Experto (Hooks y MERN)
- 🔗 [DevTalles](https://cursos.devtalles.com/)

---

## 📄 Licencia

Los ejercicios originales son propiedad intelectual de Fernando Herrera y DevTalles. Este repositorio contiene mi implementación personal de estos ejercicios con fines educativos.

---

## 🙏 Agradecimientos

- A **Fernando Herrera** por el excelente curso de React
- A la comunidad de **DevTalles** por el apoyo
- A los creadores de las bibliotecas open source utilizadas

---

**Última actualización**: Enero 2026

⭐ **Si te gusta este proyecto, dale una estrella!**
