
import { PageContent } from "@/components/PageContent";

export default function BlockChest() {
  return (
    <PageContent title="Block Chest" emoji="📦">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Block Chests are treasure troves of valuable items that your Heroes can uncover as they bravely venture through the Bomb Crypto world. These chests can be unlocked by your Heroes' explosive skills. Every time your Heroes break through a chest, there's a chance rewards will appear. The anticipation of what lies within adds an exciting element to the gameplay, as each chest holds the potential to significantly boost your progress.
          </p>
        </section>

        <section>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The specific items and their quantities within a chest depend on the chest's rarity. Block Chests come in four distinct rarities, each with increasing value and potential rewards:
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Block Wooden Chest</h4>
              <p className="text-muted-foreground leading-relaxed">
                The most common type of chest, offering the highest chance of obtaining Star Cores, along with a smaller amount of BCOIN and SEN.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Block Silver Chest</h4>
              <p className="text-muted-foreground leading-relaxed">
                A less common chest with a moderate chance of yielding Star Cores, and a higher quantity of BCOIN and SEN compared to Wooden Chests.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Block Golden Chest</h4>
              <p className="text-muted-foreground leading-relaxed">
                A rare and coveted chest containing a lower chance of Star Cores, but a generous amount of BCOIN and SEN.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Block Diamond Chest</h4>
              <p className="text-muted-foreground leading-relaxed">
                The rarest and most valuable chest, you can't find Star Cores, but overflowing with substantial amounts of BCOIN and SEN.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Prison Chest</h4>
              <p className="text-muted-foreground leading-relaxed">
                You will be able to rescue BHeros from these special chests. Prison chests appear randomly on some maps.
              </p>
              
              <div className="my-8 flex justify-center">
                <img 
                  src="/lovable-uploads/5a6c2b7e-b928-401b-87e0-52999b9c3041.png" 
                  alt="Different types of Block Chests in Bomb Crypto: Wooden, Silver, Golden, Diamond, and Prison chests with varying rarities and rewards"
                  className="max-w-full h-auto rounded-lg shadow-lg border border-border"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageContent>
  );
}
