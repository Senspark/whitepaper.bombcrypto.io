
import { PageContent } from "@/components/PageContent";

export default function Burn() {
  return (
    <PageContent title="Burn Mechanism" emoji="🔥">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Bomb Crypto employs a token-burning mechanism as a strategic tool to manage the supply and demand of its in-game tokens, primarily BCOIN and SEN. This practice involves permanently removing a portion of tokens from circulation, which can offer several significant benefits for the game's economy and its participants.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Key Advantages of Token Burning</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Reducing Supply</h4>
              <p className="text-muted-foreground leading-relaxed">
                Token burning reduces the total supply of tokens in circulation. With a lower supply, if demand remains constant or increases, the value of the remaining tokens can rise.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Combating Inflation</h4>
              <p className="text-muted-foreground leading-relaxed">
                By regularly burning tokens, the game can counteract inflationary pressures. This helps to prevent the devaluation of the token over time.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Increasing Token Value</h4>
              <p className="text-muted-foreground leading-relaxed">
                As the supply decreases, the scarcity of the token increases. This can lead to an appreciation in the token's value, benefiting holders and players who earn and use the token.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Incentivizing Holders</h4>
              <p className="text-muted-foreground leading-relaxed">
                Regular token burns can create a positive feedback loop for token holders, encouraging them to hold onto their tokens rather than sell them, knowing that the reduced supply may lead to higher prices in the future.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Economic Stability</h4>
              <p className="text-muted-foreground leading-relaxed">
                Managing the token supply through burning helps maintain economic stability within the game, ensuring that the in-game economy remains balanced and sustainable.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Boosting Confidence</h4>
              <p className="text-muted-foreground leading-relaxed">
                Token burns can increase investor and player confidence in the game's economy and the development team's commitment to maintaining a healthy ecosystem. This can attract more players and investors to the game.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Token-Burning Table</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">Month</th>
                  <th className="border border-border px-4 py-2 text-left">BCOIN</th>
                  <th className="border border-border px-4 py-2 text-left">SEN</th>
                  <th className="border border-border px-4 py-2 text-left">Total Supply (BCOIN)</th>
                  <th className="border border-border px-4 py-2 text-left">Total Supply (SEN)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">0</td>
                  <td className="border border-border px-4 py-2">0</td>
                  <td className="border border-border px-4 py-2">0</td>
                  <td className="border border-border px-4 py-2">100,000,000</td>
                  <td className="border border-border px-4 py-2">10,000,000,000</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">March</td>
                  <td className="border border-border px-4 py-2">-202,137</td>
                  <td className="border border-border px-4 py-2">0</td>
                  <td className="border border-border px-4 py-2">99,797,863</td>
                  <td className="border border-border px-4 py-2">10,000,000,000</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">April</td>
                  <td className="border border-border px-4 py-2">-235,006</td>
                  <td className="border border-border px-4 py-2">-154,932</td>
                  <td className="border border-border px-4 py-2">99,562,857</td>
                  <td className="border border-border px-4 py-2">9,999,845,068</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">May</td>
                  <td className="border border-border px-4 py-2">-258,760</td>
                  <td className="border border-border px-4 py-2">-46,727</td>
                  <td className="border border-border px-4 py-2">99,304,097</td>
                  <td className="border border-border px-4 py-2">9,999,798,341</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">June</td>
                  <td className="border border-border px-4 py-2">-239,884</td>
                  <td className="border border-border px-4 py-2">-198,782</td>
                  <td className="border border-border px-4 py-2">99,064,205</td>
                  <td className="border border-border px-4 py-2">9,999,400,777</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Official Burn Announcements</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Here are our official announcements for token burn:
          </p>
          <div className="space-y-2 text-muted-foreground">
            <p><strong>April:</strong> <a href="https://bombcrypto.substack.com/p/bcoin-and-sen-burned-event" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://bombcrypto.substack.com/p/bcoin-and-sen-burned-event</a></p>
            <p><strong>May:</strong> <a href="https://bombcrypto.substack.com/p/bcoin-and-sen-burned-event-may" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://bombcrypto.substack.com/p/bcoin-and-sen-burned-event-may</a></p>
            <p><strong>June:</strong> <a href="https://bombcrypto.substack.com/p/bcoin-and-sen-burned-event-june" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://bombcrypto.substack.com/p/bcoin-and-sen-burned-event-june</a></p>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-4">
            We will update token burn information monthly so that users have an intuitive and transparent view in developing the game's economy.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
