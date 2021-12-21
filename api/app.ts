import express from "express";
import { handleCollegeList, handleCollegeDetails } from "./src/controlers/college.controler";
import { authorize } from "./src/utils/authorize";

const app = express();
const port = 5555;

app.get("/college/all", authorize, handleCollegeList);
app.get("/college/:clgId", authorize, handleCollegeDetails);

app.listen(port, () => {
  console.log(`The server is running on ${port}. http://localhost:${port}`);
});
