# 🚀 GUÍA DE INICIO RÁPIDO - AlexCompuClass

**¡Bienvenido! Esta guía te ayudará a tener tu página funcionando en 30 minutos.**

---

## ⚡ RESUMEN ULTRA-RÁPIDO

1. ✅ Crear Google Sheet
2. ✅ Configurar Sheet ID en el código  
3. ✅ Subir a GitHub
4. ✅ Activar GitHub Pages
5. ✅ ¡Listo!

---

## 📋 PASO A PASO SIMPLIFICADO

### 1️⃣ CONFIGURAR GOOGLE SHEET (10 min)

1. Ve a [sheets.google.com](https://sheets.google.com)
2. Crea nuevo Sheet: "AlexCompuClass - Base de Datos"
3. Crea 6 hojas (pestañas):
   - Unidades
   - Tareas
   - Recursos
   - CodeOrg
   - Anuncios
   - Configuracion

4. En cada hoja, agrega los encabezados:

**Unidades:**
```
ID | Numero | Titulo | Descripcion | Temas | Icono
```

**Tareas:**
```
ID | Titulo | Descripcion | Unidad | FechaEntrega | Link | Estado
```

**Recursos:**
```
ID | Nombre | Tipo | Descripcion | LinkDescarga | Icono | Unidad
```

**CodeOrg:**
```
ID | Titulo | Unidad | Link | Nivel | Descripcion
```

**Anuncios:**
```
ID | Fecha | Titulo | Mensaje | Tipo | Activo
```

**Configuracion:**
```
Clave | Valor | Descripcion
```

5. Agrega al menos 1 fila de datos de ejemplo en cada hoja

6. **IMPORTANTE:** Compartir el Sheet:
   - Click "Compartir"
   - "Cualquier persona con el enlace"
   - Permiso: "Lector"

7. Copia el ID del Sheet (está en la URL):
   ```
   https://docs.google.com/spreadsheets/d/[ESTE_ES_EL_ID]/edit
   ```

---

### 2️⃣ CONFIGURAR EL CÓDIGO (2 min)

1. Abre el archivo: `js/sheets-api.js`

2. En la línea 8, reemplaza:
   ```javascript
   const SHEET_ID = 'TU_SHEET_ID_AQUI';
   ```
   
   Con tu ID real:
   ```javascript
   const SHEET_ID = '1a2b3c4d5e...tu_id_real';
   ```

3. Guarda el archivo

---

### 3️⃣ SUBIR A GITHUB (10 min)

#### Opción A: Por la Web (Más Fácil)

1. Ve a [github.com](https://github.com)
2. Crea cuenta si no tienes
3. Click "+" → "New repository"
4. Nombre: `alexcompuclass`
5. Público ✅
6. "Create repository"
7. Click "uploading an existing file"
8. Arrastra TODOS los archivos de la carpeta `AlexCompuClass`
9. Commit changes

#### Opción B: Con Git

```bash
cd AlexCompuClass
git init
git add .
git commit -m "Primer commit"
git remote add origin https://github.com/TU-USUARIO/alexcompuclass.git
git push -u origin main
```

---

### 4️⃣ ACTIVAR GITHUB PAGES (3 min)

1. En tu repositorio → Settings
2. Menú izquierdo → Pages
3. Source: `main`
4. Folder: `/ (root)`
5. Save
6. Espera 2-5 minutos
7. Tu página estará en:
   ```
   https://TU-USUARIO.github.io/alexcompuclass/
   ```

---

### 5️⃣ VERIFICAR QUE FUNCIONA (5 min)

1. Abre tu URL en el navegador
2. Verifica:
   - [ ] La página carga
   - [ ] Se ven los datos de tu Sheet
   - [ ] Navegación funciona
   - [ ] Responsive en móvil

3. Si algo falla:
   - Revisa la consola (F12)
   - Verifica el Sheet ID
   - Asegura que el Sheet sea público

---

## 🎯 ¡LISTO!

Tu página está funcionando. Ahora puedes:

1. ✅ Compartir la URL con estudiantes
2. ✅ Agregar contenido desde Google Sheets
3. ✅ Ver tutoriales detallados en `/docs/`

---

## 📚 PRÓXIMOS PASOS

**Para mejorar tu página:**

1. **Personalizar:**
   - Edita información de contacto
   - Cambia colores (opcional)
   - Agrega tu logo

2. **Agregar Contenido:**
   - Sube recursos a Google Drive
   - Crea primeras tareas
   - Agrega ejercicios de Code.org

3. **Monetizar:**
   - Aplica a Google AdSense
   - Agrega código de anuncios

4. **Analytics:**
   - Crea cuenta Google Analytics
   - Agrega código de tracking

---

## 🆘 PROBLEMAS COMUNES

### "Los datos no cargan"
✅ Verifica que el Sheet sea público  
✅ Confirma que el ID sea correcto  
✅ Revisa consola del navegador (F12)

### "Página 404"
✅ Espera 5 minutos más  
✅ Verifica que GitHub Pages esté activado  
✅ Asegura que el repo sea público

### "Sin estilos"
✅ Verifica que subiste la carpeta `css/`  
✅ Limpia caché (Ctrl+Shift+R)

---

## 📖 DOCUMENTACIÓN COMPLETA

Para guías detalladas, ve a la carpeta `/docs/`:

- `PLAN_DE_DESARROLLO.md` - Plan completo del proyecto
- `TUTORIAL_GOOGLE_SHEETS.md` - Guía detallada de Sheets
- `TUTORIAL_GITHUB_PAGES.md` - Guía completa de GitHub
- `TUTORIAL_ADMINISTRACION.md` - Cómo administrar contenido

---

## 💬 SOPORTE

¿Necesitas ayuda?

- 📧 Email: alex@compuclass.com
- 💬 WhatsApp: +503 XXXX-XXXX
- 🐛 GitHub Issues

---

**¡Felicidades por tu nueva plataforma educativa!** 🎉

Creado con ❤️ para estudiantes de Ciencias de la Computación
