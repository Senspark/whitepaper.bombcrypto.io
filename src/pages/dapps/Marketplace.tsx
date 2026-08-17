
import { PageContent } from "@/components/PageContent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Marketplace() {
  const bheroMinPrices = [
    { rarity: "Common", bcoin: "1", sen: "1" },
    { rarity: "Rare", bcoin: "10", sen: "10" },
    { rarity: "Super Rare", bcoin: "20", sen: "20" },
    { rarity: "Epic", bcoin: "30", sen: "30" },
    { rarity: "Legendary", bcoin: "50", sen: "50" },
    { rarity: "Super Legendary", bcoin: "70", sen: "70" },
  ];

  const bhouseMinPrices = [
    { rarity: "Common", bcoin: "18", sen: "18" },
    { rarity: "Rare", bcoin: "60", sen: "60" },
    { rarity: "Super Rare", bcoin: "135", sen: "135" },
    { rarity: "Epic", bcoin: "240", sen: "240" },
    { rarity: "Legendary", bcoin: "375", sen: "375" },
    { rarity: "Super Legendary", bcoin: "540", sen: "540" },
  ];

  return (
    <PageContent title="Marketplace" emoji="🏘️">
      <div className="space-y-6">
        <p className="text-muted-foreground text-lg leading-relaxed">
          The Bomb Crypto Marketplace is a vibrant hub where players can buy, sell, and trade a wide array of Non-Fungible Tokens (NFTs) that are essential to the game. It serves as the central platform for acquiring and exchanging two key assets:
        </p>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Available NFTs</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">BHero NFTs</h4>
              <p className="text-muted-foreground leading-relaxed">
                These unique characters are the backbone of your mining operations. Each BHero possesses distinct attributes and rarities, influencing their mining power and overall value. The Marketplace offers a diverse selection of BHero NFTs.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">BHouse NFTs</h4>
              <p className="text-muted-foreground leading-relaxed">
                These valuable assets provide your BHero NFTs with a place to rest and recharge their energy, crucial for maximizing their mining efficiency. The Marketplace features a variety of BHouse NFTs, each with different energy recovery rates and aesthetic appeal, allowing you to choose the perfect home for your heroes.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Direct Buying and Selling</h3>
          <p className="text-muted-foreground leading-relaxed">
            The Marketplace allows you to directly buy and sell both BHero and BHouse NFTs, by passing the need for random minting within the game. This gives you more control over your collection and allows you to target specific NFTs that meet your needs and preferences.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Market Fees</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            To maintain the Marketplace's operations and ensure a fair trading environment, a 15% fee is applied to all NFT sales. This fee is deducted from the final sale price and contributes to the ongoing development and improvement of the Bomb Crypto ecosystem.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Then with the 15% fee we collect, we will give 5% for burning and 10% goes back to Dev as revenue.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Minimum Sell Prices</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            To maintain the value of NFTs and prevent undercutting, minimum sell prices have been established for both BHero and BHouse NFTs:
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">BHero Minimum Sell Prices</h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rarity</TableHead>
                    <TableHead>Minimum Sell Price (BCOIN)</TableHead>
                    <TableHead>Minimum Sell Price (SEN)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bheroMinPrices.map((item) => (
                    <TableRow key={item.rarity}>
                      <TableCell className="font-medium">{item.rarity}</TableCell>
                      <TableCell>{item.bcoin}</TableCell>
                      <TableCell>{item.sen}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">BHouse Minimum Sell Prices</h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rarity</TableHead>
                    <TableHead>Minimum Sell Price (BCOIN)</TableHead>
                    <TableHead>Minimum Sell Price (SEN)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bhouseMinPrices.map((item) => (
                    <TableRow key={item.rarity}>
                      <TableCell className="font-medium">{item.rarity}</TableCell>
                      <TableCell>{item.bcoin}</TableCell>
                      <TableCell>{item.sen}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Market Insights</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Marketplace is designed to be user-friendly and intuitive, making it easy for players to browse listings, place bids, and complete transactions securely. Whether you're a seasoned collector or a new player looking to expand your Bomb Crypto holdings, the Marketplace offers a wealth of opportunities to discover and acquire the NFTs you need to succeed in the game.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In addition to buying and selling, the Marketplace also provides valuable insights into the current market trends and prices for BHero and BHouse NFTs. This information can help you make informed decisions about your investments and ensure you're getting the best value for your BCOIN.
          </p>
        </section>

        <section>
          <div className="bg-card border rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-2">Visit the Marketplace</h4>
            <p className="text-muted-foreground leading-relaxed">
              Visit the Bomb Crypto Marketplace: <a href="https://market.bombcrypto.io/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 underline">https://market.bombcrypto.io/</a>
            </p>
          </div>
        </section>
      </div>
    </PageContent>
  );
}
