
import { PageContent } from "@/components/PageContent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function StakeHero() {
  return (
    <PageContent title="Stake Hero" emoji="💡">
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Invented by the Bomb Crypto team.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Hero staking is a rewarding feature in Bomb Crypto that allows you to earn rewards for successfully breaking Block Chests while staking your own Heroes. However, staking requires a specific amount of BCOIN and SEN to be staked alongside the hero.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          To stake your heroes, navigate to the staking section within the Bomb Crypto platform. Select the hero you wish to stake and the corresponding amount of BCOIN and SEN. Once you confirm the transaction, your hero will be staked, and you will start earning rewards based on the type and the amount of BCOIN and SEN staked.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          However, when you unstake before 30 days, you will spend a fee based on the formula below:
        </p>

        <p className="text-muted-foreground leading-relaxed">
          <strong>Early Unstake Fee:</strong> Total staked BCOIN/SEN * Fee Percentage<br/>
          <strong>After 30 Days:</strong> No fee
        </p>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Withdraw fees</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Important Notes:</strong>
          </p>
          <ul className="text-muted-foreground leading-relaxed mb-4 list-disc pl-6">
            <li>Unstaking must be done manually, it is not automatic.</li>
            <li>Players can stake multiple Legacy Heroes.</li>
            <li>Staking more than the required amount of BCOIN and SEN is allowed, potentially for future proof-of-stake features.</li>
          </ul>
          
          <div className="my-8 flex justify-center">
            <img 
              src="/lovable-uploads/3367291f-971f-429e-9d8a-2ed47603603e.webp" 
              alt="Bomb Crypto staking interface showing hero selection, wallet balance, staking dashboard with BCOIN amounts, stake/unstake buttons, and staking options"
              className="max-w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Staking Hero L</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            As mentioned in the BHero introduction, you can also stake Legacy Heroes (Hero L) to upgrade them into Hero S, which come equipped with shields. This process involves staking the Legacy Hero along with a predetermined amount of BCOIN for a specific duration. Once the staking period is complete, the Legacy Hero will transform into a Hero S, gaining the added protection of a shield.
          </p>

          <h4 className="text-lg font-semibold mb-4 text-foreground">Bcoin amount needed to stake for Hero L to become Hero S:</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rarity</TableHead>
                <TableHead>Stake amount (BCOIN)</TableHead>
                <TableHead>Time lock (days)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Common</TableCell>
                <TableCell>60</TableCell>
                <TableCell>30</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rare</TableCell>
                <TableCell>486</TableCell>
                <TableCell>30</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Super Rare</TableCell>
                <TableCell>971</TableCell>
                <TableCell>30</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Epic</TableCell>
                <TableCell>1942</TableCell>
                <TableCell>30</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Legend</TableCell>
                <TableCell>4854</TableCell>
                <TableCell>30</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Super Legend</TableCell>
                <TableCell>9709</TableCell>
                <TableCell>30</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Fee</h3>
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

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Staking Hero S</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            After successfully upgrading your Legacy Hero to a Hero S, you can further stake the Hero S to earn rewards. You will still need a minimum amount of BCOIN or Sen to stake.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            To increase fairness for players who stake twice, we have updated a new calculation for BHero Stake:
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Formula:</strong> weighted average = Σwx / Σw
          </p>

          <h4 className="text-lg font-semibold mb-4 text-foreground">Example 1:</h4>
          <Table className="mb-6">
            <TableHeader>
              <TableRow>
                <TableHead>Stake Order</TableHead>
                <TableHead>Stake Amount</TableHead>
                <TableHead>Stake Block Time</TableHead>
                <TableHead>Staked Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1st</TableCell>
                <TableCell>1000</TableCell>
                <TableCell>1234</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2nd</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1244</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <h4 className="text-lg font-semibold mb-4 text-foreground">Example 2:</h4>
          <Table className="mb-6">
            <TableHeader>
              <TableRow>
                <TableHead>Stake Order</TableHead>
                <TableHead>Stake Amount</TableHead>
                <TableHead>Stake Block Time</TableHead>
                <TableHead>Staked Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1st</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1234</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2nd</TableCell>
                <TableCell>1000</TableCell>
                <TableCell>1244</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <p className="text-muted-foreground leading-relaxed">
            When you participate in staking Hero S, you will have the opportunity to participate in receiving rewards from 2 types of reward: Base Reward and Ranking Reward. You can read the details in the Treasure Mode section.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
