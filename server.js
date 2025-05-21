const expres = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const plantRoutes = require("./Routes/plantRoutes");
require("dotenv").config();

const app = expres();
app.use(expres.json());
app.use(cors());

const mongodb_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

app.use("/web/api/plants", plantRoutes);

mongoose
  .connect(mongodb_URI)
  .then(() => console.log("connected successfully"))
  .catch((error) => console.log(error.message));
app.listen(PORT, () => console.log("Server running on port 3000"));
