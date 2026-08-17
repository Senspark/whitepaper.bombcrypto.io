
import { PageContent } from "@/components/PageContent";
import { NavLink } from "react-router-dom";

const collectionMethods = [
  { title: "Mint Hero", url: "/play-to-earn/bhero/how-to-collect/mint-hero", emoji: "⚡", description: "Create new heroes through shops in Treasure Hunt Mode" },
  { title: "Buy Hero", url: "/play-to-earn/bhero/how-to-collect/buy-hero", emoji: "💰", description: "Purchase heroes from the marketplace using BCOIN and SEN" },
  { title: "Rescue Hero", url: "/play-to-earn/bhero/how-to-collect/rescue-hero", emoji: "🚁", description: "Free heroes from special prison blocks in Treasure Hunt mode" },
];

export default function HowToCollectOverview() {
  return (
    <PageContent title="How to collect a Hero" emoji="💡">
      <div className="space-y-6">
        <p className="text-muted-foreground text-lg leading-relaxed">
          There are 4 ways to collect Bomb Crypto Heroes: mint Hero, rescue Hero, Fusion and Buy in the marketplace.
        </p>

        <section>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Collection Methods</h3>
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
            {collectionMethods.map((method) => (
              <NavLink
                key={method.url}
                to={method.url}
                className="group bg-card border rounded-lg p-6 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{method.emoji}</span>
                  <h4 className="font-semibold text-foreground group-hover:text-blue-400 transition-colors">
                    {method.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {method.description}
                </p>
              </NavLink>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Fusion</h3>
          <p className="text-muted-foreground leading-relaxed">
            Fusion is another method to collect heroes by combining existing heroes to create stronger ones. This method allows players to upgrade their hero collection strategically.
          </p>
          <div className="mt-6">
            <img 
              src="/lovable-uploads/8fb71b99-12f1-4278-9801-2aa60957dc1f.png" 
              alt="Bomb Crypto Heroes Collection" 
              className="w-full max-w-2xl mx-auto rounded-lg border"
            />
          </div>
        </section>
      </div>
    </PageContent>
  );
}
