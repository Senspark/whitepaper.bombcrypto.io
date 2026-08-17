
import { PageContent } from "@/components/PageContent";

export default function BuyQuartz() {
  return (
    <PageContent title="Buy Quartz" emoji="💎">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed">
            All Quartz transactions occur off-chain, meaning they are recorded and stored on the game server rather than on the blockchain. This approach ensures seamless and efficient management of this essential resource, allowing for a smoother gameplay experience for all players.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Quartz Packs</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Quartz can be purchased in various packs, with larger packs offering greater value for your investment. Choose from six different pack sizes to suit your needs:
          </p>
          
          <div className="grid gap-3 md:grid-cols-2">
            <div className="bg-card border rounded-lg p-4">
              <h4 className="font-semibold text-pink-400 mb-2">💎 Tiny Pack</h4>
              <p className="text-muted-foreground text-sm">Perfect for small repairs and upgrades</p>
            </div>
            <div className="bg-card border rounded-lg p-4">
              <h4 className="font-semibold text-pink-400 mb-2">💎 Medium Pack</h4>
              <p className="text-muted-foreground text-sm">Ideal for regular shield maintenance</p>
            </div>
            <div className="bg-card border rounded-lg p-4">
              <h4 className="font-semibold text-pink-400 mb-2">💎 Pro Pack</h4>
              <p className="text-muted-foreground text-sm">Great value for active players</p>
            </div>
            <div className="bg-card border rounded-lg p-4">
              <h4 className="font-semibold text-pink-400 mb-2">💎 Giant Pack</h4>
              <p className="text-muted-foreground text-sm">Substantial Quartz reserves</p>
            </div>
            <div className="bg-card border rounded-lg p-4">
              <h4 className="font-semibold text-pink-400 mb-2">💎 Mega Pack</h4>
              <p className="text-muted-foreground text-sm">Massive Quartz stockpile</p>
            </div>
            <div className="bg-card border rounded-lg p-4">
              <h4 className="font-semibold text-pink-400 mb-2">💎 Ultra Pack</h4>
              <p className="text-muted-foreground text-sm">Maximum value and quantity</p>
            </div>
          </div>
          
          <img src="/lovable-uploads/0d171730-a408-4188-a04d-54ffe77b3b11.png" alt="Quartz shop interface" className="my-3" />
          
          <p className="text-muted-foreground leading-relaxed mt-4">
            The larger the pack, the more Quartz you'll receive, making it a smart choice for those looking to stock up on this valuable resource.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
