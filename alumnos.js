// CRUD - Mongo
db.alumnos.insert([
  {
    name: "Lucas",
    last_name: "Hassinger",
    courses: ["python", "mysql", "flask"],
  },
  {
    name: "Marlene",
    last_name: "Solano",
    courses: ["python", "mysql", "flask"],
  },
]);

db.alumnos.find();
db.alumnos.find({ name: "Lucas" });

db.alumnos.update(
  { _id: ObjectId("637d2590ecf111f51efedf04") },
  { $set: { age: 18 } }
);

db.alumnos.deleteOne({ name: "Linder" });
