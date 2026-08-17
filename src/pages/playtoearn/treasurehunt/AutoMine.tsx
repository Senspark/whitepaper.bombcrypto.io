
import { PageContent } from "@/components/PageContent";

export default function AutoMine() {
  return (
    <PageContent title="Auto Mine" emoji="⚡">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Auto Mine is a feature that allows your Bomb Crypto Heroes to automatically resume mining after replenishing a set percentage of their energy, eliminating the need for manual intervention. This feature can be utilized for mining both SEN and BCOIN.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Restrictions and Requirements</h3>
          <ul className="space-y-2 text-muted-foreground leading-relaxed">
            <li><strong>Hero Ownership:</strong> You must have at least one hero in your Inventory to activate Auto Mine.</li>
            <li><strong>Package Renewal:</strong> The "+" button for extending Auto Mine will only be available when the current package has two days or less remaining, or has already expired.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Auto Mine Toggle</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">On</h4>
              <p className="text-muted-foreground leading-relaxed">
                When a hero's energy reaches 0%, they will automatically enter the Home to recharge if available. If you don't have a Home, the hero will rest instead. Any hero resting or in the Home with 70% or more of their total energy will automatically switch to Work mode. Heroes with higher rarity or stats will be prioritized for Home placement. If the Home is full and a resting hero has higher rarity/stats than a hero in the Home, the lowest-ranking hero in the Home will be swapped out.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Off</h4>
              <p className="text-muted-foreground leading-relaxed">
                Disables Auto Mine functionality.
              </p>
            </div>
          </div>
          
          <div className="my-8 flex justify-center">
            <img 
              src="/lovable-uploads/19fea597-0ecc-475d-9812-e1f677587881.webp" 
              alt="Auto Mine character icon with pickaxe tool for automated mining in Bomb Crypto"
              className="max-w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Purchasing Auto Mine Packages</h3>
          <ul className="space-y-2 text-muted-foreground leading-relaxed">
            <li><strong>Cumulative Purchases:</strong> You can purchase additional Auto Mine packages two days before the current package expires.</li>
            <li><strong>Payment Methods:</strong> Packages can be purchased using BCOIN deposits from your wallet. If you have insufficient funds, a pop-up message will alert you.</li>
            <li><strong>Dynamic Pricing:</strong> Package prices are not fixed and will vary for each user based on their 7 days mining performance.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Pricing Calculation</h3>
          <ul className="space-y-3 text-muted-foreground leading-relaxed">
            <li><strong>7-Day Package:</strong> The price is calculated as the total BCOIN mined in the past 7 days multiplied by 0.12, with a minimum price of 20 BCOIN.</li>
            <li><strong>30-Day Package:</strong> The price is calculated as the total BCOIN mined in the past 7 days multiplied by 0.35, with a minimum price of 63 BCOIN.</li>
          </ul>
          
          <div className="my-8 flex justify-center">
            <img 
              src="/lovable-uploads/963305fe-e7d8-4251-a03a-862941a47d90.webp" 
              alt="Auto Mine Package pricing showing 7 days for 20 BCOIN and 30 days for 63 BCOIN with 20% discount offer"
              className="max-w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>
          
          <p className="text-muted-foreground leading-relaxed mt-4">
            If you are logged in with your username and Auto Mine is enabled, the game will automatically reconnect if you experience an unexpected disconnection.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
