
import { PageContent } from "@/components/PageContent";

export default function WhatIsBcoin() {
  return <PageContent title="What is BCOIN Token?" emoji="💎">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            BCOIN is an ERC20 token, as well as an in-game currency in the Bomb Crypto game, enabling users to unlock all on-chain features and participate in the token economy.
          </p>
        </section>

        <section>
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/e1f628b1-0981-482c-b87c-566266c71f5b.webp" 
              alt="BCOIN Token" 
              className="w-32 h-32 object-contain"
            />
          </div>
          
          <h3 className="text-xl font-semibold mb-4 text-foreground">Token Information</h3>
          <div className="space-y-2 text-muted-foreground">
            <p><strong>Name:</strong> Bomb Crypto</p>
            <p><strong>BNB:</strong> Bomb Crypto (BNB)</p>
            <p><strong>Polygon:</strong> Bomb Crypto (POL)</p>
            <p><strong>TON:</strong> Bomb Crypto (TON)</p>
            <p><strong>Solana:</strong> Bomb Crypto (SOL)</p>
            <p><strong>Symbol:</strong> BCOIN</p>
            <p><strong>Network:</strong> BNB / Polygon / TON / Solana</p>
            <p><strong>Standard:</strong> ERC 20</p>
            <p><strong>Token type:</strong> Utility, Governance</p>
          </div>
        </section>
      </div>
    </PageContent>;
}
