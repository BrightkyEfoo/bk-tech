import { useNavigate } from "react-router-dom";

function useGoHome() {
  const navigate = useNavigate();
  const fn = () => navigate("/");
  return fn;
}

export default useGoHome;
