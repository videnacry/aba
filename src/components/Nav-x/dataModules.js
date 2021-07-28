import activoFijoSrc from './contents-img/activo-fijo.jpg'
import arrendamientoActivosSrc from './contents-img/arrendamiento-activos.png'
import clienteSrc from './contents-img/cliente.png'
import contabilidadCostesSrc from './contents-img/contabilidad-costes.png'
import gestionEfectivoBancoSrc from './contents-img/gestion-efectivo-banco.png'
import gestionGastosSrc from './contents-img/gestion-gastos.png'
import gestionPresupuestariaSrc from './contents-img/gestion-presupuestaria.png'
import libroMayorSrc from './contents-img/libro-mayor.jpg'
import proveedorSrc from './contents-img/proveedor.png'
import informeFinancieroSrc from './contents-img/informe-financiero.png'
const dataModules = [
    {
        "id": 1,
        "name": "Clientes",
        "isModule": true,
        "img": clienteSrc,
        "subtopicIds": [11, 12, 13, 14, 15]
    },
    {
        "id": 2,
        "name": "Proveedores",
        "isModule": true,
        "img": proveedorSrc,
        "subtopicIds": [16, 17, 18, 19, 20]
    },
    {
        "id": 3,
        "name": "Gestión presupuestaria",
        "isModule": true,
        "img": gestionPresupuestariaSrc,
        "subtopicIds": [21, 22, 23, 24, 25]
    },
    {
        "id": 4,
        "name": "Gestión de efectivo y bancos",
        "isModule": true,
        "img": gestionEfectivoBancoSrc,
        "subtopicIds": [26, 27, 28, 29, 30]
    },
    {
        "id": 5,
        "name": "Contabilidad de costes",
        "isModule": true,
        "img": contabilidadCostesSrc,
        "subtopicIds": [31, 32, 33, 34, 35]
    },
    {
        "id": 6,
        "name": "Gestión de gastos",
        "isModule": true,
        "img": gestionGastosSrc,
        "subtopicIds": [36, 37, 38, 39, 40]
    },
    {
        "id": 7,
        "name": "Activos fijos",
        "img": activoFijoSrc,
        "subtopicIds": [41, 42, 43, 44, 45]
    },
    {
        "id": 8,
        "name": "Arrendamiento de activos",
        "isModule": true,
        "img": arrendamientoActivosSrc,
        "subtopicIds": [46, 47, 53]
    },
    {
        "id": 9,
        "name": "Libro mayor",
        "isModule": true,
        "img": libroMayorSrc,
        "subtopicIds": [59, 70, 76, 81, 87]
    },
    // {
    //     "id": 10,
    //     "name": "Informes financieros",
    //     "img": informeFinancieroSrc,
    //     "subtopicIds": [91, 92, 93, 94, 95]
    // },
    {
        "id": 11,
        "name": "Establecer condiciones de pago de cliente"
    },
    {
        "id": 12,
        "name": "Establecer método de pago de cliente"
    },
    {
        "id": 13,
        "name": "Establecer cuotas de pago de cliente"
    },
    {
        "id": 14,
        "name": "Distribuciones contables y asientos del subdiario contable para las facturas de servicios"
    },
    {
        "id": 15,
        "name": "Corrección de una factura de servicios"
    },
    {
        "id": 16,
        "name": "Auditar facturas e introducir datos en el sistema de proveedores"
    },
    {
        "id": 17,
        "name": "Directivas de triple conciliación"
    },
    {
        "id": 18,
        "name": "Conciliación de facturas y pedidos de compra de empresas vinculadas"
    },
    {
        "id": 19,
        "name": "Configurar directivas de factura de proveedor"
    },
    {
        "id": 20,
        "name": "Registrar la factura de proveedor y cuadrarla con la cantidad recibida"
    },
    {
        "id": 21,
        "name": "Planificación presupuestaria para documentos de justificación"
    },
    {
        "id": 22,
        "name": "Creación de un presupuesto desde cuentas de transacción y cuentas totales"
    },
    {
        "id": 23,
        "name": "Integración de planificación presupuestaria con otros módulos"
    },
    {
        "id": 24,
        "name": "Plantillas de planificación presupuestaria para Excel"
    },
    {
        "id": 25,
        "name": "Solución de problemas de presupuesto"
    },
    {
        "id": 26,
        "name": "Previsiones de flujo de efectivo"
    },
    {
        "id": 27,
        "name": "Solucionar problemas de configuración de pronóstico de flujo de efectivo"
    },
    {
        "id": 28,
        "name": "Espacio de trabajo para la gestión bancaria"
    },
    {
        "id": 29,
        "name": "Revalorización bancaria de divisa extranjera"
    },
    {
        "id": 30,
        "name": "Crear un contrato de crédito bancario para un crédito documentario"
    },
    {
        "id": 31,
        "name": "Calendarios fiscales, ejercicios y períodos"
    },
    {
        "id": 32,
        "name": "Agregar dimensiones financieras al espacio de trabajo del CFO"
    },
    {
        "id": 33,
        "name": "Crear estructuras contables"
    },
    {
        "id": 34,
        "name": "Crear dimensiones e importar miembros de dimensión"
    },
    {
        "id": 35,
        "name": "Asignar miembros de dimensión de elemento de coste a un conjunto común de miembros de dimensión"
    },
    {
        "id": 36,
        "name": "Configurar flujos de trabajo para la gestión de gastos"
    },
    {
        "id": 37,
        "name": "Parámetros de administración de gastos"
    },
    {
        "id": 38,
        "name": "Importar y mantener transacciones con tarjetas de crédito"
    },
    {
        "id": 39,
        "name": "Recuperación de IVA"
    },
    {
        "id": 40,
        "name": "Registrar un informe de gastos"
    },
    {
        "id": 41,
        "name": "Crear un activo fijo"
    },
    {
        "id": 42,
        "name": "Proponer adquisiciones de activos fijos"
    },
    {
        "id": 43,
        "name": "Visión general de la actualización del libro amortización"
    },
    {
        "id": 44,
        "name": "Registrar las transacciones de activos fijos para registrar capas"
    },
    {
        "id": 45,
        "name": "Reducir la depreciación del saldo después de una división"
    },
    {
        "id": 46,
        "name": "Informes de arrendamiento de activos"
    },
    {
        "id": 47,
        "name": "Configuración de arrendamiento de activos",
        "subtopicIds": [ 48, 49, 50, 51, 52 ]
    },
    {
        "id": 48,
        "name": "Configurar parámetros de arrendamiento"
    },
    {
        "id": 49,
        "name": "Configurar libros de arrendamiento"
    },
    {
        "id": 50,
        "name": "Crear un grupo de arrendamientos"
    },
    {
        "id": 51,
        "name": "Configurar nombres de diarios de arrendamiento"
    },
    {
        "id": 52,
        "name": "Configurar cuentas de registro de arrendamiento"
    },
    {
        "id": 53,
        "name": "Administración arrendamiento de activo",
        "subtopicIds": [54, 55, 56, 57, 58]
    },
    {
        "id": 54,
        "name": "Agregar o copiar arrendamientos"
    },
    {
        "id": 55,
        "name": "Crear facturas de pago"
    },
    {
        "id": 56,
        "name": "Registrar depreciación de activo por derecho de uso "
    },
    {
        "id": 57,
        "name": "Proponer un arrendamiento para su rescisión"
    },
    {
        "id": 58,
        "name": "Reclasificar la parte a corto plazo de un pasivo por arrendamiento"
    },
    {
        "id": 59,
        "name": "Cuentas",
        "subtopicIds": [60, 61, 62, 63, 64]
    },
    {
        "id": 60,
        "name": "Especificar combinaciones de cuentas y dimensiones (control de entrada segmentada)"
    },
    {
        "id": 61,
        "name": "Diarios equilibrados para la contabilidad interunidad"
    },
    {
        "id": 62,
        "name": "Configurar descripciones predeterminadas para registro automático"
    },
    {
        "id": 63,
        "name": "Mantener plantillas predeterminadas de dimensión financiera"
    },
    {
        "id": 64,
        "name": "Conversión de consolidaciones financieras y divisa",
        "subtopicIds":[65, 66, 67, 68, 69]
    },
    {
        "id": 65,
        "name": "Consolidaciones financieras en línea"
    },
    {
        "id": 66,
        "name": "Generar informes financieros consolidados"
    },
    {
        "id": 67,
        "name": "Importar datos de las filiales desde archivos"
    },
    {
        "id": 68,
        "name": "Preparar una entidad jurídica para el proceso de consolidación"
    },
    {
        "id": 69,
        "name": "Configurar una entidad jurídica subsidiaria para consolidación"
    },
    // {
    //     "id": 70,
    //     "name": "Diarios y libros mayores",
    //     "subtopicIds": [
    //         {
    //             "name": "Procesamiento de diarios generales"
    //         },
    //         {
    //             "name": "Registrar diarios periódicos"
    //         },
    //         {
    //             "name": "Configurar la contabilidad de empresas vinculadas"
    //         },
    //         {
    //             "name": "Crear reglas avanzadas para diarios"
    //         },
    //         {
    //             "name": "Ver el asiento de empresas vinculadas relacionadas del diario"
    //         }
    //     ]
    // },
    // {
    //     "id": 76,
    //     "name": "Cierre de final de período",
    //     "subtopicIds": [
    //         {
    //             "name": "Cerrar la contabilidad general al final del período"
    //         },
    //         {
    //             "name": "Cerrar la contabilidad general al final del período"
    //         },
    //         {
    //             "name": "Cierre masivo de período financiero"
    //         },
    //         {
    //             "name": "Cerrar el ejercicio"
    //         },
    //         {
    //             "name": "Cierre de fin de año"
    //         }
    //     ]
    // },
    // {
    //     "id": 81,
    //     "name": "Impuestos",
    //     "subtopicIds": [
    //         {
    //             "name": "Índices de impuestos en función de la base marginal y los métodos de cálculo"
    //         },
    //         {
    //             "name": "Pagos de impuestos y reglas de redondeo"
    //         },
    //         {
    //             "name": "Métodos de cálculo de impuestos en el campo Origen"
    //         },
    //         {
    //             "name": "Importe completo y opciones de cálculo de intervalo para los códigos de impuestos"
    //         },
    //         {
    //             "name": "Calcular y ajustar los impuestos en una factura de proveedor"
    //         }
    //     ]
    // },
    // {
    //     "id": 87,
    //     "name": "Área de trabajo de auditoria",
    //     "subtopicIds": [
    //         {
    //             "name": "Reglas de directivas de auditoría"
    //         },
    //         {
    //             "name": "Infracciones y casos de directivas de auditoría"
    //         },
    //         {
    //             "name": "Definir directivas de auditoría para documentos de origen"
    //         }
    //     ]
    // },
    // {
    //     "id": 91,
    //     "name": "Componentes de los informes financieros"
    // },
    // {
    //     "id": 92,
    //     "name": "Informes financieros de balance de situación"
    // },
    // {
    //     "id": 93,
    //     "name": "Preferencias de usuario en el diseñador de informes financieros"
    // },
    // {
    //     "id": 94,
    //     "name": "Organizar los componentes del informe en el diseñador de informes"
    // },
    // {
    //     "id": 95,
    //     "name": "Definiciones de organigramas en informes financieros"
    // }
]
export default dataModules