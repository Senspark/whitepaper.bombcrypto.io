
import { PageContent } from "@/components/PageContent";

export default function P2PMarket() {
  return (
    <PageContent title="In-game P2P Market" emoji="🏚️">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            The P2P Marketplace is where users sell items include:
          </p>
          <ul className="space-y-1 text-muted-foreground leading-relaxed">
            <li>Hero</li>
            <li>Booster (other items)</li>
            <li>Bomb skin</li>
            <li>Trail</li>
            <li>Wing</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Sell items that are opened from Gacha Chest (buy with Coin) and Purchase items with GEM. Purchased items will be locked and cannot be resold on the P2P market.
          </p>
          
          <div className="my-8 flex justify-center">
            <img 
              src="/lovable-uploads/392847be-df69-49f8-a917-3fff7d801b99.webp" 
              alt="Bomb Crypto P2P Market interface showing heroes marketplace with price filters, hero cards with gem prices, and item categories including bomb skin, booster, wing, and trail"
              className="max-w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            Each item listed on the Marketplace clearly displays its price in Gem, allowing buyers to easily compare prices and make informed decisions. Sellers can adjust their prices at any time before the item is sold, creating a dynamic and competitive marketplace where prices fluctuate based on supply and demand.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
