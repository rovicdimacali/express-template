import { connectDB } from "./app/db/index.js";
import app from "./app/index.js";

const port = process.env.EXPRESS_PORT || "3000";

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("Server open at:", port);
    });
  })
  .catch((error) => {
    console.error("Error occured in MYSQL connection", error);
    process.exit(0);
  });
