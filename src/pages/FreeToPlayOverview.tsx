
import { PageContent } from "@/components/PageContent";
import { NavLink } from "react-router-dom";

const freeToPlayFeatures = [
  { title: "Adventure Mode", url: "/free-to-play/adventure-mode", emoji: "✨", description: "Explore exciting in-game challenges" },
  { title: "PvP Mode", url: "/free-to-play/pvp-mode", emoji: "⚔️", description: "Compete against other players" },
  { title: "Tournaments", url: "/free-to-play/tournaments", emoji: "🏆", description: "Join yearly worldwide tournaments" },
];

export default function FreeToPlayOverview() {
  return (
    <PageContent title="Free to Play" emoji="🎮">
      <div className="space-y-8">
        <p className="text-muted-foreground text-lg leading-relaxed">
          Bomb Crypto provides a free-to-play experience, enabling players to enjoy the game without any initial investment. Players can access the game through multiple platforms.
        </p>

        <section>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Access Bomb Crypto</h3>
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🌐</span>
                <h4 className="font-semibold text-foreground">Web</h4>
              </div>
              <a 
                href="https://game.bombcrypto.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm break-all"
              >
                https://game.bombcrypto.io
              </a>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📱</span>
                <h4 className="font-semibold text-foreground">Android</h4>
              </div>
              <a 
                href="https://play.google.com/store/apps/details?id=com.senspark.bomber.land.boom.battle.bombgames" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                Google Play Store
              </a>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🍎</span>
                <h4 className="font-semibold text-foreground">iOS</h4>
              </div>
              <a 
                href="https://apps.apple.com/us/app/id1673632517" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                App Store
              </a>
            </div>
          </div>
        </section>

        <p className="text-muted-foreground text-lg leading-relaxed">
          Players can engage in PvP mode and Adventure mode for free, competing against others or exploring exciting in-game challenges. Additionally, all players have the opportunity to participate in Bomb Crypto's yearly and worldwide Tournament, where they can showcase their skills and compete for exclusive rewards.
        </p>
      </div>
    </PageContent>
  );
}
