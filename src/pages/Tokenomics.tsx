
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Tokenomics() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/tokenomics", { replace: true });
  }, [navigate]);

  return null;
}
