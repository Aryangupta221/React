import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

// ✅ Correct router setup
// const router = createBrowserRouter([
//   {
//     path: "/",  // ✅ No extra colon, correct syntax
//     element: <Layout />,
//     children: [
//       {
//         path: "",  // ✅ Empty string is okay for default route
//         element: <Home />,
//       },
//       {
//         path: "about",  // ✅ No syntax error here
//         element: <About />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<Layout />}>
      <Route path="home" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:userid" element={<User />}/>
      <Route 
      loader ={githubInfoLoader}
       path="github"
       element ={<Github />}
       />
       
    </Route>
  )
)

// ✅ Render RouterProvider correctly
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
