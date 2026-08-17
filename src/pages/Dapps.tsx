
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dapps() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/dapps", { replace: true });
  }, [navigate]);

  return null;
}
