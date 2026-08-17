
import { PageContent } from "@/components/PageContent";
import { NavLink } from "react-router-dom";

const playToEarnFeatures = [
  { title: "BHero", url: "/play-to-earn/bhero", emoji: "🦸", description: "Collect & Battle with Heroes" },
  { title: "BHouse", url: "/play-to-earn/bhouse", emoji: "🏠", description: "Your Virtual Home Base" },
  { title: "Treasure Hunt Mode", url: "/play-to-earn/treasure-hunt", emoji: "✨", description: "Hunt for Hidden Treasures" },
  { title: "Treasury", url: "/play-to-earn/treasury", emoji: "🗳️", description: "Community Treasury Management" },
  { title: "Swap Gem", url: "/play-to-earn/swap-gem", emoji: "💎", description: "Gem Exchange Platform" },
  { title: "Game Economic", url: "/play-to-earn/game-economic", emoji: "💸", description: "Sustainable Game Economy" },
  { title: "In-game Wallet", url: "/play-to-earn/in-game-wallet", emoji: "👝", description: "Secure Digital Wallet" },
  { title: "In-game P2P Market", url: "/play-to-earn/p2p-market", emoji: "🏚️", description: "Peer-to-Peer Marketplace" },
];

export default function PlayToEarnOverview() {
  return (
    <PageContent title="Play to Earn" emoji="🎮">
      <div className="space-y-6">
        <p className="text-muted-foreground text-lg leading-relaxed">
          Bomb Crypto support Play to Earn model via BSC and Polygon chain when you connect via wallets at{" "}
          <a 
            href="https://game.bombcrypto.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-400 underline"
          >
            https://game.bombcrypto.io
          </a>
        </p>

        <section>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Play-to-Earn Features</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {playToEarnFeatures.map((feature) => (
              <NavLink
                key={feature.url}
                to={feature.url}
                className="group bg-card border rounded-lg p-6 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{feature.emoji}</span>
                  <h4 className="font-semibold text-foreground group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </NavLink>
            ))}
          </div>
        </section>
      </div>
    </PageContent>
  );
}
