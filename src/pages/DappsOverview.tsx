
import { PageContent } from "@/components/PageContent";
import { NavLink } from "react-router-dom";

const dappsFeatures = [
  { title: "Bridge", url: "/dapps/bridge", emoji: "🌉", description: "Cross-chain asset transfers" },
  { title: "Account", url: "/dapps/account", emoji: "🕹️", description: "Gaming account management" },
  { title: "Marketplace", url: "/dapps/marketplace", emoji: "🏘️", description: "Decentralized NFT marketplace" },
  { title: "Staking", url: "/dapps/staking", emoji: "💰", description: "Stake tokens and earn rewards" },
];

export default function DappsOverview() {
  return (
    <PageContent title="Dapps" emoji="💻">
      <div className="space-y-6">
        <p className="text-muted-foreground text-lg leading-relaxed">
          Explore our ecosystem of decentralized applications that enhance your Bomb Crypto experience. Access powerful tools and services built on blockchain technology.
        </p>

        <section>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Available Dapps</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dappsFeatures.map((feature) => (
              <NavLink
                key={feature.url}
                to={feature.url}
                className="group bg-card border rounded-lg p-6 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{feature.emoji}</span>
                  <h4 className="font-semibold text-foreground group-hover:text-indigo-400 transition-colors">
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
          <h3 className="text-xl font-semibold mb-4 text-foreground">Decentralized Features</h3>
          <p className="text-muted-foreground leading-relaxed">
            Our dapps provide secure, transparent, and community-driven solutions for trading, staking, and managing your digital assets within the Bomb Crypto ecosystem.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
