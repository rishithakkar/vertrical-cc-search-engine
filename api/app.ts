import express from "express";
import helmet from "helmet";
import cors from "cors";
import {
  handleCollegeList,
  handleCollegeDetails,
  handleSearch,
} from "./src/controlers/college.controler";
import { authorize } from "./src/utils/authorize";
import connect from "./src/utils/db.connect";

const app = express();
const port: number = 5555;
app.use(helmet()); // For security reason
app.use(cors());
app.use(express.static("public"));

app.get("/college/all", authorize, handleCollegeList);
app.get("/college/:clgId", authorize, handleCollegeDetails);
app.get("/search/:title", authorize, handleSearch);

app.listen(port, () => {
  console.log(`The server is running on ${port}. http://localhost:${port}`);
  connect(); // Once app is run, connect with database
});
