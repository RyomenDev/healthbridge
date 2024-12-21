import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
// import Cookies from "js-cookie";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    // Cookies.remove("token");
    dispatch(logout());
    window.location.href = "/login";
  };

  return (
    <button
    //   className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
