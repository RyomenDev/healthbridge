import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { router } from "./routes";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store.js";
import { Provider, useDispatch } from "react-redux";
// import { jwtDecode } from "jwt-decode";
import store from "./store/store.js";
import { login } from "./store/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    // if (token) {
    //   try {
    //     const decodedToken = jwtDecode(token);
    //     dispatch(login({ email: decodedToken.email, name: decodedToken.name }));
    //   } catch (error) {
    //     console.error("Invalid token or token expired", error);
    //   }
    // }
  }, [dispatch]);

  return (
    <Provider store={store}>
      {/* PersistGate will delay the rendering until the redux state is rehydrated */}
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
