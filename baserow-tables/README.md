# Tablas Baserow para Lactarium - Sistema de Gestión de Prospectos

## Instrucciones de Importación

### 1. Prospectos (prospectos.csv)
**Tabla principal para capturar leads**

Campos y tipos de datos en Baserow:
- Nombre: Text
- Email: Email
- Teléfono: Phone Number
- Empresa/Institución: Text
- Mensaje: Long Text
- Fecha de Contacto: Date
- Estado: Single Select (Nuevo, Contactado, Calificado, Convertido, Descartado)
- Fuente: Single Select (Formulario Web, Teléfono, Email Directo, Referido)
- Interés: Single Select (Certificación, Consultoría, Capacitación, Información General)
- Prioridad: Single Select (Alta, Media, Baja)
- Notas: Long Text
- Asignado a: Link to User

### 2. Seguimientos (seguimientos.csv)
**Registro de interacciones con prospectos**

Campos y tipos de datos en Baserow:
- Prospecto: Link to Prospectos
- Fecha de Seguimiento: Date
- Tipo de Contacto: Single Select (Llamada, Email, Reunión, WhatsApp)
- Resultado: Long Text
- Próxima Acción: Long Text
- Fecha Próximo Seguimiento: Date
- Completado: Checkbox

### 3. Servicios de Interés (servicios-interes.csv)
**Catálogo de servicios ofrecidos**

Campos y tipos de datos en Baserow:
- Nombre del Servicio: Text
- Descripción: Long Text
- Precio Base: Number (Currency)
- Duración Estimada: Text

### 4. Conversiones (conversiones.csv)
**Prospectos convertidos en clientes**

Campos y tipos de datos en Baserow:
- Prospecto Original: Link to Prospectos
- Fecha de Conversión: Date
- Servicio Contratado: Link to Servicios de Interés
- Valor del Contrato: Number (Currency)
- Estado del Proyecto: Single Select (En Proceso, Completado, Pausado)

## Pasos para Importar en Baserow

1. Accede a tu workspace en Baserow
2. Crea una nueva base de datos llamada "Lactarium CRM"
3. Para cada CSV:
   - Crea una nueva tabla con el nombre correspondiente
   - Haz clic en "Import" y selecciona el archivo CSV
   - Configura los tipos de campo según las especificaciones arriba
   - Para campos "Link to", primero importa las tablas base y luego configura las relaciones

## Relaciones entre Tablas

- **Seguimientos** → **Prospectos**: Muchos a Uno
- **Conversiones** → **Prospectos**: Uno a Uno
- **Conversiones** → **Servicios de Interés**: Muchos a Uno

## Próximos Pasos

Después de importar las tablas, puedes:
1. Configurar vistas personalizadas (Kanban, Calendar, Gallery)
2. Crear formularios públicos para captura de prospectos
3. Configurar webhooks para integración con el sitio web
4. Establecer automatizaciones para notificaciones
