
import { PageContent } from "@/components/PageContent";
import { NavLink } from "react-router-dom";

const bheroFeatures = [
  { title: "How to collect a Hero", url: "/play-to-earn/bhero/how-to-collect", emoji: "💡", description: "Learn different ways to acquire heroes" },
  { title: "Stake Hero", url: "/play-to-earn/bhero/stake-hero", emoji: "💪", description: "Stake your heroes to earn rewards" },
  { title: "Shield", url: "/play-to-earn/bhero/shield", emoji: "🔰", description: "Protect your heroes with shields" },
  { title: "Fusion", url: "/play-to-earn/bhero/fusion", emoji: "⚡", description: "Combine heroes to create stronger ones" },
  { title: "Inventory", url: "/play-to-earn/bhero/inventory", emoji: "✨", description: "Manage your hero collection" },
  { title: "Manage Hero", url: "/play-to-earn/bhero/manage-hero", emoji: "🎯", description: "Control and optimize your heroes" },
];

export default function BHeroOverview() {
  return (
    <PageContent title="BHero System" emoji="🦸">
      <div className="space-y-6">
        <p className="text-muted-foreground text-lg leading-relaxed">
          BHero is the core NFT character system in Bomb Crypto. Collect, upgrade, and manage powerful heroes to enhance your gaming experience and earning potential.
        </p>

        <section>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Hero Management Features</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {bheroFeatures.map((feature) => (
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
          <h3 className="text-xl font-semibold mb-4 text-foreground">About Heroes</h3>
          <p className="text-muted-foreground leading-relaxed">
            Heroes are the cornerstone of your Bomb Crypto journey. Each hero has unique abilities, rarity levels, and upgrade potential. Strategic hero management is key to maximizing your gameplay efficiency and earning opportunities.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
