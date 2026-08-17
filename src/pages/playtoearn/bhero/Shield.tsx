
import { PageContent } from "@/components/PageContent";
import { Link } from "react-router-dom";

export default function Shield() {
  return (
    <PageContent title="Shield" emoji="🔰">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Shields play a vital role in protecting your Bomb Crypto Heroes from the perils of the Bomb Crypto world. Each hero comes equipped with a shield that absorbs damage during battles, ensuring their survival and continued mining efforts.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Shield Mechanics</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Durability points are used to determine how long a shield will last. The higher the rarity is, the more durable the shield is. The repair shield feature allows players to pay a fee to repair the hero's shield.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Shield Management</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link 
              to="/play-to-earn/bhero/shield/repair-shield"
              className="bg-card border rounded-lg p-4 hover:border-amber-500/50 transition-colors"
            >
              <h4 className="font-semibold text-amber-400 mb-2">⚒️ Repair Shield</h4>
              <p className="text-muted-foreground text-sm">
                Restore damaged shields using Quartz resources based on hero rarity and shield level.
              </p>
            </Link>
            <Link 
              to="/play-to-earn/bhero/shield/upgrade-shield"
              className="bg-card border rounded-lg p-4 hover:border-blue-500/50 transition-colors"
            >
              <h4 className="font-semibold text-blue-400 mb-2">↗️ Upgrade Shield</h4>
              <p className="text-muted-foreground text-sm">
                Enhance shield durability using Quartz to increase maximum damage absorption.
              </p>
            </Link>
            <Link 
              to="/play-to-earn/bhero/shield/buy-quartz"
              className="bg-card border rounded-lg p-4 hover:border-pink-500/50 transition-colors"
            >
              <h4 className="font-semibold text-pink-400 mb-2">💎 Buy Quartz</h4>
              <p className="text-muted-foreground text-sm">
                Purchase Quartz in various pack sizes for shield repairs and upgrades.
              </p>
            </Link>
            <Link 
              to="/play-to-earn/bhero/shield/exchange"
              className="bg-card border rounded-lg p-4 hover:border-teal-500/50 transition-colors"
            >
              <h4 className="font-semibold text-teal-400 mb-2">🔄 Exchange</h4>
              <p className="text-muted-foreground text-sm">
                Burn heroes to extract valuable Quartz for shield operations.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </PageContent>
  );
}
