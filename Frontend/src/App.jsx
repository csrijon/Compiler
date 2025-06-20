
import Navbar from './components/Navbar'
import Middle from './components/Middle'
import Teams from './components/Teams'
import Footer from './components/Footer'
import CodeEditorUI from "./components/CodeEditorUI"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ReactDOM from "react-dom/client";


const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Middle/><Teams/><Footer/></>
  },
  {
    path:"/Compile",
    element: <><Navbar/><CodeEditorUI/><Footer/></>
  }

]);
function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}


export default App
