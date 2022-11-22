# MONGO DB

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
```
