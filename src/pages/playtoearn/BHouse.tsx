
import { PageContent } from "@/components/PageContent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function BHouse() {
  return (
    <PageContent title="BHouse" emoji="🏠">
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">The Essential Asset for Your Bomb Crypto Heroes</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            BHouse is a collection of NFTs, serving as the homes of heroes within the game, aiding in replenishing energy depleted during reward mining. They come in various stats and sizes, with limited quantities available for minting in-game or for trading on the marketplace.
          </p>
          
          <div className="my-8 flex justify-center">
            <img 
              src="/lovable-uploads/baa58862-977a-4a4d-9f42-7e048940b878.webp" 
              alt="Bomb Crypto Super Villa interior showing heroes resting and recovering energy, with furniture and amenities inside the house"
              className="max-w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Introduction</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            House is the place where we all return to after a long day at work. In our bomber world, it is the same. Each Bomb Crypto Hero has his own stamina. And when it is drained out, the Bomb Crypto Hero will go back to the house, to recover before continuing working again. By owning a BHouse, you provide your heroes with a dedicated space to recharge their energy, enabling them to return to their mining activities more quickly and efficiently.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You can obtain a BHouse through two primary methods:
          </p>
          <ul className="space-y-2 text-muted-foreground leading-relaxed">
            <li><strong>Minting in Treasure Hunt Mode:</strong> You can Mint BHouse in Shop.</li>
            <li><strong>Purchasing on the Marketplace:</strong> Acquire BHouses from other players on the Bomb Crypto marketplace, where you can browse a wide selection of available properties.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Limited Supply and Exclusive Marketplace</h3>
          <p className="text-muted-foreground leading-relaxed">
            BHouses are available in limited quantities and can be purchased directly from the in-game shop or traded on the Bomb Crypto marketplace. This scarcity adds to their value and makes them a sought-after asset for players looking to optimize their gameplay. You can earn more by buying and selling on Marketplace.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Ownership and Usage</h3>
          <p className="text-muted-foreground leading-relaxed">
            While players can acquire up to 05 BHouses, only one can be actively used at any given time. This encourages strategic decision-making and adds a layer of depth to the game's economy.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Tiers and Energy Recovery</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            BHouses are available in six distinct tiers: Tiny House, Mini House, Luxury House, Penthouse, Villa, and Super Villa. Each tier offers a progressively faster energy recovery rate, allowing your heroes to spend less time resting and more time mining for valuable rewards.
          </p>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Energy/Min</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Sale price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>No house</TableCell>
                <TableCell>0</TableCell>
                <TableCell>0.5</TableCell>
                <TableCell>0</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tiny House</TableCell>
                <TableCell>6x6</TableCell>
                <TableCell>2</TableCell>
                <TableCell>4</TableCell>
                <TableCell>720</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mini House</TableCell>
                <TableCell>6x10</TableCell>
                <TableCell>5</TableCell>
                <TableCell>6</TableCell>
                <TableCell>2,400</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Luxury House</TableCell>
                <TableCell>6x15</TableCell>
                <TableCell>8</TableCell>
                <TableCell>8</TableCell>
                <TableCell>5,400</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Penthouse</TableCell>
                <TableCell>6x20</TableCell>
                <TableCell>11</TableCell>
                <TableCell>10</TableCell>
                <TableCell>9,600</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Villa</TableCell>
                <TableCell>6x25</TableCell>
                <TableCell>14</TableCell>
                <TableCell>12</TableCell>
                <TableCell>15,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Super Villa</TableCell>
                <TableCell>6x30</TableCell>
                <TableCell>17</TableCell>
                <TableCell>14</TableCell>
                <TableCell>21,600</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>
    </PageContent>
  );
}
