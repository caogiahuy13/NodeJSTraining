const express = require('express');

const app = express();

const courses = [
    { id: 1, name: "course 1"},
    { id: 2, name: "course 2"},
    { id: 3, name: "course 3"}
]
app.get("/", (req,res) => {
    res.send("Hello World");
});

app.get("/customers", (req,res) => {
    res.send([1,2,3]);
})

app.get("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (course) {
        res.send(course);
    } else {
        res.status(404).send("Course not found");
    }
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
