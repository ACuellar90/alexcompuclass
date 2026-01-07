# 📊 TUTORIAL: Configuración de Google Sheets

**Guía paso a paso para configurar tu Google Sheet como base de datos**

---

## 🎯 Objetivo

Crear y configurar un Google Sheet que funcionará como tu "base de datos" para AlexCompuClass. Desde aquí administrarás todo el contenido sin tocar código.

---

## 📋 PASO 1: Crear el Google Sheet

### 1.1 Crear nuevo Sheet
1. Ve a [Google Sheets](https://sheets.google.com)
2. Click en "+ Nuevo" o "Blank"
3. Nombre: **"AlexCompuClass - Base de Datos"**

### 1.2 Configurar compartir
1. Click en "Compartir" (esquina superior derecha)
2. En "Acceso general" selecciona:
   - **"Cualquier persona con el enlace"**
   - **"Lector"** (importante: solo lectura)
3. Copia el ID del Sheet (lo necesitarás después)
   - El ID está en la URL: `docs.google.com/spreadsheets/d/[ESTE_ES_EL_ID]/edit`

---

## 📑 PASO 2: Crear las Hojas (Pestañas)

Vamos a crear 6 hojas diferentes. Renombra las pestañas así:

1. Unidades
2. Tareas
3. Recursos
4. CodeOrg
5. Anuncios
6. Configuracion

### Cómo renombrar:
- Click derecho en la pestaña → "Renombrar"

---

## 📊 PASO 3: Estructura de Cada Hoja

### 🔷 HOJA 1: "Unidades"

**Columnas (Fila 1):**

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| ID | Numero | Titulo | Descripcion | Temas | Icono |

**Ejemplo de datos (Fila 2):**

| ID | Numero | Titulo | Descripcion | Temas | Icono |
|---|---|---|---|---|---|
| 1 | UNIDAD 1 | Fundamentos de Computación | Introducción a sistemas, hardware y software | Hardware, Software, Sistemas | 💻 |

**Agregar más unidades:**
- Copia la fila 2
- Cambia el ID (2, 3, 4, etc.)
- Modifica el contenido

---

### 📝 HOJA 2: "Tareas"

**Columnas (Fila 1):**

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| ID | Titulo | Descripcion | Unidad | FechaEntrega | Link | Estado |

**Ejemplo de datos (Fila 2):**

| ID | Titulo | Descripcion | Unidad | FechaEntrega | Link | Estado |
|---|---|---|---|---|---|---|
| 1 | Tarea 1 - Variables en Python | Crear programa con variables y entrada de datos | 3 | 2025-01-20 | https://classroom.google.com/... | Activa |

**Notas:**
- **FechaEntrega:** Formato YYYY-MM-DD
- **Link:** Puede ser Google Classroom, Form, o cualquier enlace
- **Estado:** Activa, Completada, Atrasada

---

### 📚 HOJA 3: "Recursos"

**Columnas (Fila 1):**

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| ID | Nombre | Tipo | Descripcion | LinkDescarga | Icono | Unidad |

**Ejemplo de datos (Fila 2):**

| ID | Nombre | Tipo | Descripcion | LinkDescarga | Icono | Unidad |
|---|---|---|---|---|---|---|
| 1 | Guía de HTML Básico | PDF | Introducción a etiquetas HTML | https://drive.google.com/file/d/... | 📄 | 4 |

**Tipos comunes:**
- PDF
- Video
- Presentación
- Código
- Link Externo

**Cómo obtener link de Google Drive:**
1. Sube archivo a Drive
2. Click derecho → "Obtener enlace"
3. Cambiar a "Cualquier persona con el enlace"
4. Copiar enlace

---

### 🎮 HOJA 4: "CodeOrg"

**Columnas (Fila 1):**

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| ID | Titulo | Unidad | Link | Nivel | Descripcion |

**Ejemplo de datos (Fila 2):**

| ID | Titulo | Unidad | Link | Nivel | Descripcion |
|---|---|---|---|---|---|
| 1 | Laberinto Básico | 2 | https://studio.code.org/s/course1/lessons/3 | Básico | Aprende secuencias con laberintos |

**Niveles:**
- Básico
- Intermedio
- Avanzado
- Desafío

---

### 📢 HOJA 5: "Anuncios"

**Columnas (Fila 1):**

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| ID | Fecha | Titulo | Mensaje | Tipo | Activo |

**Ejemplo de datos (Fila 2):**

| ID | Fecha | Titulo | Mensaje | Tipo | Activo |
|---|---|---|---|---|---|
| 1 | 2025-01-15 | Examen Próximo | Recuerden estudiar unidades 1-3 | Importante | SI |

**Tipos:**
- Importante
- Recordatorio
- Novedad
- Evento

**Activo:**
- SI = Se muestra en la página
- NO = Oculto

---

### ⚙️ HOJA 6: "Configuracion"

**Columnas (Fila 1):**

| A | B | C |
|---|---|---|
| Clave | Valor | Descripcion |

**Datos de ejemplo:**

| Clave | Valor | Descripcion |
|---|---|---|
| profesor_nombre | Profesor Alex | Nombre del profesor |
| profesor_email | alex@compuclass.com | Email de contacto |
| profesor_whatsapp | +503 XXXX-XXXX | WhatsApp |
| semestre_actual | Primer Semestre 2025 | Período actual |
| horario_consultas | Lunes a Viernes 8AM-4PM | Horario de atención |

---

## 🎨 PASO 4: Formato y Organización

### 4.1 Formato de Encabezados
1. Selecciona la fila 1 de cada hoja
2. **Negrita** (Ctrl/Cmd + B)
3. **Color de fondo:** Azul claro o gris
4. **Alinear:** Centrado

### 4.2 Congelar Fila de Encabezados
1. Click en "Ver"
2. "Congelar"
3. "1 fila"
4. Ahora el encabezado siempre será visible

### 4.3 Ajustar Anchos de Columna
- Doble click entre columnas para auto-ajustar
- O arrastra manualmente

### 4.4 Filtros (Opcional pero útil)
1. Selecciona fila de encabezados
2. Click en "Datos" → "Crear un filtro"
3. Ahora puedes filtrar y ordenar fácilmente

---

## 🔐 PASO 5: Seguridad y Permisos

### 5.1 Configuración Recomendada

**Para la página web:**
- Compartir: "Cualquier persona con el enlace"
- Permiso: "Lector" (solo lectura)

**Para ti (administrador):**
- Eres el propietario (puedes editar)
- No compartas el link de edición con nadie

### 5.2 Crear Copia de Seguridad
1. "Archivo" → "Crear una copia"
2. Nombrar: "AlexCompuClass - BACKUP [FECHA]"
3. Hacer esto semanalmente

### 5.3 Historial de Versiones
- Google Sheets guarda todo el historial
- "Archivo" → "Historial de versiones"
- Puedes restaurar versiones anteriores

---

## 🚀 PASO 6: Conectar con tu Página Web

### 6.1 Obtener el Sheet ID
1. Abre tu Google Sheet
2. Copia la URL
3. El ID es la parte entre `/d/` y `/edit`:
   ```
   https://docs.google.com/spreadsheets/d/[ESTE_ES_TU_ID]/edit
   ```

### 6.2 Actualizar el Código
En el archivo `js/sheets-api.js` busca:
```javascript
const SHEET_ID = 'TU_SHEET_ID_AQUI';
```

Reemplaza `'TU_SHEET_ID_AQUI'` con tu ID real.

---

## 📝 PASO 7: Uso Diario

### Para Agregar una Tarea:
1. Abre el Sheet
2. Ve a la hoja "Tareas"
3. Agrega nueva fila al final
4. Llena los datos
5. Guarda (automático)
6. Verifica en tu página web (refresca el navegador)

### Para Editar Contenido:
1. Busca la fila a editar
2. Modifica las celdas necesarias
3. Los cambios se reflejan automáticamente

### Para Ocultar Contenido:
- **Tareas:** Cambia Estado a "Completada"
- **Anuncios:** Cambia Activo a "NO"
- **Recursos:** Elimina la fila (o mueve a otra hoja "Archivados")

---

## 🎯 TIPS Y MEJORES PRÁCTICAS

### ✅ DO (Hacer):
- Usa formatos consistentes (fechas, mayúsculas, etc.)
- Llena todas las columnas (no dejes vacías)
- Usa IDs únicos y consecutivos
- Haz backups semanales
- Revisa la página web después de cambios

### ❌ DON'T (No hacer):
- No cambies nombres de hojas (rompe la conexión)
- No borres columnas (solo filas)
- No compartas el link de edición
- No uses caracteres especiales raros
- No dejes celdas importantes vacías

---

## 🐛 Solución de Problemas

### Problema: Los datos no aparecen en la página
**Solución:**
1. Verifica que el Sheet sea público
2. Confirma que el ID sea correcto
3. Revisa que los nombres de hojas sean exactos
4. Espera 1-2 minutos (caché)
5. Refresca la página con Ctrl+F5

### Problema: Error de permisos
**Solución:**
1. "Compartir" → "Cualquier persona con el enlace"
2. Permiso: "Lector"
3. Copia nuevo enlace

### Problema: Fechas se ven raras
**Solución:**
1. Selecciona columna de fechas
2. "Formato" → "Número" → "Fecha"
3. Usa formato: YYYY-MM-DD

---

## 📊 Plantilla de Datos Inicial

### Sugerencia para empezar:
1. Llena al menos 3 unidades
2. Agrega 5 tareas iniciales
3. Sube 5 recursos a Drive
4. Agrega 5 ejercicios de Code.org
5. Crea 2-3 anuncios
6. Completa toda la configuración

Esto te dará contenido suficiente para lanzar la página.

---

## 🎓 Recursos Adicionales

- [Documentación Google Sheets](https://support.google.com/docs/topic/9054603)
- [Fórmulas útiles](https://support.google.com/docs/table/25273)
- [Video tutoriales](https://www.youtube.com/results?search_query=google+sheets+tutorial)

---

## ✅ Checklist de Verificación

Antes de conectar con la página, verifica:

- [ ] Sheet creado y nombrado
- [ ] 6 hojas creadas con nombres correctos
- [ ] Encabezados en todas las hojas
- [ ] Al menos 1 fila de datos de ejemplo en cada hoja
- [ ] Sheet compartido como público (lector)
- [ ] Sheet ID copiado
- [ ] Formato aplicado (negrita, colores)
- [ ] Filas de encabezado congeladas
- [ ] Backup creado

---

**¡Felicidades! Tu Google Sheet está listo para administrar AlexCompuClass** 🎉

**Siguiente paso:** [TUTORIAL_GITHUB_PAGES.md](TUTORIAL_GITHUB_PAGES.md)
