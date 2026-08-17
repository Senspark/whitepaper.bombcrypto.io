
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Roadmap() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/roadmap", { replace: true });
  }, [navigate]);

  return null;
}
