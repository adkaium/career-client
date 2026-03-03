import {createBrowserRouter} from "react-router";
import RootLayOut from "../Layout/RootLayOut";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivetRoute from "../Routers/PrivetRoute";
import ApplyJob from "../pages/ApplyJobs/ApplyJob";
import MyApplications from "../pages/MyApplications/MyApplications";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayOut,
    children:[
        {
            index:true,
            Component: Home,
        },
        {
          path:'/jobs/:id',
          Component:JobDetails,
          loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`),
        },
        {
          path:'/apply/:id',
          element:<PrivetRoute><ApplyJob></ApplyJob></PrivetRoute>,
        },
        {
          path:'/appliedJobs',
          element:<PrivetRoute><MyApplications></MyApplications></PrivetRoute>
        }
        ,
        {
          path:'/register',
          Component:Register,
        },
        {
          path:'/signIn',
          Component:SignIn,
        }
    ]
  },
]);
