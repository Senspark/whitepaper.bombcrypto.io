
export function BHeroShield() {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4 text-foreground">Shield Mechanics</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        The shield on an Hero S functions has a durability rating that decreases when the hero takes damage. When the shield's durability reaches zero, it breaks, and the hero becomes vulnerable to damage.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Damaged shields can be repaired using Quartz, a valuable in-game resource. The amount of Quartz required for repair depends on the rarity of the hero and the extent of the damage.
      </p>
    </section>
  );
}
