const dataPage = [
    {
        "topic_id": 11,
        "elements": [
            {
                "text": "Establecer condiciones de pago de cliente",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Este procedimiento define una configuración de descuento por pronto pago y fecha de vencimiento. Esta guía de la tarea usa la empresa de demostración USMF.",
                "type": "p"
            },


            {
                "type": "p",
                "text": "1. Vaya a Panel de exploración > Módulos > Clientes > Configuración de pagos > Días de pago. La configuración de los términos de pago se comparte para clientes y proveedores. Si los define en un módulo, estarán disponibles en el otro módulo también. Para esta guía de la tarea, configuraré todos los términos de pago en clientes.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    },
                    {
                        "text": "Panel de exploración"
                    },
                    {
                        "text": "Módulos"
                    },
                    {
                        "text": "Clientes"
                    },
                    {
                        "text": "Configuración de pagos"
                    },
                    {
                        "text": "Días de pago."
                    },
                    {
                        "text": "términos de pago"
                    },
                    {
                        "text": "clientes"
                    },
                    {
                        "text": "proveedores."
                    },
                    {
                        "text": "clientes."
                    }
                ]
            },
            {
                "type": "p",
                "text": "2. Haga clic en Nuevo. Cree un día de pago si sus condiciones de pago requieren un día concreto de la semana (lunes, martes, etc.) o de una fecha específica del mes (5, 10, etc.).",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    },
                    {
                        "text": "Nuevo."
                    }
                ]
            },
            {
                "type": "p",
                "text": "3. En el campo Día de pago, escriba un identificador.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "3. "
                    },
                    {
                        "text": "Día de pago,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "4. En el campo Descripción, especifique una descripción del día de pago.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "4. "
                    },
                    {
                        "text": "Descripción,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "5. En el campo Semana/Mes, seleccione la semana o el mes. Si desea especificar un día de la semana, por ejemplo, lunes, seleccione Semana. Si desea especificar una fecha del mes, por ejemplo, 10, seleccione Mes. Para este ejemplo, seleccione Mes.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "5. "
                    },
                    {
                        "text": "Semana/Mes,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "6. En el campo Día del mes, escriba una fecha. La fecha se debe especificar como un número, por ejemplo, “10”, y no como “10°”.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "6. "
                    },
                    {
                        "text": "Día del mes,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "7. Haga clic en Guardar.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "7. "
                    },
                    {
                        "text": "Guardar."
                    }
                ]
            },
            {
                "type": "p",
                "text": "8. Cierre la página.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "8. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "9. Vaya a Panel de exploración > Módulos > Clientes > Configuración de pagos > Condiciones de pago.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "9. "
                    },
                    {
                        "text": "Panel de exploración"
                    },
                    {
                        "text": "Módulos"
                    },
                    {
                        "text": "Clientes"
                    },
                    {
                        "text": "Configuración de pagos"
                    },
                    {
                        "text": "Condiciones de pago"
                    }
                ]
            },
            {
                "type": "p",
                "text": "10. Haga clic en Nuevo. Las condiciones de pago se usan para definir cómo se calcularán las fechas de vencimiento. La configuración de fecha de descuento por pronto pago se define en una página independiente.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "10. "
                    },
                    {
                        "text": "Nuevo."
                    }
                ]
            },
            {
                "type": "p",
                "text": "11. En el campo Condiciones de pago, escriba un identificador.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "11. "
                    },
                    {
                        "text": "Condiciones de pago,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "12. En el campo Descripción, escriba una descripción.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "12. "
                    },
                    {
                        "text": "Descripción,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "13. Seleccione un Método de pago como reembolso, neto, mes actual, etc. El método de pago se usa para definir el inicio de cómo se calculará la deuda. Por ejemplo, Neto se usa si la fecha de vencimiento siempre es un número fijo de meses o de días después de la fecha de la factura. Se puede usar contra reembolso cuando se requiere el pago al facturar, por lo que no calcularía una fecha de vencimiento. Seleccione el mes actual para esta guía de tareas.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "13. "
                    },
                    {
                        "text": "Método de pago"
                    }
                ]
            },
            {
                "type": "p",
                "text": "14. Seleccione un día de pago si un día concreto de la semana o la fecha se incluye en el cálculo. En función de sus condiciones de pago, puede especificar una cantidad en meses o días. O puede usar Programación de pagos o Día de pago para “agregarlo” al final del método de pago. Si la fecha de vencimiento siempre es el día 10 del mes próximo, seleccione el día de pago 10.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "14. "
                    },
                    {
                        "text": "día de pago"
                    },
                    {
                        "text": "Programación de pagos"
                    },
                    {
                        "text": "Día de pago"
                    },
                    {
                        "text": "día de pago"
                    }
                ]
            },
            {
                "type": "p",
                "text": "15. Haga clic en Guardar.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "15. "
                    },
                    {
                        "text": "Guardar."
                    }
                ]
            },
            {
                "type": "p",
                "text": "16. Cierre la página.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "16. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "17. Vaya a Clientes > Configuración de pagos > Descuentos por pronto pago.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "17. "
                    },
                    {
                        "text": "Clientes"
                    },
                    {
                        "text": "Configuración de pagos"
                    },
                    {
                        "text": "Descuentos por pronto pago."
                    }
                ]
            },
            {
                "type": "p",
                "text": "18. Haga clic en Nuevo. Esta página se usa para definir cómo se calculará la fecha de descuento por pronto pago.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "18. "
                    },
                    {
                        "text": "Nuevo."
                    }
                ]
            },
            {
                "type": "p",
                "text": "19. En el campo Descuento por pronto pago, escriba un identificador.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "19. "
                    },
                    {
                        "text": "Descuento por pronto pago,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "20. En el campo Descripción, escriba una descripción.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "20. "
                    },
                    {
                        "text": "Descripción,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "21. Si un descuento por pronto pago con niveles está disponible, seleccione el Código de descuento siguiente que es relevante después de este nuevo descuento por pronto pago.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "21. "
                    },
                    {
                        "text": "Código de descuento siguiente"
                    }
                ]
            },
            {
                "type": "p",
                "text": "22. En el campo Días, especifique el número de días utilizados para calcular la fecha de descuento por pronto pago. Si ha seleccionado Neto, el número de días se agregará a la fecha de factura para calcular la fecha de descuento por pronto pago.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "22. "
                    },
                    {
                        "text": "Días,"
                    },
                    {
                        "text": "Neto,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "23. En el campo Porcentaje de descuento, escriba el porcentaje de descuento por pronto pago.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "23. "
                    },
                    {
                        "text": "Porcentaje de descuento,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "24. En Cuenta principal para descuentos de cliente, especifique la cuenta principal en la que se contabilizará el descuento por pronto pago de las facturas de cliente.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "24. "
                    },
                    {
                        "text": "Cuenta principal para descuentos de cliente,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "25. En el campo Cuentas de contrapartida para descuentos, seleccione una opción. Si selecciona “Cuentas en las líneas de factura”, el descuento por pronto pago se registrará en la misma cuenta principal de activos/gastos en las líneas de la factura de proveedor. Si selecciona “Usar cuenta principal para las facturas de proveedor” el descuento por pronto pago se registrará en la cuenta principal que se define en “Cuenta principal para las facturas de proveedor”. En este ejemplo, seleccione “Usar cuenta principal para las facturas de proveedor”.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "25. "
                    },
                    {
                        "text": "Cuentas de contrapartida para descuentos,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "26. En Cuenta principal para descuentos de proveedor, especifique la cuenta principal en la que se contabilizará el descuento por pronto pago de las facturas de proveedor.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "26. "
                    },
                    {
                        "text": "Cuenta principal para descuentos de proveedor,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "27. Haga clic en Guardar.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "27. "
                    },
                    {
                        "text": "Guardar."
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/24gGnS6TL6s",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 12,
        "elements": [
            {
                "text": "Establecer método de pago de cliente",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://www.youtube.com/embed/2idjzGy4ejw"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "En este tema se explica cómo crear un método de pago para los pagos de clientes. Esta tarea usa la empresa de demostración USMF.",
                "type": "p"
            },
            {
                "type": "p",
                "text": "1. En el Panel de exploración, vaya a Módulos > Clientes > Configuración de pagos > Métodos de pago.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    },
                    {
                        "text": "Módulos"
                    },
                    {
                        "text": "Clientes"
                    },
                    {
                        "text": "Configuración de pagos"
                    },
                    {
                        "text": "Métodos de pago."
                    }
                ]
            },
            {
                "type": "p",
                "text": "2. Seleccione Nuevo.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    },
                    {
                        "text": "Nuevo."
                    }
                ]
            },
            {
                "type": "p",
                "text": "3. En el campo Método de pago, especifique un Id. para la forma de pago. El id. de método de pago se muestra en las facturas y los pagos, por lo que debe escribir uno bastante descriptivo para comprender qué tipo de pago se registra y para qué cuenta bancaria.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "3. "
                    },
                    {
                        "text": "Método de pago,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "4. En el campo Descripción, escriba una descripción.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "4. "
                    },
                    {
                        "text": "Descripción,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "5. Seleccione qué estado de pago es necesario para que los pagos se registren. Al crear un pago de cliente, solo se puede registrar cuando el estado de pago coincide con el estado de pago que se define aquí.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "5. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "6. Seleccione cómo se deben crear los pagos de los clientes para las facturas. Esta opción solo se usa al ejecutar una propuesta de pago. Se podría usar una propuesta de pago para los pagos del cliente al realizar débitos directos y si se retiran los fondos de las cuentas bancarias de los clientes.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "6. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "7. Seleccione el tipo de pago. El tipo de pago ayudará a determinar si se producirá o no alguna validación en el pago.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "7. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "8. Seleccione en qué tipo de cuenta se registrarán los pagos. Normalmente, el banco se seleccionará para esta opción.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "8. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "9. Seleccione la cuenta bancaria en la que se registrará este pago.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "9. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "10. Especifique el tipo de transacción bancaria para identificar el tipo de pago usado por su banco. El tipo de transacción bancaria se usa durante el proceso de conciliación bancaria y puede hacer más fácil la conciliación.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "10. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "11. Seleccione si este pago se registrará temporalmente en una cuenta puente. Si desea intentar la hora flotante para que un pago desactive el banco, use la funcionalidad de puente. El pago se registrará temporalmente en una cuenta contable hasta se compense en el banco, en cuyo momento el pago se moverá a la cuenta bancaria que ha definido aquí.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "11. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "12. Escriba la cuenta principal utilizada para la contabilización puente. Esta es la cuenta principal en la que el pago se registrará temporalmente si usa el puente.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "12. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "13. Use la ficha Formato de archivo para definir la configuración de los pagos electrónicos.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "13. "
                    },
                    {
                        "text": "Formato de archivo"
                    }
                ]
            },
            {
                "type": "p",
                "text": "14. Use la ficha Control de pagos para definir los campos que son obligatorios. Por ejemplo, si necesita que se depositen todos los pagos con este método de pago, puede elegir esta opción en esta ficha.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "14. "
                    },
                    {
                        "text": "Control de pagos"
                    }
                ]
            },
            {
                "type": "p",
                "text": "15. Use la ficha Atributos de pago para definir qué atributos de pago usar para esta forma de pago.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "15. "
                    },
                    {
                        "text": "Atributos de pago"
                    }
                ]
            },
            {
                "type": "p",
                "text": "16. Seleccione Guardar.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "16. "
                    },
                    {
                        "text": "Guardar."
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/24gGnS6TL6s",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 13,
        "elements": [
            {
                "text": "Establecer cuotas de pago de cliente",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Creación de cuotas de pago para pagos de clientes.",
                "type": "p"
            },
            {
                "text": "Esta tarea usa la empresa de demostración USMF.",
                "type": "p"
            },
            {
                "type": "p",
                "text": "1. En el Panel de exploración, vaya a Módulos > Clientes > Configuración de pagos > Cuota de pago.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    },
                    {
                        "text": "Panel de exploración,"
                    },
                    {
                        "text": "Módulos"
                    },
                    {
                        "text": "Clientes"
                    },
                    {
                        "text": "Configuración de pagos"
                    },
                    {
                        "text": "Cuota de pago."
                    }
                ]
            },
            {
                "type": "p",
                "text": "2. Haga clic en Nuevo.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    },
                    {
                        "text": "Nuevo."
                    }
                ]
            },
            {
                "type": "p",
                "text": "3. En el campo Id. de cuota, especifique un identificador para la cuota. El Id. de cuota se muestra en los diarios de pagos, por lo que debe hacerlo descriptivo para comprender qué cuota se está aplicando.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "3. "
                    },
                    {
                        "text": "Id. de cuota,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "4. Escriba un nombre para la cuota en el campo Nombre.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "4. "
                    },
                    {
                        "text": "Nombre."
                    }
                ]
            },
            {
                "type": "p",
                "text": "5. En el campo Descripción de cuota, especifique una descripción para la cuota.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "5. "
                    },
                    {
                        "text": "Descripción de cuota,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "6. En el campo Cargo, seleccione si la cuota se cobrará al cliente o a una cuenta contable. Si la cuota se aplica al cliente, seleccione Cliente. Si la cuota se aplica a su organización como gasto, seleccione Libro mayor. Para esta tarea, seleccione Cliente.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "6. "
                    },
                    {
                        "text": "Cargo,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "7. En el campo Tipo de diario, seleccione el tipo de diario que puede usar esta cuota de pago. Si estas cuotas se usan para los pagos de cliente, el tipo de diario será probablemente Cobros.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "7. "
                    },
                    {
                        "text": "Tipo de diario,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "8. Haga clic en Guardar.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "8. "
                    },
                    {
                        "text": "Guardar."
                    }
                ]
            },
            {
                "type": "p",
                "text": "9. Haga clic en Configuración de cuota de pago. La configuración de la cuota de pago se usa para definir los criterios para cuando se aplique la cuota de pago. Por ejemplo, puede definir que la cuota se calculará si la cuenta bancaria es USMF OPER, y el método de pago es cheque.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "9. "
                    },
                    {
                        "text": "onfiguración de cuota de pago."
                    }
                ]
            },
            {
                "type": "p",
                "text": "10. En el campo Agrupaciones, seleccione Tabla, Grupo o Todo para definir en qué cuentas bancarias se aplicará esta cuota. Si selecciona Todo, se podría aplicar esta cuota en todas las cuentas bancarias. Si selecciona Tabla, solo se podría aplicar esta cuota a la cuenta bancaria que seleccione. Si selecciona Grupo, solo se podría aplicar esta cuota a las cuentas bancarias en el grupo de bancos seleccionado.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "10. "
                    },
                    {
                        "text": "Agrupaciones,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "11. En el campo Relación del banco, seleccione un grupo de bancos o una cuenta bancaria. Si ha seleccionado Tabla, las búsquedas mostrarán cuentas bancarias. Si ha seleccionado Grupo, las búsquedas mostrarán grupos de bancos.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "11. "
                    },
                    {
                        "text": "Relación del banco,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "12. En la lista, haga clic en el vínculo de la fila seleccionada.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "12. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "13. En el campo Método de pago, seleccione el método de pago para la cuota que se va a evaluar. Por ejemplo, puede aplicar una cuota para sus clientes si envían los pagos como cheques, en lugar de como pago electrónico.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "13. "
                    },
                    {
                        "text": "Método de pago,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "14. En la lista, busque y seleccione el registro deseado.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "14. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "15. Si es relevante, en el campo Divisa de pago, especifique una divisa de pago. La divisa de pago se usa como criterio adicional para saber si se aplicará la cuota. Por ejemplo, su banco puede cobrar una cuota adicional para los pagos recibidos en divisa USD, ya que normalmente solo tramitan la divisa EUR.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "15. "
                    },
                    {
                        "text": "Divisa de pago,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "16. Seleccione si la cuota será un porcentaje, un importe o un intervalo.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "16. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "17. En el campo Porcentaje/Importe, especifique el porcentaje o el importe de la cuota. Si el campo Porcentaje / Importe es Porcentaje, el valor especificado aquí será un porcentaje. Si el campo Porcentaje / Importe es Importe, el valor especificado aquí será un importe. Si el campo Porcentaje / Importe es Intervalo, use la ficha Intervalo para definir los niveles.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "17. "
                    },
                    {
                        "text": "Porcentaje/Importe,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "18. En el campo Divisa de cuota, seleccione la divisa de la cuota. Esta es la divisa en la que se creará la cuota.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "18. "
                    },
                    {
                        "text": "Divisa de cuota,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "19. Haga clic en Guardar.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "19. "
                    },
                    {
                        "text": "Guardar."
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/-HKHYdClvx8",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 14,
        "elements": [
            {
                "text": "Distribuciones contables y asientos del subdiario contable para las facturas de servicios",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Las distribuciones contables se usan para definir cómo se contabilizará un importe; por ejemplo, cómo se contabilizarán los ingresos, impuestos o gastos en una factura de servicios. Cada importe que se debe contabilizar cuando se registre la factura de servicios en el diario tendrá una o varias distribuciones contables.",
                "type": "p"
            },
            {
                "text": "Distribuciones contables",
                "type": "h2"
            },
            {
                "text": "Puede usar los siguientes botones de la página Factura de texto libre para ver y para modificar probablemente las distribuciones contables de cada importe de la factura de texto libre.",
                "type": "p"
            },
            {
                "text":"Distribuir importes: permite ver y cambiar las distribuciones contables de una línea individual y todas las líneas secundarias, como impuestos o gastos. También puede ver y cambiar distribuciones contables para la línea secundaria directamente desde la página Transacciones de impuestos o la página Transacciones de gastos.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Distribuir importes:"
                    }
                ]
            },
            {
                "text": "Permite cambiar importes de encabezado de factura de servicios, como gastos o importes de redondeo de divisa.",
                "type": "p",
                "classes": "ms-5"
            },
            {
                "text": "Cambie importes de líneas de facturas de texto libre.",
                "type": "p",
                "classes": "ms-5"
            },
            {
                "text": "Ver distribuciones: permite ver las distribuciones contables para todas las líneas del documento. No se pueden cambiar las distribuciones contables desde esta vista.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Ver distribuciones:"
                    }
                ]
            },
            {
                "text": "Permite ver los importes de línea y encabezado.",
                "type": "p",
                "classes": "ms-5"
            },
            {
                "text": "https://www.youtube.com/embed/LM2daetVfiY",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 15,
        "elements": [
            {
                "text": "Corrección de una factura de servicios",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Este artículo explica cómo corregir una factura de servicios que se ha registrado y cómo reenviarla como factura corregida.",
                "type": "p",
            },
            {
                "text": "Para corregir una factura de servicios que ya se ha registrado, ábrala. En la página Factura, seleccione Cancelar y, a continuación seleccione Corregir factura. Seleccione un código de razón, agregue comentarios y seleccione la fecha para la nueva factura corregida. Puede modificar la factura corregida y registrarla.",
                "type": "p",
                "bolds": [
                    {
                        "text": "Factura"
                    },
                    {
                        "text": "Cancelar"
                    },
                    {
                        "text": "Corregir factura"
                    }
                ]
            },
            {
                "text": "Al registrar la factura corregida, se crea una factura de cancelación por un importe de crédito que sea igual al importe de la factura original. Por lo tanto, el saldo combinado de las facturas original y de cancelación es igual a 0 (cero). La factura de cancelación se liquida con la factura original.",
                "type": "p"
            },
            {
                "text": "https://www.youtube.com/embed/DTKDHlIcsyo",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 16,
        "elements": [
            {
                "text": "Auditar facturas e introducir datos en el sistema de proveedores",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Al recibir una factura de un proveedor en concepto de bienes o servicios de un pedido de compra, es posible que los procesos comerciales requieran que los bienes o servicios se reciban antes de poder aprobar la factura para su pago. Antes de empezar, asegúrese de que la clave de configuración Conciliación de facturas esté seleccionada.",
                "type": "p"
            },
            {
                "text": "En la página Parámetros de proveedores, asegúrese de que la opción Habilitar validación de conciliación de facturas esté seleccionada, el campo Registrar factura con discrepancias esté establecido en Requerir aprobación y el campo Directiva de conciliación de líneas esté establecido en Triple conciliación.",
                "type": "p",
                "bolds": [
                    {
                        "text": "Parámetros de proveedores,"
                    },
                    {
                        "text": "Registrar factura con discrepancias"
                    },
                    {
                        "text": "Requerir aprobación"
                    },
                    {
                        "text": "Directiva de conciliación de líneas"
                    },
                    {
                        "text": "Triple conciliación."
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/K04N5KViz1I",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 17,
        "elements": [
            {
                "text": "Directivas de triple conciliación",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Ejemplo: Triple conciliación para artículos",
                "type": "h2"
            },
            {
                "text": "Resumen: Ken es controlador en las sedes corporativas de una entidad jurídica llamada Fabrikam. Ken decide que todas las facturas de proveedor basadas en pedidos de compra deben coincidir con las líneas de pedido de compra (doble conciliación). Para las compras de los artículos que se usarán como activos fijos, las facturas se deben coincidir con las líneas de pedido de compra y las líneas de recepción de producto (triple conciliación).",
                "type": "p",
                "bolds": [
                    {
                        "text": "Resumen:"
                    }
                ]
            },
            {
                "text": "Fabrikam funciona con las entidades jurídicas y los empleados varias en todas las partes del mundo. Mientras el volumen de transacciones aumenta, las discrepancias entre los recibos y las facturas también se actualizando. Esto resulta en los activos que se han cancelado. Las facturas de los proveedores se vayan a pagadas, pero el proceso no incluye la identificación de discrepancias cuando se reciben menos artículos que se han ordenados, o cuando los artículos no se reciben en absoluto. El gasto también aumentará dado que los empleados aún necesitan las herramientas y otros materiales hacer que sus trabajos. Ken desea asegurarse de que los proveedores se envían los productos que se han que y los artículos se vayan a reciben por los empleados de Fabrikam. Por lo tanto, Ken requiere doble y la triple conciliación para todas las entidades jurídicas de la organización. Las ayudas de conciliación de facturas a garantizar que los problemas con los artículos que se hayan desaparecido o recibido puedan seguidos y cumplir.",
                "type": "p"
            },
            {
                "text": "https://www.youtube.com/embed/wHIcReY1IEU",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 18,
        "elements": [
            {
                "text": "Conciliación de facturas y pedidos de compra de empresas vinculadas",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "La entidad jurídica de compra que está involucrada en una transacción de negocios entre empresas vinculadas puede estar configurada para usar la conciliación de facturas de proveedores. Cuando el campo Registrar factura con discrepancias en el formulario Parámetros de proveedores se establece en Requerir aprobación, se realiza la validación de la conciliación de facturas. En este caso, los requisitos de registro para el negocio entre empresas vinculadas y la conciliación de facturas de proveedores deben ser cumplidos antes de que las facturas de proveedor de empresas vinculadas se puedan registrar.",
                "type": "p",
                "bolds": [
                    {
                        "text" :"Registrar factura con discrepancias"
                    },
                    {
                        "text": "Parámetros de proveedores"
                    },
                    {
                        "text": "Requerir aprobación"
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/tUm_Du0MQRE",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 19,
        "elements": [
            {
                "text": "Configurar directivas de factura de proveedor",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "En este tema se explica cómo configurar políticas de facturas de proveedor. Las directivas de factura de proveedor se ejecutan al registrar una factura de proveedor mediante la página Factura de proveedor y al abrir la página de infracciones de directiva de factura de proveedor. También puede configurar el flujo de trabajo de la factura de proveedor para ejecutar las directivas de factura de proveedor cada vez que envíe una factura al flujo de trabajo.",
                "type": "p"
            },
            {
                "text": "Las directivas de facturas de proveedor no se aplican a las facturas creadas en el registro de facturas o el diario de facturas.",
                "type": "p",
                "classes": "ms-4"
            },
            {
                "text": "La validación de conciliación de facturas no usa directivas de factura de proveedor, sino que se configura en la página Parámetros de proveedores.",
                "type": "p",
                "classes": "ms-4"
            },
            {
                "text": "Esta grabación usa la empresa de demostración USMF. El rol de administrador de proveedores o jefe de contabilidad realizaría estos pasos. Antes de empezar, asegúrese de que la clave de configuración Conciliación de facturas esté seleccionada.",
                "type": "p",
                "classes": "ms-4"
            },
            {
                "text": "https://www.youtube.com/embed/jTgqXkQvv1c",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 20,
        "elements": [
            {
                "text": "Registrar la factura de proveedor y cuadrarla con la cantidad recibida",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Al recibir una factura de un proveedor en concepto de bienes o servicios de un pedido de compra, es posible que los procesos comerciales requieran que los bienes o servicios se reciban antes de poder aprobar la factura para su pago. Antes de empezar, asegúrese de que la clave de configuración Conciliación de facturas esté seleccionada.",
                "type": "p"
            },
            {
                "text": "En la página Parámetros de proveedores, asegúrese de que la opción Habilitar validación de conciliación de facturas esté seleccionada, el campo Registrar factura con discrepancias esté establecido en Requerir aprobación y el campo Directiva de conciliación de líneas esté establecido en Triple conciliación.",
                "type": "p"
            },
            {
                "text": "https://www.youtube.com/embed/zs1ZkrgLjas",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 21,
        "elements": [
            {
                "text": "Planificación presupuestaria para documentos de justificación",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Los documentos de justificación proporcionan una descripción para aquellos que solicitan un presupuesto para explicar por qué es necesario un presupuesto específico.",
                "type": "p"
            },
            {
                "text": "El administrador presupuestario crea una plantilla del plan presupuestario en Microsoft Word y la asigna al proceso de planificación presupuestaria actual. A continuación, los propietarios de presupuesto pueden abrir la plantilla y tener los datos rellenados automáticamente en Word en función de su solicitud de presupuesto. Posteriormente, pueden agregar texto o datos adicionales antes de guardar y adjuntar el documento de justificación personalizado a su plan presupuestario.",
                "type": "p"
            },
            {
                "text": "https://www.youtube.com/embed/lq0wP414j0Y",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 22,
        "elements": [
            {
                "text": "Creación de un presupuesto desde cuentas de transacción y cuentas totales",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Este artículo proporciona una visión general del proceso para crear presupuestos basados en cuentas totales. También explica cómo activar el control presupuestario para las cuentas totales, si se requiere control presupuestario.",
                "type": "p"
            },
            {
                "text": "Los documentos de asiento de plan y registro presupuestario permiten presupuestar en las cuentas principales que tienen un tipo de cuenta principal Total. Los datos reales solo se pueden registrar en cuentas de transacciones principales.",
                "type": "p",
                "bolds": [
                    {
                        "text": "Total."
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/VqaPWr7BWmw",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 23,
        "elements": [
            {
                "text": "Integración de planificación presupuestaria con otros módulos",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Procesos periódicos para generar planes presupuestarios",
                "type": "h2"
            },
            {
                "text": "Se pueden generar planes presupuestarios desde los recursos siguientes:",
                "type": "p"
            },
            {
                "text": "Transacciones de contabilidad general",
                "type": "p",
                "classes": "ms-4"
            },
            {
                "text": "Activos fijos",
                "type": "p",
                "classes": "ms-4"
            },
            {
                "text": "Puestos de previsión",
                "type": "p",
                "classes": "ms-4"
            },
            {
                "text": "Previsiones de proyectos",
                "type": "p",
                "classes": "ms-4"
            },
            {
                "text": "Entradas de registro presupuestario",
                "type": "p",
                "classes": "ms-4"
            },
            {
                "text": "https://www.youtube.com/embed/UCyzbA41j8g",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 24,
        "elements": [
            {
                "text": "Plantillas de planificación presupuestaria para Excel",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Este tema muestra cómo crear plantillas de Excel que se usarán con planes presupuestarios mediante el conjunto de datos de demostración estándar y el inicio de sesión de usuario Admin. Para obtener más información sobre la planificación presupuestaria, consulte Visión general de la planificación presupuestaria. También puede seguir el tutorial Planificación presupuestaria para aprender los principios básicos de la configuración y el uso de módulos.",
                "type": "p"
            },
            {
                "text": "Generación de una hoja de cálculo mediante el diseño del documento de plan presupuestario",
                "type": "h2"
            },
            {
                "text": "Los documentos de plan presupuestario se pueden ver y editar mediante uno o varios diseños. Cada diseño puede tener una plantilla de documento de plan presupuestario asociada para ver y editar los datos del plan presupuestario en una hoja de cálculo de Excel. En este tema, una plantilla de documento de plan presupuestario se generará empleando una configuración de diseño existente.",
                "type": "p"
            },
            {
                "text": "https://www.youtube.com/embed/RTicLb-6dbI",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 25,
        "elements": [
            {
                "text": "Solución de problemas de presupuesto",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "¿Por qué no encuentro la página de puesto de previsión en Recursos humanos?",
                "type": "h2"
            },
            {
                "text": "Los puestos de previsión se han movido a Gestión presupuestaria.",
                "type": "p"
            },
            {
                "text": "¿Por qué no puedo eliminar un elemento de coste presupuestario?",
                "type": "h2"
            },
            {
                "text": "No puede eliminar un elemento de coste presupuestario asignado a un puesto de previsión. Para poder eliminar un elemento de coste presupuestario, debe quitarlo de todas las posiciones de previsión. Sugerencia: Para encontrar todos los puestos a los que está asignado un elemento de coste presupuestario, seleccione el elemento de coste en la página Elementos de coste presupuestario y, a continuación, haga clic en Actualizar puestos. Los puestos que usan el elemento de coste se muestran en la cuadrícula superior.",
                "type": "p",
                "bolds": [
                    {
                        "text": "Sugerencia:"
                    },
                    {
                        "text": "Elementos de coste presupuestario"
                    },
                    {
                        "text": "Actualizar puestos."
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/B3EL0xdvaUY",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 26,
        "elements": [
            {
                "text": "Previsiones de flujo de efectivo",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Puede usar las herramientas para la previsión del flujo de efectivo para analizar el flujo de efectivo que va a entrar y los requisitos de divisa para estimar la futura necesidad de efectivo de la compañía. Para obtener una previsión fiable del flujo de efectivo, debe completar las tareas siguientes:",
                "type": "p"
            },
            {
                "text": "Identifique y haga una lista con todas las cuentas de liquidez. Las cuentas de liquidez son las cuentas de efectivo de la empresa y equivalentes.",
                "type": "p",
                "classes": "ms-3"
            },
            {
                "text": "Configurar el comportamiento de las previsiones de transacciones que afecten a las cuentas de liquidez de la empresa.",
                "type": "p",
                "classes": "ms-3"
            },
            {
                "text": "https://www.youtube.com/embed/D4YyET7h-Cc",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 27,
        "elements": [
            {
                "text": "Solucionar problemas de configuración de pronóstico de flujo de efectivo",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "¿Por qué se muestra el flujo de efectivo para una sola entidad legal?",
                "type": "h2"
            },
            {
                "text": "La previsión de flujo de caja se configura y calcula por entidad jurídica. Los informes de Power BI y la capacidad de pronóstico de flujo de efectivo en Finance Insights muestran los resultados.",
                "type": "p"
            },
            {
                "text": "La previsión de flujo de efectivo debe configurarse para cada entidad jurídica para la que desee ver una previsión. Revise la configuración de la previsión de flujo de caja en todas sus entidades legales. Alternativamente, revise la configuración de todas las entidades legales para la previsión de flujo de efectivo y asegúrese de que estén configuradas según lo previsto.",
                "type": "p"
            },
            {
                "text": "https://www.youtube.com/embed/9bN_qF79ckQ",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 28,
        "elements": [
            {
                "text": "Espacio de trabajo para la gestión bancaria",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Vista de resumen",
                "type": "h2"
            },
            {
                "text": "Resumen",
                "type": "h3"
            },
            {
                "text": "Los mosaicos en la sección Resumen ofrecen una visión general de las cuentas bancarias y acceso rápido a las páginas que utiliza con mayor frecuencia. La información de conciliación bancaria es específica de las funcionalidades avanzadas de conciliación bancaria. La información solo se incluye para aquellas cuentas bancarias que tengan la opción Conciliación bancaria avanzada establecida en Sí en la página Cuenta bancaria. En la sección Resumen , puede importar archivos bancarios electrónicos para las cuentas bancarias en todas las entidades jurídicas.",
                "type": "p",
                "bolds": [
                    {
                        "text": "Resumen"
                    },
                    {
                        "text": "Conciliación bancaria avanzada"
                    },
                    {
                        "text": "Cuenta bancaria."
                    },
                    {
                        "text": "Resumen ,"
                    },
                    {
                        "text": "Sí "
                    }
                ]
            },
            {
                "text": "Cuentas bancarias",
                "type": "h3"
            },
            {
                "text": "Cada cuenta bancaria en la entidad jurídica se representa mediante una tarjeta en la sección Cuentas bancarias. Se muestran los saldos actuales y puede explorar en profundidad las transacciones que componen dicho importe de saldo de resumen. El importe de Transacciones puente también le permite explorar en profundidad las transacciones que componen dicho importe de resumen. Las transacciones puente son las transacciones pendientes que se han registrado con la funcionalidad de puente, pero que aún no se han borrado. El importe de Saldo pendiente es el saldo actual menos las transacciones puente o pendientes.",
                "type": "p",
                "bolds": [
                    {
                        "text": "Cuentas bancarias."
                    },
                    {
                        "text": "Transacciones puente"
                    },
                    {
                        "text": "Saldo pendiente"
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/imsuTg8rUVk",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 29,
        "elements": [
            {
                "text": "Revalorización bancaria de divisa extranjera",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Como parte de una período final, las prácticas contables requieren que los saldos de la cuenta de ese banco en divisas extranjeras se revaloricen mediante distintos tipos de cambio (circulante, histórico, medio, etc.). La característica de revalorización de divisa extranjera del banco se puede usar para revalorizar una o más cuentas bancarias. La función también es una función global. Por lo tanto, desde una sola página, puede revalorizar los bancos en todas las entidades jurídicas a las que tiene acceso.",
                "type": "p"
            },
            {
                "text": "Si ejecuta el proceso de revalorización, el saldo en cada cuenta bancaria que se haya registrado en una divisa extranjera se revalorizará. Las transacciones de pérdidas o ganancias no realizadas que se crean durante el proceso de revalorización son generadas por el sistema. Se pueden crear dos transacciones, una para la divisa de contabilidad y una para la divisa de notificación, si una divisa de notificación es procedente. Cada entrada contable se publicará para el beneficio o pérdida no realizada y la cuenta principal que se revalorizará.",
                "type": "warning"
            },
            {
                "text": "Preparación para ejecutar una revalorización de divisa extranjera",
                "type": "h2"
            },
            {
                "text": "En la página Libro mayor, especifique el tipo de cambio. Si no se define un tipo de cambio en la cuenta principal, se va a utilizar este tipo de cambio durante la revalorización de divisa extranjera.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Libro mayor,"
                    }
                ]
            },
            {
                "text": "En la página Libro mayor, especifique las cuentas de beneficio realizado, pérdida realizada, beneficio no realizado y pérdida no realizada para la revalorización de divisa. Se utilizan las cuentas de beneficio realizado y de pérdida realizada cuando se liquiden las transacciones de los clientes y los proveedores. Las cuentas de beneficio no realizado y pérdidas no realizadas se usan para revalorizar transacciones abiertas y cuentas principales de contabilidad general.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Libro mayor,"
                    }
                ]
            },
            {
                "text": "En la página Cuentas de revalorización de divisa, seleccione cuentas de revalorización de divisa diferentes para cada divisa y empresa. Si no se define ninguna cuenta, se usan las cuentas de la página Libro mayor.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Libro mayor."
                    },
                    {
                        "text": "Cuentas de revalorización de divisa,"
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/TucRBwvBJGY",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 30,
        "elements": [
            {
                "text": "Crear un contrato de crédito bancario para un crédito documentario",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Crear un contrato de instalaciones bancarias",
                "type": "h2"
            },
            {
                "text": "1. Vaya a Gestión de efectivo y bancos > Créditos documentarios > Contratos de instalaciones bancarias.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    }
                ]
            },
            {
                "text": "2. Haga clic en Nuevo.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    }
                ]
            },
            {
                "text": "3. En el campo de Número de contrato, especifique el número de contrato según el acuerdo con el banco.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "3. "
                    }
                ]
            },
            {
                "text": "4. En el campo Cuenta bancaria, indique el número de cuenta bancaria en el banco emisor.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "4. "
                    }
                ]
            },
            {
                "text": "5. En la lista, haga clic en el vínculo de la fila seleccionada.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "5. "
                    }
                ]
            },
            {
                "text": "6. En el campo Fecha inicial, especifique una fecha y una hora.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "6. "
                    }
                ]
            },
            {
                "text": "7. En el campo Fecha final, especifique una fecha y una hora.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "7. "
                    }
                ]
            },
            {
                "text": "8. Expanda o contraiga la sección General.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "8. "
                    }
                ]
            },
            {
                "text": "9. Haga clic en Agregar línea.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "9. "
                    }
                ]
            },
            {
                "text": "10. En el campo Tipo de instalación, haga clic en el botón desplegable para abrir la búsqueda.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "10. "
                    }
                ]
            },
            {
                "text": "11. En la lista, busque y seleccione el registro deseado.0",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "11. "
                    }
                ]
            },
            {
                "text": "12. En la lista, haga clic en el vínculo de la fila seleccionada.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "12. "
                    }
                ]
            },
            {
                "text": "13. En el campo Límite, especifique el importe de crédito negociado con el banco.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "13. "
                    }
                ]
            },
            {
                "text": "14. Haga clic en Guardar.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "14. "
                    }
                ]
            },
            {
                "text": "15. Haga clic en Extender para abrir el cuadro de diálogo desplegable.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "15. "
                    }
                ]
            },
            {
                "text": "16. En el campo Nuevo número de contrato, escriba un valor.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "16. "
                    }
                ]
            },
            {
                "text": "17. En el campo Fecha final, especifique una fecha y una hora.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "17. "
                    }
                ]
            },
            {
                "text": "18. Haga clic en Extender.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "18. "
                    }
                ]
            },
            {
                "text": "19. Cierre la página.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "19. "
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/gqOi_DNNcrU",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 31,
        "elements": [
            {
                "text": "Calendarios fiscales, ejercicios y períodos",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Seleccionar los calendarios fiscales para los ciclos presupuestarios, activos fijos y para la contabilidad",
                "type": "h2"
            },
            {
                "text": "Los calendarios fiscales se usan con la depreciación de activos fijos, transacciones financieras y ciclos presupuestarios. Una vez creado un año fiscal, puede utilizarlo para distintos fines. Puede seleccionar un calendario fiscal para un libro de activo fijo para convertirlo en un calendario de activos fijos. Puede seleccionar un calendario fiscal para un libro mayor para convertirlo en un calendario contable. También puede seleccionar un calendario fiscal para un ciclo de presupuesto para convertirlo en un calendario de presupuesto. Puede utilizar el mismo calendario fiscal para todo esto.",
                "type": "p"
            },
            {
                "text": "Seleccionar un calendario fiscal para la entidad jurídica",
                "type": "h3"
            },
            {
                "text": "Seleccione el calendario fiscal que desea utilizar para el libro mayor en la entidad jurídica del formulario Libro mayor. Es necesario seleccionar un calendario fiscal en la página Libro mayor para cada entidad jurídica. Tras seleccionar un calendario fiscal, puede establecer permisos y estados de períodos en la página Calendario contable para cualquier período que forme parte de un ejercicio.",
                "type": "p"
            },
            {
                "text": "Seleccionar un calendario fiscal para los activos fijos",
                "type": "h3"
            },
            {
                "text": "Puede seleccionar un calendario fiscal para un libro de activo fijo que vayan a utilizar los activos fijos que usan el libro seleccionado. Puede seleccionar cualquier calendario fiscal definido en la página Calendarios fiscales.",
                "type": "p"
            },
            {
                "text": "https://www.youtube.com/embed/E1P-EFHtYtc",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 32,
        "elements": [
            {
                "text": "Agregar dimensiones financieras al espacio de trabajo del CFO",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Este tema explica cómo agregar dimensiones financieras al área de trabajo de CFO (Director financiero), para que se puedan usar en el libro mayor y los informes presupuestarios. El área de trabajo del director financiero tiene una pestaña Visión general y una pestaña Datos financieros. Los informes de estas dos pestañas se basan en dos medidas: LedgerActivityMeasure y BudgetActivityMeasure. Existe una relación entre las dos medidas y la entidad DimensionCombinationEntity. Por lo tanto, puede seleccionar las dimensiones.",
                "type": "p",
                "bolds": [
                    {
                        "text": "Datos financieros."
                    },
                    {
                        "text": "Visión general "
                    }
                ]
            },
            {
                "text": "1. En Finance, en la página Almacén de la entidad , actualice las medidas MedidasActividadContable y MedidasActividadPresupuestaria .",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    },
                    {
                        "text": "MedidasActividadPresupuestaria ."
                    },
                    {
                        "text": "MedidasActividadContable "
                    },
                    {
                        "text": " Almacén de la entidad ,"
                    }
                ]
            },
            {
                "text": "2. En Microsoft Visual Studio, abra el Explorador de la aplicación, y busque ContabilidadCFO.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    },
                    {
                        "text": "ContabilidadCFO."
                    }
                ]
            },
            {
                "text": "3. En Recursos, abra ContabilidadCFOEspacioDeTrabajoPBIX.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "3. "
                    },
                    {
                        "text": "ContabilidadCFOEspacioDeTrabajoPBIX"
                    },
                    {
                        "text": "Recursos,"
                    }
                ]
            },
            {
                "text": "4. Cuando el recurso se abre en Microsoft Power BI Desktop, seleccione Obtener datos, seleccione Base de datos de SQL Server y después seleccione Conectar.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "4. "
                    },
                    {
                        "text": "Base de datos de SQL Server"
                    },
                    {
                        "text": "Conectar."
                    },
                    {
                        "text": "Obtener datos,"
                    }
                ],
            },
            {
                "text": "5. Especifique el nombre del servidor y seleccione AxDW como la base de datos. Haga clic en DirectQuery y, a continuación, en Aceptar.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "5. "
                    },
                    {
                        "text": "AxDW"
                    },
                    {
                        "text": "Aceptar."
                    },
                    {
                        "text": "DirectQuery"
                    }
                ]
            },
            {
                "text": "6. Busque y seleccione MedidasDeActividadContable_DimensiónCombinación, y después seleccione carga.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "6. "
                    },
                    {
                        "text": "MedidasDeActividadContable_DimensiónCombinación,"
                    },
                    {
                        "text": "carga."
                    }
                ]
            },
            {
                "text": "En el lista Campos , cambie el nombre de la tabla Dimensiones financieras, de modo que sea fácil identificar.",
                "type": "success",
                "classes": "ms-4"
            },
            {
                "text": "7. Seleccione Gestionar las relaciones, y después seleccione Nuevo.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "7. "
                    },
                    {
                        "text": "Gestionar las relaciones,"
                    },
                    {
                        "text": "Nuevo."
                    }
                ]
            },
            {
                "text": "8. En el primer campo, seleccione Actividades de la contabilidad general, y después seleccione DimensiónContable.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "8. "
                    },
                    {
                        "text": "DimensiónContable."
                    },
                    {
                        "text": "Actividades de la contabilidad general,"
                    }
                ]
            },
            {
                "text": "9. En el segundo campo, seleccione LedgerActivityMeasure_DimensionCombination (o Dimensiones financieras si se retituló la tabla). Seleccione el encabezado DimensiónCombinaciónRECID .",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "9. "
                    },
                    {
                        "text": "DimensiónCombinaciónRECID ."
                    },
                    {
                        "text": "Dimensiones financieras"
                    },
                    {
                        "text": "LedgerActivityMeasure_DimensionCombination"
                    }
                ]
            },
            {
                "text": "10. En el campo Cardinalidad , seleccione Muchos a uno.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "10. "
                    },
                    {
                        "text": "Cardinalidad ,"
                    },
                    {
                        "text": "Muchos a uno"
                    }
                ]
            },
            {
                "text": "11. Cambie el valor de Dirección del filtro cruzado a Individual.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "11. "
                    },
                    {
                        "text": "Dirección del filtro cruzado"
                    },
                    {
                        "text": "Individual."
                    }
                ]
            },
            {
                "text": "12. Seleccione Hacer esta relación activa y Asumir la integridad referencial, seleccione Aceptar y, a continuación seleccione Cerrar.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "12. "
                    },
                    {
                        "text": "Hacer esta relación activa"
                    },
                    {
                        "text": "Asumir la integridad referencial,"
                    },
                    {
                        "text": "Aceptar"
                    },
                    {
                        "text": "Cerrar."
                    }
                ]
            },
            {
                "text": "https://docs.microsoft.com/es-es/dynamics365/finance/general-ledger/media/create-relationship.png",
                "classes": "ps-4",
                "type": "img"
            },
            {
                "text": "13. En el lista Campos , debe ver la tabla y las dimensiones financieras disponibles. Arrastre las dimensiones financieras que desea a los filtros de informes nivel.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "13. "
                    },
                    {
                        "text": "Campos,"
                    }
                ]
            },
            {
                "text": "14. Guarde los cambios.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "14. "
                    }
                ]
            },
            {
                "text": "15. En el Árbol de objetos de aplicaciones (AOT), haga clic con el botón derecho en el proyecto y, a continuación seleccione Sincronizar.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "15. "
                    },
                    {
                        "text": "Sincronizar."
                    }
                ]
            },
            {
                "text": "16. Compile el proyecto, y después abra la aplicación para ver los resultados.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "16. "
                    }
                ]
            },
            {
                "text": "https://docs.microsoft.com/es-es/dynamics365/finance/general-ledger/media/workspace.png",
                "type": "img",
                "classes": "ps-4"
            },
            {
                "text": "https://www.youtube.com/embed/MML_ppaZXZk",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 33,
        "elements": [
            {
                "text": "Crear estructuras contables",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "1. Vaya a Panel de exploración > Módulos > Contabilidad general > Plan de cuentas > Estructuras > Configurar estructuras contables.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1"
                    },
                    {
                        "text": "Panel de exploración"
                    },
                    {
                        "text": "Módulos "
                    },
                    {
                        "text": "Contabilidad general"
                    },
                    {
                        "text": "Plan de cuentas"
                    },
                    {
                        "text": "Configurar estructuras contables."
                    },
                    {
                        "text": "Estructuras"
                    }
                ]
            },
            {
                "text": "2. En el panel Acción, haga clic en Nuevo para abrir el diálogo desplegable.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    },
                    {
                        "text": "Acción,"
                    },
                    {
                        "text": "Nuevo "
                    }
                ]
            },
            {
                "text": "3. En el campo Estructura contable, escriba un nombre para describir el propósito de la estructura contable.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "3. "
                    },
                    {
                        "text": "Estructura contable,"
                    }
                ]
            },
            {
                "text": "4. En el campo Descripción, escriba una descripción para especificar el propósito de la estructura contable.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "4. "
                    },
                    {
                        "text": "Descripción,"
                    }
                ]
            },
            {
                "text": "5. Haga clic en Crear.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "5. "
                    },
                    {
                        "text": "Crear."
                    }
                ]
            },
            {
                "text": "6. En Segmentos y valores permitidos, haga clic en Agregar segmento.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "6. "
                    },
                    {
                        "text": "Segmentos y valores permitidos,"
                    },
                    {
                        "text": "Agregar segmento."
                    }
                ]
            },
            {
                "text": "7. En la lista de dimensiones, seleccione la dimensión que se agregará a la estructura contable.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "7. "
                    }
                ]
            },
            {
                "text": "8. Al final de la lista, haga clic en Agregar segmento.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "8. "
                    },
                    {
                        "text": "Agregar segmento."
                    }
                ]
            },
            {
                "text": "9. Repita del paso 6 al 9 según sea necesario.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "9. "
                    }
                ]
            },
            {
                "text": "10. En la sección Detalles de valores permitidos, seleccione el segmento para editar los valores permitidos. Por ejemplo, haga clic en Cuenta principal.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "10. "
                    },
                    {
                        "text": "Detalles de valores permitidos,"
                    },
                    {
                        "text": "Cuenta principal."
                    }
                ]
            },
            {
                "text": "11. En el campo Operador, seleccione una opción, como está entre e incluye.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "11. "
                    },
                    {
                        "text": "Operador,"
                    }
                ]
            },
            {
                "text": "12. En el campo Valor, escriba un valor. Por ejemplo, 600000.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "12. "
                    },
                    {
                        "text": "Valor,"
                    }
                ]
            },
            {
                "text": "13. En el campo hasta, escriba un valor. Por ejemplo, 699999.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "13. "
                    },
                    {
                        "text": "hasta,"
                    }
                ]
            },
            {
                "text": "14. En la sección Detalles de valores permitidos , haga clic en Aplicar.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "14. "
                    },
                    {
                        "text": "Detalles de valores permitidos ,"
                    },
                    {
                        "text": "Aplicar."
                    }
                ]
            },
            {
                "text": "15. Repita del paso 10 al 15 según sea necesario.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "15. "
                    }
                ]
            },
            {
                "text": "16. En la sección Detalles de valores permitidos , haga clic en Agregar nuevo criterio.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "16. "
                    },
                    {
                        "text": "Detalles de valores permitidos ,"
                    },
                    {
                        "text": "Agregar nuevo criterio."
                    }
                ]
            },
            {
                "text": "17. En el campo Operador, seleccione una opción, como está entre e incluye.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "17. "
                    }
                ]
            },
            {
                "text": "18. En el campo hasta, escriba un valor. Por ejemplo, 034.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "18. "
                    },
                    {
                        "text": "Valor,"
                    }
                ]
            },
            {
                "text": "19. En el campo Valor, escriba un valor. Por ejemplo, 033.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "19. "
                    },
                    {
                        "text": "hasta,"
                    }
                ]
            },
            {
                "text": "20. Haga clic en Aplicar.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "20. "
                    },
                    {
                        "text": "Aplicar."
                    }
                ]
            },
            {
                "text": "21 En la cuadrícula, seleccione el segmento para editar los valores permitidos. Por ejemplo, Centro de coste.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "21 "
                    }
                ]
            },
            {
                "text": "22. En el campo CostCenter, escriba un valor. Por ejemplo, 007..021.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "22. "
                    },
                    {
                        "text": "CostCenter,"
                    }
                ]
            },
            {
                "text": "23. En Segmentos y valores permitidos, haga clic en Agregar.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "23. "
                    },
                    {
                        "text": "Segmentos y valores permitidos,"
                    },
                    {
                        "text": "Agregar."
                    }
                ]
            },
            {
                "text": "24. En el campo MainAccount, escriba un valor. Por ejemplo, 600000..699999",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "24. "
                    },
                    {
                        "text": "MainAccount,"
                    }
                ]
            },
            {
                "text": "25. En la cuadrícula, seleccione el segmento para editar los valores permitidos. Por ejemplo, Departamento.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "25. "
                    }
                ]
            },
            {
                "text": "26. En el campo Departamento, escriba un valor. Por ejemplo, 032.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "26. "
                    }
                ]
            },
            {
                "text": "27. En el campo CostCenter, escriba un valor. Por ejemplo, 086.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "27. "
                    }
                ]
            },
            {
                "text": "28. En el panel Acciones, haga clic en Validar.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "28. "
                    },
                    {
                        "text": "Acciones,"
                    },
                    {
                        "text": "Validar."
                    }
                ]
            },
            {
                "text": "29. En el panel de Acción, haga clic en Activar.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "29. "
                    },
                    {
                        "text": "Acción,"
                    },
                    {
                        "text": "Activar."
                    }
                ]
            },
            {
                "text": "30. Haga clic en Activar.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "30. "
                    },
                    {
                        "text": "Activar."
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/rLEyJQwdLFc",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 34,
        "elements": [
            {
                "text": "Crear dimensiones e importar miembros de dimensión",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Un elemento de coste corresponde a un artículo de coste relevante del plan de cuentas. Un objeto de coste corresponde a cualquier tipo de dimensión financiera, como productos, centros de coste y proyectos de los que quiera realizar una estimación, asignar costes o medir directamente. Una dimensión estadística y sus miembros se usan para registrar entradas no monetarias. Los miembros de dimensión estadística se pueden usar como base de asignación en la distribución y asignación de costes.",
                "type": "p",
                "bolds": [
                    {
                        "text": "elemento de coste"
                    },
                    {
                        "text": "objeto de coste"
                    },
                    {
                        "text": "dimensión estadística"
                    }
                ]
            },
            {
                "text": "En el diagrama siguiente se muestran las dimensiones que se usan en la contabilidad de costes.",
                "type": "p"
            },
            {
                "text": "https://docs.microsoft.com/es-es/dynamics365/finance/cost-accounting/media/cost-eos-dimensions.png",
                "type": "img"
            },
            {
                "text": "https://www.youtube.com/embed/5jWHnM_C7WM",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 35,
        "elements": [
            {
                "text": "Asignar miembros de dimensión de elemento de coste a un conjunto común de miembros de dimensión",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Asignando diferentes miembros de la dimensión del elemento de coste a un conjunto común de miembros de la dimensión del elemento de coste, los datos se combinan en un formato común para los análisis.",
                "type": "p"
            },
            {
                "text": "Si es una empresa global y cumple con los requisitos estatutarios de contabilidad, puede usar múltiples planes contables. Al importar los miembros de dimensión de elemento de coste desde diferentes planes contables, puede terminar con una mezcla de cuentas. Sin embargo, estas cuentas podrían tener la misma naturaleza y es posible que desee analizar y asignar costes para ellas mediante un formato común.",
                "type": "p"
            },
            {
                "text": "Conversión de divisas",
                "type": "h2"
            },
            {
                "text": "Los distintos planes contables que use se pueden configurar para utilizar distintas divisas. En este caso, asegúrese de especificar una conversión de divisa, para procesar los datos de coste en la divisa correcta, como se define en el libro mayor de la contabilidad de costes donde se usan los miembros de la dimensión del elemento de coste. En el ejemplo anterior, si se utilizan dólares estadounidenses (USD) en la contabilidad de la contabilidad de costes, debe crear una conversión de divisa de USD a euros (EUR) para procesar transacciones para los miembros de dimensión del elemento de coste asignados.",
                "type": "p"
            },
            {
                "text": "Actualizar las asignaciones en cualquier momento",
                "type": "h2"
            },
            {
                "text": "Puede actualizar las definiciones de asignación para una dimensión de elemnto de coste en cualquier momento. Dado que las asignaciones no son fechas efectivas, los cambios se aplican la próxima vez que procesa transacciones de coste o ejecuta cálculos de coste.",
                "type": "p"
            },
            {
                "text": "https://www.youtube.com/embed/1pUDtJQZ8FU",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 36,
        "elements": [
            {
                "text": "Configurar flujos de trabajo para la gestión de gastos",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Un flujo de trabajo representa un proceso de negocio. Define cómo un documento fluye a través del sistema e indica quién debe completar una tarea o aprobar un documento. El uso del sistema de flujo de trabajo en su organización tiene varios beneficios:",
                "type": "p"
            },
            {
                "text": "Procesos coherentes: puede definir el proceso de aprobación para documentos específicos, como solicitudes de compra e informes de gastos. El uso del sistema de flujo de trabajo contribuye a garantizar que los documentos se procesan y aprueban de forma coherente y eficaz.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Procesos coherentes:"
                    }
                ]
            },
            {
                "text": "Visibilidad de los procesos: puede realizar un seguimiento del estado, el historial y las métricas de rendimiento de una instancia de flujo de trabajo específica. Esto ayuda a determinar si se deben realizar cambios en el flujo de trabajo para mejorar su eficacia.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Visibilidad de los procesos:"
                    }
                ]
            },
            {
                "text": "Lista de trabajo centralizada: los usuarios pueden consultar una lista de trabajo centralizada para ver las tareas y las aprobaciones de flujo de trabajo que se les han asignado.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Lista de trabajo centralizada:"
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/gKrkOgAxexc",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 37,
        "elements": [
            {
                "text": "Parámetros de administración de gastos",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "colsCount": 2,
                "rows": [
                    [
                        {
                            "text": "Campo",
                            "type": "th"
                        },
                        {
                            "text": "Descripción",
                            "type": "th"
                        }
                    ],
                    [
                        {
                            "text": "Tasa estándar de kilometraje",
                            "type": "th"
                        },
                        {
                            "text": "Introduzca la tasa de reembolso por gastos de kilometraje. La tarifa se multiplicará por el kilometraje que se ingresa para el gasto, para calcular el importe a reembolsar por el gasto de viaje.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Gastos personales pagados por",
                            "type": "th"
                        },
                        {
                            "text": "Seleccione quién es responsable de pagar los importes de las transacciones con tarjeta de crédito que se clasifican como personales.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Mostrar el informe de gastos completo en desglose",
                            "type": "th"
                        },
                        {
                            "text": "Seleccione esta opción para mostrar todos los gastos de un informe de gastos cuando se visualizan los detalles del documento original para un comprobante específico que se generó cuando se registró el informe de gastos.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "La preautorización de viaje es obligatoria",
                            "type": "th"
                        },
                        {
                            "text": "Seleccione esta opción para solicitar que se envíe y apruebe una solicitud de viaje antes de que un empleado pueda enviar un informe de gastos.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Permitir la edición de distribuciones antes de registrar",
                            "type": "th"
                        },
                        {
                            "text": "Seleccione si las distribuciones de un informe de gastos se pueden editar antes de publicarse.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Evaluar las políticas de gestión de gastos",
                            "type": "th"
                        },
                        {
                            "text": "Seleccione cuándo se evalúan los gastos para determinar si se ha infringido una directiva de gastos. Los gastos se pueden evaluar para detectar infracciones cuando se ingresa y guarda la entrada de gastos, o cuando el gasto se envía para aprobación. Las reglas de directiva para los recibos necesarios se evaluarán cuando se guarde la línea de gastos.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Permitir líneas de gastos de empresas vinculadas",
                            "type": "th"
                        },
                        {
                            "text": "Seleccione permite la entrada de los gastos de otras entidades legales dentro de un informe de gastos.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Permitir editar el tipo de cambio para gastos de tarjetas de crédito",
                            "type": "th"
                        },
                        {
                            "text": "Seleccione esta opción para permitir al usuario editar el tipo de cambio para los gastos de tarjetas de crédito importadas.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Campos de jerarquía de varios niveles para mostrar",
                            "type": "th"
                        },
                        {
                            "text": "Seleccione los campos de aprobador que se muestran cuando el tipo de asignación de flujo de trabajo del informe de gastos se establece para ser una jerarquía y la selección de jerarquía está configurada para utilizar la jerarquía de aprobación de gastos de varios niveles. Cuando se utiliza la jerarquía de aprobación de varios niveles para un flujo de trabajo, los campos seleccionados se mostrarán y podrán editar en el informe de gastos.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Ingrese el número de tarjeta de crédito del empleado (actualización de julio de 2017)",
                            "type": "th"
                        },
                        {
                            "text": "Seleccione si se puede ingresar y guardar un número de 15 o 16 caracteres en el campo Id. de tarjeta en la página Tarjetas de crédito de un empleado.",
                            "type": "td"
                        }
                    ]
                ],
                "type": "table"
            },
            {
                "text": "https://www.youtube.com/embed/UVJGezmzYDo",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 38,
        "elements": [
            {
                "text": "Importar y mantener transacciones con tarjetas de crédito",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Importar transacciones con tarjeta de crédito",
                "type": "h2"
            },
            {
                "text": "1. En la página Transacciones con tarjeta de crédito, seleccione Importar transacciones. Si abre la administración de datos por primera vez, el sistema deberá actualizar la lista de entidades de datos para que pueda continuar.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    },
                    {
                        "text": "Transacciones con tarjeta de crédito,"
                    },
                    {
                        "text": "Importar transacciones."
                    }
                ]
            },
            {
                "text": "2. En el campo Nombre, introduzca una descripción única del trabajo de importación.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    },
                    {
                        "text": "Nombre,"
                    }
                ]
            },
            {
                "text": "3. En el campo Formato de datos de origen, seleccione el formato del archivo que contiene las transacciones con tarjeta de crédito que quiere importar.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "3. "
                    },
                    {
                        "text": "Formato de datos de origen,"
                    }
                ]
            },
            {
                "text": "4. Seleccione Cargar y luego busque y seleccione el archivo que desee importar.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "4. "
                    },
                    {
                        "text": "Cargar "
                    }
                ]
            },
            {
                "text": "5. Una vez cargado el archivo, valide la asignación del archivo de transacciones con tarjeta de crédito y las columnas de la entidad de datos de transacciones con tarjeta de crédito seleccionando el vínculo Ver mapa en el mosaico. Si hay errores de asignación o si debe cambiar la asignación, introduzca los cambios de asignación desde la pestaña Visualización de asignación o la pestaña Detalles de la asignación.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "5. "
                    },
                    {
                        "text": "Ver mapa"
                    },
                    {
                        "text": "Visualización de asignación"
                    },
                    {
                        "text": "Detalles de la asignación."
                    }
                ]
            },
            {
                "text": "6. Para automatizar las transacciones con tarjeta de crédito, seleccione Crear trabajo de datos periódico. Luego ya podrá establecer la periodicidad que define la frecuencia con la que se deben importar las transacciones con tarjeta de crédito. Cuando haya terminado, seleccione Aceptar.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "6. "
                    },
                    {
                        "text": "Crear trabajo de datos periódico."
                    },
                    {
                        "text": "Aceptar."
                    }
                ]
            },
            {
                "text": "7. Para importar ahora el archivo seleccionado, seleccione Importar.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "7. "
                    },
                    {
                        "text": "Importar."
                    }
                ]
            },
            {
                "text": "8. Si se producen errores durante la importación, puede ver el registro de ejecución o los datos de almacenamiento provisional para ver los errores que debe corregir para ayudar a garantizar una importación correcta.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "8. "
                    }
                ]
            },
            {
                "text": "Si debe importar más de un formato de archivo, debe crear trabajos de importación independientes para cada tipo de formato.",
                "type": "warning"
            },
            {
                "text": "https://www.youtube.com/embed/V_Hdf8azqUE",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 39,
        "elements": [
            {
                "text": "Recuperación de IVA",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Para recibir reembolsos en transacciones elegibles de impuesto al valor añadido (IVA), una empresa u organización debe identificar, recopilar, verificar y enviar información precisa. Este proceso incluye múltiples tareas y, dependiendo del tamaño de su empresa, puede incluir varios empleados o roles.",
                "type": "p"
            },
            {
                "text": "Para recuperar el IVA usando Administración de gastos, se deben completar los siguientes requisitos previos:",
                "type": "p"
            },
            {
                "text": "Se deben crear códigos de impuestos para países/regiones que se asignan a categorías de gastos.",
                "type": "p",
                "classes": "ms-4"
            },
            {
                "text": "Se debe crear un grupo de impuestos para cada código de impuestos.",
                "type": "p",
                "classes": "ms-4"
            },
            {
                "text": "Se debe crear un código de impuestos sobre las ventas de elemento para cada grupo de impuestos sobre las ventas.",
                "type": "p",
                "classes": "ms-4"
            },
            {
                "text": "Una vez que se completan los requisitos previos, los empleados siguen los siguientes pasos para solicitar reembolsos por transacciones de IVA.",
                "type": "p"
            },
            {
                "text": "1. En un informe de gastos, introduzca información fiscal sobre transacciones con tarjeta de crédito para identificar reembolsos de IVA elegibles.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    }
                ]
            },
            {
                "text": "2. Verifique que toda la información fiscal esté completa y luego registre el informe de gastos.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    }
                ]
            },
            {
                "text": "3. Gastos de proceso que son elegibles para la recuperación del IVA internacional.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "3. "
                    }
                ]
            },
            {
                "text": "4. Envíe los datos de recuperación del IVA al proveedor externo para presentar declaraciones de recuperación internacionales.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "4. "
                    }
                ]
            },
            {
                "text": "5. Procesa los gastos para la devolución del IVA nacional.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "5. "
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/AfD-D9uf6po",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 40,
        "elements": [
            {
                "text": "Registrar un informe de gastos",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Una vez que se ha aprobado y transferido un informe de gastos al diario general, se puede registrar al libro de contabilidad general. Cuando publica un informe de gastos, se identifican los gastos que son idóneos para la recuperación del impuesto sobre el valor añadido (IVA). La tarea de verificar y recuperar los pagos del IVA se asigna al empleado que es responsable de verificar el informe de gastos.",
                "type": "p"
            },
            {
                "text": "Si los gastos de un informe de gastos se cargan a una empresa que no sea la empresa que emplea al empleado, debe verificar tanto la empresa a la que se le deben esos gastos como la empresa que los adeuda. Por ejemplo, el empleado que presentó un informe de gastos trabaja para la empresa DAT pero le cobró un gasto a la empresa DIR. En este caso, DAT es la empresa a la que se debe el gasto y DIR es la empresa que debe el gasto. Después de verificar estas líneas de diario, puede registrar las líneas de gastos en el libro mayor.",
                "type": "p"
            },
            {
                "text": "Para registrar un informe de gastos, en la página Informes de gastos aprobados, seleccione el informe de gastos y, a continuación, en el Panel de acciones, seleccione Registrar.",
                "type": "p",
                "bolds": [
                    {
                        "text": "Informes de gastos aprobados,"
                    },
                    {
                        "text": "Registrar."
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/jM-eLQMBQZs",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 41,
        "elements": [
            {
                "text": "Crear un activo fijo",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Para crear manualmente un registro de activo, siga estos pasos.",
                "type": "p"
            },
            {
                "text": "1. Vaya a Panel de navegación > Módulos > Activos fijos > Activos fijos > Activos fijos.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    },
                    {
                        "text": "Panel de navegación"
                    },
                    {
                        "text": "Módulos"
                    },
                    {
                        "text": "Activos fijos"
                    }
                ]
            },
            {
                "text": "2. En el Panel de acciones, seleccione Nueva.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    },
                    {
                        "text": "Panel de acciones,"
                    },
                    {
                        "text": "Nueva."
                    }
                ]
            },
            {
                "text": "3. En el campo Grupo de activos fijos, escriba o seleccione un valor. Se usará el valor predeterminado para Número si ha habilitado la funcionalidad Enumerar automáticamente los activos fijos en los parámetros de activos fijos y en el grupo de activos fijos. Si no lo ha hecho, debe escribir un número único para identificar el activo fijo.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "3. "
                    },
                    {
                        "text": "Grupo de activos fijos,"
                    },
                    {
                        "text": "Número"
                    },
                    {
                        "text": "Enumerar automáticamente los activos"
                    },
                    {
                        "text": "parámetros de activos fijos"
                    },
                    {
                        "text": "grupo de activos fijos."
                    }
                ]
            },
            {
                "text": "4. En el campo Nombre, escriba un valor. Especifique la información adicional que su empresa necesite para este activo.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "4. "
                    },
                    {
                        "text": "Nombre,"
                    }
                ]
            },
            {
                "text": "5. En el Panel de acciones, seleccione Libros.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "5. "
                    },
                    {
                        "text": "Libros."
                    },
                    {
                        "text": "Panel de acciones,"
                    }
                ]
            },
            {
                "text": "6. En el campo Fecha de adquisición, escriba una fecha.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "6. "
                    },
                    {
                        "text": "Fecha de adquisición,"
                    }
                ]
            },
            {
                "text": "7. En el campo Precio de adquisición, escriba un número.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "7. "
                    },
                    {
                        "text": "Precio de adquisición,"
                    }
                ]
            },
            {
                "text": "Introduzca la la información adicional que su empresa necesite para este libro.",
                "type": "p",
                "classes": "ms-5"
            },
            {
                "text": "Introduzca la información adicional que necesite su empresa para los libros restantes.",
                "type": "p",
                "classes": "ms-5"
            },
            {
                "text": "https://www.youtube.com/embed/dhruNqBXMgw",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 42,
        "elements": [
            {
                "text": "Proponer adquisiciones de activos fijos",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Crear una propuesta de adquisición de activos",
                "type": "h2"
            },
            {
                "text": "1. En el panel de navegación, vaya a Módulos > Activos fijos > Movimientos del diario > Diario de activos fijos.",
                "type": "p", 
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    },
                    {
                        "text": "Módulos "
                    },
                    {
                        "text": "Activos fijos"
                    },
                    {
                        "text": "Movimientos del diario"
                    },
                    {
                        "text": "Diario de activos fijos."
                    }
                ]
            },
            {
                "text": "2. Seleccione Nuevo.",
                "type": "p", 
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    },
                    {
                        "text": "Nuevo."
                    }
                ]
            },
            {
                "text": "3. En el campo Nombre, especifique o seleccione un valor.",
                "type": "p", 
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "3. "
                    },
                    {
                        "text": "Nombre,"
                    }
                ]
            },
            {
                "text": "4. En el panel de acciones, seleccione Líneas.",
                "type": "p", 
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "4. "
                    },
                    {
                        "text": "Líneas."
                    }
                ]
            },
            {
                "text": "5. Seleccione Propuestas.",
                "type": "p", 
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "5. "
                    },
                    {
                        "text": "Propuestas."
                    }
                ]
            },
            {
                "text": "6. Seleccione Propuesta de adquisición.",
                "type": "p", 
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "6. "
                    },
                    {
                        "text": "Propuesta de adquisición."
                    }
                ]
            },
            {
                "text": "7. Seleccione Filtro. Seleccione Restablecer para borrar los valores anteriores.",
                "type": "p", 
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "7. "
                    },
                    {
                        "text": "Filtro."
                    },
                    {
                        "text": "Restablecer"
                    }
                ]
            },
            {
                "text": "8. Seleccione la fila Número de activo fijo.",
                "type": "p", 
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "8. "
                    },
                    {
                        "text": "Número de activo fijo."
                    }
                ]
            },
            {
                "text": "9. En el campo Criterios, especifique o seleccione un valor. Establezca los criterios restantes para los activos fijos que desea adquirir con esta propuesta.",
                "type": "p", 
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "9. "
                    },
                    {
                        "text": "Criterios,"
                    }
                ]
            },
            {
                "text": "10. Seleccione Aceptar dos veces para salir fuera del panel.",
                "type": "p", 
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "10. "
                    },
                    {
                        "text": "Aceptar"
                    }
                ]
            },
            {
                "text": "- Compruebe que se creen las líneas de transacción.",
                "type": "p", 
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "- "
                    }
                ]
            },
            {
                "text": "- Solo los activos fijos con la fecha de adquisición y el precio de adquisición establecidos en el libro se incluirán en la propuesta de adquisición.",
                "type": "p", 
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "- "
                    }
                ]
            },
            {
                "text": "11. En la página, seleccione la ficha Libros.",
                "type": "p", 
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "11. "
                    },
                    {
                        "text": "Libros."
                    }
                ]
            },
            {
                "text": "12. Seleccione Registrar.",
                "type": "p", 
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "12. "
                    },
                    {
                        "text": "Registrar."
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/V8EErSL028w",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 43,
        "elements": [
            {
                "text": "Visión general de la actualización del libro amortización",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Antes de ejecutar la actualización de datos, debe comprender las dos opciones disponibles para actualizar las líneas del diario del libro de depreciación a los asientos de la transacción, y la secuencia numérica que se usará para la serie de asientos.",
                "type": "p"
            },
            {
                "text": "Opción 1: secuencia numérica definida por el sistema - Esta es la opción predeterminada para optimizar el rendimiento de la actualización. La actualización no utilizará el marco de las secuencias numéricas, pero por el contrario, debe asignar los asientos con un enfoque establecido. Una vez finalizada la actualización, se creará la nueva secuencia numérica con el Conjunto del siguiente número basado correctamente en las transacciones actualizadas. De forma predeterminada, la secuencia numérica usada tendrá el formato de FADBUpgr######### . Existen algunos parámetros disponibles para ajustar el formato al utilizar este planteamiento:",
                "type": "p",
                "bolds": [
                    {
                        "text": "Opción 1: secuencia numérica definida por el sistema"
                    },
                    {
                        "text": "Conjunto del siguiente número"
                    }
                ]
            },
            {
                "text": "Código de secuencia numérica: el código para identificar la secuencia numérica. Este código de secuencia numérica no puede existir ya que se creará en la actualización.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Código de secuencia numérica:"
                    }
                ]
            },
            {
                "text": "Nombre constante: NumberSequenceDefaultCode",
                "type": "p",
                "classes": "ms-5",
                "bolds": [
                    {
                        "text": "NumberSequenceDefaultCode"
                    }
                ]
            },
            {
                "text": 'Valor predeterminado: "FADBUpgr"',
                "type": "p",
                "classes": "ms-5"
            },
            {
                "text": "Prefijo – El valor de cadena constante que se utilizará como prefijo para los números de asiento.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Prefijo"
                    }
                ]
            },
            {
                "text": "Nombre constante: NumberSequenceDefaultParameterPrefix",
                "type": "p",
                "classes": "ms-5",
                "bolds": [
                    {
                        "text": "NumberSequenceDefaultParameterPrefix"
                    }
                ]
            },
            {
                "text": 'Valor predeterminado: "FADBUpgr"',
                "type": "p",
                "classes": "ms-5"
            },
            {
                "text": "Longitud alfanumérica – La longitud del segmento alfanumérico de la secuencia numérica.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Longitud alfanumérica"
                    }
                ]
            },
            {
                "text": "Nombre constante: **NumberSequenceDefaultParameterAlpanumericLength **",
                "type": "p",
                "classes": "ms-5"
            },
            {
                "text": "Valor predeterminado: 9",
                "type": "p",
                "classes": "ms-5"
            },
            {
                "text": "Número de inicio - El primer número que se utilizará en la secuencia numérica.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Número de inicio"
                    }
                ]
            },
            {
                "text": "Nombre constante: **NumberSequenceDefaultParameterStartNumber **",
                "type": "p",
                "classes": "ms-5"
            },
            {
                "text": "Valor predeterminado: 1",
                "type": "p",
                "classes": "ms-5"
            },
            {
                "text": "https://www.youtube.com/embed/P6QWP23TZfU",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 44,
        "elements": [
            {
                "text": "Registrar las transacciones de activos fijos para registrar capas",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Los diarios de activos se definen mediante la página de Nombres de diario en Contabilidad general > Configuración del diario > Nombres de diario. Cada diario en el que puede registrar las depreciaciones se define por su nombre de diario para una capa de registro únicamente. La capa de registro del diario no se puede cambiar. Esta restricción permite garantizar que las transacciones de cada capa de registro se mantengan aparte. Se debe crear un nombre de diario como mínimo para cada capa de registro. Si utiliza libros que no se registran en la contabilidad general, también deberá crear un diario en el que la capa de registro se establezca en Ninguno.",
                "type": "p"
            },
            {
                "text": "El activo fijo se puede introducir en documentos que solo respalden la capa de registro Actual, como Pedido de compra, Factura de proveedor pendiente, Órdenes de venta o Factura de texto libre. Al seleccionar un id. de activo fijo en cualquiera de esos documentos, el libro de activos se filtra con el libro de la capa de registro Actual y se completará automáticamente durante el registro cuando el sistema valide que la capa de registro de activos fijos es Actual. Si esa validación no se puede completar, el proceso de registro se detendrá.",
                "type": "p",
                "bolds": [
                    {
                        "text": "Actual,"
                    },
                    {
                        "text": "Pedido de compra, Factura de proveedor pendiente, Órdenes de venta"
                    },
                    {
                        "text": "Factura de texto libre."
                    },
                    {
                        "text": "Actual"
                    },
                    {
                        "text": "Actual."
                    }
                ]
            },
            {
                "text": "El uso de libros derivados le permite registrar transacciones para distintas capas de registro simultáneamente. Las transacciones del libro principal se crean en un diario o documento de origen, donde la capa de registro corresponde a la capa de registro del libro. Durante el registro, las transacciones derivadas del libro se registrarán en sus capas de registro adecuadas.",
                "type": "warning"
            },
            {
                "text": "https://www.youtube.com/embed/JEeIiNKDSE0",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 45,
        "elements": [
            {
                "text": "Reducir la depreciación del saldo después de una división",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Este tema describe el método que se usa en Activos fijos para calcular la depreciación después de que un activo se haya dividido en forma de otro activo mediante el método de reducción de saldo. El año de depreciación que se configura en el libro de activos es el año fiscal. Para más información, consulte Reducir la depreciación del saldo y Dividir un activo fijo.",
                "type": "p",
                "links": [
                    {
                        "text": "Reducir la depreciación del saldo",
                        "url": "https://docs.microsoft.com/es-es/dynamics365/finance/fixed-assets/reduce-balance-depreciation"
                    },
                    {
                        "text": "Dividir un activo fijo",
                        "url": "https://docs.microsoft.com/es-es/dynamics365/finance/fixed-assets/tasks/split-fixed-asset"
                    }
                ]
            },
            {
                "text": "Por ejemplo, están en vigor las siguientes condiciones:",
                "type": "p"
            },
            {
                "text": "El período fiscal es del 30 de junio al 1 de julio.",
                "type": "p",
                "classes": "ms-4"
            },
            {
                "text": "El porcentaje de saldo de reducción es del 18 por ciento, y un activo se adquiere en junio de 2019 a un precio de adquisición de 10.000 $.",
                "type": "p",
                "classes": "ms-4"
            },
            {
                "text": "El porcentaje de saldo de reducción es del 18 por ciento, y un activo se adquiere en junio de 2019 a un precio de adquisición de 10.000 $.",
                "type": "p",
                "classes": "ms-4"
            },
            {
                "text": "En noviembre de 2019, el 80 por ciento del activo se divide en otro activo fijo.",
                "type": "p",
                "classes": "ms-4"
            },
            {
                "text": "https://docs.microsoft.com/es-es/dynamics365/finance/fixed-assets/media/reduce-balance-depreciation-after-split.png",
                "type": "img"
            },
            {
                "text": "La cantidad a depreciar del activo original es 1.822,25 $. Esta cantidad es igual al NBV antes de que se contabilice la transacción dividida (9.111,25), más el ajuste de adquisición que se genera durante la contabilización de la transacción dividida (- 8.000 $), más el ajuste de depreciación que se genera durante la transacción dividida (711 $). Por lo tanto, la depreciación para el segundo año es (1.822,25 × 18 por ciento) ÷ 12 = 27,33 $.",
                "type": "p"
            },
            {
                "text": "La cantidad a depreciar para el nuevo activo fijo en el primer año es (8.000 × 18 por ciento) ÷ 12 = 120 $.",
                "type": "p"
            },
            {
                "text": "https://www.youtube.com/embed/WqOLKgmnU5o",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 46,
        "elements": [
            {
                "text": "Informes de arrendamiento de activos",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Movimiento de activos",
                "type": "h2"
            },
            {
                "text": "Movimiento de activos",
                "type": "p"
            },
            {
                "type": "table",
                "rows": [
                    [
                        {
                            "text": "Campos de informe",
                            "type": "th"
                        },
                        {
                            "text": "Descripción",
                            "type": "th"
                        }
                    ],
                    [
                        {
                            "text": "Fecha de inicio",
                            "type": "td"
                        },
                        {
                            "text": "La fecha de inicio de la primera versión del arrendamiento.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Plazo del arrendamiento",
                            "type": "td"
                        },
                        {
                            "text": "El plazo del arrendamiento de la primera versión del arrendamiento.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Arrendamiento a corto plazo",
                            "type": "td"
                        },
                        {
                            "text": "Si el arrendamiento se clasifica como arrendamiento a corto plazo, se mostrará como Sí.",
                            "type": "td",
                            "bolds": [
                                {
                                    "text": "Sí."
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "text": "Arrendamiento de bajo valor",
                            "type": "td"
                        },
                        {
                            "text": "Si el arrendamiento se clasifica como arrendamiento de bajo valor, se mostrará como Sí.",
                            "type": "td",
                            "bolds": [
                                {
                                    "text": "Sí."
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "text": "Activo por derecho de uso inicial",
                            "type": "td"
                        },
                        {
                            "text": "El valor original del activo por derecho de uso desde el asiento de diario de reconocimiento inicial.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Saldo inicial",
                            "type": "td"
                        },
                        {
                            "text": "El valor neto en los libros del activo por derecho de uso desde la Fecha inicial.",
                            "type": "td",
                            "bolds": [
                                {
                                    "text": "Fecha inicial."
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "text": "Gasto de depreciación del período",
                            "type": "td"
                        },
                        {
                            "text": "El importe del gasto de depreciación tomado dentro del rango de fechas definido para el informe.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Depreciación acumulada",
                            "type": "td"
                        },
                        {
                            "text": "El importe de la depreciación acumulada desde la Fecha inicial.",
                            "type": "td",
                            "bolds": [
                                {
                                    "text": "Fecha inicial."
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "text": "Deterioro",
                            "type": "td"
                        },
                        {
                            "text": "El importe de depreciación del activo en el rango de fechas definido para el informe.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Modificaciones",
                            "type": "td"
                        },
                        {
                            "text": "La cantidad de ajustes al activo por derecho de uso entre los parámetros de fecha.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Valor neto en los libros",
                            "type": "td"
                        },
                        {
                            "text": "El valor neto contable final del activo por derecho de uso, que es el neto de la depreciación acumulada desde la Fecha inicial.",
                            "type": "td",
                            "bolds": [
                                {
                                    "text": "Fecha inicial."
                                }
                            ]
                        }
                    ]
                ]
            },
            {
                "text": "https://www.youtube.com/embed/TdM1em9LSKg",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 48,
        "elements": [
            {
                "text": "Configurar parámetros de arrendamiento",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Varias opciones de configuración afectan al comportamiento del arrendamiento de activos. Estas configuraciones incluyen nombres de diarios, parámetros generales y configuraciones de perfil de publicación.",
                "type": "p"
            },
            {
                "text": "1. Vaya a Arrendamiento de activos > Configuración > Parámetros de arrendamiento de activos.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Arrendamiento de activos"
                    },
                    {
                        "text": "Configuración"
                    },
                    {
                        "text": "Parámetros de arrendamiento de activos."
                    },
                    {
                        "text": "1. "
                    }
                ]
            },
            {
                "text": "2. En la pestaña Arrendamientos, seleccione la ficha desplegable General.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    },
                    {
                        "text": "Arrendamientos,"
                    },
                    {
                        "text": "General."
                    }
                ]
            },
            {
                "text": "El parámetro Permitir anulación de clasificación manual determina si la clasificación de arrendamiento se puede anular antes de que se confirme la programación de pagos.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Permitir anulación de clasificación manual"
                    }
                ]
            },
            {
                "text": "El parámetro Lote entre entidades determina si puede publicar en otras entidades jurídicas desde la entidad jurídica actual. Si este parámetro está activado, puede crear asientos de diario para las entidades jurídicas a las que tiene acceso.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Lote entre entidades"
                    }
                ]
            },
            {
                "text": "3. Seleccione la opción Permitir la eliminación de arrendamientos confirmados a Sí para permitir que se eliminen los arrendamientos que tienen programas de pago confirmados. Los arrendamientos no se pueden eliminar si tienen asociadas transacciones registradas o no registradas, independientemente de la configuración de esta opción. No puede restaurar un registro de arrendamiento después de eliminarlo. Si carga algún registro para un arrendamiento eliminado, ya sea manualmente o mediante entidades de datos, la información cargada se trata como nueva, no como una actualización de un arrendamiento existente.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "3. "
                    },
                    {
                        "text": "Permitir la eliminación de arrendamientos confirmados"
                    },
                    {
                        "text": "Sí"
                    }
                ]
            },
            {
                "text": "Si configura esta opción en Sí y el tipo de transición del libro es Opción de recuperación acumulativa A o B, el sistema establece el campo Tipo de interés incremental del endeudamiento al valor del campo Tipo de interés incremental del endeudamiento en la transición, en la página Configuración del libro. Si esta opción se establece en No, la tasa del arrendamiento principal se establece en el valor del campo Tipo de interés incremental del endeudamiento en la página Detalles del libro, independientemente del tipo de transición del libro.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Sí"
                    },
                    {
                        "text": "Opción de recuperación acumulativa A o B,"
                    },
                    {
                        "text": "Tipo de interés incremental del endeudamiento"
                    },
                    {
                        "text": "Tipo de interés incremental del endeudamiento en la transición,"
                    },
                    {
                        "text": "Configuración del libro."
                    },
                    {
                        "text": "No,"
                    },
                    {
                        "text": "Detalles del libro,"
                    }
                ]
            },
            {
                "text": "4. Establezca la opción Permitir reversiones de depreciación en la versión de libro cerrado en Sí para permitir la reversión de las transacciones de gastos de depreciación. Las transacciones de gastos se pueden revertir incluso cuando la versión del libro está cerrada.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "4. "
                    },
                    {
                        "text": "Permitir reversiones de depreciación en la versión de libro cerrado"
                    },
                    {
                        "text": "Sí "
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/N3ItUvdvXyw",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 49,
        "elements": [
            {
                "text": "Configurar libros de arrendamiento",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Toda la funcionalidad de la que se habla en este tema, o parte de ella, estará disponible como parte de una versión preliminar. El contenido y la funcionalidad están sujetos a cambios. Para obtener más información acerca las versiones preliminares, consulte Disponibilidad de actualización del servicio.",
                "type": "info",
                "links": [
                    {
                        "text": "Disponibilidad de actualización del servicio",
                        "url": "https://docs.microsoft.com/es-es/dynamics365/unified-operations/fin-and-ops/get-started/public-preview-releases"
                    }
                ]
            },
            {
                "text": "Los libros de arrendamiento contienen las directivas contables que determinan cómo se contabiliza un arrendamiento en el sistema. Además de la contabilidad basada en efectivo, Arrendamiento de activos admite los siguientes estándares:",
                "type": "p"
            },
            {
                "type": "table",
                "rows": [
                    [
                        {
                            "text": "Nombre",
                            "type": "th"
                        },
                        {
                            "text": "Descripción",
                            "type": "th"
                        }
                    ],
                    [
                        {
                            "text": "Capa de registro",
                            "type": "td"
                        },
                        {
                            "text": "Seleccione una capa de registro a utilizar. Cada libro adjunto a un arrendamiento se configura para una capa de publicación específica. Cada capa de registro tiene diferentes propósitos de registro.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Tipo de arrendamiento",
                            "type": "td"
                        },
                        {
                            "text": "Seleccione si el arrendamiento debe clasificarse automáticamente o si debe estar predefinido como arrendamiento financiero u operativo.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Marco de contabilidad",
                            "type": "td"
                        },
                        {
                            "text": "Seleccione el marco asociado con el libro.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Configuración del plazo del arrendamiento/vida útil",
                            "type": "td"
                        },
                        {
                            "text": "El sistema clasificará el arrendamiento como financiero si el tipo de arrendamiento se establece en Automático y si el plazo del arrendamiento durante la vida útil del activo es mayor o igual al porcentaje introducido en este campo.",
                            "type": "td",
                            "bolds": [
                                {
                                    "text": "Automático"
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "text": "Configuración del valor actual/valor razonable del activo",
                            "type": "td"
                        },
                        {
                            "text": "Introduzca un número entero para definir el umbral que determinará el tipo de arrendamiento. Si el valor presente de los futuros pagos mínimos de arrendamiento es mayor que el valor definido por el usuario de la configuración del libro, y si la clasificación del arrendamiento del libro se establece en automática, el sistema clasificará el arrendamiento como arrendamiento financiero.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Umbral a corto plazo",
                            "type": "td"
                        },
                        {
                            "text": "Introduzca el número de meses que se utilizará como umbral para los arrendamientos a corto plazo. Si el plazo del arrendamiento es menor o igual al número de meses que introduce aquí, el sistema clasificará el arrendamiento como arrendamiento a corto plazo y se aplicará el tratamiento de arrendamiento diferido.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Umbral de valor bajo",
                            "type": "td"
                        },
                        {
                            "text": "Introduzca una cantidad para usarla como umbral de arrendamientos de bajo valor. Si el valor razonable del activo es menor o igual al valor que introduce aquí, el sistema clasificará el arrendamiento como arrendamiento de bajo valor y se aplicará el tratamiento de arrendamiento diferido.",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Pagar a proveedor",
                            "type": "td"
                        },
                        {
                            "text": "Establezca esta opción en Sí para permitir que los pagos del arrendamiento se registren, como una factura, en la cuenta del proveedor que se especifica en cada arrendamiento. Cuando se registra un pago de arrendamiento, se abona en la cuenta del proveedor. Si esta opción se establece en No, será la cuenta que se especifica para el tipo de registro Pago de arrendamiento en la página Parámetros de registro de arrendamiento la que se acreditará en su lugar.",
                            "type": "td",
                            "bolds": [
                                {
                                    "text": "Sí"
                                },
                                {
                                    "text": "No,"
                                },
                                {
                                    "text": "Pago de arrendamiento"
                                },
                                {
                                    "text": "Parámetros de registro de arrendamiento"
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "text": "Convención de arrendamiento",
                            "type": "td"
                        },
                        {
                            "type": "td",
                            "elements": [
                                {
                                    "text": "Seleccione la convención para la fecha inicial del arrendamiento:",
                                    "type": "p"
                                },
                                {
                                    "text": "Ninguna: utilizar la fecha de inicio del contrato de arrendamiento como fecha inicial.",
                                    "type": "p",
                                    "classes": "ms-4",
                                    "bolds": [
                                        {
                                            "text": "Ninguna:"
                                        }
                                    ]
                                },
                                {
                                    "text": "Mes entero: utilizar como fecha inicial el primer día del mes en el que cae la fecha de inicio del arrendamiento.",
                                    "type": "p",
                                    "classes": "ms-4",
                                    "bolds": [
                                        {
                                            "text": "Mes entero:"
                                        }
                                    ]
                                },
                                {
                                    "text": "Si selecciona Ninguna, existe el riesgo de que los calendarios de amortización de pasivos y depreciación de activos se acumulen y registren gastos a mediados de mes en lugar de al final del mes. Si selecciona Mes entero, se asegura de que el sistema comience a contabilizar el arrendamiento el primer día del mes y que el gasto de todo el mes se acumulará y contabilizará el último día del mes.",
                                    "type": "p",
                                    "bolds": [
                                        {
                                            "text": "Mes entero,"
                                        },
                                        {
                                            "text": "Ninguna,"
                                        }
                                    ]
                                },
                                {
                                    "text": "Nota: la característica de convenciones de arrendamiento debe activarse a través de la Administración de características. En el espacio de trabajo Gestión de funciones, busque y seleccione la característica denominada Convenio de arrendamiento para arrendamiento de activos y luego seleccione Habilitar ahora.",
                                    "type": "p",
                                    "bolds": [
                                        {
                                            "text": "Nota:"
                                        },
                                        {
                                            "text": "Gestión de funciones,"
                                        },
                                        {
                                            "text": "Convenio de arrendamiento para arrendamiento de activos"
                                        },
                                        {
                                            "text": "Habilitar ahora."
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                ]
            },
            {
                "text": "https://www.youtube.com/embed/3jIuBleAnQk",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 50,
        "elements": [
            {
                "text": "Crear un grupo de arrendamientos",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "En este tema se explica cómo configurar grupos de arrendamientos. Se requieren grupos de arrendamientos para crear nuevos arrendamientos. Los libros de arrendamiento están asociados con cada grupo de arrendamientos. Los libros de arrendamiento determinan los libros predeterminados que se deben crear para cada arrendamiento. Puede asignar cuentas específicas a un grupo de arrendamientos en la página Parámetros de publicación de arrendamientos.",
                "type": "p",
                "bolds": [
                    {
                        "text": "Parámetros de publicación de arrendamientos."
                    }
                ]
            },
            {
                "text": "Asociar un libro a un grupo de arrendamientos",
                "type": "h2"
            },
            {
                "text": "Después de crear grupos de arrendamientos, puede asignar libros a cada grupo. Cuando crea un arrendamiento y lo asigna a un grupo de arrendamientos, el sistema crea un conjunto de programaciones para cada libro que está asociado con ese grupo de arrendamientos.",
                "type": "p"
            },
            {
                "text": "Los libros deben configurarse antes de que puedan asignarse a un grupo de arrendamientos.",
                "type": "warning"
            },
            {
                "text": "1. Vaya a Arrendamiento de activos > Configuración > Grupo de arrendamientos.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    },
                    {
                        "text": "Arrendamiento de activos"
                    },
                    {
                        "text": "Configuración"
                    },
                    {
                        "text": "Grupo de arrendamientos."
                    }
                ]
            },
            {
                "text": "2. Seleccione un grupo de arrendamientos y luego seleccione Libros.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    },
                    {
                        "text": "Libros."
                    }
                ]
            },
            {
                "text": "3. Seleccione Nuevo y luego, en el campo Tipo de libro, seleccione el libro para asignar al grupo de arrendamientos. Puede asignar varios libros a un grupo de arrendamientos si un arrendamiento debe contabilizarse de diferentes maneras.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Nuevo"
                    },
                    {
                        "text": "Tipo de libro,"
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/OCkbyF1SO78",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 51,
        "elements": [
            {
                "text": "Configurar nombres de diarios de arrendamiento",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Los nombres de los diarios de arrendamiento especifican los diarios en los que se contabilizan las transacciones que se originan en Arrendamiento de activos. Solo los nombres de diarios asignados al tipo de diario Arrendamiento de activos aparecen en los campos Reconocimiento inicial y Nombre del diario mensual de la página Parámetros de arrendamiento de activos. Solamente el tipo de diario Registro de facturas de proveedores se puede asignar al campo Nombre del diario de facturas.",
                "type": "p",
                "bolds": [
                    {
                        "text": "Arrendamiento de activos "
                    },
                    {
                        "text": "Reconocimiento inicial"
                    },
                    {
                        "text": "Nombre del diario mensual"
                    },
                    {
                        "text": " Parámetros de arrendamiento de activos."
                    },
                    {
                        "text": "Registro de facturas de proveedores"
                    },
                    {
                        "text": "Nombre del diario de facturas."
                    }
                ]
            },
            {
                "text": "Para configurar los nombres de los diarios de arrendamiento, siga estos pasos.",
                "type": "p"
            },
            {
                "text": "1. Vaya a Arrendamiento de activos > Configuración > Parámetros de arrendamiento de activos.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    },
                    {
                        "text": "Arrendamiento de activos"
                    },
                    {
                        "text": "Configuración"
                    },
                    {
                        "text": "Parámetros de arrendamiento de activos."
                    }
                ]
            },
            {
                "text": "2. En la pestaña General, en el campo Nombre del diario de reconocimiento inicial, seleccione un diario. Todas las entradas del diario de reconocimiento inicial se registrarán en este nombre de diario.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    },
                    {
                        "text": "General,"
                    },
                    {
                        "text": "Nombre del diario de reconocimiento inicial,"
                    }
                ]
            },
            {
                "text": "3. En el campo Nombre de diario de facturas, seleccione un diario. Si la opción Pagar al proveedor está configurada en Sí para el libro de arrendamiento, las facturas de pago de arrendamiento y gastos se publicarán en este nombre de diario.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "3. "
                    },
                    {
                        "Text": "Nombre de diario de facturas,"
                    },
                    {
                        "text": "Pagar al proveedor"
                    },
                    {
                        "text": "Sí"
                    }
                ]
            },
            {
                "text": "4. En el campo Nombre de diario de arrendamiento, seleccione un diario. Todos los movimientos de depreciación, intereses y reclasificación a corto plazo se registrarán en este nombre de diario. Si la opción Pagar al proveedor está configurada en No para el libro de arrendamiento, las movimientos de pagos de arrendamientos y de pagos de gastos se publicarán en este nombre de diario.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "4. "
                    },
                    {
                        "text": "Nombre de diario de arrendamiento,"
                    },
                    {
                        "text": "Pagar al proveedor"
                    },
                    {
                        "text": "No"
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/Qn3euoXN-M8",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 52,
        "elements": [
            {
                "text": "Configurar cuentas de registro de arrendamiento",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Configurar cuentas de registro",
                "type": "h2"
            },
            {
                "text": "Para asignar cuentas a los libros y grupos de arrendamientos que se han creado, debe configurar los parámetros para Arrendamiento de activos.",
                "type": "p"
            },
            {
                "text": "1. Vaya a Arrendamiento de activos > Configuración > Parámetros de registro de arrendamientos.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    },
                    {
                        "text": "Arrendamiento de activos"
                    },
                    {
                        "text": "Configuración"
                    },
                    {
                        "text": "Parámetros de registro de arrendamientos."
                    }
                ]
            },
            {
                "text": "2. En la pestaña Cuentas, abra la ficha desplegable Cuentas de arrendamiento. Determinar las cuentas principales de arrendamientos financieros y operativos para el correspondiente Tipo de publicación. La tabla anterior muestra las cuentas relacionadas con los arrendamientos operativos y financieros.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    },
                    {
                        "text": "Cuentas,"
                    },
                    {
                        "text": "Cuentas de arrendamiento."
                    },
                    {
                        "text": "Tipo de publicación."
                    }
                ]
            },
            {
                "text": "Este paso requiere que configure cuentas separadas para arrendamientos operativos y financieros para cada tipo de registro, excepto Compensación de gastos de arrendamiento y Aumento/disminución de arrendamiento. Las empresas que se adhieren al marco contable IFRS 16 deben agregar una cuenta principal para el arrendamiento operativo. Pero el sistema no utilizará esta cuenta a pesar de que es un campo obligatorio porque todos los arrendamientos según IFRS 16 se clasifican como arrendamientos financieros.",
                "type": "warning",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Compensación de gastos de arrendamiento y Aumento/disminución de arrendamiento"
                    }
                ]
            },
            {
                "text": "Aumento/disminución de arrendamiento se utilizará como tipo de publicación para consideraciones de activos adicionales, que incluyen Coste directo inicial, Incentivos de arrendamiento, Prepagos de arrendamiento y Costes de desmantelamiento, pero se publica en la cuenta principal del activo por derecho de uso, que de forma predeterminada es Activo de arrendamiento.",
                "type": "warning",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Aumento/disminución de arrendamiento"
                    },
                    {
                        "text": "Coste directo inicial, Incentivos de arrendamiento, Prepagos de arrendamiento y Costes de desmantelamiento,"
                    },
                    {
                        "text": "Activo de arrendamiento."
                    }
                ]
            },
            {
                "text": "3. Para seleccionar un grupo de arrendamiento específico correspondiente a la cuenta principal, en el campo Código de cuenta, seleccione Grupo. Entonces, en el campo Número de cuenta/grupo, seleccione el grupo de arrendamiento a asignar a la cuenta principal.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "3. "
                    },
                    {
                        "text": "Código de cuenta,"
                    },
                    {
                        "text": "Grupo."
                    },
                    {
                        "text": "Número de cuenta/grupo,"
                    }
                ]
            },
            {
                "text": "4. Para asignar códigos de cuenta a los costes administrativos que se han configurado en el sistema, en la ficha desplegable Gastos a cargo del arrendatario en un arrendamiento de capital, en el campo Tipo de gasto, seleccione un gasto. Luego, asigne las cuentas financieras y operativas que se utilizarán para cada libro.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "4. "
                    },
                    {
                        "text": "Gastos a cargo del arrendatario en un arrendamiento de capital,"
                    },
                    {
                        "text": "Tipo de gasto,"
                    }
                ]
            },
            {
                "text": "La cuenta financiera u operativa seleccionada se adeudará cuando se registre la factura del gasto programado. Contrapartida de gastos de arrendamiento se utilizará como tipo de registro para las transacciones de gastos a cargo del arrendatario en un arrendamiento de capital, pero se registrará en la Cuenta de contrapartida definida en las Líneas de programación de pago de costos de ejecución, en los detalles del arrendamiento o en el formulario de libro de arrendamiento.",
                "type": "warning",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Contrapartida de gastos de arrendamiento"
                    },
                    {
                        "text": "Cuenta de contrapartida"
                    },
                    {
                        "text": "Líneas de programación de pago de costos de ejecución,"
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/7ftISWoSUKQ",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 54,
        "elements": [
            {
                "text": "Agregar o copiar arrendamientos (Vista previa)",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Crear un arrendamiento",
                "type": "h2"
            },
            {
                "text": "Siga estos pasos para crear un arrendamiento en Arrendamiento de activos.",
                "type": "p"
            },
            {
                "text": "1. En la página Resumen de arrendamientos, en el panel Acciones, seleccione Nuevo.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    },
                    {
                        "text": "Resumen de arrendamientos,"
                    },
                    {
                        "text": "Nuevo."
                    }
                ]
            },
            {
                "text": "2. Introduzca la información del arrendameinto. Los campos obligatorios tienen los bordes rojos.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    }
                ]
            },
            {
                "text": "Copiar arrendamiento",
                "type": "h2"
            },
            {
                "text": "El arrendamiento de activos le permite copiar los detalles de un arrendamiento para crear un nuevo arrendamiento que tenga la misma información. A continuación, puede cambiar los campos de arrendamiento antes de crear las programaciones para el arrendamiento copiado.",
                "type": "p"
            },
            {
                "text": "1. En la página Resumen de arrendamiento, seleccione el arrendamiento a copiar y, a continuación, en el Panel de acciones, seleccione Copiar arrendamiento.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    },
                    {
                        "text": "Resumen de arrendamiento,"
                    },
                    {
                        "text": "Copiar arrendamiento."
                    }
                ]
            },
            {
                "text": "Si el parámetro Manual está desactivado para la secuencia numérica de los id. de arrendamiento, el siguiente número de la secuencia se genera automáticamente como id. de arrendamiento del arrendamiento copiado. Si el parámetro Manual está activado, recibe un mensaje que le solicita introducir el id. de arrendamiento antes de proceder a copiar el arrendamiento.",
                "type": "warning",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Manual"
                    }
                ]
            },
            {
                "text": "2. Seleccione Copiar. Los detalles del arrendamiento del arrendamiento seleccionado se copian a un nuevo arrendamiento. Luego, puede editar los detalles del nuevo contrato de arrendamiento antes de guardarlo y crear las programaciones de arrendamiento.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    },
                    {
                        "text": "Copiar."
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/gWSGZI9Vtnc",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 55,
        "elements": [
            {
                "text": "Crear facturas de pago",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Puede crear facturas mensuales para arrendamientos individuales o puede utilizar un proceso por lotes para crearlas para arrendamientos múltiples. El siguiente procedimiento muestra cómo crear un asiento de pago de arrendamiento individual cuando el parámetro Pagar al proveedor de la página Configuración del libro de arrendamiento está activado.",
                "type": "p",
                "bolds": [
                    {
                        "text": "Configuración del libro de arrendamiento"
                    },
                    {
                        "text": "Pagar al proveedor"
                    }
                ]
            },
            {
                "text": "1. En la página Resumen de arrendamiento, seleccione un arrendamiento y luego seleccione Libros > Programación de pagos.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    },
                    {
                        "text": "Resumen de arrendamiento,"
                    },
                    {
                        "text": "Programación de pagos."
                    },
                    {
                        "text": "Libros"
                    }
                ]
            },
            {
                "text": "2. Seleccione el pago que se debe realizar y luego seleccione Crear diario. Recibe un mensaje que indica que se ha creado un diario con el pago seleccionado.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    },
                    {
                        "text": "Crear diario."
                    }
                ]
            },
            {
                "text": "3. Seleccione Diarios de facturas y luego seleccione la factura que debe pagarse.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "3. "
                    },
                    {
                        "text": "Diarios de facturas"
                    }
                ]
            },
            {
                "text": "4. En la pestaña Líneas, revise la entrada del diario antes de registrarla en contabilidad.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "4. "
                    },
                    {
                        "text": "Líneas,"
                    }
                ]
            },
            {
                "text": "De forma predeterminada, las líneas de factura de proveedor que se crean utilizan el perfil de contabilización de proveedor de la página Parámetros de proveedores.Parámetros de proveedores.",
                "type": "warning",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Parámetros de proveedores."
                    }
                ]
            },
            {
                "text": "5. Seleccione el diario correcto y luego seleccione la factura que debe pagarse.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "5. "
                    }
                ]
            },
            {
                "text": "Para este ejemplo, el parámetro Pagar al proveedor del libro de arrendamiento está activado. Por lo tanto, la factura estará en el diario de facturas. La sección Visión de conjunto muestra un resumen de la entrada de diario y la sección Líneas muestra detalles de las líneas de diario reales.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Pagar al proveedor"
                    },
                    {
                        "text": "Visión de conjunto"
                    },
                    {
                        "text": "Líneas"
                    }
                ]
            },
            {
                "text": "Si el parámetro Pagar al proveedor está desactivado, las entradas del diario de pagos se enumerarán en la página Arrendamiento de activos del libro de arrendamiento, y el sistema creará una entrada de arrendamiento de activos en lugar de una factura. La entrada de pago de arrendamiento se publicará en el nombre del diario que se especifica en el campo Diario de arrendamiento mensual.",
                "type": "warning",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Pagar al proveedor"
                    },
                    {
                        "text": "Arrendamiento de activos"
                    },
                    {
                        "text": "Diario de arrendamiento mensual."
                    }
                ]
            },
            {
                "text": "6. Una vez que se registra la transacción, puede ver la información de la transacción y el valor en libros del pasivo por arrendamiento seleccionando Transacciones de pasivo en el libro de arrendamiento.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "6. "
                    },
                    {
                        "text": "Transacciones de pasivo"
                    }
                ]
            },
            {
                "text": "En la programación de pagos, estará seleccionada la casilla Diario publicado y la línea mostrará el número de diario de facturas. Después de crear un diario de pagos y una entrada para ese diario, debe revertir la entrada antes de que pueda volver a crearse.",
                "type": "p",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Diario publicado"
                    }
                ]
            },
            {
                "text": "https://www.youtube.com/embed/MpziO7FX83A",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 56,
        "elements": [
            {
                "text": "Registrar depreciación de activo por derecho de uso (Vista previa)",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "text": "Cálculo del gasto de amortización de activos por derecho de uso para arrendamientos operativos",
                "type": "h2"
            },
            {
                "text": "El gasto por depreciación de un arrendamiento operativo se calcula como la diferencia entre el gasto mensual por arrendamiento lineal y el gasto mensual por intereses sobre el pasivo por arrendamiento, de acuerdo con el Tema de Codificación de Normas Contables 842 (ASC 842), que es el estándar en Principios Contables Generalmente Aceptados en los EE. UU. (US GAAP). El gasto de arrendamiento lineal se calcula como la suma de todos los pagos por arrendamiento dividida por el plazo del arrendamiento en meses. (La suma de los pagos por arrendamiento incluye cualquier pago anticipado, costos directos iniciales, costos de desmantelamiento e incentivos de arrendamiento). La siguiente tabla muestra un ejemplo del gasto de amortización para un arrendamiento operativo.",
                "type": "p"
            },
            {
                "text": "Ejemplo de gasto de amortización de activos por derecho de uso para arrendamientos operativos",
                "type": "h3"
            },
            {
                "type": "table",
                "rows": [
                    [
                        {
                            "text": "Campo",
                            "type": "th"
                        },
                        {
                            "text": "Valor",
                            "type": "th"
                        }
                    ],
                    [
                        {
                            "text": "Importe del pago",
                            "type": "td"
                        },
                        {
                            "text": "1.000",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Frecuencia de pago",
                            "type": "td"
                        },
                        {
                            "text": "Mensual",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Plazo del arrendamiento (meses)",
                            "type": "td"
                        },
                        {
                            "text": "24",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Pagos totales de arrendamiento",
                            "type": "td"
                        },
                        {
                            "text": "24,000",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Tipo de interés incremental del endeudamiento",
                            "type": "td"
                        },
                        {
                            "text": "5%",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Tipo de anualidad",
                            "type": "td"
                        },
                        {
                            "text": "Anualidad vencida",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Intervalo de composición",
                            "type": "td"
                        },
                        {
                            "text": "Intervalo de composició",
                            "type": "td"
                        }
                    ],
                    [
                        {
                            "text": "Valor presente de los pagos mínimos de arrendamiento futuros",
                            "type": "td"
                        },
                        {
                            "text": "22,888.87",
                            "type": "td"
                        }
                    ]
                ]
            },
            {
                "type": "p",
                "text": "Como se indicó anteriormente, el gasto de arrendamiento lineal se calcula como la suma de todos los pagos dividida por el plazo del arrendamiento. El sistema calcula automáticamente el gasto por intereses mensual en el programa de amortización del pasivo. El gasto por intereses se calcula utilizando el método de la tasa de interés efectiva. El sistema utilizará el coste de arrendamiento lineal para restar el gasto por intereses de cada mes. El valor se utiliza para reducir el activo por derecho de uso."
            },
            {
                "type": "table",
                "rows": [
                    [
                        {
                            "type": "th",
                            "text": "Mes"
                        },
                        {
                            "type": "th",
                            "text": "Coste de arrendamiento lineal"
                        },
                        {
                            "type": "th",
                            "text": "Gastos de intereses"
                        },
                        {
                            "type": "th",
                            "text": "Cálculo del gasto de amortización de activos por derecho de uso"
                        }
                    ],
                    [
                        {
                            "type": "td",
                            "text": "1"
                        },
                        {
                            "type": "td",
                            "text": "(24.000 ÷ 24) = 1.000,00"
                        },
                        {
                            "type": "td",
                            "text": "(22.888,87 – 1.000) × (5 % ÷ 12) = 91,20"
                        },
                        {
                            "type": "td",
                            "text": "1.000 – 91,20 = 908,80"
                        }
                    ],
                    [
                        {
                            "type": "td",
                            "text": "2"
                        },
                        {
                            "type": "td",
                            "text": "(24.000 ÷ 24) = 1.000,00"
                        },
                        {
                            "type": "td",
                            "text": "(21.980,08 – 1.000) × (5 % ÷ 12) = 87,42"
                        },
                        {
                            "type": "td",
                            "text": "1.000 – 87,42 = 912,58"
                        }
                    ],
                    [
                        {
                            "type": "td",
                            "text": "3"
                        },
                        {
                            "type": "td",
                            "text": "(24.000 ÷ 24) = 1.000,00"
                        },
                        {
                            "type": "td",
                            "text": "(21.067,49 – 1.000) × (5 % ÷ 12) = 83,62"
                        },
                        {
                            "type": "td",
                            "text": "1.000 – 83,62 = 916,39"
                        }
                    ]
                ]
            },
            {
                "type": "warning",
                "text": "De acuerdo con la ASC 842, la depreciación del activo por derecho de uso para un arrendamiento operativo se clasifica como un gasto de arrendamiento en el estado de resultados. Para mayor visibilidad, Arrendamiento de activos describe la entrada como la depreciación del activo por derecho de uso. Sin embargo, la entrada de débito debe asignarse a una cuenta de gastos de arrendamiento operativo, y la entrada de crédito debe asignarse directamente al activo por derecho de uso para el arrendamiento operativo. No obstante, en los parámetros de arrendamiento, puede especificar que las entradas de crédito se deban realizar en una cuenta de depreciación acumulada para activos por derecho de uso operativos."
            },
            {
                "type": "iframe",
                "text": "https://www.youtube.com/embed/YtN7WrKAPbI"
            }
        ]
    },
    {
        "topic_id": 57,
        "elements": [
            {
                "text": "Proponer un arrendamiento para su rescisión",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "type": "info",
                "text": "Toda la funcionalidad de la que se habla en este tema, o parte de ella, estará disponible como parte de una versión preliminar. El contenido y la funcionalidad están sujetos a cambios. Para obtener más información acerca las versiones preliminares, consulte Disponibilidad de actualización del servicio.",
                "links": [
                    {
                        "text": "Disponibilidad de actualización del servicio",
                        "url": "https://docs.microsoft.com/es-es/dynamics365/unified-operations/fin-and-ops/get-started/public-preview-releases"
                    }
                ]
            },
            {
                "type": "p",
                "text": "Si un arrendamiento no está clasificado como arrendamiento con tratamiento de arrendamiento diferido y no está asociado con un activo fijo, el arrendamiento de activos produce el siguiente asiento de rescisión en el diario."
            },
            {
                "type": "table",
                "rows": [
                    [
                        {
                            "type": "th",
                            "text": "Transacción"
                        },
                        {
                            "type": "th",
                            "text": "Débito (Dr.)"
                        },
                        {
                            "type": "th",
                            "text": "Crédito (Cr.)"
                        }
                    ],
                    [
                        {
                            "type": "td",
                            "text": "Dr. Pasivo por arrendamiento"
                        },
                        {
                            "type": "td",
                            "text": "X"
                        },
                        {
                            "type": "td",
                            "text": ""
                        }
                    ],
                    [
                        {
                            "type": "td",
                            "text": "Depreciación acumulada Dr."
                        },
                        {
                            "type": "td",
                            "text": "X"
                        },
                        {
                            "type": "td",
                            "text": ""
                        }
                    ],
                    [
                        {
                            "type": "td",
                            "text": "Dr. Ganancias (pérdidas) en modificación de arrendamiento"
                        },
                        {
                            "type": "td",
                            "text": "X"
                        },
                        {
                            "type": "td",
                            "text": ""
                        }
                    ],
                    [
                        {
                            "type": "td",
                            "text": "Cr. Activo de arrendamiento"
                        },
                        {
                            "type": "td",
                            "text": ""
                        },
                        {
                            "type": "td",
                            "text": "X"
                        }
                    ],
                    [
                        {
                            "type": "td",
                            "text": "Cr. Ganancias (pérdidas) en modificación de arrendamiento"
                        },
                        {
                            "type": "td",
                            "text": ""
                        },
                        {
                            "type": "td",
                            "text": "X"
                        }
                    ]
                ]
            },
            {
                "text": "https://www.youtube.com/embed/QM0R430fVmc",
                "type": "iframe"
            }
        ]
    },
    {
        "topic_id": 58,
        "elements": [
            {
                "text": "Reclasificar la parte a corto plazo de un pasivo por arrendamiento",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "type": "p",
                "text": "La parte a corto plazo del pasivo por arrendamiento se muestra en el programa de amortización de pasivos. Cuando se registra el movimiento del diario, la columna Diario de reclasificación de pasivos creado está disponible y el id. de diario también se completa en la programación.",
                "bolds": [
                    {
                        "text": "Diario de reclasificación de pasivos creado"
                    }
                ]
            },
            {
                "type": "p",
                "text": "Para crear y contabilizar el movimiento de diario de reclasificación de pasivos a corto plazo, siga estos pasos."
            },
            {
                "type": "p",
                "text": "1. Vaya a Arrendamiento de activos > Periódico > Creación de diario de lotes.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    },
                    {
                        "text": "Arrendamiento de activos"
                    },
                    {
                        "text": "Periódico"
                    },
                    {
                        "text": "Creación de diario de lotes."
                    }
                ]
            },
            {
                "type": "p",
                "text": "2. En el cuadro de diálogo Creación de diario de lotes, en el campo Seleccionar programación, seleccione Reclasificación del pasivo por arrendamiento a corto plazo.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    },
                    {
                        "text": "Creación de diario de lotes,"
                    },
                    {
                        "text": "Seleccionar programación,"
                    },
                    {
                        "text": "Reclasificación del pasivo por arrendamiento a corto plazo."
                    }
                ]
            },
            {
                "type": "p",
                "text": "3. En el campo Grupo de arrendamientos, seleccione un grupo de arrendamientos. Alternativamente, en el campo Id. del libro, seleccione el id. del libro.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "3. "
                    },
                    {
                        "text": "Grupo de arrendamientos,"
                    },
                    {
                        "text": "Id. del libro,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "4. Active el parámetro Registrar. Alternativamente, si la entrada debe crearse pero no publicarse, deje este parámetro desactivado.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "4. "
                    },
                    {
                        "text": "Registrar."
                    }
                ]
            },
            {
                "type": "p",
                "text": "5. Seleccione Aceptar.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "5. "
                    },
                    {
                        "text": "Aceptar."
                    }
                ]
            },
            {
                "type": "iframe",
                "text": "https://www.youtube.com/embed/DlkQ_7M9yeI"
            }
        ]
    },
    {
        "topic_id": 60,
        "elements": [
            {
                "text": "Especificar combinaciones de cuentas y dimensiones (control de entrada segmentada)",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "type": "p",
                "text": "Los usuarios especifican combinaciones de cuenta y dimensiones en diversas páginas, como páginas para diarios generales, gestión presupuestaria, y definiciones de contabilización. Las combinaciones de cuentas y dimensiones válidas dependen de las estructuras contables que se asignan al libro mayor y las reglas avanzadas que se asignan a las estructuras contables. Cuando los usuarios especifican una combinación, pueden escribir manualmente los valores o aprovecharse de una experiencia de búsqueda enriquecida. En el campo, puede empezar a escribir y se buscarán el valor y la descripción. Por ejemplo, si escribe 180 se busca algún valor que comience con esa combinación de números. O bien puede escribir Efectivo y se buscará cualquier valor que tenga una descripción que empiece por Efectivo. También puede usar un comodín para buscar, como *Efectivo o *180, si el valor o la descripción contienen los criterios de búsqueda."
            },
            {
                "type": "p",
                "text": "En la tabla siguiente se describen los métodos abreviados de teclado que se pueden usar cuando se cierre la búsqueda."
            },
            {
                "type": "table",
                "rows": [
                    [
                        {
                            "type": "th",
                            "text": "Método abreviado de teclado"
                        },
                        {
                            "type": "th",
                            "text": "Acción"
                        }
                    ],
                    [
                        {
                            "type": "td",
                            "text": "Alt+Flecha abajo"
                        },
                        {
                            "type": "td",
                            "text": "Abra la búsqueda. Si pulsa Alt+Flecha abajo una segunda vez, el foco se traslada a los segmentos del elemento flotante."
                        }
                    ],
                    [
                        {
                            "type": "td",
                            "elements": [
                                {
                                    "type": "p",
                                    "text":"Entrar y Mayús+Entrar",
                                    "classes": "ms-4"
                                },
                                {
                                    "type": "p",
                                    "text":"Delimitador de plan contable",
                                    "classes": "ms-4"
                                },
                                {
                                    "type": "p",
                                    "text":"Flecha derecha y flecha izquierda",
                                    "classes": "ms-4"
                                }
                            ]
                        },
                        {
                            "type": "td",
                            "text": "Ir al segmento siguiente o anterior."
                        }
                    ],
                    [
                        {
                            "type": "td",
                            "text": "Tabulación"
                        },
                        {
                            "type": "td",
                            "text": "Desplazar al siguiente campo de la cuadrícula."
                        }
                    ]
                ]
            },
            {
                "type": "iframe",
                "text": "https://www.youtube.com/embed/aqug8EawvJw"
            }
        ]
    },
    {
        "topic_id": 61,
        "elements": [
            {
                "text": "Diarios equilibrados para la contabilidad interunidad",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "type": "p",
                "text":"Si los asientos contables no se equilibran en el nivel de los valores de la dimensión financiera, se crean automáticamente asientos contables adicionales para equilibrar el diario. Estos asientos contables usan los tipos de registro Interunidad: débito y Interunidad: crédito de la página Cuentas para transacciones automáticas para determinar la cuenta principal. Por ejemplo, Unidad de negocio, que es el segundo segmento de la cuenta contable, se selecciona como dimensión financiera de compensación y los asientos contables siguientes que se van a crear.",
                "bolds": [
                    {
                        "text": "Interunidad: débito"
                    },
                    {
                        "text": "Interunidad: crédito"
                    },
                    {
                        "text": "Cuentas para transacciones automáticas"
                    }
                ]
            },
            {
                "type": "table",
                "rows": [
                    [
                        {
                            "type": "td",
                            "text": "6100 – MSP – OU_256"
                        },
                        {
                            "type": "td",
                            "text": "100,00 DR"
                        }
                    ],
                    [
                        {
                            "type": "td",
                            "text": "6100 – NY – OU_249"
                        },
                        {
                            "type": "td",
                            "text": "100,00 DR"
                        }
                    ],
                    [
                        {
                            "type": "td",
                            "text": "2100 – MSP – OU_256"
                        },
                        {
                            "type": "td",
                            "text": "200,00 CR"
                        }
                    ]
                ]
            },
            {
                "type": "p",
                "text": "En este caso, se determinan los saldos siguientes:"
            },
            {
                "type": "p",
                "text": "Para Unidad de negocio MSP = 100.00 CR",
                "classes": "ms-4"
            },
            {
                "type": "p",
                "text": "Para Unidad de negocio NY = 100.00 DR",
                "classes": "ms-4"
            },
            {
                "type": "p",
                "text": "Por lo tanto, los siguientes asientos contables se crean automáticamente para equilibrar el diario en el nivel de los valores de la dimensión financiera."
            },
            {
                "type": "table",
                "rows": [
                    [
                        {
                            "type": "td",
                            "text": "(Interunidad: débito): MSP: OU_256"
                        },
                        {
                            "type": "td",
                            "text": "100,00 DR"
                        }
                    ],
                    [
                        {
                            "type": "td",
                            "text": "(Interunidad: crédito): NY: OU_249"
                        },
                        {
                            "type": "td",
                            "text": "100,00 CR"
                        }
                    ]
                ]
            },
            {
                "type": "iframe",
                "text": "https://www.youtube.com/embed/oL7-P7xZuRQ"
            }
        ]
    },
    {
        "topic_id": 62,
        "elements": [
            {
                "text": "Configurar descripciones predeterminadas para registro automático",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "type": "warning",
                "text": "Para algunos tipos de transacciones de algunos países o regiones, también puede incluir texto de los campos de la base de datos de Microsoft Dynamics AX relacionados con dichos tipos de transacción. Para obtener una lista de los tipos de transacciones, y los países y regiones, consulte la sección Opcional: agregar otro texto a las descripciones predeterminadas más adelante en este tema.",
                "links": [
                    {
                        "url": "https://docs.microsoft.com/es-es/dynamics365/finance/general-ledger/set-up-default-descriptions-for-automatic-posting#optional-add-other-text-to-default-descriptions",
                        "text": "Opcional: agregar otro texto a las descripciones predeterminadas"
                    }
                ]
            },
            {
                "type": "h2",
                "text": "Configurar descripciones predeterminadas"
            },
            {
                "type": "p",
                "text": "1. Vaya a Administración de la organización > Configurar > Descripciones predeterminadas.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Administración de la organización"
                    },
                    {
                        "text": "Configurar"
                    },
                    {
                        "text": "Descripciones predeterminadas."
                    },
                    {
                        "text": "1. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "2. En el panel de acciones, haga clic en Nueva.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Nueva."
                    },
                    {
                        "text": "2. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "3. En el campo Descripción, seleccione el tipo de transacción para el que desea crear una descripción predeterminada.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Descripción,"
                    },
                    {
                        "text": "3. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "4. En el campo Idioma, seleccione el idioma al que se aplica la descripción.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Idioma,"
                    },
                    {
                        "text": "4. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "5. En el campo Texto, escriba la descripción predeterminada. Puede escribir texto en el campo o puede usar una o más de las siguientes variables de texto sin formato:",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "Texto,"
                    },
                    {
                        "text": "5. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "%1: agregar la fecha de la transacción.",
                "classes": "ms-5",
                "bolds": [
                    {
                        "text": "1"
                    }
                ]
            },
            {
                "type": "p",
                "text": "%2: agregar un identificador que corresponde con el tipo de documento que se está registrando en la contabilidad general. Por ejemplo, para los tipos de transacción que están relacionadas con las facturas, la variable %2 agrega el número de factura.",
                "classes": "ms-5",
                "bolds": [
                    {
                        "text": "2"
                    }
                ]
            },
            {
                "type": "p",
                "text": "%3: agregar un identificador relacionado con el tipo de documento que se está registrando en la contabilidad general. Por ejemplo, para los tipos de transacción relacionados con las facturas, la variable %3 agrega el número de cuenta del cliente.",
                "classes": "ms-5",
                "bolds": [
                    {
                        "text": "3"
                    }
                ]
            },
            {
                "type": "iframe",
                "text": "https://www.youtube.com/embed/afS4AOCUO-I"
            }
        ]
    },
    {
        "topic_id": 63,
        "elements": [
            {
                "text": "Mantener plantillas predeterminadas de dimensión financiera",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "type": "p",
                "text": "1. En el Panel de exploración, vaya a Módulos > Contabilidad general > Plan contable > Dimensiones > Plantillas predeterminadas de dimensión financiera.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    },
                    {
                        "text": "Módulos"
                    },
                    {
                        "text": "Contabilidad general"
                    },
                    {
                        "text": "Plan contable"
                    },
                    {
                        "text": "Dimensiones"
                    },
                    {
                        "text": "Plantillas predeterminadas de dimensión financiera."
                    }
                ]
            },
            {
                "type": "p",
                "text": "2. Seleccione Nuevo.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    },
                    {
                        "text": "Nuevo."
                    }
                ]
            },
            {
                "type": "p",
                "text": "3. En el campo Id. de plantilla, especifique un Id. de plantilla.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "3. "
                    },
                    {
                        "text": "Id. de plantilla,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "4. Escriba el porcentaje para los primeros valores de dimensión.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "4. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "5. Especifique los valores de la dimensión financiera que se corresponden con el porcentaje especificado.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "5. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "6. Seleccione Agregar.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "6. "
                    },
                    {
                        "text": "Agregar."
                    }
                ]
            },
            {
                "type": "p",
                "text": "7. Escriba otro porcentaje para los próximos valores de dimensión. Para este ejemplo, inserte un porcentaje que le permita seguir teniendo menos del 100 % asignado.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "7. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "8. Especifique los valores de la dimensión financiera que se corresponden con el porcentaje especificado.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "8. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "9. Seleccione Agregar.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "9. "
                    },
                    {
                        "text": "Agregar."
                    }
                ]
            },
            {
                "type": "p",
                "text": "10. Escriba otro porcentaje, que hará que el porcentaje total sea igual al 100 %.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "10. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "11. Especifique los valores de la dimensión financiera que se corresponden con el porcentaje especificado.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "11. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "12. Seleccione Guardar.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "12. "
                    },
                    {
                        "text": "Guardar."
                    }
                ]
            },
            {
                "type": "iframe",
                "text": "https://www.youtube.com/embed/nPrqoLuHfV8"
            }
        ]
    },
    {
        "topic_id": 65,
        "elements": [
            {
                "text": "Consolidaciones financieras en línea",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "type": "h2",
                "text": "Criterios"
            },
            {
                "type": "p",
                "text": "En la pestaña Criterios de la página Consolidar [En línea], se definen las cuentas, los períodos, y el tipo de información que se está consolidando.",
                "bolds": [
                    {
                        "text": "Criterios"
                    },
                    {
                        "text": "Consolidar [En línea],"
                    }
                ]
            },
            {
                "type": "img",
                "text": "https://docs.microsoft.com/es-es/dynamics365/finance/general-ledger/media/criteria-consolidate-online.png"
            },
            {
                "type": "h2",
                "text": "Dimensiones financieras"
            },
            {
                "type": "p",
                "text": "En la pestaña Dimensiones financieras, se definen las dimensiones que se deben incluir en la empresa de consolidación. Para seleccionar una dimensión, establezca el campo Especificación en Dimensión, y defina el orden de la dimensión en la empresa de consolidación.",
                "bolds": [
                    {
                        "text": "Dimensiones financieras,"
                    },
                    {
                        "text": "Especificación"
                    },
                    {
                        "text": "Dimensión,"
                    }
                ]
            },
            {
                "type": "img",
                "text": "https://docs.microsoft.com/es-es/dynamics365/finance/general-ledger/media/financial-dimensions-cons.png"
            },
            {
                "type": "iframe",
                "text": "https://www.youtube.com/embed/4SNLWsU9KyI"
            }
        ]
    },
    {
        "topic_id": 66,
        "elements": [
            {
                "text": "Generar informes financieros consolidados",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "type": "h2",
                "text": "Consolidaciones de un solo nivel y varios niveles entre entidades jurídicas"
            },
            {
                "type": "p",
                "text": "El método más sencillo para consolidar mediante un informe financiero es usar los organigramas para agregar datos de distintas empresas que tienen el mismo plan contable y los mismos períodos fiscales. A continuación se muestran los pasos de alto nivel para realizar consolidaciones mediante un organigrama."
            },
            {
                "type": "p",
                "text": "1. Cree una definición de filas, y asegúrese de que todas las cuentas adecuadas de todas las empresas se incluyen en las filas.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "2. Cree una definición de columna que incluya todas las columnas que se requieren para el informe que está creando.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    }
                ]
            },
            {
                "type": "p",
                "text": "3. Cree un árbol de notificación que incluya un nodo de informes para cada empresa que utiliza en los informes consolidados.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "3. "
                    }
                ]
            },
            {
                "type": "success",
                "text": "Para obtener más información acerca de cómo crear y gestionar definiciones de filas, definiciones de columna, y organigramas, consulte Componentes de los informes financieros.",
                "links": [
                    {
                        "url": "https://docs.microsoft.com/es-es/dynamics365/fin-ops-core/dev-itpro/analytics/financial-report-components",
                        "text": "Componentes de los informes financieros"
                    }
                ]
            },
            {
                "type": "p",
                "text": "La ilustración siguiente muestra cómo puede usar una definición del organigrama en informes financieros para identificar cada empresa que va a consolidar."
            },
            {
                "type": "img",
                "text": "https://docs.microsoft.com/es-es/dynamics365/finance/general-ledger/media/reporting-tree-definition.png"
            },
            {
                "type": "iframe",
                "text": "https://www.youtube.com/embed/FaR5D8ckchA"
            }
        ]
    },
    {
        "topic_id": 67,
        "elements": [
            {
                "text": "Importar datos de las filiales desde archivos",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "type": "p",
                "text": "Debe usar la página Consolidar con importación (Consolidaciones > Consolidar con importación) para preparar la transferencia de los datos de filiales desde sistemas externos.",
                "bolds": [
                    {
                        "text": "Consolidar con importación"
                    },
                    {
                        "text": "Consolidar con importación"
                    },
                    {
                        "text": "Consolidaciones"
                    }
                ]
            },
            {
                "type": "p",
                "text": "1. Cree una entidad jurídica filial para el proceso de consolidación. Para obtener más información sobre cómo crear entidades jurídicas, consulte Crear una entidad jurídica. Para obtener más información, consulte Preparar una entidad jurídica para su uso en el proceso de consolidación y Establecer una entidad jurídica filial para la consolidación.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "1. "
                    }
                ],
                "links": [
                    {
                        "text": "Crear una entidad jurídica",
                        "url": "https://docs.microsoft.com/es-es/dynamics365/fin-ops-core/fin-ops/organization-administration/tasks/create-legal-entity"
                    },
                    {
                        "text": "Preparar una entidad jurídica para su uso en el proceso de consolidación",
                        "url": "https://docs.microsoft.com/es-es/dynamics365/finance/general-ledger/prepare-company-for-consolidation"
                    },
                    {
                        "text": "Establecer una entidad jurídica filial para la consolidación",
                        "url": "https://docs.microsoft.com/es-es/dynamics365/finance/general-ledger/set-up-subsidiary-company-for-consolidation"
                    }
                ]
            },
            {
                "type": "p",
                "text": "2. Prepare un archivo con los datos que se van a importar. Para obtener más información sobre el proceso de importación, consulte Visión general de los trabajos de exportación e importación de datos.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "2. "
                    }
                ],
                "links": [
                    {
                        "text": "Visión general de los trabajos de exportación e importación de datos",
                        "url": "https://docs.microsoft.com/es-es/dynamics365/fin-ops-core/dev-itpro/data-entities/data-import-export-job"
                    }
                ]
            },
            {
                "type": "p",
                "text": '3. Exporte los datos a un archivo siguiendo los pasos del procedimiento "Proceso de importación/exportación de datos" en Visión general de los trabajos de exportación e importación de datos. Puede utilizar ese procedimiento para consolidar datos de otra instancia de Dynamics 365 Finance o de Dynamics 365 Business Central. Si va a importar datos de sistemas externos, los datos deben tener el formato que se describe en Exportar datos de filial a archivos.',
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "3. "
                    }
                ],
                "links": [
                    {
                        "text": "Visión general de los trabajos de exportación e importación de datos",
                        "url": "https://docs.microsoft.com/es-es/dynamics365/fin-ops-core/dev-itpro/data-entities/data-import-export-job"
                    },
                    {
                        "text": " Exportar datos de filial a archivos",
                        "url": "https://docs.microsoft.com/es-es/dynamics365/finance/general-ledger/export-subsidiary-data-to-file"
                    }
                ]
            },
            {
                "type": "p",
                "text": "4. Vaya a Consolidaciones > Consolidar con importación. En la página Consolidar con importación, en la pestaña Criterios, especifique los detalles del informe o la importación estableciendo los valores de los siguientes campos.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "4. "
                    },
                    {
                        "text": "Consolidaciones"
                    },
                    {
                        "text": "Consolidar con importación."
                    },
                    {
                        "text": "Consolidar con importación,"
                    },
                    {
                        "text": "Criterios,"
                    }
                ]
            },
            {
                "type": "p",
                "text": "5. Si tiene distintas divisas contables, use los campos de la pestaña Conversión de divisas para configurar la conversión que se realizará durante la consolidación.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "5. "
                    },
                    {
                        "text": "Conversión de divisas"
                    }
                ]
            },
            {
                "type": "p",
                "text": "6. Establezca la opción Ejecutar en segundo plano en Sí para permitir que el proceso de importación se ejecute en segundo plano.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "6. "
                    },
                    {
                        "text": "Ejecutar en segundo plano"
                    },
                    {
                        "text": "Sí"
                    }
                ]
            },
            {
                "type": "p",
                "text": "7. Establezca la opción Procesamiento por lotes en Sí para ejecutar la consolidación como un trabajo por lotes en un momento específico. Para ejecutar la consolidación inmediatamente, seleccione Aceptar.",
                "classes": "ms-4",
                "bolds": [
                    {
                        "text": "7. "
                    },
                    {
                        "text": "Procesamiento por lotes"
                    },
                    {
                        "text": "Sí"
                    },
                    {
                        "text": "Aceptar."
                    }
                ]
            },
            {
                "type": "iframe",
                "text": "https://www.youtube.com/embed/NeKeTtUftwU"
            }
        ]
    },
    {
        "topic_id": 68,
        "elements": [
            {
                "text": "Preparar una entidad jurídica para el proceso de consolidación",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "type": "warning",
                "text": "Le recomendamos que utilice Management Reporter para Microsoft Dynamics 365 Finance para combinar los resultados financieros de múltiples entidades jurídicas en un formato consolidado. Management Reporter le permite crear informes financieros consolidados en todas las entidades jurídicas, utilizar Excel para importar datos de consolidación de otros orígenes y traducir importes a cualquier número de divisas de notificación sin tener que ejecutar el proceso de consolidación en Dynamics 365 Finance."
            },
            {
                "type": "p",
                "text": "Puede imprimir informes, como informes financieros, desde la entidad jurídica consolidada. Sin embargo, no puede usar la entidad jurídica consolidada para las transacciones diarias."
            },
            {
                "type": "p",
                "text": "Puede consolidar datos de las entidades jurídicas que usen distintas bases de datos que la entidad jurídica consolidada. Este proceso de consolidación se denomina consolidación de importación. Como alternativa, las entidades jurídicas pueden usar la misma base de datos que la entidad jurídica consolidada. Este proceso de consolidación se denomina consolidación en línea."
            },
            {
                "type": "iframe",
                "text": "https://www.youtube.com/embed/RF-L5deey98"
            }
        ]
    },
    {
        "topic_id": 69,
        "elements": [
            {
                "text": "Configurar una entidad jurídica subsidiaria para consolidación",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            },
            {
                "type": "p",
                "text": "Antes de iniciar una consolidación como parte del cierre de un período, realice las actividades de preparación para dicho cierre, pero no cierre las cuentas de la filial hasta que se complete la consolidación. Para obtener más información sobre el cierre de los períodos, consulte Cerrar la contabilidad general al final del período y Cerrar el año fiscal.",
                "links": [
                    {
                        "text": "Cerrar la contabilidad general al final del período",
                        "url": "https://docs.microsoft.com/es-es/dynamics365/finance/general-ledger/close-general-ledger-at-period-end"
                    },
                    {
                        "text": "Cerrar el año fiscal",
                        "url": "https://docs.microsoft.com/es-es/dynamics365/finance/general-ledger/tasks/close-fiscal-year"
                    }
                ]
            },
            {
                "type": "warning",
                "text": "Le recomendamos que utilice Management Reporter para Microsoft Dynamics 365 Finance para combinar los resultados financieros de múltiples entidades jurídicas en un formato consolidado. Management Reporter le permite crear informes financieros consolidados en todas las entidades jurídicas, utilizar Excel para importar datos de consolidación de otros orígenes y traducir importes a cualquier número de divisas de notificación sin tener que ejecutar el proceso de consolidación en Dynamics 365 Finance."
            },
            {
                "type": "iframe",
                "text": "https://www.youtube.com/embed/sYRBjg_LJbk"
            }
        ]
    },
    {
        "topic_id": 70,
        "elements": [
            {
                "text": "",
                "type": "h1"
            },
            {
                "text": "Dynamics 365 for Finance and Operations se ha convertido en aplicaciones especialmente diseñadas para ayudarlo a administrar funciones empresariales específicas. Para obtener más información acerca de estos cambios de licencias, consulte Guía de licencias de Dynamics 365.",
                "type": "info",
                "links": [
                    {
                        "text": "Guía de licencias de Dynamics 365" ,
                        "url": "https://dynamics.microsoft.com/es-es/pricing/"
                    }
                ],
                "bolds": [
                    {
                        "text": "Dynamics 365 for Finance and Operations",
                    }
                ]
            }
        ]
    }
]
export default dataPage