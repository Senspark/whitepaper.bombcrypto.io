
import { PageContent } from "@/components/PageContent";
import { NavLink } from "react-router-dom";

const tokenomicsFeatures = [
  { title: "What is BCOIN Token?", url: "/tokenomics/what-is-bcoin", emoji: "💎", description: "Learn about BCOIN specifications" },
  { title: "Multi-chain Tokenomics", url: "/tokenomics/multi-chain", emoji: "🛜", description: "Cross-chain economics overview" },
  { title: "Burn", url: "/tokenomics/burn", emoji: "🔥", description: "Token burn strategy details" },
];

export default function MultiChainTokenomicsOverview() {
  return (
    <PageContent title="Multi-chain Tokenomics" emoji="💲">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            In 2024, Bomb Crypto is dedicated to strengthening its in-game economy with a focus on long-term sustainability and prioritizing user benefits. This involves balancing token supply and demand, ensuring fair rewards for players, and fostering a healthy in-game marketplace. Central to this effort is a new distribution mechanism for BCOIN and SEN tokens, designed to align the interests of all stakeholders and drive the project's overall success.
          </p>
          
          {/* YouTube Video Embed */}
          <div className="flex justify-center mb-6">
            <div className="w-full max-w-3xl aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/oopoSExQTD4"
                title="Bomb Crypto Multi-chain Tokenomics"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            SEN token also plays a pivotal role within the expansive Bomb Crypto and Senspark ecosystem. It is not merely an in-game currency but a governance token of Senspark with multifaceted utility and significance. As the Bomb Crypto and Senspark ecosystem continues to evolve, the utility and value of SEN are expected to expand further. Check out SEN Tokenomic details and Senspark Whitepaper below: <a href="https://whitepaper.senspark.com/tokenomics" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://whitepaper.senspark.com/tokenomics</a>
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Tokenomics Overview</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tokenomicsFeatures.map((feature) => (
              <NavLink
                key={feature.url}
                to={feature.url}
                className="group bg-card border rounded-lg p-6 hover:border-yellow-500/50 hover:bg-yellow-500/5 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{feature.emoji}</span>
                  <h4 className="font-semibold text-foreground group-hover:text-yellow-400 transition-colors">
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
