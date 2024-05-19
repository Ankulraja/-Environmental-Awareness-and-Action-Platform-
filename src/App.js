import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Common/Navbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Core/Dashboard/Dashboard";
import Myprofile from "./Components/Core/Dashboard/MyProfile/Myprofile";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import Login from "./Pages/Login";
import {Signup} from "./Pages/Signup";
import AddTask from "./Components/Core/Dashboard/Add Task/AddTask";
import Dash from "./Components/Core/Dashboard/Dash/Dash";
import VerifyEmail from "./Pages/VerifyEmail"
import SettingPage from "./Components/Core/Dashboard/Setting/SettingPage";

function App() {
  return (
    <div className=" w-screen min-h-screen bg-gray-950 text-white">
      <NavBar></NavBar>
      <div className="h-12 w-screen"></div>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          {" "}
        </Route>
        <Route path="/about" element={<About></About>}>
          {" "}
        </Route>
        <Route path="/contact" element={<Contact></Contact>}>
          {" "}
        </Route>
        <Route path="/doubts" element={<FAQ></FAQ>}>
          {" "}
        </Route>
        <Route path="/login" element={<Login></Login>}>
          {" "}
        </Route>
        <Route path="/signup" element={<Signup></Signup>}>
          {" "}
        </Route>    
        <Route path="/verify-email" element={<VerifyEmail></VerifyEmail>}>
          {" "}
        </Route>

        <Route element={<Dashboard></Dashboard>}>
          <Route path="/dashboard/my-profile" element={<Myprofile></Myprofile>}>
            {" "}
          </Route>
          <Route path="/dashboard/add-task" element={<AddTask></AddTask>}>
            {" "}
          </Route>
          <Route path="/dashboard/dash" element={<Dash></Dash>}>
            {" "}
          </Route>
          <Route path="/dashboard/setting" element={<SettingPage></SettingPage>}>
            {" "}
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
