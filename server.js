const expres = require("express");
const cors = require("cors");
const router = require("./Routes/plantRoutes");
const connectDB = require("./database/db");
require("dotenv").config();

const app = expres();
app.use(expres.json());
app.use(cors());

const PORT = process.env.PORT;

app.use("/web/api/plants", router);

connectDB();

app.listen(PORT, () => console.log("Server running on port 3000"));
