import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Boutique from "./pages/Boutique";
import Location from "./pages/Location";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Panier from "./pages/Panier";
import Profile from "./pages/Profile";
import AddBookForm from "./admin/AddBookForm";
import AdminBooks from "./admin/AdminBooks";
import BookImageLoad from "./admin/BookImageLoad";
import EditBook from "./admin/EditBook";

// Layouts
import DashboardLayout from "./layouts/DashboardLayout";
import AdminDashboard from "./admin/AdminDashboard";

// Auth
import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* 🌍 PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/panier" element={<Panier />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/addbookform" element={<AddBookForm />} />
<Route path="/adminbooks" element={<AdminBooks />} />
<Route path="/bookimageload" element={<BookImageLoad />} />
<Route path="/admin/books/edit/:id" element={<EditBook />} />



<Route
  path="/profile"
  element={
    <PrivateRoute>
      <Profile />
    </PrivateRoute>
  }
/>

<Route
  path="/admin"
  element={
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  }
/>


        {/* 🔐 DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
        </Route>

        {/* ❌ */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
