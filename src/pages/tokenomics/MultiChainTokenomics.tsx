
import { PageContent } from "@/components/PageContent";

export default function MultiChainTokenomics() {
  return (
    <PageContent title="Multi-chain Tokenomics" emoji="🛜">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Invented by the Bomb Crypto team.
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            By expanding to multiple blockchains, Bomb Crypto aims to create a more robust, accessible as well as bring convenience to users. Bomb Crypto's presence on multichains opens the door to a wider range of users, including those who prefer specific blockchains or have existing assets on different networks. This inclusivity fosters a more diverse and vibrant community.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Rules:</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>Each chain has 100 million tokens, which include both real tokens and cloned tokens. If there are N chains, they collectively have N * 100 million tokens.</p>
            <p>Real tokens are those that are not locked in the bridge and can be directly used within their respective chain.</p>
            <p>Cloned tokens, on the other hand, are tokens that are locked in the bridge abutment (Chain B), awaiting the bridging of real tokens from Chain A. Once the real tokens from Chain A are bridged, the cloned tokens in Chain B become real tokens, and the real tokens in Chain A become cloned tokens.</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Present: game on BNB and Polygon</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">Chain Type</th>
                  <th className="border border-border px-4 py-2 text-left">BNB</th>
                  <th className="border border-border px-4 py-2 text-left">Polygon</th>
                  <th className="border border-border px-4 py-2 text-left">All Chains</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">Real tokens</td>
                  <td className="border border-border px-4 py-2">75,000,000</td>
                  <td className="border border-border px-4 py-2">25,000,000</td>
                  <td className="border border-border px-4 py-2">100,000,000</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Cloned tokens</td>
                  <td className="border border-border px-4 py-2">25,000,000</td>
                  <td className="border border-border px-4 py-2">75,000,000</td>
                  <td className="border border-border px-4 py-2">(N−1) × 100,000,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground text-sm mt-2">If there are N chains</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">When: game on BNB, Polygon, Ton and Solana</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">Chain Type</th>
                  <th className="border border-border px-4 py-2 text-left">BNB</th>
                  <th className="border border-border px-4 py-2 text-left">Polygon</th>
                  <th className="border border-border px-4 py-2 text-left">TON</th>
                  <th className="border border-border px-4 py-2 text-left">ALL Chains</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">Real tokens</td>
                  <td className="border border-border px-4 py-2">70,000,000</td>
                  <td className="border border-border px-4 py-2">25,000,000</td>
                  <td className="border border-border px-4 py-2">5,000,000</td>
                  <td className="border border-border px-4 py-2">100,000,000</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Cloned tokens</td>
                  <td className="border border-border px-4 py-2">30,000,000</td>
                  <td className="border border-border px-4 py-2">75,000,000</td>
                  <td className="border border-border px-4 py-2">95,000,000</td>
                  <td className="border border-border px-4 py-2">(N−1) × 100,000,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground text-sm mt-2">If there are N chains</p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            The number of real and cloned tokens on each chain will vary depending on users and the market through the bridge.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Example Diagram</h3>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/67b06e0b-de8b-4a4a-8e2c-dc082df1b227.webp" 
              alt="Multi-chain Tokenomics Diagram" 
              className="max-w-full h-auto"
            />
          </div>
        </section>
      </div>
    </PageContent>
  );
}
