# 🌐 TUTORIAL: Subir a GitHub Pages

**Guía paso a paso para publicar AlexCompuClass gratis en internet**

---

## 🎯 Objetivo

Subir tu página web a GitHub Pages para que esté disponible públicamente en internet de forma **100% GRATUITA**.

---

## 📋 Prerrequisitos

- Cuenta de GitHub (si no tienes, la crearemos)
- Los archivos de AlexCompuClass
- Navegador web
- Conexión a internet

---

## 🔑 PASO 1: Crear Cuenta GitHub

### 1.1 Si ya tienes cuenta:
- Salta al Paso 2

### 1.2 Si NO tienes cuenta:
1. Ve a [github.com](https://github.com)
2. Click en "Sign up"
3. Ingresa:
   - **Email:** Tu email personal
   - **Password:** Contraseña segura
   - **Username:** Ejemplo: `alexcompuclass` o `profe-alex`
4. Verifica tu email
5. Selecciona plan **FREE** (gratis)

---

## 📁 PASO 2: Crear Repositorio

### 2.1 Nuevo Repositorio
1. En GitHub, click en "+" (esquina superior derecha)
2. Click en "New repository"

### 2.2 Configuración del Repositorio
Llena los campos:

- **Repository name:** `alexcompuclass`
  - (Importante: todo en minúsculas, sin espacios)
  
- **Description:** "Plataforma educativa de Ciencias de la Computación"
  
- **Public** ✅ (Selecciona esta opción)
  - Necesario para GitHub Pages gratuito
  
- **Add a README file** ☐ (NO marcar)
  - Ya tenemos nuestro README
  
- **Add .gitignore** ☐ (NO marcar por ahora)

3. Click en "Create repository"

---

## 📤 PASO 3: Subir Archivos

Hay 2 métodos: **Web (Fácil)** o **Línea de Comandos (Avanzado)**

### 🌟 MÉTODO 1: Subir por Web (RECOMENDADO)

#### 3.1 Preparar Archivos
1. Abre la carpeta `AlexCompuClass` en tu computadora
2. Selecciona TODOS los archivos:
   - index.html
   - README.md
   - Carpeta css/
   - Carpeta js/
   - Carpeta images/
   - Carpeta docs/

#### 3.2 Subir a GitHub
1. En tu repositorio recién creado, busca:
   "uploading an existing file"
2. Click en ese link
3. **ARRASTRA** todos los archivos a la ventana
   - O click en "choose your files"
4. Espera que suban (barra de progreso)
5. En "Commit changes":
   - Mensaje: "Subida inicial de AlexCompuClass"
6. Click en "Commit changes"

¡Listo! Archivos subidos ✅

---

### 💻 MÉTODO 2: Línea de Comandos (Opcional)

#### Solo si sabes usar Git:

```bash
# 1. Navegar a tu carpeta
cd ruta/a/AlexCompuClass

# 2. Inicializar Git
git init

# 3. Agregar archivos
git add .

# 4. Primer commit
git commit -m "Subida inicial de AlexCompuClass"

# 5. Agregar remote (cambia TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/alexcompuclass.git

# 6. Subir
git branch -M main
git push -u origin main
```

---

## 🚀 PASO 4: Activar GitHub Pages

### 4.1 Ir a Settings
1. En tu repositorio, click en "Settings" (última pestaña)
2. En el menú izquierdo, busca "Pages"
3. Click en "Pages"

### 4.2 Configurar GitHub Pages
En la sección "Build and deployment":

1. **Source:** Deploy from a branch
   
2. **Branch:** 
   - Selecciona: `main`
   - Folder: `/ (root)`
   
3. Click en "Save"

### 4.3 Esperar Deployment
- GitHub comenzará a publicar tu sitio
- Esto toma **1-5 minutos**
- Verás un mensaje: "Your site is ready to be published at..."

### 4.4 Obtener tu URL
Tu página estará en:
```
https://TU-USUARIO.github.io/alexcompuclass/
```

Ejemplo:
```
https://profe-alex.github.io/alexcompuclass/
```

---

## ✅ PASO 5: Verificar que Funciona

### 5.1 Probar la Página
1. Copia tu URL de GitHub Pages
2. Pégala en un navegador
3. Espera 1-2 minutos si aún no carga
4. Refresca (F5)

### 5.2 Checklist de Verificación:
- [ ] La página carga
- [ ] Los estilos se ven correctos
- [ ] Las imágenes cargan
- [ ] Las animaciones funcionan
- [ ] La navegación funciona
- [ ] Responsive en móvil (prueba en celular)

---

## 🌐 PASO 6: Dominio Personalizado (OPCIONAL)

Si quieres usar `alexcompuclass.com` en vez de `usuario.github.io/alexcompuclass`:

### 6.1 Comprar Dominio
Lugares recomendados:
- [Namecheap](https://www.namecheap.com) - ~$9/año
- [Google Domains](https://domains.google) - ~$12/año
- [Cloudflare](https://www.cloudflare.com) - ~$10/año

### 6.2 Configurar DNS
En tu proveedor de dominio:

1. Agregar registros:
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A  
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: TU-USUARIO.github.io
```

### 6.3 Configurar en GitHub
1. Settings → Pages
2. En "Custom domain"
3. Escribe: `alexcompuclass.com`
4. Click "Save"
5. Espera 24-48 horas para propagación DNS

---

## 🔄 PASO 7: Actualizar tu Página

### Cuando hagas cambios en tu código:

#### Método Web:
1. Ve a tu repositorio en GitHub
2. Navega al archivo a editar
3. Click en el lápiz (Edit)
4. Haz cambios
5. "Commit changes"
6. Espera 1-2 minutos
7. Refresca tu página

#### Método Arrastrando:
1. Ve a la carpeta del archivo
2. Click en "Upload files"
3. Arrastra el archivo actualizado
4. Commit
5. GitHub preguntará si reemplazar → SÍ

#### Método Git (Avanzado):
```bash
# Después de editar archivos localmente:
git add .
git commit -m "Descripción de cambios"
git push
```

---

## 📊 PASO 8: Monitoreo y Analytics

### 8.1 Ver Tráfico de GitHub
1. Tu repositorio → "Insights"
2. "Traffic"
3. Ve visitas y clones

### 8.2 Google Analytics (Recomendado)
1. Crea cuenta en [Google Analytics](https://analytics.google.com)
2. Crea propiedad para tu sitio
3. Obtén código de tracking
4. Agrega en `index.html` antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU-ID');
</script>
```

---

## 🔐 Seguridad y Privacidad

### ✅ Buenas Prácticas:

1. **NO subas:**
   - Contraseñas
   - API Keys privadas
   - Información personal sensible
   - Datos de estudiantes

2. **Mantén privado:**
   - El link de edición de tu Google Sheet
   - Tus credenciales de AdSense
   - Emails de estudiantes

3. **Usa HTTPS:**
   - GitHub Pages incluye HTTPS gratis
   - Siempre aparecerá el candado 🔒

---

## 🐛 Solución de Problemas

### Problema: "404 - Page not found"
**Causas posibles:**
- GitHub Pages aún no terminó de publicar (espera 5 min)
- URL incorrecta (verifica que sea exacta)
- Repositorio privado (debe ser público)
- No activaste GitHub Pages en Settings

**Solución:**
1. Settings → Pages → Verifica configuración
2. Espera 5-10 minutos
3. Limpia caché del navegador (Ctrl+Shift+Del)

---

### Problema: Página sin estilos (CSS)
**Causas:**
- Rutas incorrectas en index.html
- Archivos CSS no subidos

**Solución:**
1. Verifica que la carpeta `css/` esté en GitHub
2. En index.html, verifica links:
```html
<link rel="stylesheet" href="css/styles.css">
```
No debe ser:
```html
<link rel="stylesheet" href="/css/styles.css"> ❌
<link rel="stylesheet" href="../css/styles.css"> ❌
```

---

### Problema: Imágenes no cargan
**Solución:**
Similar a CSS, verifica rutas:
```html
<img src="images/logo.png"> ✅
<img src="/images/logo.png"> ❌
```

---

### Problema: Cambios no se ven
**Causas:**
- Caché del navegador
- Propagación de GitHub Pages

**Solución:**
1. Espera 2-5 minutos
2. Refresca con Ctrl+Shift+R (fuerza recarga)
3. Prueba en navegador privado/incógnito
4. Limpia caché

---

### Problema: "Your site is having problems building"
**Solución:**
1. Ve a "Actions" en tu repositorio
2. Ve el error específico
3. Usualmente es un archivo con nombre raro
4. Renombra archivos problemáticos

---

## 📱 Probar en Móvil

### Cómo probar antes de compartir:
1. Copia la URL de tu sitio
2. Envíatela por WhatsApp
3. Ábrela en tu celular
4. Verifica:
   - Se ve bien
   - Botones funcionan
   - Navegación funciona
   - Imágenes cargan

---

## 🎨 Personalización Adicional

### Cambiar URL del Repo
Si no te gusta `alexcompuclass`, puedes cambiarla:
1. Settings → General
2. Repository name
3. Cambia el nombre
4. Tu URL también cambiará

### Agregar Descripción
1. Página principal del repo
2. Click en "⚙️" junto a "About"
3. Agrega descripción
4. Agrega tags: `education`, `coding`, `spanish`, `salvadoran`
5. Save

---

## 🔗 Compartir tu Página

### Formas de compartir:
1. **URL directa:** `https://usuario.github.io/alexcompuclass`
2. **QR Code:** Usa [qr-code-generator.com](https://www.qr-code-generator.com)
3. **Redes sociales:** Comparte el link
4. **WhatsApp:** Envía a grupos de estudiantes

---

## 📈 Siguiente Nivel

Una vez tu página esté funcionando:

1. ✅ Conectar con Google Sheets (ver tutorial)
2. ✅ Agregar Google Analytics
3. ✅ Aplicar a Google AdSense
4. ✅ Compartir con estudiantes
5. ✅ Recolectar feedback
6. ✅ Iterar y mejorar

---

## ✅ Checklist Final

Antes de compartir con estudiantes:

- [ ] Página carga correctamente
- [ ] URL copiada y guardada
- [ ] Probada en móvil
- [ ] Probada en diferentes navegadores
- [ ] Información de contacto actualizada
- [ ] Google Sheets conectado y funcionando
- [ ] Al menos 5 recursos disponibles
- [ ] Al menos 3 tareas publicadas
- [ ] Sin errores en consola (F12)
- [ ] Velocidad de carga aceptable

---

## 🎓 Recursos Adicionales

- [Documentación GitHub Pages](https://docs.github.com/en/pages)
- [Video tutorial GitHub](https://www.youtube.com/results?search_query=github+pages+tutorial+español)
- [Foro de ayuda](https://github.community/)

---

## 🆘 Soporte

¿Problemas? 

1. Revisa esta guía nuevamente
2. Google el error específico
3. Pregunta en [Stack Overflow](https://stackoverflow.com)
4. Abre un Issue en tu repositorio

---

**¡Felicidades! Tu página está en internet** 🌐🎉

**Siguiente paso:** [TUTORIAL_ADMINISTRACION.md](TUTORIAL_ADMINISTRACION.md)

---

**Pro tip:** Guarda tu URL en favoritos y compártela orgullosamente con tus estudiantes. ¡Acabas de crear algo increíble! 🚀
