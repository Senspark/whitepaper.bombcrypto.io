
import { useState } from "react";
import { PageContent } from "@/components/PageContent";
import { NavLink } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { baseRewardStaking, totalDailyPool, rewardRanks, rewardPools, formatReward } from "@/data/treasureHuntRewards";

const treasureHuntFeatures = [
  { title: "Auto Mine", url: "/play-to-earn/treasure-hunt/auto-mine", emoji: "⚡", description: "Automated Mining System" },
  { title: "Block Chest", url: "/play-to-earn/treasure-hunt/block-chest", emoji: "⚡", description: "Blockchain Treasure Chests" },
];

export default function TreasureHunt() {
  const [selectedPool, setSelectedPool] = useState(rewardPools[0].name);
  const activePool = rewardPools.find((p) => p.name === selectedPool) ?? rewardPools[0];

  return (
    <PageContent title="Treasure Hunt Mode" emoji="✨">
      <div className="space-y-6">
        <section>
          <div className="my-8 flex justify-center">
            <img 
              src="/lovable-uploads/5bb1ab8e-2f47-4472-bb4e-6b19eadf3623.webp" 
              alt="Bomb Crypto Treasure Hunt Mode gameplay showing heroes mining blocks, placing bombs, and collecting rewards like BCOIN and SEN in the mining area"
              className="max-w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            In Treasure Hunt Mode, players can send Bomb Crypto Heroes to the mining areas and have them plant bombs to destroy blocks to find BCOIN/SEN/STAR CORE. These heroes can work automatically without players' having to be there all the time, which helps players save plenty of time to do other tasks.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The hero also consumes energy each time a bomb is placed. When he runs out of energy, the hero will enter a resting state to recharge his energy. If you buy a house, it will increase the charging speed.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Heroes are programmed to prioritize placing bombs on blocks with higher HP. This strategic approach maximizes mining efficiency and ensures that the most valuable resources are extracted first. By understanding the mechanics of heroes and their role in Bomb Crypto, you can build a powerful team of miners and optimize your mining strategy to earn maximum rewards.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            During mining, natural disasters are common events. Shields protect the hero from disasters. When attacked by an enemy, the hero will run out of mana if no protective shield is left.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Treasure Hunt Features</h3>
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            {treasureHuntFeatures.map((feature) => (
              <NavLink
                key={feature.url}
                to={feature.url}
                className="group bg-card border rounded-lg p-6 hover:border-yellow-500/50 hover:bg-yellow-500/5 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{feature.emoji}</span>
                  <h4 className="font-semibold text-foreground group-hover:text-yellow-400 transition-colors">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </NavLink>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Rewards</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In Treasure Hunt Mode, players will receive rewards through 2 types of rewards: Base Reward and Ranking Reward.
          </p>
          
          <div className="my-8 flex justify-center">
            <img 
              src="/lovable-uploads/77f2cdb2-82ca-453c-9ba2-b15e62463e15.webp" 
              alt="Bomb Crypto reward system diagram showing Base Rewards and Ranking Rewards with different staking scenarios for BCOIN, SEN, and STAR CORE tokens"
              className="max-w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>

          <h4 className="text-lg font-semibold mb-3 text-foreground">Base Reward</h4>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Base Reward is the fundamental reward you earn for successfully breaking Block Chests in Bomb Crypto. It consists of BCOIN and SEN and Star Core. BCOIN and SEN are the in-game currencies essential for mint Heroes, buying Automine and Quartz. However, there's a crucial factor that determines whether your Heroes receive these Base Rewards: staking.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            To earn BCOIN and SEN Base Rewards from breaking Block Chests, your Heroes must have a minimum amount of the corresponding token staked. These minimum staking requirements vary depending on the Hero's rarity:
          </p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rarity</TableHead>
                <TableHead>Stake amount (BCOIN)</TableHead>
                <TableHead>Stake amount (SEN)</TableHead>
                <TableHead>Time lock (days)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {baseRewardStaking.map((row) => (
                <TableRow key={row.rarity}>
                  <TableCell>{row.rarity}</TableCell>
                  <TableCell>{row.bcoin}</TableCell>
                  <TableCell>{row.sen}</TableCell>
                  <TableCell>{row.timeLock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
            If a Hero does not meet the minimum staking requirements for either BCOIN or SEN, they will not receive those specific Base Rewards when breaking Block Chests. However, they can still participate in the Treasure Hunt mode, break blocks, and earn Star Cores:
          </p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rarity</TableHead>
                <TableHead>Reward</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Hero L with or without stake</TableCell>
                <TableCell>None</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hero S has stake with 0 BCOIN/SEN</TableCell>
                <TableCell>Star Core</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hero S only stake BCOIN with min amount of BCOIN</TableCell>
                <TableCell>BCOIN+ Star Core</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hero S only stake SEN with min amount of SEN</TableCell>
                <TableCell>SEN + Star Core</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hero S Stake both BCOIN and SEN with min amount</TableCell>
                <TableCell>BCOIN + SEN + Star Core</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <p className="text-muted-foreground leading-relaxed">
            By understanding and utilizing the Base Reward and staking system effectively, you can optimize your earnings and progress in Bomb Crypto, unlocking a world of possibilities and rewards.
          </p>

          <h4 className="text-lg font-semibold mb-3 text-foreground mt-6">Ranking Reward</h4>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Bomb Crypto introduces the Ranking Stake Reward system, a dynamic and competitive way to earn BCoin and SEN based on your Heroes' performance and staked tokens. This system replaces Star Core rewards in the Treasure Hunt mode, focusing solely on BCOIN and SEN distribution.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Disable Star Core Rewards:</strong> Star Cores are no longer awarded through the Ranking Stake Reward system. This change does not affect the drop rates of BCoin and SEN, ensuring a balanced reward distribution.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Token Rewards Based on Staking:</strong> Only Hero S with staking is eligible for rewards. The type of token rewarded depends on the staked tokens:
          </p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hero S Staking Condition</TableHead>
                <TableHead>Ranking Reward</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>No stake</TableCell>
                <TableCell>None</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Staked with BCOIN only</TableCell>
                <TableCell>BCOIN</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Staked with SEN only</TableCell>
                <TableCell>SEN</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Staked with both BCOIN and SEN</TableCell>
                <TableCell>BCOIN + SEN</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <p className="text-muted-foreground leading-relaxed mb-4">
            The Ranking Stake Reward system operates on a tiered reward pool structure, designed to promote competition and incentivize staking. Here's how it works:
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Ten Distinct Reward Pools:</strong> Rewards are allocated into ten separate pools, each corresponding to a specific Hero rarity: Common Pool, Rare Pool, Super Rare Pool, Epic Pool, Legend Pool, Super Legend Pool, Mega Pool, Super Mega Pool, Mystic Pool, and Super Mystic Pool.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This division ensures that rewards are distributed fairly across different rarity levels, providing opportunities for all players to earn. With the same rarity, the hero with the most stake will receive the highest reward, then the reward gradually decreases for the remaining heroes.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Ranking Based on BCOIN and SEN Staked:</strong> Your Hero's position within their respective reward pool is determined by the amount of BCOIN and SEN staked on them. The more you staked, the higher the Hero's ranking within their pool. With the same rarity, the hero with the most stake will receive the highest reward, then the reward gradually decreases for the remaining Heroes. This ranking system encourages players to strategically allocate their BCOIN and SEN to maximize their potential rewards.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Dynamic Reward Distribution:</strong> Every minute, the system dynamically calculates and distributes rewards to Heroes who have successfully broken blocks or chests within that timeframe. Whichever Hero breaks the chest, the reward will fly into that reward pool rarity and can be seen in game. Within 60 seconds, if the Hero fails to destroy any chest, the reward will be +0 +0 +0. The higher a Hero's ranking within their pool, the larger their share of the available rewards. This creates a competitive environment where the most active and strategically staked Heroes reap the greatest benefits.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-3">
            <strong>Hero's reward distribution in the same pool:</strong>
          </p>

          <Tabs value={selectedPool} onValueChange={setSelectedPool}>
            <TabsList className="flex flex-wrap h-auto justify-start gap-1">
              {rewardPools.map((pool) => (
                <TabsTrigger key={pool.name} value={pool.name}>
                  {pool.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>Total Heroes</TableHead>
                  <TableHead>BCOIN</TableHead>
                  <TableHead>SEN</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rewardRanks.map(({ rank, totalHeroes }, index) => (
                  <TableRow key={rank}>
                    <TableCell>{rank}</TableCell>
                    <TableCell>{totalHeroes.toLocaleString("en-US")}</TableCell>
                    <TableCell>{formatReward(activePool.bcoin[index])}</TableCell>
                    <TableCell>{formatReward(activePool.bcoin[index] * 2)}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell>Remaining</TableCell>
                  <TableCell>∞</TableCell>
                  <TableCell>{formatReward(0)}</TableCell>
                  <TableCell>{formatReward(0)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4 mt-4">
            <strong>Daily Pool Refills: Ensuring Consistent Rewards:</strong> To maintain a continuous and engaging reward system, all ten reward pools are replenished with fresh BCOIN and SEN every 24 hours. This ensures that even if a pool is exhausted, players have a renewed opportunity to earn rewards the following day.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-3">
            <strong>The Total Daily Rewards Pool:</strong>
          </p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rarity</TableHead>
                <TableHead>BCOIN</TableHead>
                <TableHead>SEN</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {totalDailyPool.map((row) => (
                <TableRow key={row.rarity}>
                  <TableCell>{row.rarity}</TableCell>
                  <TableCell>{row.bcoin}</TableCell>
                  <TableCell>{row.sen}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Pool Exhaustion and Reset:</strong> In the event that all reward pools are completely depleted before the 24-hour mark, the system will temporarily halt reward distribution until the next scheduled refill. This mechanism prevents over-rewarding and maintains a balanced ecosystem within the game.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Please note that with Hero Legacy, the system will not count the BCOIN need to transfer HeroL to HeroS. And HeroL stake will deduct the stake fee to become HeroS and then take the remaining stake to compare with other Heroes.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-3">
            <strong>Withdraw Fee:</strong>
          </p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Day</TableHead>
                <TableHead>Withdraw Fee</TableHead>
                <TableHead>Day</TableHead>
                <TableHead>Withdraw Fee</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Day 01</TableCell>
                <TableCell>30%</TableCell>
                <TableCell>Day 16</TableCell>
                <TableCell>15%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Day 02</TableCell>
                <TableCell>29%</TableCell>
                <TableCell>Day 17</TableCell>
                <TableCell>14%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Day 03</TableCell>
                <TableCell>28%</TableCell>
                <TableCell>Day 18</TableCell>
                <TableCell>13%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Day 04</TableCell>
                <TableCell>27%</TableCell>
                <TableCell>Day 19</TableCell>
                <TableCell>12%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Day 05</TableCell>
                <TableCell>26%</TableCell>
                <TableCell>Day 20</TableCell>
                <TableCell>11%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Day 06</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>Day 21</TableCell>
                <TableCell>10%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Day 07</TableCell>
                <TableCell>24%</TableCell>
                <TableCell>Day 22</TableCell>
                <TableCell>9%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Day 08</TableCell>
                <TableCell>23%</TableCell>
                <TableCell>Day 23</TableCell>
                <TableCell>8%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Day 09</TableCell>
                <TableCell>22%</TableCell>
                <TableCell>Day 24</TableCell>
                <TableCell>7%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Day 10</TableCell>
                <TableCell>21%</TableCell>
                <TableCell>Day 25</TableCell>
                <TableCell>6%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Day 11</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>Day 26</TableCell>
                <TableCell>5%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Day 12</TableCell>
                <TableCell>19%</TableCell>
                <TableCell>Day 27</TableCell>
                <TableCell>4%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Day 13</TableCell>
                <TableCell>18%</TableCell>
                <TableCell>Day 28</TableCell>
                <TableCell>3%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Day 14</TableCell>
                <TableCell>17%</TableCell>
                <TableCell>Day 29</TableCell>
                <TableCell>2%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Day 15</TableCell>
                <TableCell>16%</TableCell>
                <TableCell>Day 30</TableCell>
                <TableCell>1%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>From Day 31</TableCell>
                <TableCell>0%</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>
    </PageContent>
  );
}
