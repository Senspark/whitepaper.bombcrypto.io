
import { PageContent } from "@/components/PageContent";

export default function SeasonRanking() {
  return (
    <PageContent title="Season Ranking" emoji="⚡">
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Introduction</h3>
          <p className="text-muted-foreground leading-relaxed">
            The Bomb Crypto PVP mode features a dynamic ranking system designed to foster competition, reward skill, and provide a clear progression path for players. To keep the users fresh and engaging, the seasonal ranking system resets regularly, offering new opportunities for players to rise to the top and claim prestigious rewards.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Bomb Ranking</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This system revolves around the Bomb Ranking (BR) score, a numerical representation of a player's prowess in PvP battles. In addition, the BR will also be implemented according to the following mechanisms:
          </p>

          <p className="text-muted-foreground leading-relaxed mb-3">
            <strong>Minimum BR:</strong> The minimum BR score is 0. There are no negative rankings.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-3">
            <strong>Winning and Losing Points:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 text-muted-foreground">
            <li>Winning a PvP match grants +20 BR points.</li>
            <li>Losing a PvP match deducts BR points based on the player's current rank.</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed">
            <strong>Ranking Tiers:</strong> There are 04 tiers: Iron, Copper, Silver and Gold. Each tier is further divided into two sub-ranks (e.g., Iron I and Iron II). We will update 3 more tiers soon.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Leaderboard</h3>
          <p className="text-muted-foreground leading-relaxed">
            The global leaderboard is the place where all players' performance is tracked and ranked. Your position on the leaderboard is determined by your Bomb Ranking (BR) score, a numerical representation of your skill and success in PvP battle, with the highest scores at the top.
          </p>
          
          <div className="mt-6 flex justify-center">
            <img 
              src="/lovable-uploads/4b236b91-723f-4330-9b03-2d1eb48b081a.png"
              alt="Bomb Crypto Leaderboard showing season rankings with player positions, rewards, and rank points"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">The Rhythm of the Seasons</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Each season in Bomb Crypto's PvP Battle Mode follows a consistent schedule:
          </p>

          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              <strong>Initial Ranking:</strong> Players new to PvP mode start with a BR score of 0 and are placed in the Iron I rank.
            </p>

            <p>
              <strong>BR Reset and Renewal:</strong> To ensure a level playing field for all, BR scores are reset at the beginning of each new season, allowing players to start anew and prove their mettle once again. The reset occurs on the first day of the month at 00:00 UTC.
            </p>

            <p>
              <strong>Season Culmination:</strong> The season reaches its climax on the 27th of the month at 00:00 AM UTC, when the final rankings are determined.
            </p>

            <p>
              <strong>Intense Competition:</strong> Throughout the season, players engage in countless battles, striving to improve their Bomb Ranking (BR) score and climb the leaderboard. To be eligible for season rewards, players must participate in at least 30 PvP matches during the season.
            </p>

            <p>
              <strong>Reward Distribution:</strong> Following the season's conclusion, the top-ranking players are lavishly rewarded for their exceptional performance.
            </p>

            <p>
              <strong>Reward Claiming:</strong> If a player qualifies for rewards but the new season has already started, they can still claim their rewards from the previous season.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Rewards</h3>
          <p className="text-muted-foreground leading-relaxed">
            Each player will receive a corresponding amount of Swap Gems that can later be used to exchange for BCOIN or SEN. The higher your rank, the more lucrative the rewards. By participating in the PvP Battle Mode and striving for a high leaderboard ranking, you can not only showcase your skills but also earn substantial rewards that will enhance your Bomb Crypto experience.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">The Past Season</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In 2024, PVP Battle Mode seasons have started since April, providing an exciting competitive environment for players.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>PVP Battle Mode Season 01 (04/2024)</strong>
          </p>

          <div className="mt-6 flex justify-center mb-6">
            <img 
              src="/lovable-uploads/d011616c-8a72-4160-87c4-7907a73edbc2.png"
              alt="PVP Battle Mode Season 1 - 2024 promotional image with knight character and game screenshots"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>PVP Battle Mode May 2025</strong>
          </p>

          <div className="mt-6 flex justify-center">
            <img 
              src="/lovable-uploads/710948a3-0b6b-49af-a27b-7595b4ea7a15.png"
              alt="PVP Battle Mode Leaderboard May 2025 showing player rankings, rewards and points"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>
    </PageContent>
  );
}
