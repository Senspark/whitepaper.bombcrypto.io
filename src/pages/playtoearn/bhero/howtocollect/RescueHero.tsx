
import { PageContent } from "@/components/PageContent";

export default function RescueHero() {
  return (
    <PageContent title="Rescue Hero" emoji="🚁">
      <div className="space-y-6">
        <p className="text-muted-foreground text-lg leading-relaxed">
          In Bomb Crypto, players have the exciting opportunity to acquire new heroes through engaging Hero Rescue Missions. These are missions to free heroes from special prison blocks.
        </p>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Prison Blocks</h3>
          <p className="text-muted-foreground leading-relaxed">
            Prison blocks containing heroes can only be found in Treasure Hunt mode. The appearance of prison blocks is limited and randomized, making each "treasure hunt" a unique and potentially rewarding experience.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
