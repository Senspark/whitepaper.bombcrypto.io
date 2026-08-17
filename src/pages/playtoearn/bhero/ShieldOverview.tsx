
import { PageContent } from "@/components/PageContent";
import { NavLink } from "react-router-dom";

const shieldFeatures = [
  { title: "Repair Shield", url: "/play-to-earn/bhero/shield/repair-shield", emoji: "⚒️", description: "Fix damaged shields to restore protection" },
  { title: "Upgrade Shield", url: "/play-to-earn/bhero/shield/upgrade-shield", emoji: "↗️", description: "Enhance shield capabilities and durability" },
  { title: "Buy Quartz", url: "/play-to-earn/bhero/shield/buy-quartz", emoji: "💎", description: "Purchase quartz for shield operations" },
  { title: "Exchange", url: "/play-to-earn/bhero/shield/exchange", emoji: "🔄", description: "Trade shield materials and resources" },
];

export default function ShieldOverview() {
  return (
    <PageContent title="Shield System" emoji="🔰">
      <div className="space-y-6">
        <p className="text-muted-foreground text-lg leading-relaxed">
          The Shield system provides essential protection for your heroes during battles and adventures. Manage, upgrade, and maintain your shields to ensure maximum hero survival and performance.
        </p>

        <section>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Shield Management</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {shieldFeatures.map((feature) => (
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

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Shield Mechanics</h3>
          <p className="text-muted-foreground leading-relaxed">
            Shields are vital protective equipment that absorb damage and extend hero longevity in battles. Regular maintenance, strategic upgrades, and proper resource management ensure your heroes stay protected and productive.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
