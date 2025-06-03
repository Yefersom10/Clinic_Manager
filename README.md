# Clinic_Manager

Aplicación de gestión clínica desarrollada con Ionic + Angular que simula el sistema interno de una clínica con roles básicos y operaciones CRUD.

## Características

- 📱 Interfaces por rol:

  - Médico: Gestionar pacientes y diagnósticos.

  - Enfermero/a: Registrar signos vitales y seguimientos.

  - Recepcionista: Administrar citas y datos de pacientes.

  -Paciente: Visualizar su historial.

- 📋 CRUD básico para cada entidad (Pacientes, Médicos, Citas, etc.).

- 🚀 Sin backend: Datos mockeados en servicios (JSON/localStorage).

- 📊 Listados filtrables por fecha, especialidad o estado.

##Tecnologías
- Ionic 6+ (UI multiplataforma).

- Angular 13+ (Estructura y lógica).

- TypeScript (Tipado estático).

- LocalStorage (Persistencia temporal).

## Estructura del Proyecto
````
src/  
├── app/  
│   ├── pages/  
│   │   ├── nurse/              # Módulo de enfermería  
│   │   ├── patient/            # Vista paciente  
│   │   ├── doctor/             # Gestión médica  
│   │   └── receptionist/       # Recepción  
│   ├── services/  
│   │   ├── mock-data.ts        # Datos falsos  
│   │   └── role-service.ts     # Lógica por rol  
│   └── shared/                 # Componentes comunes  
└── assets/                     # Íconos/Imágenes
````
