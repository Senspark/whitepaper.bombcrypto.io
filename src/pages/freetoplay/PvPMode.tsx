
import { PageContent } from "@/components/PageContent";

export default function PvPMode() {
  return (
    <PageContent title="PvP Mode" emoji="⚔️">
      <div className="space-y-6">
        <p className="text-muted-foreground text-lg leading-relaxed">
          Users can play PvP for free
        </p>

        <p className="text-muted-foreground leading-relaxed">
          PvP mode is for users to choose a Hero-tr competing with other players. Users will receive rewards and ranking points. This mode offers an exhilarating arena where players can test their strategic skills and battle prowess against other players in real-time. This fast-paced, action-packed mode provides a unique and exciting way to experience the Bomb Crypto universe.
        </p>

        <div className="my-8">
          <img 
            src="/lovable-uploads/2981d20d-2fb8-43d8-bbbb-c4d0bc1862b7.png" 
            alt="PvP Mode matchmaking screen showing two players ready for battle with countdown timer"
            className="w-full max-w-4xl mx-auto rounded-lg border"
          />
        </div>

        <p className="text-muted-foreground leading-relaxed">
          This mode can be played on both Bomberland Mobile and Website.
        </p>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Match Duration</h3>
          <p className="text-muted-foreground leading-relaxed">
            Each PvP match is a thrilling race against time, with a maximum duration of nearly 2 minutes. This ensures that battles are intense, engaging, and require quick decision-making.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Hero Selection</h3>
          <p className="text-muted-foreground leading-relaxed">
            Before entering a PvP match, players must select one of their traditional heroes (hero-tr) to represent them in battle. Hero-fi characters are not eligible for PvP combat. Each hero possesses unique attributes and abilities, allowing players to tailor their strategies to their preferred playstyle.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Boosters: Enhancing Your Arsenal</h3>
          <p className="text-muted-foreground leading-relaxed">
            Boosters are special items that can be strategically deployed to gain an advantage over opponents. Players can choose their boosters before entering a match, carefully considering which ones will best complement their hero's strengths and weaknesses.
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            There are two main categories of boosters:
          </p>

          <p className="text-muted-foreground leading-relaxed">
            <strong>Activated During Gameplay:</strong> These boosters, such as the Shield and Key, can be activated at any time during the match to provide immediate benefits. The Shield offers temporary protection from enemy attacks, while the Key can be used to escape imprisonment.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            <strong>Activated at Game Start:</strong> These boosters, including Rank Guardian, Full Rank Guardian, Conquest Card, and Full Conquest Card, provide passive benefits that last throughout the entire match. They can enhance your hero's stats, increase their mining efficiency, or provide other strategic advantages.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            It's important to note that boosters activated during gameplay have a 20-second cooldown period after each use, preventing players from relying on them too heavily.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Blocks and Items</h3>
          <p className="text-muted-foreground leading-relaxed">
            The PvP arena is a dynamic environment filled with various types of blocks and items that can significantly impact the course of a match.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            <strong>Hard Blocks:</strong> These indestructible obstacles cannot be destroyed or passed through. They are strategically placed throughout the arena, forcing players to navigate around them and creating chokepoints for tactical engagements.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            <strong>Soft Blocks:</strong> These destructible blocks can be destroyed with bomb explosions. When destroyed, there is a chance they will drop a random item that can enhance the player's abilities. Items can range from increased bomb power to temporary invincibility, adding an element of surprise and unpredictability to each match.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            In addition to items dropped from soft blocks, a single Chest may randomly appear on the map when a soft block is destroyed within a 7x7 tile radius around the center of the arena. This treasure chest contains valuable rewards, but only the player who picks it up and emerges victorious from the match can claim its contents.
          </p>

          <div className="my-8">
            <img 
              src="/lovable-uploads/29cc3f3f-21e1-4b0e-ae8c-164d1dd97ba7.png" 
              alt="PvP gameplay showing the arena with bombs, blocks, and items scattered across the battlefield"
              className="w-full max-w-4xl mx-auto rounded-lg border"
            />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Matchmaking</h3>
          <p className="text-muted-foreground leading-relaxed">
            Bomb Crypto's matchmaking system is designed to create balanced and competitive matches by pairing players with similar Bomb Rankings (BR). This ensures that players are matched against opponents of comparable skill and experience, leading to more engaging and enjoyable gameplay.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            In addition to prioritizing fair matches, Bomb Crypto is committed to minimizing queue times for players. The matchmaking system constantly adapts and optimizes its algorithms to ensure that players are matched with suitable opponents as quickly as possible. This focus on efficiency ensures that players can spend more time enjoying the game and less time waiting in queues.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Falling Rocks and Imprisonment</h3>
          <p className="text-muted-foreground leading-relaxed">
            As the match progresses and the timer ticks down, the arena becomes increasingly treacherous. At the 30-second mark, hard blocks will begin falling from the top of the map, gradually shrinking the play area and forcing players into closer proximity.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            If a hero is caught in a bomb explosion, they will be imprisoned for 5 seconds. Imprisoned heroes are unable to move, place bombs, or use boosters (except for the Key to escape). If an imprisoned hero is touched by an enemy hero, the prison will explode, resulting in their demise. However, if the imprisoned hero does not use a Key within 5 seconds, the prison will explode anyway, awarding points to the bomber.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Winning, Losing, and Draws</h3>
          <p className="text-muted-foreground leading-relaxed">
            The ultimate goal of a PvP match is to be the last hero standing. If you manage to outlast your opponent, you will emerge victorious and earn valuable rewards. However, if you are defeated before your opponent, you will lose the match. In the rare event that both heroes are eliminated simultaneously or within 1 second of each other, the match will be declared a draw.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            After completing a match in PvP mode, players are presented with an exciting opportunity to participate in the Lucky Wheel. This bonus feature allows players to test their luck and potentially win a variety of attractive rewards like: Hero TR, Skin, etc
          </p>

          <div className="my-8">
            <img 
              src="/lovable-uploads/6b5304f2-0a14-4419-9487-17e4d07e579c.png" 
              alt="Lucky Wheel reward screen showing 'YOU WIN' message with various rewards including tokens and gems"
              className="w-full max-w-4xl mx-auto rounded-lg border"
            />
          </div>
        </section>
      </div>
    </PageContent>
  );
}
