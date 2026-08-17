
import { PageContent } from "@/components/PageContent";
import { NavLink } from "react-router-dom";
import { BHeroStats } from "./bhero/components/BHeroStats";
import { BHeroAbilities } from "./bhero/components/BHeroAbilities";
import { BHeroTypes } from "./bhero/components/BHeroTypes";
import { BHeroLegacy } from "./bhero/components/BHeroLegacy";
import { BHeroS } from "./bhero/components/BHeroS";
import { BHeroComparison } from "./bhero/components/BHeroComparison";
import { BHeroShield } from "./bhero/components/BHeroShield";

const bheroFeatures = [
  { title: "How to collect a Hero", url: "/play-to-earn/bhero/how-to-collect", emoji: "💡", description: "Learn various methods to acquire heroes" },
  { title: "Stake Hero", url: "/play-to-earn/bhero/stake-hero", emoji: "💡", description: "Earn passive rewards through hero staking" },
  { title: "Shield", url: "/play-to-earn/bhero/shield", emoji: "🔰", description: "Protect your heroes with advanced shields" },
  { title: "Fusion", url: "/play-to-earn/bhero/fusion", emoji: "⚡", description: "Combine heroes for enhanced power" },
  { title: "Inventory", url: "/play-to-earn/bhero/inventory", emoji: "✨", description: "Manage your hero collection efficiently" },
  { title: "Manage Hero", url: "/play-to-earn/bhero/manage-hero", emoji: "💪", description: "Optimize and customize your heroes" },
];

export default function BHero() {
  return (
    <PageContent title="BHero" emoji="🦸">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed">
            BHero is a collection of NFTs, representing heroes within the game, each with different stats and rarities. They can be minted infinitely within the game or traded on the marketplace. Presently, BHeroes are used to mine reward tokens within the game and they can be utilized in other on-chain features of the game.
          </p>
        </section>

        <section>
          <p className="text-muted-foreground leading-relaxed">
            Each BHero is mint with randomly generated attributes and skills, which determine their mining power, speed, stamina, bomb capacity, and bomb range.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            In Treasure Hunt mode, heroes will automatically place bombs to mine for resources. They prioritize targeting blocks with higher health points (HP) first, ensuring efficient mining. If a block already has a bomb planted on it, heroes will intelligently seek out other blocks to target. When only one block remains, heroes will strategically position themselves to place the final bomb.
          </p>
        </section>

        <BHeroStats />
        <BHeroAbilities />
        <BHeroTypes />
        <BHeroLegacy />
        <BHeroS />
        <BHeroComparison />
        <BHeroShield />

        <section>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Hero Management Features</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {bheroFeatures.map((feature) => (
              <NavLink
                key={feature.url}
                to={feature.url}
                className="group bg-card border rounded-lg p-6 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{feature.emoji}</span>
                  <h4 className="font-semibold text-foreground group-hover:text-blue-400 transition-colors">
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
