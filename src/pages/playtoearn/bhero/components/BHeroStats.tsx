
export function BHeroStats() {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4 text-foreground">Bomb Heroes Power Stats</h3>
      <div className="grid gap-3 md:grid-cols-1">
        <div className="space-y-2 text-muted-foreground leading-relaxed">
          <p><strong>Power:</strong> bomb's destructive power</p>
          <p><strong>Bomb Range:</strong> the length when the bomb explodes</p>
          <p><strong>Stamina:</strong> hero's energy</p>
          <p><strong>Bomb Number:</strong> the number of bombs can be placed</p>
          <p><strong>Speed:</strong> movement speed</p>
          <img src="/lovable-uploads/944c687a-2bbe-490f-b88a-cf138f540efc.webp" alt="Hero stats icons" className="my-3" />
        </div>
      </div>
      <p className="text-muted-foreground leading-relaxed mt-4">
        This power stat of each Bomb Crypto Hero will be different. The higher the rarity, the stronger these 5 power stats will be. Individual Bomb Crypto Hero members will be revealed soon.
      </p>
    </section>
  );
}
