import Home from './Home';
import Login from './Login';
import Register from './Register';
import UserAccount from './UserAccount';
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;