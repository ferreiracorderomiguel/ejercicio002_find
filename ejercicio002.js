/* Inserto los familiares de uno en uno */

db.familiares.insertOne( {"nombre": "Vladimir", "años": 43 } ) 
db.familiares.insertOne( {"nombre": "Pepe", "años": 5 } ) 
db.familiares.insertOne( {"nombre": "Venancio", "años": 50 } ) 
db.familiares.insertOne( {"nombre": "Beatriz", "años": 17 } ) 
db.familiares.insertOne( {"nombre": "Davinia", "años": 69 } ) 
db.familiares.insertOne( {"nombre": "Rosa", "años": 24 } ) 
db.familiares.insertOne( {"nombre": "Roberto", "años": 22 } ) 
db.familiares.insertOne( {"nombre": "Octavio", "años": 83 } ) 
/* Otra forma de añadir familiares pero en grupos, más comodo que la forma anterior.*/
db.familiares.insertMany([
    {"nombre": "Manuel", "años": 54 },
    {"nombre": "Juan Manuel", "años": 3 },
    {"nombre": "Rigoberto", "años": 13 },
])