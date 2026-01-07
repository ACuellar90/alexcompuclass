# 🚀 AlexCompuClass

**Plataforma educativa online para Ciencias de la Computación - Bachillerato**

![Status](https://img.shields.io/badge/status-en%20desarrollo-yellow)
![Version](https://img.shields.io/badge/version-1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📖 Descripción

AlexCompuClass es una plataforma web moderna y profesional diseñada para facilitar la enseñanza de Ciencias de la Computación a estudiantes de bachillerato en El Salvador. La plataforma permite al profesor administrar contenido fácilmente sin necesidad de conocimientos técnicos avanzados.

### ✨ Características Principales

- 🎨 **Diseño Moderno** - Interfaz atractiva con animaciones y efectos visuales
- 📱 **Responsive** - Funciona perfectamente en móvil, tablet y desktop
- ⚡ **Actualización Fácil** - Contenido manejado desde Google Sheets
- 🆓 **Hosting Gratuito** - Alojado en GitHub Pages
- 💰 **Monetizable** - Preparado para Google AdSense
- 🔄 **Dinámico** - Contenido actualizado automáticamente

---

## 🗂️ Estructura del Proyecto

```
AlexCompuClass/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos personalizados
├── js/
│   ├── main.js           # JavaScript principal
│   └── sheets-api.js     # Conexión con Google Sheets
├── images/
│   └── (imágenes del sitio)
├── docs/
│   ├── PLAN_DE_DESARROLLO.md
│   ├── TUTORIAL_GOOGLE_SHEETS.md
│   ├── TUTORIAL_GITHUB_PAGES.md
│   └── TUTORIAL_ADMINISTRACION.md
├── README.md              # Este archivo
└── .gitignore            # Archivos a ignorar en Git
```

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (Vanilla ES6+)

### Backend/Datos
- Google Sheets API
- Google Drive (almacenamiento de archivos)

### Hosting
- GitHub Pages (gratuito)

### Herramientas
- Git/GitHub
- Google Analytics (opcional)
- Google AdSense (opcional)

---

## 🚀 Instalación y Configuración

### Prerrequisitos
- Cuenta de Google (para Sheets y Drive)
- Cuenta de GitHub (para hosting)
- Navegador web moderno

### Paso 1: Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/alexcompuclass.git
cd alexcompuclass
```

### Paso 2: Configurar Google Sheets
1. Crea una copia del [Google Sheet Template](#)
2. Obtén tu API Key de Google Sheets
3. Actualiza `js/sheets-api.js` con tu Sheet ID

### Paso 3: Personalizar Contenido
1. Edita `index.html` con tu información de contacto
2. Agrega tu logo en `images/`
3. Personaliza colores en `css/styles.css` (opcional)

### Paso 4: Subir a GitHub Pages
1. Crea un repositorio en GitHub
2. Sube los archivos
3. Activa GitHub Pages en Settings
4. ¡Listo! Tu sitio estará en `https://tu-usuario.github.io/alexcompuclass`

**Ver guía detallada:** [TUTORIAL_GITHUB_PAGES.md](docs/TUTORIAL_GITHUB_PAGES.md)

---

## 📊 Administración de Contenido

Todo el contenido se maneja desde un Google Sheet. No necesitas tocar código para:

- ✅ Agregar/editar tareas
- ✅ Publicar recursos descargables
- ✅ Agregar enlaces de Code.org
- ✅ Publicar anuncios
- ✅ Actualizar calendario

**Ver guía completa:** [TUTORIAL_ADMINISTRACION.md](docs/TUTORIAL_ADMINISTRACION.md)

### Estructura del Google Sheet

El Google Sheet tiene 6 hojas:

1. **Unidades** - Información de cada unidad del curso
2. **Tareas** - Tareas y asignaciones
3. **Recursos** - Materiales descargables
4. **CodeOrg** - Enlaces a ejercicios de Code.org
5. **Anuncios** - Mensajes importantes
6. **Configuración** - Ajustes generales

---

## 💡 Uso Básico

### Para Agregar una Tarea:
1. Abre tu Google Sheet
2. Ve a la hoja "Tareas"
3. Agrega una nueva fila con:
   - Título de la tarea
   - Descripción
   - Fecha de entrega
   - Link (si aplica)
4. Guarda (automático)
5. La página se actualiza automáticamente

### Para Agregar un Recurso:
1. Sube el archivo a Google Drive
2. Obtén el link de compartir
3. En la hoja "Recursos" agrega:
   - Nombre del recurso
   - Tipo (PDF, Video, etc.)
   - Descripción
   - Link de descarga
4. ¡Listo!

---

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `css/styles.css`:

```css
:root {
    --primary: #00d9ff;      /* Color principal */
    --secondary: #0066ff;    /* Color secundario */
    --accent: #ff00ff;       /* Color de acento */
    --dark: #0a0e27;         /* Fondo oscuro */
}
```

### Cambiar Fuentes
Las fuentes actuales son:
- **Orbitron** (títulos)
- **Exo 2** (texto)

Para cambiar, edita el link de Google Fonts en `index.html`

### Agregar Secciones
El código está modularizado y comentado. Puedes duplicar secciones existentes y modificarlas.

---

## 💰 Monetización

### Google AdSense
1. Crea cuenta en [Google AdSense](https://www.google.com/adsense/)
2. Obtén tu código de anuncio
3. Agrega el código en las secciones designadas en `index.html`
4. Espera aprobación de Google

### Espacios para Anuncios:
- Header (banner superior)
- Entre secciones (anuncios nativos)
- Sidebar (si agregas)
- Footer

**Nota:** Necesitas tráfico constante para generar ingresos significativos.

---

## 📈 Analytics

### Google Analytics
1. Crea propiedad en [Google Analytics](https://analytics.google.com/)
2. Obtén tu Tracking ID
3. Agrega el código antes de `</head>` en `index.html`

### Métricas a Monitorear:
- Visitas diarias/mensuales
- Páginas más visitadas
- Tiempo en sitio
- Tasa de rebote
- Dispositivos usados

---

## 🐛 Solución de Problemas

### La página no carga los datos del Sheet
- Verifica que el Sheet sea público (Anyone with link can view)
- Confirma que el Sheet ID sea correcto en `sheets-api.js`
- Revisa la consola del navegador (F12) para errores

### Los archivos no descargan
- Verifica que los links de Google Drive sean públicos
- Asegúrate que tengan permisos de "Anyone with link can view"

### Página no se ve en GitHub Pages
- Verifica que GitHub Pages esté activado
- Confirma que el repositorio sea público
- Espera 5-10 minutos después de activar

---

## 🤝 Contribuir

Este es un proyecto educativo personal, pero sugerencias son bienvenidas:

1. Reporta bugs en Issues
2. Sugiere mejoras
3. Comparte el proyecto

---

## 📝 Roadmap

### Versión 1.0 (Actual)
- [x] Diseño responsive
- [x] Integración con Google Sheets
- [x] Secciones principales
- [ ] Documentación completa

### Versión 1.5 (Próxima)
- [ ] Panel de administración visual
- [ ] Sistema de búsqueda
- [ ] Modo oscuro/claro
- [ ] PWA (Progressive Web App)

### Versión 2.0 (Futuro)
- [ ] Login de estudiantes
- [ ] Sistema de calificaciones
- [ ] Foro/comentarios
- [ ] Quiz interactivos
- [ ] Gamificación

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

---

## 👤 Autor

**Alex** - Profesor de Informática  
📧 Email: alex@compuclass.com  
🌐 Web: [alexcompuclass.com](#)

---

## 🙏 Agradecimientos

- Estudiantes de bachillerato por su feedback
- MINED El Salvador por el programa de estudios
- Code.org por los recursos educativos
- Comunidad de desarrollo web

---

## 📞 Soporte

¿Necesitas ayuda? 

- 📧 Email: alex@compuclass.com
- 💬 WhatsApp: +503 XXXX-XXXX
- 🐛 Issues: [GitHub Issues](#)

---

**⭐ Si te gusta este proyecto, dale una estrella en GitHub!**

---

Última actualización: Enero 2025
