import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext";// Import the ThemeContext

const App = () => {
  return (
    <ThemeProvider>
      <NavBar />
      {/* This will render the children routes */}
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
