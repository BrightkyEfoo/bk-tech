import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
// import Home from "./pages/Home";
// import About from "./pages/about/About";
// import Contact from "./pages/contact/Contact";
// import Services from "./pages/Services/Services";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Services = lazy(() => import("./pages/Services/Services"));
// const Home = lazy(() => import("./pages/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/services",
    element: <Services />,
  },
]);
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="App" id="App">
        <RouterProvider router={router} />
      </div>
    </Suspense>
  );
}

export default App;
