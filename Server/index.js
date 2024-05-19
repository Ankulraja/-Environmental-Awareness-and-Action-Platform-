const express = require("express");
const app = express();
const dbConnect = require("./Config/Database");
const dotenv = require("dotenv");
dotenv.config();
const profileRoute= require("./Router/Profile")
const User = require("./Router/User")
const cors = require("cors");
const cookieParser= require("cookie-parser");
const fileUpload= require("express-fileupload")
const cloudinaryConnect = require("./Config/Clodinary");

app.use(express.json());
app.use(cookieParser());
// app.use(cors({
//   origin: 'https://task-management-system-gray.vercel.app',
//   credentials: true
// }));

app.use(cors());
app.use(
  fileUpload({
      useTempFiles: true,
      tempFileDir:"/tmp/"
  })
)

app.use("/api/v1/auth", User);
app.use("/api/v1/profile",profileRoute)
const PORT = process.env.PORT || 4000;
dbConnect();
cloudinaryConnect();

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
