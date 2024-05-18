const express = require("express");
const app = express();
const dbConnect = require("./Config/Database");
const dotenv = require("dotenv");
dotenv.config();
const taskRouter = require("./Router/taskRouter");
const cors = require("cors");
app.use(express.json());

// app.use(cors({
//   origin: 'https://task-management-system-gray.vercel.app',
//   credentials: true
// }));

app.use(cors());

app.use("/", taskRouter);
// app.use("/api/v1", taskRouter);


// app.use("/",(req,res)=>{
//   res.send("Hello");
// })
const PORT = process.env.PORT || 4000;
dbConnect();


app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
