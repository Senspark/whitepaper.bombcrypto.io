
import { PageContent } from "@/components/PageContent";

export default function BuyHero() {
  return (
    <PageContent title="Buy Hero" emoji="💰">
      <div className="space-y-6">
        <p className="text-muted-foreground text-lg leading-relaxed">
          We have Marketplace that gives users a chance to buy and sell NFT items like Bomb Crypto Heroes and BHouse. This will help users gain profits in the term of play-to-earn and also increase the game assets and liquidity.
        </p>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Payment Currency</h3>
          <p className="text-muted-foreground leading-relaxed">
            BCOIN and SEN are the payment currency in this market.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Marketplace Access</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You can trade now at: <a href="https://market.bombcrypto.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">https://market.bombcrypto.io/</a>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For more information about Listing Fees and Selling Prices, you can refer to the Marketplace section.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
