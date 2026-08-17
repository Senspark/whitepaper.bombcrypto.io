
import { PageContent } from "@/components/PageContent";

export default function Introduction() {
  return (
    <PageContent title="Introduction" emoji="💣">
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          The pixel art game inspired by the Bomberman game is built on blockchain and designed for both cryptocurrency enthusiasts and action game lovers.
        </p>

        <div className="flex justify-center my-8">
          <img 
            src="/lovable-uploads/e63ee6f8-d4ae-4a14-86ce-1626b9f77ffa.png" 
            alt="Bomb Crypto Whitepaper" 
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <p className="text-muted-foreground leading-relaxed">
          Bomb Crypto is an immersive Play-To-Revolutionize NFT game where players collect and command Bomb Heroes – unique cyborgs programmed to hunt for BCOIN and SEN tokens - the in-game token. Players can engage in activities such as collecting Heroes, battling monsters/other players, and trading their assets for real currency.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Each Bomb Crypto Hero is an NFT which increases ownership as well as tradeability.
        </p>
      </div>
    </PageContent>
  );
}
