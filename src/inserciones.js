db.ventas.insertMany([

    { "_id" : 1,
      "producto": "Caña de choco",
      "precio_de_coste": 0.20,
      "precio_de_venta": 1.20,
      "fecha_venta": ISODate("2020-04-01T08:00:00Z"),
      "unidades": 100,
      "cliente": "Supermercados Juanini",
      "empleado_vendedor": "Pedro Maquina",
      "gran_cliente": true
    },{
      "_id" : 2,
      "producto": "Cortadillo de cidra",
      "precio_de_coste": 0.40,
      "precio_de_venta": 1.60,
      "fecha_venta": ISODate("2020-05-11T08:00:00Z"),
      "unidades": 120,
      "cliente": "Supermercados Juanini",
      "empleado_vendedor": "Maica Lopez",
      "gran_cliente": true
    },{
      "_id" : 3,
      "producto": "Bomba de choco",
      "precio_de_coste": 0.50,
      "precio_de_venta": 1.50,
      "fecha_venta": ISODate("2020-03-12T08:00:00Z"),
      "unidades": 75,
      "cliente": "Supermercados Juanini",
      "empleado_vendedor": "Francisca Muñoz",
      "gran_cliente": true
    },{
      "_id" : 4,
      "producto": "Palmera de kinder",
      "precio_de_coste": 0.70,
      "precio_de_venta": 2.20,
      "fecha_venta": ISODate("2020-08-10T08:00:00Z"),
      "unidades": 100,
      "cliente": "Supermercados Juanini",
      "empleado_vendedor": "Maica Lopez",
      "gran_cliente": true
    },{
      "_id" : 5,
      "producto": "Barquillo de nata",
      "precio_de_coste": 0.40,
      "precio_de_venta": 1.30,
      "fecha_venta": ISODate("2020-03-01T08:00:00Z"),
      "unidades": 45,
      "cliente": "Tienda familia Juarez",
      "empleado_vendedor": "Juan Arroita",
      "gran_cliente": false
    },{
      "_id" : 6,
      "producto": "Palmera de kinder",
      "precio_de_coste": 0.70,
      "precio_de_venta": 2.20,
      "fecha_venta": ISODate("2020-04-11T08:00:00Z"),
      "unidades": 50,
      "cliente": "Tienda familia Juarez",
      "empleado_vendedor": "Juan Arroita",
      "gran_cliente": false
    },{
      "_id" : 7,
      "producto": "Barquillo de nata",
      "precio_de_coste": 0.40,
      "precio_de_venta": 1.30,
      "fecha_venta": ISODate("2020-03-12T08:00:00Z"),
      "unidades": 20,
      "cliente": "Tienda familia Juarez",
      "empleado_vendedor": "Laura Vaz",
      "gran_cliente": false
    },{
      "_id" : 8,
      "producto": "Bomba de choco",
      "precio_de_coste": 0.50,
      "precio_de_venta": 1.50,
      "fecha_venta": ISODate("2020-05-10T08:00:00Z"),
      "unidades": 50,
      "cliente": "Tienda familia Juarez",
      "empleado_vendedor": "Juan Arroita",
      "gran_cliente": false
    },{
      "_id" : 9,
      "producto": "Tarta de queso",
      "precio_de_coste": 5,
      "precio_de_venta": 20,
      "fecha_venta": ISODate("2020-05-10T08:00:00Z"),
      "unidades": 10,
      "cliente": "Bar los paquetes",
      "empleado_vendedor": "Manuel Bardallo",
      "gran_cliente": false
    },
    {
        "_id" : 10,
        "producto": "Palmera de kinder",
        "precio_de_coste": 0.70,
        "precio_de_venta": 2.20,
        "fecha_venta": ISODate("2021-05-10T08:00:00Z"),
        "unidades": 50,
        "cliente": "Bar los paquetes",
        "empleado_vendedor": "Laura Vaz",
        "gran_cliente": false
    },
    {
        "_id" : 11,
        "producto": "Barquillo de nata",
        "precio_de_coste": 0.40,
        "precio_de_venta": 1.30,
        "fecha_venta": ISODate("2021-04-11T08:00:00Z"),
        "unidades": 50,
        "cliente": "Bar los paquetes",
        "empleado_vendedor": "Laura Vaz",
        "gran_cliente": false
      },
      {
        "_id" : 12,
        "producto": "Caña de choco",
        "precio_de_coste": 0.20,
        "precio_de_venta": 1.20,
        "fecha_venta": ISODate("2019-04-11T08:00:00Z"),
        "unidades": 50,
        "cliente": "Bar los paquetes",
        "empleado_vendedor": "Laura Vaz",
        "gran_cliente": false 
      }
    ])