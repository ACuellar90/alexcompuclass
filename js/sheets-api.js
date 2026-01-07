// ============================================
// ALEXCOMPUCLASS - Google Sheets Integration
// ============================================

// 🔑 CONFIGURACIÓN - EDITA AQUÍ TU SHEET ID
const SHEET_ID = '1QlvdgAAAme2UodAHxwYIxpNT2c3rwnHbEPXeVMMagzY';  // ⚠️ IMPORTANTE: Reemplaza con tu ID real

// URL base de la API de Google Sheets
const BASE_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?`;

// 📊 NOMBRES DE LAS HOJAS (deben coincidir exactamente con tu Google Sheet)
const SHEETS = {
    UNIDADES: 'Unidades',
    TAREAS: 'Tareas',
    RECURSOS: 'Recursos',
    CODEORG: 'CodeOrg',
    ANUNCIOS: 'Anuncios',
    CONFIG: 'Configuracion'
};

// ============================================
// FUNCIÓN PRINCIPAL: Cargar Datos
// ============================================

/**
 * Carga datos de una hoja específica del Google Sheet
 * @param {string} sheetName - Nombre de la hoja
 * @returns {Promise<Array>} Array con los datos
 */
async function loadSheetData(sheetName) {
    try {
        const query = encodeURIComponent(`SELECT *`);
        const url = `${BASE_URL}sheet=${sheetName}&tq=${query}`;
        
        const response = await fetch(url);
        const text = await response.text();
        
        // Parsear respuesta de Google (viene en formato especial)
        const json = JSON.parse(text.substr(47).slice(0, -2));
        
        if (!json.table) {
            console.error(`No se encontró data en la hoja: ${sheetName}`);
            return [];
        }
        
        return parseGoogleSheetData(json.table);
        
    } catch (error) {
        console.error(`Error cargando ${sheetName}:`, error);
        return [];
    }
}

/**
 * Parsea los datos de Google Sheets a formato usable
 * @param {Object} table - Tabla de datos de Google
 * @returns {Array<Object>} Array de objetos
 */
function parseGoogleSheetData(table) {
    const rows = table.rows;
    const cols = table.cols;
    
    // Obtener nombres de columnas
    const headers = cols.map(col => col.label || col.id);
    
    // Convertir filas a objetos
    return rows.map(row => {
        const obj = {};
        row.c.forEach((cell, index) => {
            const header = headers[index];
            obj[header] = cell ? cell.v : null;
        });
        return obj;
    });
}

// ============================================
// FUNCIONES DE CARGA ESPECÍFICAS
// ============================================

/**
 * Carga y muestra las unidades del curso
 */
async function loadUnidades() {
    const data = await loadSheetData(SHEETS.UNIDADES);
    const container = document.getElementById('unidades-container');
    
    if (!container) return;
    
    if (data.length === 0) {
        container.innerHTML = '<p>No hay unidades disponibles aún.</p>';
        return;
    }
    
    let html = '';
    data.forEach(unidad => {
        const grado = unidad.Grado ? `<span class="grado-badge">${unidad.Grado}</span>` : '';
        html += `
            <div class="unit-card">
                ${grado}
                <div class="unit-number">${unidad.Numero || ''}</div>
                <h3>${unidad.Titulo || 'Sin título'}</h3>
                <p>${unidad.Descripcion || 'Sin descripción'}</p>
                <div class="unit-topics">
                    ${parseTopics(unidad.Temas || '')}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

/**
 * Carga y muestra las tareas
 */
async function loadTareas() {
    const data = await loadSheetData(SHEETS.TAREAS);
    const container = document.getElementById('tareas-container');
    
    if (!container) return;
    
    // Filtrar solo tareas activas
    const tareasActivas = data.filter(t => t.Estado === 'Activa');
    
    if (tareasActivas.length === 0) {
        container.innerHTML = '<p>No hay tareas disponibles actualmente.</p>';
        return;
    }
    
    let html = '';
    tareasActivas.forEach(tarea => {
        html += `
            <div class="tarea-card">
                <h3>${tarea.Titulo || 'Sin título'}</h3>
                <p>${tarea.Descripcion || ''}</p>
                <div class="tarea-info">
                    <span class="fecha">📅 ${formatDate(tarea.FechaEntrega)}</span>
                    <span class="unidad">📚 Unidad ${tarea.Unidad || 'N/A'}</span>
                </div>
                ${tarea.Link ? `<a href="${tarea.Link}" target="_blank" class="btn-tarea">Ver Tarea</a>` : ''}
            </div>
        `;
    });
    
    container.innerHTML = html;
}

/**
 * Carga y muestra los recursos descargables
 */
async function loadRecursos() {
    const data = await loadSheetData(SHEETS.RECURSOS);
    const container = document.getElementById('recursos-container');
    
    if (!container) return;
    
    if (data.length === 0) {
        container.innerHTML = '<p>No hay recursos disponibles aún.</p>';
        return;
    }
    
    let html = '';
    data.forEach(recurso => {
        html += `
            <div class="resource-card">
                <div class="resource-icon">${recurso.Icono || '📄'}</div>
                <h3>${recurso.Nombre || 'Sin nombre'}</h3>
                <p class="resource-type">${recurso.Tipo || 'Recurso'}</p>
                <p>${recurso.Descripcion || ''}</p>
                ${recurso.LinkDescarga ? 
                    `<a href="${recurso.LinkDescarga}" target="_blank" class="download-btn">Descargar</a>` 
                    : ''}
            </div>
        `;
    });
    
    container.innerHTML = html;
}

/**
 * Carga y muestra los ejercicios de Code.org
 */
async function loadCodeOrg() {
    const data = await loadSheetData(SHEETS.CODEORG);
    const container = document.getElementById('codeorg-container');
    
    if (!container) return;
    
    if (data.length === 0) {
        container.innerHTML = '<p>No hay ejercicios de Code.org disponibles aún.</p>';
        return;
    }
    
    let html = '';
    data.forEach(ejercicio => {
        html += `
            <div class="codeorg-card">
                <div class="nivel-badge ${ejercicio.Nivel?.toLowerCase() || 'basico'}">${ejercicio.Nivel || 'Básico'}</div>
                <h3>${ejercicio.Titulo || 'Sin título'}</h3>
                <p>${ejercicio.Descripcion || ''}</p>
                <div class="codeorg-info">
                    <span>📚 Unidad ${ejercicio.Unidad || 'N/A'}</span>
                </div>
                ${ejercicio.Link ? 
                    `<a href="${ejercicio.Link}" target="_blank" class="btn-codeorg">Ir al Ejercicio</a>` 
                    : ''}
            </div>
        `;
    });
    
    container.innerHTML = html;
}

/**
 * Carga y muestra anuncios importantes
 */
async function loadAnuncios() {
    const data = await loadSheetData(SHEETS.ANUNCIOS);
    const container = document.getElementById('anuncios-container');
    
    if (!container) return;
    
    // Filtrar solo anuncios activos
    const anunciosActivos = data.filter(a => a.Activo === 'SI');
    
    if (anunciosActivos.length === 0) {
        container.style.display = 'none';
        return;
    }
    
    container.style.display = 'block';
    let html = '';
    
    anunciosActivos.forEach(anuncio => {
        const tipo = anuncio.Tipo?.toLowerCase() || 'info';
        html += `
            <div class="anuncio anuncio-${tipo}">
                <strong>${anuncio.Titulo || 'Anuncio'}</strong>
                <p>${anuncio.Mensaje || ''}</p>
                <small>${formatDate(anuncio.Fecha)}</small>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

/**
 * Carga configuración general
 */
async function loadConfiguracion() {
    const data = await loadSheetData(SHEETS.CONFIG);
    
    if (data.length === 0) return;
    
    // Crear objeto de configuración
    const config = {};
    data.forEach(item => {
        config[item.Clave] = item.Valor;
    });
    
    // Actualizar elementos de la página con la configuración
    updatePageWithConfig(config);
}

/**
 * Actualiza elementos de la página con la configuración
 */
function updatePageWithConfig(config) {
    // Actualizar información del profesor
    if (config.profesor_nombre) {
        const elem = document.getElementById('profesor-nombre');
        if (elem) elem.textContent = config.profesor_nombre;
    }
    
    if (config.profesor_email) {
        const elem = document.getElementById('profesor-email');
        if (elem) elem.textContent = config.profesor_email;
    }
    
    if (config.profesor_whatsapp) {
        const elem = document.getElementById('profesor-whatsapp');
        if (elem) elem.textContent = config.profesor_whatsapp;
    }
    
    if (config.horario_consultas) {
        const elem = document.getElementById('horario-consultas');
        if (elem) elem.textContent = config.horario_consultas;
    }
}

// ============================================
// FUNCIONES AUXILIARES
// ============================================

/**
 * Formatea una fecha a formato legible
 */
function formatDate(dateString) {
    if (!dateString) return 'Fecha no especificada';
    
    try {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('es-ES', options);
    } catch (e) {
        return dateString;
    }
}

/**
 * Parsea temas separados por comas a tags HTML
 */
function parseTopics(temasString) {
    if (!temasString) return '';
    
    const temas = temasString.split(',').map(t => t.trim());
    return temas.map(tema => 
        `<span class="topic-tag">${tema}</span>`
    ).join('');
}

/**
 * Muestra mensaje de carga
 */
function showLoading(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '<div class="loading">Cargando...</div>';
    }
}

/**
 * Muestra mensaje de error
 */
function showError(containerId, message) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `<div class="error">${message}</div>`;
    }
}

// ============================================
// INICIALIZACIÓN
// ============================================

/**
 * Inicializa la carga de todos los datos
 * Se ejecuta cuando la página termina de cargar
 */
async function initializeApp() {
    console.log('🚀 Inicializando AlexCompuClass...');
    
    // Verificar que el SHEET_ID esté configurado
    if (SHEET_ID === 'TU_SHEET_ID_AQUI') {
        console.error('⚠️ IMPORTANTE: Debes configurar tu SHEET_ID en sheets-api.js');
        alert('Error: Google Sheet no configurado. Por favor contacta al administrador.');
        return;
    }
    
    try {
        // Cargar todas las secciones
        await Promise.all([
            loadConfiguracion(),
            loadUnidades(),
            loadTareas(),
            loadRecursos(),
            loadCodeOrg(),
            loadAnuncios()
        ]);
        
        console.log('✅ Datos cargados exitosamente');
        
    } catch (error) {
        console.error('❌ Error al cargar datos:', error);
    }
}

// ============================================
// AUTO-EJECUTAR AL CARGAR LA PÁGINA
// ============================================

// Esperar a que el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// ============================================
// FUNCIÓN DE RECARGA MANUAL
// ============================================

/**
 * Recarga todos los datos (útil para botón de refresh)
 */
function reloadAllData() {
    console.log('🔄 Recargando datos...');
    initializeApp();
}

// Hacer disponible globalmente
window.reloadAllData = reloadAllData;
