## Нералациона спроти релациона датабаза

ORM - Object relational mapper - релациона датабаза

ODM - Object data mapper - нерелациона датабаза

команда --> mongoose преведувач --> mongodb запис

### Reference - mongoose

    - https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/

### Event loop

    - https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

### README

### Operators are denoted with $ sign, comparison operators return data based on value comparison

    - db.students.find({ name: { $ne: "Vangel" } }) - not equal
    - db.students.find({ age: { $lt: 18 } }) - less than
    - db.students.find({ name: { $lte: "Vangel" } }) - less than or equal
    - $gt - greather than
    - $gte - greather than or equal
    - db.students.find({ gpa: { $gte: 3, $lte: 4 } }) - finds students with gpa between 3 and 4
    - db.students.find({ name: { $in: ["Vangel", "Risto", "Icka"] } }) - we use $in to give more params to be searched at a time
    - $nin - opposite effect meaning cuts all the params given in the array

## Logical operators

    - Logical operators return data based on expressions that evaluate to true or false
    - $and
        ex. db.stundents.find({ $and: [{ fullTime: true }, {age: { $lte: 22 }}] })
    - $not
        ex. db.stundents.find({ age: { $not: { $gte: 30 } } }) - returns all students $lt age 30, it negates the operator in the brackets, $not will also return age if it is null
    - $nor - opposite of and, both conditions needs to be false
        ex. db.stundents.find({ $nor: [{ fullTime: true }, {age: { $lte: 22 }}] })
    - $or - one of the statements needs to be true
        ex. db.stundents.find({ $or: [{ fullTime: true }, {age: { $lte: 22 }}] })

### Collections

- show collections
- db.createCollection("teachers", { capped: true, size: 10000000, max: 100 }) - capped says that this collection will have a maxSize, if capped is true we need minSize specified also, size is the minimum size in bytes, max of 100 teachers i.e 100 documents
- db.teachers.drop() - deletes the collection

### Mongoose

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
It provides a higher-level abstraction over MongoDB's native driver,
allowing you to interact with MongoDB databases using JavaScript objects and providing
features such as validation, schema-based modeling, middleware,
query building, and more.

### Left to try

11. db.students.find().sort({ name: 1 }) - 1 means alphabetical order, -1 reverse alphabetical order
12. db.students.find().limit(1) - number of documents to get
13. db.students.find().sort({ gpa: -1 }).limit(1) - get the student with the highest gpa
14. find({query},{projection}) - query gives us the match like WHERE in SQL limiting the results, projection gives us only the specified fields, like selected columns in SQL. ex. find({}, { name: true or 1 }) returns all names
15. db.students.updateOne(filter, update) - updateOne({ name: "Vangel" }, { $set/$unset: { fullTime: true } })
16. db.students.updateMany({}, { $set: { fullTime: false } }) - update everyone to have fullTime to false
17. db.students.updateMany({ fullTime: { $exists: false }}, { $set: { fullTime: true } })
18. db.students.deleteOne({ name: "Vangel" })
19. db.students.deleteMany({ fullTime: false }) - deletes everyone with fullTime set to false
20. db.students.deleteMany({ registeredDate: { $exists: false } })
