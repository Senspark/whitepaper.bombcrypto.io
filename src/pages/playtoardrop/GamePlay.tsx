
import { PageContent } from "@/components/PageContent";

export default function GamePlay() {
  return (
    <PageContent title="Game Play" emoji="🕹️">
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Server-Based Interactions for Stability and Speed</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            All tasks and interactions within the game will now be server-based, leveraging the robust infrastructure of the TON network and Solana Chain. This shift ensures a more stable and faster gaming experience, minimizing lag and downtime. Players can focus on strategizing and bombing their way to victory without worrying about technical hiccups.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            On TON, to dive into the action, simply open Telegram and search for the official Bomb Crypto bot using this link: <a href="https://t.me/bombcrypto_io_bot" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://t.me/bombcrypto_io_bot</a>. Once you initiate a conversation with the bot, it will guide you through the process of launching the Bomb Crypto Mini App, providing a user-friendly entry point for both new and existing players.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With Solana, users can head to this link: <a href="https://game.bombcrypto.io/sol" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">https://game.bombcrypto.io/sol</a>. And then connect your wallets for starting the game.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Features</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            While the core hero management system remains unchanged, providing a sense of familiarity for existing players, the staking feature for heroes has been temporarily removed. Instead, the initial focus will be on the thrilling Treasure Hunt mode.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            After intense battles and treasure hunts, your heroes need time to rest and recover. Houses provide a haven for them to regain their energy faster and prepare for the next adventure. Invest in houses to accelerate your heroes' recovery time. The faster they recover, the sooner they can get back to earning you rewards.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Ranking System</h3>
          <p className="text-muted-foreground leading-relaxed">
            The Bomb Crypto on TON and Solana ranking system is designed to reward the most dedicated players based on their Star Core mining performance. The more Star Cores you mine, the higher your rank!
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Wallet</h3>
          <p className="text-muted-foreground leading-relaxed">
            Bomb Crypto on TON and Solana offers a variety of convenient login options to suit your preferences. On TON, you can connect using Telegram Wallet, Tonkeeper, TON Wallet, and more. On Solana, you can log in via Phantom, Solflare and other supported wallets. Simply select your preferred wallet, connect it to the game, and start your explosive adventure!
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Inventory</h3>
          <p className="text-muted-foreground leading-relaxed">
            This is your command center for overseeing your collection of bomb-wielding heroes. View their individual stats, including rarity, power, level, and special abilities. Strategically select the heroes you want to deploy for farming and treasure hunting. Users can also sort their heroes by various criteria to easily find the ones you need. Plan your upgrades and power-ups to create an unstoppable team.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">House</h3>
          <p className="text-muted-foreground leading-relaxed">
            After intense battles and treasure hunts, your heroes need time to rest and recover. Houses provide a haven for them to regain their energy faster and prepare for the next adventure. Invest in houses to accelerate your heroes' recovery time. The faster they recover, the sooner they can get back to earning you rewards.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Shop</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Acquire New Heroes</h4>
              <p className="text-muted-foreground leading-relaxed">
                On TON, transactions are made with BCOIN (TON), while on Solana, purchases are made with SOL. Each hero possesses unique abilities and rarities, adding depth and variety to your team.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Convenient Packs</h4>
              <p className="text-muted-foreground leading-relaxed">
                Choose from x1, x5, x10, or x15 packs to quickly expand your hero collection. These packs offer a chance to obtain rare and powerful heroes, giving you an edge in your adventures.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Hero</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Detailed Hero Stats</h4>
              <p className="text-muted-foreground leading-relaxed">
                Delve into the specifics of each hero's attributes, including their attack power, bomb range, speed, and special skills. Understand their strengths and weaknesses to deploy them effectively.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Mode Selection</h4>
              <p className="text-muted-foreground leading-relaxed">
                Toggle between "Rest" and "Work" modes to control your heroes' activity. Put them to rest when they need to recover or send them out to explore and earn rewards.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Task</h3>
          <p className="text-muted-foreground leading-relaxed">
            Players can complete tasks to earn a specified amount of Star Core. Each task can only be completed once and will not reappear after completion. To access this feature, players must have at least 15 heroes.
          </p>
          <p className="text-muted-foreground leading-relaxed font-semibold">
            This feature is now available on TON only.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Fusion</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Hero Fusion</h4>
              <p className="text-muted-foreground leading-relaxed">
                This is a feature that allows players to combine multiple lower-rarity Heroes to create a single higher-rarity hero.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Extended Fusion Feature</h4>
              <p className="text-muted-foreground leading-relaxed">
                Now, if players have the required number of base heroes, they can fuse them directly into a higher-tier hero, skipping intermediate steps.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Skin-Fusion Feature</h4>
              <p className="text-muted-foreground leading-relaxed">
                Fuse at least four heroes of the same type to create a hero with a fascinating skin. However, please note that only certain skins listed in the Fusion Skin Recipe can be fused.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Referral Invite</h3>
          <p className="text-muted-foreground leading-relaxed">
            Invite friends to earn Star Cores! Star Cores earned from referrals will be added to your balance and count towards your ranking. Rewards are paid out every 25 hours, with a minimum claim of 50 Star Cores.
          </p>
          <p className="text-muted-foreground leading-relaxed font-semibold">
            This feature is now available on TON only.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Club</h3>
          <p className="text-muted-foreground leading-relaxed">
            Club Feature: A Club is a community of players who come together as a group in the game. Users can create their own Club through the Telegram chat channel or join existing Clubs to connect with other players.
          </p>
          <p className="text-muted-foreground leading-relaxed font-semibold">
            This feature is now available on TON only.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Automine</h3>
          <p className="text-muted-foreground leading-relaxed">
            The Automine feature allows your heroes to continue farming and earning rewards even when you're not actively playing. Simply set them to work and let them generate income while you're away. Whether you're sleeping, working, or enjoying other activities, your heroes are working hard for you.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You will have 02 Automine packages: 7-day package and 30-day package to choose from.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
