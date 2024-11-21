import { app } from "./app.js";
import connectdb from "./config/db.js"
import dotenv from "dotenv";

dotenv.config();

let port = process.env.PORT || 5000;

// Create server
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${port}`);
    connectdb()
});
