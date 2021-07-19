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
const contentsData = [
    {
        "name": "Clientes",
        "img": clienteSrc,
        "subtopics": [
            {
                "name": "Establecer condiciones de pago de cliente"
            },
            {
                "name": "Establecer método de pago de cliente"
            },
            {
                "name": "Establecer cuotas de pago de cliente"
            },
            {
                "name": "Distribuciones contables y asientos del subdiario contable para las facturas de servicios"
            },
            {
                "name": "Corrección de una factura de servicios"
            }
        ]
    },
    {
        "name": "Proveedores",
        "img": proveedorSrc,
        "subtopics": [
            {
                "name": "Auditar facturas e introducir datos en el sistema de proveedores"
            },
            {
                "name": "Directivas de triple conciliación"
            },
            {
                "name": "Conciliación de facturas y pedidos de compra de empresas vinculadas"
            },
            {
                "name": "Configurar directivas de factura de proveedor"
            },
            {
                "name": "Registrar la factura de proveedor y cuadrarla con la cantidad recibida"
            }
        ]
    },
    {
        "name": "Gestión presupuestaria",
        "img": gestionPresupuestariaSrc,
        "subtopics": [
            {
                "name": "Planificación presupuestaria para documentos de justificación"
            },
            {
                "name": "Creación de un presupuesto desde cuentas de transacción y cuentas totales"
            },
            {
                "name": "Integración de planificación presupuestaria con otros módulos"
            },
            {
                "name": "Plantillas de planificación presupuestaria para Excel"
            },
            {
                "name": "Solución de problemas de presupuesto"
            }
        ]
    },
    {
        "name": "Gestión de efectivo y bancos",
        "img": gestionEfectivoBancoSrc,
        "subtopics": [
            {
                "name": "Previsiones de flujo de efectivo"
            },
            {
                "name": "Solucionar problemas de configuración de pronóstico de flujo de efectivo"
            },
            {
                "name": "Espacio de trabajo para la gestión bancaria"
            },
            {
                "name": "Revalorización bancaria de divisa extranjera"
            },
            {
                "name": "Crear un contrato de crédito bancario para un crédito documentario"
            }
        ]
    },
    {
        "name": "Contabilidad de costes",
        "img": contabilidadCostesSrc,
        "subtopics": [
            {
                "name": "Calendarios fiscales, ejercicios y períodos"
            },
            {
                "name": "Agregar dimensiones financieras al espacio de trabajo del CFO"
            },
            {
                "name": "Crear estructuras contables"
            },
            {
                "name": "Crear dimensiones e importar miembros de dimensión"
            },
            {
                "name": "Asignar miembros de dimensión de elemento de coste a un conjunto común de miembros de dimensión"
            }
        ]
    },
    {
        "name": "Gestión de gastos",
        "img": gestionGastosSrc,
        "subtopics": [
            {
                "name": "Configurar flujos de trabajo para la gestión de gastos"
            },
            {
                "name": "Parámetros de administración de gastos"
            },
            {
                "name": "Importar y mantener transacciones con tarjetas de crédito"
            },
            {
                "name": "Recuperación de IVA"
            },
            {
                "name": "Registrar un informe de gastos"
            }
        ]
    },
    {
        "name": "Activos fijos",
        "img": activoFijoSrc,
        "subtopics": [
            {
                "name": "Crear un activo fijo"
            },
            {
                "name": "Proponer adquisiciones de activos fijos"
            },
            {
                "name": "Visión general de la actualización del libro amortización"
            },
            {
                "name": "Registrar las transacciones de activos fijos para registrar capas"
            },
            {
                "name": "Reducir la depreciación del saldo después de una división"
            }
        ]
    },
    {
        "name": "Arrendamiento de activos",
        "img": arrendamientoActivosSrc,
        "subtopics": [
            {
                "name": "Informes de arrendamiento de activos"
            },
            {
                "name": "Configuración de arrendamiento de activos",
                "subtopics": [
                    {
                        "name": "Configurar parámetros de arrendamiento"
                    },
                    {
                        "name": "Configurar libros de arrendamiento"
                    },
                    {
                        "name": "Crear un grupo de arrendamientos"
                    },
                    {
                        "name": "Configurar nombres de diarios de arrendamiento"
                    },
                    {
                        "name": "Configurar cuentas de registro de arrendamiento"
                    }
                ]
            },
            {
                "name": "Administración arrendamiento de activo",
                "subtopics": [
                    {
                        "name": "Agregar o copiar arrendamientos"
                    },
                    {
                        "name": "Crear facturas de pago"
                    },
                    {
                        "name": "Registrar depreciación de activo por derecho de uso "
                    },
                    {
                        "name": "Proponer un arrendamiento para su rescisión"
                    },
                    {
                        "name": "Reclasificar la parte a corto plazo de un pasivo por arrendamiento"
                    }
                ]
            }
        ]
    },
    {
        "name": "Libro mayor",
        "img": libroMayorSrc,
        "subtopics": [
            {
                "name": "Cuentas",
                "subtopics": [
                    {
                        "name": "Especificar combinaciones de cuentas y dimensiones (control de entrada segmentada)"
                    },
                    {
                        "name": "Diarios equilibrados para la contabilidad interunidad"
                    },
                    {
                        "name": "Configurar descripciones predeterminadas para registro automático"
                    },
                    {
                        "name": "Mantener plantillas predeterminadas de dimensión financiera"
                    },
                    {
                        "name": "Conversión de consolidaciones financieras y divisa",
                        "subtopics":[
                            {
                                "name": "Consolidaciones financieras en línea"
                            },
                            {
                                "name": "Generar informes financieros consolidados"
                            },
                            {
                                "name": "Importar datos de las filiales desde archivos"
                            },
                            {
                                "name": "Preparar una entidad jurídica para el proceso de consolidación"
                            },
                            {
                                "name": "Configurar una entidad jurídica subsidiaria para consolidación"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Diarios y libros mayores",
                "subtopics": [
                    {
                        "name": "Procesamiento de diarios generales"
                    },
                    {
                        "name": "Registrar diarios periódicos"
                    },
                    {
                        "name": "Configurar la contabilidad de empresas vinculadas"
                    },
                    {
                        "name": "Crear reglas avanzadas para diarios"
                    },
                    {
                        "name": "Ver el asiento de empresas vinculadas relacionadas del diario"
                    }
                ]
            },
            {
                "name": "Cierre de final de período",
                "subtopics": [
                    {
                        "name": "Cerrar la contabilidad general al final del período"
                    },
                    {
                        "name": "Cerrar la contabilidad general al final del período"
                    },
                    {
                        "name": "Cierre masivo de período financiero"
                    },
                    {
                        "name": "Cerrar el ejercicio"
                    },
                    {
                        "name": "Cierre de fin de año"
                    }
                ]
            },
            {
                "name": "Impuestos",
                "subtopics": [
                    {
                        "name": "Índices de impuestos en función de la base marginal y los métodos de cálculo"
                    },
                    {
                        "name": "Pagos de impuestos y reglas de redondeo"
                    },
                    {
                        "name": "Métodos de cálculo de impuestos en el campo Origen"
                    },
                    {
                        "name": "Importe completo y opciones de cálculo de intervalo para los códigos de impuestos"
                    },
                    {
                        "name": "Calcular y ajustar los impuestos en una factura de proveedor"
                    }
                ]
            },
            {
                "name": "Área de trabajo de auditoria",
                "subtopics": [
                    {
                        "name": "Reglas de directivas de auditoría"
                    },
                    {
                        "name": "Infracciones y casos de directivas de auditoría"
                    },
                    {
                        "name": "Definir directivas de auditoría para documentos de origen"
                    }
                ]
            }
        ]
    },
    {
        "name": "Informes financieros",
        "img": informeFinancieroSrc,
        "subtopics": [
            {
                "name": "Componentes de los informes financieros"
            },
            {
                "name": "Informes financieros de balance de situación"
            },
            {
                "name": "Preferencias de usuario en el diseñador de informes financieros"
            },
            {
                "name": "Organizar los componentes del informe en el diseñador de informes"
            },
            {
                "name": "Definiciones de organigramas en informes financieros"
            }
        ]
    }
]
export default contentsData