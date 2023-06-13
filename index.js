import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";


const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send("Hello from homepage."));



app.listen(PORT, ()=>{
    console.log(`Server started on port http://localhost:${PORT}`);
})
