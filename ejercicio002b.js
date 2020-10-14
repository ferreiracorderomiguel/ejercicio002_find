//El comando $gte para los valores mayores o igual al introducido.
db.fimiliares.find({"años":   {$gte: 43 }}).pretty()