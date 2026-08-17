
import { PageContent } from "@/components/PageContent";

export default function AdventureMode() {
  return (
    <PageContent title="Adventure Mode" emoji="✨">
      <div className="space-y-6">
        <p className="text-muted-foreground text-lg leading-relaxed">
          Users can play this mode for free and also can play this mode in Bomberland Mobile
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Players choose a Bomb Crypto Hero of their own to participate in each level in Story mode. The player needs to destroy all the monsters and BOSS to pass each level. Breaking blocks and killing monsters also give players a chance to drop GOLDs.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          When you choose your Hero (Hero TR) to explore maps, collecting treasures while facing dangers, Monsters and bomb explosions (including yours) can harm your Hero, and if their health reaches zero, they're lost along with any rewards earned. However, you can also continue by using gems to revive (limited) Hero and fighting.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Choose heroes wisely, navigate carefully, and manage their health to succeed in clearing the maps.
        </p>

        <div className="my-8">
          <img 
            src="/lovable-uploads/0ff2d03a-562b-432f-983f-e0ece844cff8.png" 
            alt="Adventure Mode gameplay showing TOY Stage 1 - Level 1 with a colorful map containing various obstacles, monsters, and collectibles"
            className="w-full max-w-4xl mx-auto rounded-lg border"
          />
        </div>

        <p className="text-muted-foreground leading-relaxed">
          At the end of each area, there will be a boss fight round, you must quickly collect booster items to increase your strength enough to confront the boss.
        </p>

        <div className="my-8">
          <img 
            src="/lovable-uploads/fb55f1e2-f3e8-458f-b137-b9d4a268ad99.png" 
            alt="Boss fight gameplay showing intense battle with explosions and strategic positioning"
            className="w-full max-w-4xl mx-auto rounded-lg border"
          />
        </div>
      </div>
    </PageContent>
  );
}
