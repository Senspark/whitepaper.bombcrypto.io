
import { NavLink } from "react-router-dom";

export function BHeroLegacy() {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4 text-foreground">Hero Legacy (Hero L)</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Legacy Heroes (Hero L) are the original heroes in Bomb Crypto that do not possess shields. They are defined as heroes acquired before the implementation of Hero S. They can be easily identified by the "L" icon displayed in the bottom right corner of their card.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-4">
        To upgrade a Legacy Hero into a Hero S, players must stake (lock) a specific amount of BCOIN for 30 days. Upon successful staking, the Legacy Hero will immediately gain a shield and inherit the shield mechanics of current Hero S, including durability, repair costs, and material extraction. Players can unstake their BCOIN from a Legacy Hero at any time. However, early unstaking incurs a fee, calculated as a percentage of the total staked BCOIN. The fee percentage decreases as the staking period progresses, reaching 0% after 30 days.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Visit <NavLink to="/play-to-earn/bhero/stake-hero" className="text-blue-400 hover:text-blue-300 underline">Stake Hero</NavLink> for more details and information about staking Hero L.
      </p>
    </section>
  );
}
