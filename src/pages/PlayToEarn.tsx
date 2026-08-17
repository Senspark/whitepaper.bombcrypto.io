
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PlayToEarn() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/play-to-earn", { replace: true });
  }, [navigate]);

  return null;
}
