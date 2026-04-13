import React from "react";
import ReactDOM from "react-dom/client"
import GolfGame from "./components/GolfGame";
import ToDoList from "./components/ToDoList";
import Menu from "./components/Menu";
import ClassComponent from "./components/ClassComponent";
import ControlledComponents from "./components/ControlledComponents";
import UncontrolledComponents from "./components/UncontrolledComponents";
import TaskManagement from "./components/TaskManagement";
// import MarkDownEditor from "./components/MarkDownEditor";
// import TourPackage from "./components/Tourpackage";
import LiveSearch from "./components/LiveSearch";
// import CityDropDown from "./components/CityDropDown";
import DataFetcher from "./components/DataFetcher";
import CityWeather from "./components/CityWeather";
import ImageBazzar from "./components/ImageBazzar";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Route,Routes } from "react-router-dom";
import Dashboard from "./components/instagram/Dashboard";
import SignUp from "./components/instagram/SignUp";
import Login from "./components/instagram/Login";
import "./index.css";


const App =()=>(
    <div>
       
        {/* <GolfGame/> */}
        {/* <ToDoList/> */}
        {/* <Menu/>
        <ClassComponent/> */}
        {/* <ControlledComponents/> */}
        {/* <UncontrolledComponents/> */}
        {/* <TaskManagement/> */}
        {/* <MarkDownEditor/> */}
        {/* <TourPackage/> */}
        {/* <LiveSearch/> */}
        {/* <CityDropDown/> */}
        {/* <DataFetcher/> */}
        {/* <ImageBazzar/> */}
        {/* <ThemeSwitcher/> */}
        <Routes>
            <Route path="/" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>

        </Routes>
    </div>
)




export default App;