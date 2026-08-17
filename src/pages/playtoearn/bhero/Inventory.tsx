
import { PageContent } from "@/components/PageContent";

export default function Inventory() {
  return (
    <PageContent title="Inventory" emoji="✨">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The Inventory is a crucial feature in Bomb Crypto's Treasure Hunt Mode, serving as a storage space for your valuable NFT assets, including Bomb Crypto Heroes (BHero).
          </p>
          
          <div className="my-8 flex justify-center">
            <img 
              src="/lovable-uploads/c7393832-a820-4ed6-ae1e-866b0be54d86.webp" 
              alt="Bomb Crypto inventory interface showing heroes collection with filtering options (Active, High Stats) and various hero cards displaying IDs and stats"
              className="max-w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Hero Activation and Energy Recovery</h3>
          <p className="text-muted-foreground leading-relaxed">
            The Inventory allows you to activate up to 15 heroes for mining activities. It's important to note that heroes that are not activated (unactive) will not recover energy, making it essential to strategically manage your active roster.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Filtering and Sorting</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            To help you efficiently manage your collection, the Inventory offers various filtering and sorting options:
          </p>
          <ul className="space-y-2 text-muted-foreground leading-relaxed">
            <li><strong>Stats:</strong> Sort your heroes based on their individual stats, such as power, speed, stamina, bomb num, and bomb range.</li>
            <li><strong>Rarity:</strong> Sort your heroes by their rarity level, from common to super legendary.</li>
            <li><strong>New Heroes:</strong> Easily identify and prioritize your most recently acquired heroes.</li>
            <li><strong>Active:</strong> You can see which heroes of yours are active</li>
            <li><strong>Unactive:</strong> You can see which heroes of yours are unactive</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Storage Capacity</h3>
          <p className="text-muted-foreground leading-relaxed">
            The Inventory boasts an impressive storage capacity, allowing you to hold up to 500 heroes. This provides ample space for you to collect and manage a diverse roster of heroes, ensuring you always have the right team for any mining challenge.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
