# MONGO DB

Mongo DB es una base de datos NoSQL, es decir, una base de datos que no utiliza SQL para realizar las consultas. En este caso, se utiliza un lenguaje de consulta llamado JSON.

- BSON: Es un formato de datos binario que se utiliza para almacenar y transmitir datos entre las aplicaciones. Es un formato de datos JSON con un esquema.

## Installation

### Ubuntu

```bash
sudo apt-get install mongodb
```

### Mac

```bash
brew install mongodb
```

## Start

```bash
mongod
```

## Stop

```bash
mongo
```

## Connect

```bash
mongo --host localhost -u root -p root
```

## Commands

```bash

# Lista collections
show dbs

# Seleciona collection
use <db_name>

# Lista collections
show collections

# Crear collection
db.createCollection("users")

# Lista documentos
db.<collection_name>.find()

# Insetar documento
db.<collection_name>.insert({<json>})

# Insertar un documento 
db.<collection_name>.insertOne({<json>})

# Pretty
db.<collection_name>.find().pretty()

# Eliminar documento
db.<collection_name>.remove({<json>})

# Eliminar todos los documentos
db.<collection_name>.remove({})

# Eliminar collection
db.<collection_name>.drop()

# Eliminar database
db.dropDatabase("users")

# Actualizar documento
db.<collection_name>.update({<json>}, {<json>})

# Help
db.help()
db.<collection_name>.help()

```

## Query and Projection Operators

```bash
$eq         =
$gt         >
$gte        >=
$lt         <
$lte        <=
$ne         !=
$in         valores dentro de un rango
$nin        valores que no estan dentro de un rango
$and        Une queries con un AND logico
$not        Invierte el efecto de un query
$nor        Une queries con un NOR logico
$or         Une queries con un OR logico
$exist      Docuemntos que cuentan con un campo especifico
$type       Docuemntos que cuentan con un campo de un tipo especifico
$all        Arreglos que contengan todos los elementos del query
$elemMatch  Documentos que cumplen la condicion del $elemMatch en uno de sus elementos
$size       Documentos que contienen un campo tipo arreglo de un tamaño especifico.
```
