#Guía de Estilo para la Base de Datos

##Aplicación de Presupuestos para Empresas de Servicios Alimentarios

###Definición del Problema
Las pequeñas y medianas empresas (Pymes) en el sector de la alimentación enfrentan dificultades al generar presupuestos detallados para sus clientes, especialmente cuando estos requieren servicios de catering o menús personalizados para eventos. Actualmente, este proceso suele ser manual, propenso a errores y requiere tiempo considerable para calcular costos, insumos y recetas necesarias.

El objetivo de esta guía es establecer convenciones claras para el diseño de la base de datos que sustenta la aplicación, garantizando consistencia, escalabilidad y facilidad de mantenimiento.
---

## 1. Convenciones de Nombramiento
### Tablas

- En plural.
- Formato `snake_case`.
- Evitar prefijos como `tbl_`.

**Ejemplos:**
- `clientes`
- `presupuestos`
- `recetas`
- `ingredientes_receta`

### Columnas

- En singular.
- Formato `snake_case`.
- Descriptivos pero concisos.
- Claves foráneas terminan en `_id`.

**Ejemplos:**
- En `presupuestos`: `id`, `cliente_id`, `fecha_solicitud`, `total`
- En `recetas`: `id`, `nombre`, `categoria`, `tiempo_preparacion`

---

## 2. Claves y Relaciones

### Claves Primarias (PK)

- Siempre llamadas `id`.
- Restricción nombrada como `PK_<nombre_tabla>`.

**Ejemplo:**
CONSTRAINT PK_presupuestos PRIMARY KEY (id)
UK_clientes_email UNIQUE (email)

### 3. Vistas

- Prefijo `vw_`
- Formato `snake_case`

**Ejemplos:**
- vw_presupuestos_detallados
- vw_recetas_con_ingredientes

### 4. Scripts de Migración (con Liquibase)

**Estructura:**

liquibase/  
├── changelog-master.xml  
├── 202504061200_crear_tabla_clientes.xml  
├── 202504061210_crear_tabla_presupuestos.xml  
└── features/  
  └── 202504061215_agregar_tabla_recetas.xml  

**Changeset**

- ID único, autor, comentario claro.
- Incluir rollback siempre.

**Ejemplo:**

<changeSet id="crear-tabla-clientes" author="jrosales">  
  <comment>Crea la tabla de clientes.</comment>  
  <createTable tableName="clientes">  
    <column name="id" type="INT" autoIncrement="true">  
      <constraints primaryKey="true" nullable="false" primaryKeyName="PK_clientes"/>  
    </column>  
    <column name="nombre" type="VARCHAR(255)">  
      <constraints nullable="false"/>  
    </column>  
    <column name="email" type="VARCHAR(255)">  
      <constraints nullable="false" unique="true" uniqueConstraintName="UK_clientes_email"/>  
    </column>  
  </createTable>  
  <rollback>  
    <dropTable tableName="clientes"/>  
  </rollback>  
</changeSet>
