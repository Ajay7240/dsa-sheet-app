import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
