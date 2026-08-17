
import { PageContent } from "@/components/PageContent";

export default function FutureRoadmap() {
  return (
    <PageContent title="Future Roadmap" emoji="📍">
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Future Vision</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Strategic roadmap outlining upcoming features, innovations, and long-term vision for Bomb Crypto's evolution.
          </p>
        </div>

        <section>
          <h3 className="text-2xl font-semibold mb-6 text-foreground">1. Using Bomb Crypto for Crypto Education</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            One of our biggest goals moving forward is to make Bomb Crypto not just a game, but also an educational platform for crypto users.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Through gameplay, players will learn fundamental concepts such as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li>What Bitcoin, Ethereum, and BNB are and how they function.</li>
            <li>Understanding Tokens and NFTs and their real-world applications.</li>
            <li>The difference between centralized (CEX) and decentralized (DEX) exchanges.</li>
            <li>How to safely store, send, and receive tokens and NFTs.</li>
            <li>The concept of staking, rewards, and blockchain economics.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            By integrating these educational elements into our game, we hope to create a more knowledgeable and empowered player base.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-6 text-foreground">2. Integrating AI into Bomb Crypto</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The next major step is bringing AI-powered features into Bomb Crypto. AI will allow us to enhance creativity, gameplay diversity, and automation. Here are a few areas where AI can make a big impact:
          </p>
          <ul className="list-disc list-inside space-y-3 text-muted-foreground ml-4">
            <li><strong>AI-generated mini-games</strong>, introducing new challenges and fresh gameplay experiences.</li>
            <li><strong>AI-powered NFTs</strong>, where digital assets can learn and evolve, making them more dynamic and valuable.</li>
            <li><strong>AI-driven content generation</strong>, enabling automated map creation, storyline expansion, and new quests, keeping the game fresh and engaging.</li>
            <li><strong>AI-driven Play-to-Earn mechanisms</strong>, where AI optimizes smart contract rewards, helping us manage the in-game economy, prevent inflation, and avoid market manipulation.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            With AI, we can ensure that Bomb Crypto remains innovative, scalable, and future-proof.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-6 text-foreground">3. Expanding Bomb Crypto into an MMO Game</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Currently, Bomb Crypto follows a match-based, level-based, and idle gameplay model. But we have a bigger vision: We want to evolve Bomb Crypto into an MMO (Massively Multiplayer Online) game—a true open-world experience where thousands, even millions, of players can interact.
          </p>
          <ul className="list-disc list-inside space-y-3 text-muted-foreground ml-4">
            <li><strong>Real-Time Interaction</strong> – Players can trade, battle, and collaborate with others in a shared universe.</li>
            <li><strong>Open-World Exploration</strong> – A dynamic environment with expanding landscapes and ever-changing quests.</li>
            <li><strong>Player-Driven Economy</strong> – A system where players create, trade, and own assets, giving real economic value to in-game activities.</li>
            <li><strong>Community-Centric Gameplay</strong> – The ability to form guilds, alliances, and participate in large-scale battles and events.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            By making Bomb Crypto an MMO, we are unlocking new engagement opportunities, deeper social interactions, and a thriving in-game economy.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
