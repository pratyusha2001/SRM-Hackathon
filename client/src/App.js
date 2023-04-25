import './App.css';
import DashboardPgNeg from './components/DashboardPgNeg';
import DashboardPgPos from './components/DashboardPgPos';
import HomePg from './components/HomePg';
import SignIn from './components/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';

// for user login
import { Routes, Route, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Home from './components/Home';

function App() {
  const [user, setUser] = useState(null)
  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`
      const { data } = await axios.get(url, { withCredentials: true })
      setUser(data.user._json)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <div className="App">

      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home user={user} /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <SignIn />}
        />
        <Route
          exact
          path="/ml/success"
          element={<DashboardPgPos />}
        />
        <Route
          exact
          path="/ml/failure"
          element={<DashboardPgNeg />}
        />
        <Route
          exact
          path="/upload"
          element={user ? <HomePg /> : <SignIn />}
        />
      </Routes>
    </div>
  );
}

export default App;

