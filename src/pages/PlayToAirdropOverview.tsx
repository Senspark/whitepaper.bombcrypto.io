
import { PageContent } from "@/components/PageContent";
import { NavLink } from "react-router-dom";

const playToAirdropFeatures = [
  { title: "Game Play", url: "/play-to-airdrop/game-play", emoji: "🕹️", description: "Server-based interactions and multi-chain gameplay" },
  { title: "TON Token Allocation", url: "/play-to-airdrop/ton-token-allocation", emoji: "⚡", description: "TON tokenomics and airdrop distribution details" },
  { title: "SOL Token Allocation", url: "/play-to-airdrop/sol-token-allocation", emoji: "⚡", description: "Solana tokenomics and reward structure" },
  { title: "RONIN Token Allocation", url: "/play-to-airdrop/ronin-token-allocation", emoji: "⚡", description: "RONIN tokenomics and cross-chain rewards" },
  { title: "BASE Token Allocation", url: "/play-to-airdrop/base-token-allocation", emoji: "⚡", description: "BASE network tokenomics and ETH pairing" },
];

export default function PlayToAirdropOverview() {
  return (
    <PageContent title="Play to Airdrop" emoji="📱">
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Bomb Crypto's Multi-Chain Expansion: Play-to-Airdrop on TON & Solana</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Bomb Crypto's expansion beyond its original blockchain is more than just a strategic move to reach a broader audience—it's about elevating the player experience and embracing the future of blockchain gaming. Now, with both TON and Solana, Bomb Crypto introduces Play-to-Airdrop, allowing players to engage with the game and earn rewards seamlessly across multiple chains.
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">🔵 Play on TON Network</h4>
              <p className="text-muted-foreground leading-relaxed">
                🔸 Telegram Bot Game: <a href="https://t.me/bombcrypto_io_bot?startapp" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://t.me/bombcrypto_io_bot?startapp</a>
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">🟣 Play on Solana Network</h4>
              <p className="text-muted-foreground leading-relaxed">
                🔸 Web game: <a href="https://game.bombcrypto.io/sol" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">https://game.bombcrypto.io/sol</a>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Available Features</h3>
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
            {playToAirdropFeatures.map((feature) => (
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

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Treasure Hunt Mode and Airdropped Rewards</h3>
          <p className="text-muted-foreground leading-relaxed">
            Currently, Bomb Crypto on TON and Solana features the thrilling Treasure Hunt Mode. In this mode, players compete for rankings based on the number of Star Cores they collect. The top-ranked players will be rewarded with airdropped tokens, adding an exciting competitive element to the gameplay. This Play-to-Airdrop mechanism ensures that active participation is directly rewarded, enhancing the Play-to-Earn experience across both TON and Solana.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            We have a video tutorial available to help you get started playing games on TON and Solana easier.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
