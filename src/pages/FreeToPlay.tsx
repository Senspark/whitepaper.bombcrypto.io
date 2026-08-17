
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FreeToPlay() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/free-to-play", { replace: true });
  }, [navigate]);

  return null;
}
