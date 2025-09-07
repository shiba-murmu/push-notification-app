import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MyContext } from "../Data/MyContext";

const PublicRoutes = ({ children }) => {
  const { User } = useContext(MyContext);

  // If user is already logged in, redirect to profile
  if (User) {
    return <Navigate to="/profile" replace />;
  }

  return children; // show login or signup page
};

export default PublicRoutes;
