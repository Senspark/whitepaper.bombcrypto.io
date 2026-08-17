
import { PageContent } from "@/components/PageContent";

export default function TonTokenAllocation() {
  return (
    <PageContent title="TON Token Allocation" emoji="⚡">
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Powering the Play-to-Airdrop Economy</h3>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">TON Tokenomic</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            As detailed in our Multiple Chains Tokenomics section, each chain will utilize a combination of real and cloned tokens to ensure smooth and efficient cross-chain transfers. These cloned tokens remain locked until a specific amount of real tokens are bridged from another chain, at which point they convert into the real token. The TON chain will also have its own token allocation:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">Allocations</th>
                  <th className="border border-border px-4 py-2 text-left">Percentage</th>
                  <th className="border border-border px-4 py-2 text-left">Lock</th>
                  <th className="border border-border px-4 py-2 text-left">Vest</th>
                  <th className="border border-border px-4 py-2 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">Add Liquidity Pool</td>
                  <td className="border border-border px-4 py-2">40%</td>
                  <td className="border border-border px-4 py-2">Unlocked</td>
                  <td className="border border-border px-4 py-2">0</td>
                  <td className="border border-border px-4 py-2">Unlock: Aka TOTAL_BCOIN_LP</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Airdrop</td>
                  <td className="border border-border px-4 py-2">40%</td>
                  <td className="border border-border px-4 py-2">Unlocked</td>
                  <td className="border border-border px-4 py-2">0</td>
                  <td className="border border-border px-4 py-2">Unlock: Aka TOTAL_BCOIN_AIRDROP</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Marketing</td>
                  <td className="border border-border px-4 py-2">5%</td>
                  <td className="border border-border px-4 py-2">Locked</td>
                  <td className="border border-border px-4 py-2">6 Months</td>
                  <td className="border border-border px-4 py-2">—</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Product Development</td>
                  <td className="border border-border px-4 py-2">10%</td>
                  <td className="border border-border px-4 py-2">Locked</td>
                  <td className="border border-border px-4 py-2">6 Months</td>
                  <td className="border border-border px-4 py-2">—</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Reserve</td>
                  <td className="border border-border px-4 py-2">5%</td>
                  <td className="border border-border px-4 py-2">Locked</td>
                  <td className="border border-border px-4 py-2">6 Months</td>
                  <td className="border border-border px-4 py-2">—</td>
                </tr>
                <tr className="bg-muted font-semibold">
                  <td className="border border-border px-4 py-2">Total</td>
                  <td className="border border-border px-4 py-2">100%</td>
                  <td className="border border-border px-4 py-2">—</td>
                  <td className="border border-border px-4 py-2">—</td>
                  <td className="border border-border px-4 py-2">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-2 mt-4 text-muted-foreground">
            <p><strong>Total Bridged BCOIN (TON) estimated at listing:</strong> 5M BCOIN</p>
            <p><strong>Listing Pair:</strong> BCOIN/TON</p>
            <p><strong>Price BCOIN (TON) listing:</strong> TBA</p>
            <p><strong>Listed time on DEX:</strong> TBA</p>
            <p><strong>Airdrop Time:</strong> TBA</p>
            <p><strong>Bridge Time from BSC/Polygon to TON:</strong> TBA</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">BCOIN Airdrop Formula</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The airdrop mechanism is designed to reward players based on their in-game activity and achievements. The formula for calculating the airdrop allocation takes into account:
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The details formula about the BCOIN (TON) Airdrop Distribution Formula: <a href="https://docs.google.com/document/d/1P03nIx5KJ3yU9tJPZtkkMVXbNS_3NiGQL5SiV5mXeOg/edit?usp=sharing" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://docs.google.com/document/d/1P03nIx5KJ3yU9tJPZtkkMVXbNS_3NiGQL5SiV5mXeOg/edit?usp=sharing</a>
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">TON Deposit Fund</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            To further support the growth and development of Bomb Crypto on TON, a dedicated TON Deposit Fund has been established. The allocation of this fund is as follows:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">Allocation</th>
                  <th className="border border-border px-4 py-2 text-left">Percentage</th>
                  <th className="border border-border px-4 py-2 text-left">Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">Add Liquidity Pool</td>
                  <td className="border border-border px-4 py-2">70%</td>
                  <td className="border border-border px-4 py-2">This TON fund allocation pairs to TOTAL_BCOIN_LP</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Product Development</td>
                  <td className="border border-border px-4 py-2">15%</td>
                  <td className="border border-border px-4 py-2">—</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Marketing</td>
                  <td className="border border-border px-4 py-2">10%</td>
                  <td className="border border-border px-4 py-2">—</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Reserve</td>
                  <td className="border border-border px-4 py-2">5%</td>
                  <td className="border border-border px-4 py-2">—</td>
                </tr>
                <tr className="bg-muted font-semibold">
                  <td className="border border-border px-4 py-2">Total</td>
                  <td className="border border-border px-4 py-2">100%</td>
                  <td className="border border-border px-4 py-2">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground leading-relaxed mt-4">
            Bomb Crypto's expansion to the TON network represents an exciting opportunity for players worldwide. With its innovative play-to-airdrop model, accessible gameplay, and strong community focus, Bomb Crypto is poised to become a leading force in the blockchain gaming landscape.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
