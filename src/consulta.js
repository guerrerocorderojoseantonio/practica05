//REALIZAMOS UN AGGREGATE PARA VER QUE BENEFIFICOS NOS HAN DEJADO LOS PRODUCTOS

db.ventas.aggregate(
    [
        { $match: { $expr: { $gt: [{ $year: "$fecha_venta" }, 2019] } } },
        {
            $group:
            {
                _id: { 
                    producto: "$producto"
                },
                venta_total: { $sum: { $multiply: ["$precio_de_venta", "$unidades"] } },
                gasto_total: { $sum: { $multiply: ["$precio_de_coste", "$unidades"] } }
            }
        },
        {
            $project: {
                producto: "$_id.producto",
                _id: 0,
                totalventas: "$venta_total",
                gastos: "$gasto_total",
                ganacias: {$subtract: [ "$venta_total", "$gasto_total" ] }
            }
        },
        {
            $match: {
                ganacias: { $gt: 25 }
            }
        }
    ]
).pretty()

//REALIZAMOS UN AGGREGATE PARA CALCULAR LOS BENEFICIOS POR AÑO DE CADA PRODUCTO

db.ventas.aggregate(
    [
        { $match: { $expr: { $gt: [{ $year: "$fecha_venta" }, 2019] } } },
        {
            $group:
            {
                _id: { 
                    año: {$year: "$fecha_venta" },
                    producto: "$producto"
                },
                venta_total: { $sum: { $multiply: ["$precio_de_venta", "$unidades"] } },
                gasto_total: { $sum: { $multiply: ["$precio_de_coste", "$unidades"] } }
            }
        },
        {
            $project: {
                año: "$_id.año",
                producto: "$_id.producto",
                _id: 0,
                totalventas: "$venta_total",
                gastos: "$gasto_total",
                ganacias: {$subtract: [ "$venta_total", "$gasto_total" ] }
            }
        },
        {
            $match: {
                ganacias: { $gt: 25 }
            }
        }
    ]
).pretty()

//VAMOS A REALIZAR UN AGGREGATE QUE NO SMUESTRE INFORMACION RELACIONADA A LAS VENTAS TOTALES AGRUPADAS POR AÑO

db.ventas.aggregate(
    [
        { $match: { $expr: { $gt: [{ $year: "$fecha_venta" }, 2019] } } },
        {
            $group:
            {
                _id: { $year: "$fecha_venta" },
                venta_total: { $sum: { $multiply: ["$precio_de_venta", "$unidades"] } }
            }
        },
        {
            $project: {
                año: "$_id",
                _id: 0,
                totalventas: "$venta_total",
                IVA: { $multiply: ["$venta_total", 0.21] },
                totalventasIVA: { $multiply: ["$venta_total", 1.21] },
                totalRedondeado: { $round: [{ $multiply: ["$venta_total", 1.21] }, 0] }
            }
        },
        {
            $match: {
                totalventasIVA: { $gt: 300 }
            }
        }
    ]
).pretty()


