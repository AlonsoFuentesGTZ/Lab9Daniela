# Documentación de la Base de Datos en Proyecto Citas

## Base de Datos Utilizada

Para el proyecto `ProyectoCitas`, se utilizó una base de datos **PostgreSQL**. PostgreSQL fue elegida por su fiabilidad, capacidad de manejar grandes volúmenes de datos y su integración nativa con Spring Boot. 

## Estructura de la Base de Datos

La estructura de la base de datos se centra en una tabla principal, `citas3`, que almacena la información clave de las citas médicas. Esta tabla incluye las siguientes columnas:

- `id`: Clave primaria de tipo `SERIAL`.
- `doctor_name`: Nombre del doctor, tipo `VARCHAR(100)`.
- `patient_name`: Nombre del paciente, tipo `VARCHAR(100)`.
- `appointment_date`: Fecha de la cita, tipo `TIMESTAMP`.
- `description`: Descripción de la cita, tipo `TEXT`.

Cada columna está configurada con tipos de datos específicos de PostgreSQL, optimizando el almacenamiento para cada tipo de información.

## Configuración en Spring Boot

La configuración de la base de datos en **Spring Boot** sigue el estándar de uso de archivos externos y la carga de variables sensibles desde un archivo `.env`. Para mantener los datos sensibles fuera del código fuente, se utiliza la biblioteca `dotenv`, que carga las variables de entorno en tiempo de ejecución. Estas variables se asignan en la clase principal `ProyectoCitasApplication`, permitiendo que la **URL de la base de datos**, el **nombre de usuario** y la **contraseña** se mantengan seguros y fuera del código.

### Configuración en `application.yml`

El archivo `application.yml` define las propiedades de conexión a PostgreSQL. Las configuraciones incluyen:

- `driver-class-name`: `org.postgresql.Driver`
- `spring.datasource`: Se establece usando las variables de entorno para la **URL**, **nombre de usuario**, y **contraseña**.
- Configuración de **Hibernate** con la propiedad `ddl-auto: update` para actualizar automáticamente el esquema de la base de datos basado en cambios en las entidades JPA.

Esta configuración garantiza que el esquema de la base de datos se mantenga sincronizado con el modelo de datos de la aplicación y que las tablas se creen o actualicen automáticamente.

## Estándares de Inicialización de la Base de Datos

Como estándar, el proyecto implementa un componente `DatabaseInitializer` que usa `JdbcTemplate` para verificar y crear la base de datos `citas` si aún no existe. Este componente asegura que la base de datos esté disponible al iniciar la aplicación y sigue las convenciones de Spring Boot, separando la lógica de inicialización de la lógica de la aplicación.

La estructura del código y la organización en clases y archivos de configuración permiten que el proyecto sea escalable y fácil de mantener, alineándose con estándares de desarrollo de aplicaciones de alta disponibilidad y orientadas a microservicios.
