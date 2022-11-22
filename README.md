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

1. $eq: Matches values that are equal to a specified value.
2. $gt: Matches values that are greater than a specified value.
3. $gte: Matches values that are greater than or equal to a specified value.
4. $in: Matches any of the values specified in an array.
5. $lt: Matches values that are less than a specified value.
6. $lte: Matches values that are less than or equal to a specified value.
7. $ne: Matches all values that are not equal to a specified value.
