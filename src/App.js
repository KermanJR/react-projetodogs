
import {BrowserRouter, Routes, Route} from 'react-router-dom'


/*
  Import components
*/
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ProtectedRoute } from './components/helpers/ProtectedRoute';

/*
  Import Pages
*/
import Home from './components/Home';
import Login from './components/Login/Login';
import { User } from './components/user/User';

/*
  Import general styles
*/
import  './App.css'


/*
  Import Context
*/
import { UserStorage } from './UserContext'

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login/*" element={<Login/>}/>
              <Route
                path="/conta/*" 
                element={
                  <ProtectedRoute> 
                    <User/>
                  </ProtectedRoute>}
              />
            </Routes>
            <Footer/>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
