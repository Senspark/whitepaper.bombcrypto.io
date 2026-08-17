
import { PageContent } from "@/components/PageContent";

export default function Bridge() {
  return (
    <PageContent title="Bridge" emoji="🌉">
      <div className="space-y-6">
        <p className="text-muted-foreground text-lg leading-relaxed">
          Bridging in crypto refers to the process of transferring assets between different blockchain networks. It aims to enhance interoperability, allowing for data and asset transfers across various networks. Our bridge is a tool for transferring BCOIN and SEN tokens from the BNB network to the Polygon and vice versa.
        </p>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Bridge Access</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You can now transfer BCOIN token at:{" "}
            <a 
              href="https://dapps.bombcrypto.io/bridge" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 underline"
            >
              https://dapps.bombcrypto.io/bridge
            </a>
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Fees and Revenue Distribution</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Bridging tokens between networks incur a network fee, which can range from 5-15% of the total transfer amount. We recommend carefully reviewing the fee structure before initiating any cross-chain transfers to maximize your benefits.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With the amount of fees we collect from users bridging between 2 networks: 3% will be burned, with 7% returned to the developer's wallet.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Bridge Requirements</h3>
          <div className="bg-card border rounded-lg p-6">
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>A minimum of 200 tokens is required to initiate a bridge transaction</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>To ensure network stability, a maximum of 50,000 tokens can be bridged per transaction, regardless of the token type</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </PageContent>
  );
}
