
import { PageContent } from "@/components/PageContent";

export default function GameEconomic() {
  return (
    <PageContent title="Game Economic" emoji="💸">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The economic model of any new digital currency/asset is one of the most critical components of the platform that the asset resides on. This is especially true for the native token ($BCOIN) of Bomb Crypto.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The game economy of Bomb Crypto is a carefully designed system that ensures a sustainable and engaging experience for players. It revolves around two primary tokens: BCOIN and SEN, and a variety of in-game assets like BHero NFTs, chests, Star Core, etc.
          </p>
          
          <div className="my-8 flex justify-center">
            <img 
              src="/lovable-uploads/4c9ef8f0-3066-4c57-9d84-c95d927832ce.png" 
              alt="Bomb Crypto game economy flowchart showing the circulation of BCOIN, SEN tokens, and game assets through web market, P2P market, farming mode, and various game features"
              className="max-w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Economic Operating Model in-game</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            BCOIN and SEN are the two main currencies and the Backbone of the Economy in Bomb Crypto, each serving distinct purposes within the game economy.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A well-balanced game economy is crucial for the long-term success of Bomb Crypto. It ensures that players are incentivized to participate in various game modes, invest in in-game assets, and trade tokens on the open market. This creates a vibrant and sustainable ecosystem where players can enjoy the game while potentially earning real-world value from their in-game activities.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By carefully balancing the supply and demand of BCOIN and SEN, as well as the distribution of in-game assets, Bomb Crypto aims to create a thriving game economy that benefits both players and the project itself.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
