import { useAuth } from "../context/authContext";
import "./Home.css";

export const Home = () => {
  const { user } = useAuth();
  return <div>home</div>;
};
