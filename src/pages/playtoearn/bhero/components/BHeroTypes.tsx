
export function BHeroTypes() {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4 text-foreground">Hero Types</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        There are 2 types of hero: Hero-fi and Hero-tr
      </p>
      <div className="space-y-3">
        <div className="bg-card border rounded-lg p-4">
          <h4 className="font-semibold text-blue-400 mb-2">🎯 HERO-FI</h4>
          <p className="text-muted-foreground text-sm">
            Is a current NFT of Bomb Crypto and these heroes are only used for mining in Treasure Hunt Mode.
          </p>
        </div>
        <div className="bg-card border rounded-lg p-4">
          <h4 className="font-semibold text-blue-400 mb-2">⚔️ HERO-TR</h4>
          <p className="text-muted-foreground text-sm">
            Is for playing Adventure Mode and PvP Mode.
          </p>
        </div>
      </div>
      <p className="text-muted-foreground leading-relaxed mt-4">
        Whenever new users log in to the game, users will receive a hero as a gift. Here are 3 heroes for users: Ninja / Knight / Witch. Let use these heroes to clear the Adventure mode!
      </p>
    </section>
  );
}
