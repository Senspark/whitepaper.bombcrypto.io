
import { PageContent } from "@/components/PageContent";

export default function Fusion() {
  return (
    <PageContent title="Fusion" emoji="⚡">
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Introduction</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hero Fusion is a feature that allows players to combine multiple lower-rarity HeroFi NFTs to create a single higher-rarity hero. This process involves two types of materials: main ingredients and support ingredients.
          </p>
          
          <div className="my-8 flex justify-center">
            <img 
              src="/lovable-uploads/ea207c61-0680-4c3a-8554-5033bebce59f.png" 
              alt="Bomb Crypto fusion interface showing rarity selection, hero placement slots, success rate indicator (100%), and fusion button"
              className="max-w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Ingredients</h3>
          
          <h4 className="text-lg font-semibold mb-3 text-foreground">Main Ingredients</h4>
          <ul className="space-y-2 text-muted-foreground leading-relaxed mb-4">
            <li><strong>Slots:</strong> There are four slots available for main ingredients, but only a minimum of three heroes of the same rarity are required to fuse into a hero of one rarity level higher.</li>
            <li><strong>Success Rate:</strong> Each hero used as a main ingredient contributes a 25% chance of success.</li>
            <li><strong>Example:</strong> Using 03 Rare heroes results in a 75% chance of upgrading to Super Rare. Using 04 Rare heroes guarantees a 100% success rate.</li>
            <li><strong>Outcome:</strong> If the fusion is successful, you will receive a hero of the target rarity with randomly generated attributes, similar to a newly minted hero. If the fusion fails, all materials are lost.</li>
            <li><strong>Maximum Selection:</strong> You can select up to four main ingredients.</li>
          </ul>

          <h4 className="text-lg font-semibold mb-3 text-foreground">Support Ingredients</h4>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You can use lower-rarity heroes as support ingredients to increase the success rate of the fusion.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Success Rate Increase:</strong> The percentage increase in success rate for each hero is calculated using the following formula:
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 font-mono bg-muted p-2 rounded">
            Percentage = 25% / 4^(X-1)
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Where X is the difference in rarity between the ingredient hero and the target hero.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong>Example:</strong> If the target hero is Epic:
          </p>
          <ul className="space-y-1 text-muted-foreground leading-relaxed ml-4">
            <li>Using one Common hero as a support ingredient results in X = 3.</li>
            <li>Using one Rare hero as a support ingredient results in X = 2.</li>
          </ul>
        </section>
      </div>
    </PageContent>
  );
}
