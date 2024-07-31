import Home from './Home';
import Login from './Login';
import Register from './Register';
import UserAccount from './UserAccount';
import Admin from './Admin';
import Create from './Create';
import Read from './Read';
import Update from './Update';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ marginTop: '-3.5rem' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user-account" element={<UserAccount />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/create" element={<Create />} />
          <Route path="/admin/read" element={<Read users={users} />} />
          <Route path="/admin/update" element={<Update users={users} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
