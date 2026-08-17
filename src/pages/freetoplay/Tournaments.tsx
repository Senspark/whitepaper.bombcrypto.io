import { PageContent } from "@/components/PageContent";
import { TournamentSection } from "@/components/TournamentSection";
import { TournamentTable } from "@/components/TournamentTable";
import { 
  firstWorldTournament, 
  worldwideChampionship, 
  springChampionship2023, 
  summerTournament2024,
  springTournament2025 
} from "@/data/tournamentData";

export default function Tournaments() {
  return (
    <PageContent title="Tournaments" emoji="🏆">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-6">Introduction</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Bomb Crypto Tournaments are special, non-recurring events where players from around the world come together to showcase their skills and compete for glory. These tournaments offer a unique opportunity for players to test their strategies, prove their mastery of the game, and earn exclusive rewards.
            </p>
            <p>
              Bomb Crypto Tournaments are open to all players, regardless of skill level or experience. Registration is typically open for a limited time, and those who meet the eligibility requirements are qualified to participate in the competition.
            </p>
            <p>
              The Tournaments are more than just competitions; they are a celebration of the game's vibrant community and the skill and dedication of its players. These events provide a platform for players to connect, share strategies, and forge lasting friendships.
            </p>
            
            <div className="mt-6 flex justify-center">
              <img 
                src="/lovable-uploads/c304052f-f975-427a-84e3-538ebb14b23c.png"
                alt="Bomb Crypto Tournament promotional image showing characters celebrating with a golden trophy"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">A Growing Legacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            Since 2022, Bomb Crypto has hosted four successful tournaments, each with increasing prize pools and participation. These tournaments have attracted a diverse range of players from all corners of the globe, including Brazil, Vietnam, Singapore, and many other countries. The global reach of these events highlights the growing popularity of Bomb Crypto and the passion of its community.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Format and Rewards</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The format of each tournament may vary, but typically involves a series of qualifying rounds, followed by elimination matches leading to the grand finals. The rewards for winning or placing high in a tournament are often substantial and can include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Exclusive NFTs:</strong> Rare and unique Bomb Crypto heroes or items not available through regular gameplay.</li>
              <li><strong>BCOIN, SEN, GEM:</strong> Large amounts of the in-game currencies, which can be used to purchase upgrades, heroes, or other valuable assets.</li>
              <li><strong>In-game Skin NFTs.</strong></li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">The Past Tournaments</h2>
          
          <div className="space-y-8">
            <TournamentSection {...firstWorldTournament} />

            <TournamentSection {...worldwideChampionship} />

            <TournamentSection {...springChampionship2023} />

            <TournamentSection 
              {...summerTournament2024}
              additionalContent={
                <p className="text-muted-foreground mt-4">
                  This is also the season that witnessed the highest total prize of 7000 USD.
                </p>
              }
            />

            <div>
              <h3 className="text-xl font-semibold mb-4">Special Prize for the Champion</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In addition to the monetary reward, the Champion of the Summer Tournament 2024 will receive a unique{" "}
                  <a
                    href="https://bscscan.com/nft/0x2607a35fb2d56d07c16f96704b99ecfeca2cf703/1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Soulbound Token
                  </a>{" "}
                  minted by the Bomb Crypto CEO. This special token commemorates the Champion's exceptional performance and will serve as a lasting testament to their victory.
                </p>
                <p>
                  This special gift is sent to The Champion and can be tracked at:{" "}
                  <a
                    href="https://bscscan.com/token/0x2607a35fb2d56d07c16f96704b99ecfeca2cf703?a=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline break-all"
                  >
                    https://bscscan.com/token/0x2607a35fb2d56d07c16f96704b99ecfeca2cf703?a=1
                  </a>
                </p>
                <p>
                  Here is the Soulbound Token:{" "}
                  <a
                    href="https://bscscan.com/nft/0x2607a35fb2d56d07c16f96704b99ecfeca2cf703/1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline break-all"
                  >
                    https://bscscan.com/nft/0x2607a35fb2d56d07c16f96704b99ecfeca2cf703/1
                  </a>
                </p>
                
                <div className="mt-6 flex justify-center">
                  <img 
                    src="/lovable-uploads/4f1edfbf-1f7a-489a-8590-545d9ed6f579.png"
                    alt="Tournament Champion trophy with golden crown design featuring the Bomb Crypto character mascot"
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">The Spring Tournament 2025</h3>
              
              <div className="mt-6 flex justify-center">
                <img 
                  src="/lovable-uploads/cfb20352-683c-4d5b-9fe0-4c195443274c.png"
                  alt="The Spring Tournament 2025 promotional image showing Bomb Crypto characters in battle with tournament title and 2025 year"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              <TournamentTable results={springTournament2025.results} />
              <p className="text-muted-foreground mt-4">
                The Spring Tournament was a thrilling competition, showcasing intense battles and top-tier gameplay. Death emerged as the Champion, securing $200, a Soulbound Token, and 1 TON Avatar NFT. Tiro claimed 2nd place, followed by Bomb2025 in 3rd place and BiLatto in 4th place, all demonstrating remarkable skill and strategy. The Quarterfinalists—BEUBOMBP1, FCSnake, Ezr4th, and DodoTh—also put up impressive performances, making it to the top 8. The tournament was a true test of talent and determination, celebrating the competitive spirit of the Bomb Crypto community. 🔥🏆
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Stay Tuned for Future Tournaments</h2>
          <p className="text-muted-foreground leading-relaxed">
            The development through each Tournament also marks the development after a long journey of Bomb Crypto. As Bomb Crypto continues to grow and evolve, players can look forward to even more exciting and rewarding tournaments in the future. Keep an eye on official announcements and social media channels for news about upcoming events and the chance to compete on the global stage.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
