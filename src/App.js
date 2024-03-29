import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Orderlist from "./pages/orderList/Orderlist"
import Single from "./pages/single/Single";
import SingleOrder from "./pages/singleOrder/SingleOrder";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AppContextProvider } from "./context";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const [userId, setUserId] = useState("")

  const contextValue = {
    userId, setUserId
  }

  return (
    <AppContextProvider value={contextValue}>
      <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route path="/">

              <Route index element={<Login />} />
              <Route path="home" element={<Home />} />

              <Route path="login" element={<Login />} />

              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add New User" />}
                />
              </Route>

              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={productInputs} title="Add New Product" />}
                />
              </Route>

              <Route path="orders">
                <Route index element={<Orderlist />} />
                <Route path=":orderId" element={<SingleOrder />} />
                {/* <Route
                path="neworder"
                element={<New inputs={productInputs} title="Add New Product" />}
              /> */}
              </Route>

            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AppContextProvider>
  );
}

export default App;
