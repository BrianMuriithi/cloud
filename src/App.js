import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/products/list/List";
import Single from "./pages/products/single/Single";
import New from "./pages/products/new/New";
import Newuser from "./pages/users/newuser/Newuser";
import Singleuser from "./pages/users/singleuser/Singleuser";
import Userlist from "./pages/users/userlist/Userlist";
import { useContext } from "react";
import {AuthContext} from "./context/AuthContext"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Navigate,
  Routes,
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";


function App() {
  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route path="login" element={<Login/>}/>
            <Route index element={<RequireAuth><Home/></RequireAuth>}/>
            <Route path="users">
              <Route path=":userId" element={<Singleuser/>}/>
              <Route index element={<RequireAuth><Userlist/></RequireAuth>}/>
              <Route path="new" element={<Newuser inputs={userInputs}/>}/>  
            </Route>
            <Route path="products">
              <Route path=":productId" element={<Single/>}/>
              <Route index element={<RequireAuth><List/></RequireAuth>}/>
              <Route path="new" element={<Newuser inputs={productInputs}/>}/>  
            </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
