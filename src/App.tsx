import {Route, Routes, useNavigate} from "react-router-dom";
import Events from "./pages/events";
import ProtectedRoute from "./protectedRoute";
import CreateEvent from "./pages/createEvent";
import Login from "./pages/login";
import {useEffect, useState} from "react";
import {onAuthStateChanged, User} from "firebase/auth";
import {auth} from "./firebase";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        //navigate("/admin/event/create");
      } else {
        navigate("/login")
      }
    });
  }, [])

  async function signOut() {
    setUser(undefined);
    await auth.signOut();
  }

  return (
      <>
        <div className={"p-2 flex justify-end"}>
          {user &&
              <div className={"flex gap-2 items-center"}>
                  <p>{user.email}</p>
                  <button className="btn btn-link" onClick={signOut}>Logg ut</button>
              </div>
          }
        </div>
        <Routes>
          <Route path={"/"} element={<p>asdasd</p>}/>
          <Route path={"/events"} element={<Events/>}/>
          <Route path={"/login"} element={<Login/>}/>
          <Route path={"admin"} element={<ProtectedRoute/>}>
            <Route path={"event/create"} element={<CreateEvent/>}/>
          </Route>
          <Route path={"*"} element={<p>fallback</p>}/>
        </Routes>
      </>
  )
}

export default App
