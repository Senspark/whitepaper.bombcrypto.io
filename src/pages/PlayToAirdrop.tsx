
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PlayToAirdrop() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/play-to-airdrop", { replace: true });
  }, [navigate]);

  return null;
}
