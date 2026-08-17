
import { PageContent } from "@/components/PageContent";

export default function SwapGem() {
  return (
    <PageContent title="Swap Gem" emoji="💎">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Gem Swap is the in-game currency that can be swapped to BCOIN or SEN within Bomb Crypto. Gems are awarded as rewards for achieving high rankings in the monthly PvP mode, with higher ranks yielding more Gems. Additionally, you can earn Gem Swap from selling items on the in-game P2P market.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">How to Swap Gems</h3>
          <ul className="space-y-2 text-muted-foreground leading-relaxed">
            <li><strong>Access the Swap Gem Tab:</strong> Navigate to the Shop screen in Bomb Crypto and select the "SWAP GEM" tab.</li>
            <li><strong>Choose Swap Amount:</strong> Select the number of Gems you wish to swap for BCOIN. Remember, there are daily and per-transaction limits.</li>
            <li><strong>Select token to receive:</strong> You can select BCOIN or SEN.</li>
            <li><strong>Confirm Swap:</strong> Review the exchange rate and confirm the swap. The BCOIN/SEN will be deposited directly into your in-game wallet (Mine).</li>
          </ul>
          
          <div className="my-8 flex justify-center">
            <img 
              src="/lovable-uploads/6485170c-38ce-4133-b016-edd9752de15f.webp" 
              alt="Bomb Crypto shop interface showing Swap Gem feature with gem selection, exchange rate display, and swap button for converting gems to BCOIN"
              className="max-w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Swap Limitations</h3>
          <ul className="space-y-2 text-muted-foreground leading-relaxed">
            <li><strong>Daily Limit:</strong> Users can only perform one Gem Swap per day, resetting at 00:00 UTC.</li>
            <li><strong>Transaction Limit:</strong> Each swap is limited to a maximum value of $10 (subject to change).</li>
            <li><strong>Daily Total Limit:</strong> The total value of all Gems swapped by all users within a day cannot exceed $1000 (subject to change).</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Exchange Rate</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The exchange rate between Gems and BCOIN is dynamic and updates hourly. The system fetches the current BCOIN price from the backend to calculate the conversion rate.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Gem Value:</strong> Each Gem is valued at $0.01 (subject to change).
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Example Exchange Rates:</strong>
          </p>
          <ul className="space-y-1 text-muted-foreground leading-relaxed">
            <li>If BCOIN = $0.02, then 1 GEM = 0.5 BCOIN</li>
            <li>If BCOIN = $0.01, then 1 GEM = 1 BCOIN</li>
            <li>If BCOIN = $0.005, then 1 GEM = 2 BCOIN</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            The above calculation is similar for SEN.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By utilizing the Gem Swap feature, players can convert their hard-earned PvP rewards into valuable BCOIN, which can then be used to purchase heroes, buy Quartz, etc.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
