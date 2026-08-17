
import { PageContent } from "@/components/PageContent";
import { NavLink } from "react-router-dom";

const stakingOptions = [
  { title: "BCOIN", url: "/dapps/staking/bcoin", emoji: "💰", description: "Stake BCOIN tokens and earn rewards" },
  { title: "SEN", url: "/dapps/staking/sen", emoji: "💰", description: "Stake SEN tokens and earn rewards" },
];

export default function Staking() {
  return (
    <PageContent title="Staking" emoji="💰">
      <div className="space-y-6">
        <p className="text-muted-foreground text-lg leading-relaxed">
          To expand opportunities to increase assets for investors holding BCOIN, we launched the Staking function on the project's Dapp. Staking is a form similar to depositing money in Banks. Users can proceed to deposit BCOIN into "Staking" and receive daily interest (BCOIN). The interest rate (APR Index, Yearly interest) will be dependent on the total amount in the Issuer's Pool Stake + the total amount of BCOIN deposited by the User.
        </p>

        <section>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Available Staking Options</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {stakingOptions.map((option) => (
              <NavLink
                key={option.url}
                to={option.url}
                className="group bg-card border rounded-lg p-6 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{option.emoji}</span>
                  <h4 className="font-semibold text-foreground group-hover:text-indigo-400 transition-colors">
                    {option.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {option.description}
                </p>
              </NavLink>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">How Staking Works</h3>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Staking allows you to lock up your tokens for a specified period to earn rewards. By participating in staking, you help secure the network and earn passive income from your holdings.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Choose your preferred token to stake and start earning rewards today!
            </p>
          </div>
        </section>
      </div>
    </PageContent>
  );
}
