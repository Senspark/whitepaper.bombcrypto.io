
import { PageContent } from "@/components/PageContent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function LegacyAllocation() {
  return (
    <PageContent title="Legacy Allocation" emoji="🪙">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Overall</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            The circulating supply of $BCOIN is designed to incentivize long-term growth and sustainability. The anticipated circulating supply schedule is illustrated below. This allocation is only calculated on BNB chain, as Bomb Crypto is only built on BNB at the beginning.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-foreground mb-4">From September 2021 to February 2024</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Allocation</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Percentage</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Total BCOIN</TableCell>
                  <TableCell>100,000,000</TableCell>
                  <TableCell>100%</TableCell>
                  <TableCell>Q3 2021</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Private Sale</TableCell>
                  <TableCell>6,000,000</TableCell>
                  <TableCell>6%</TableCell>
                  <TableCell>Q3 2021, Locked 1 month, vest 10% monthly</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>IDO</TableCell>
                  <TableCell>2,000,000</TableCell>
                  <TableCell>2%</TableCell>
                  <TableCell>Q3 2021</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Listing Pancakeswap</TableCell>
                  <TableCell>1,000,000</TableCell>
                  <TableCell>1%</TableCell>
                  <TableCell>Q3 2021</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Play to Earn</TableCell>
                  <TableCell>20,000,000</TableCell>
                  <TableCell>20%</TableCell>
                  <TableCell>Locked, issuance starts Q4 2021–Q1 2022. Dynamic reward pool</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Staking Reward</TableCell>
                  <TableCell>20,000,000</TableCell>
                  <TableCell>20%</TableCell>
                  <TableCell>Locked: issuance starts in Q4 2021, Q1 2022</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ecosystem Fund</TableCell>
                  <TableCell>6,000,000</TableCell>
                  <TableCell>6%</TableCell>
                  <TableCell>Locked: issuance starts in Q4 2021, Q1 2022</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Team</TableCell>
                  <TableCell>25,000,000</TableCell>
                  <TableCell>25%</TableCell>
                  <TableCell>Locked 1 year, then vest linearly over 1 year</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Advisor</TableCell>
                  <TableCell>3,000,000</TableCell>
                  <TableCell>3%</TableCell>
                  <TableCell>Locked 1 year, then vest linearly over 1 year</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>DEX Liquidity</TableCell>
                  <TableCell>5,000,000</TableCell>
                  <TableCell>5%</TableCell>
                  <TableCell>Locked 1 month, then 5% monthly</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Reserves</TableCell>
                  <TableCell>12,000,000</TableCell>
                  <TableCell>12%</TableCell>
                  <TableCell>Locked 1 year, then vest linearly over 2 years</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-foreground mb-4">Detail</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            To find out the full legacy vesting period, you can find details here:
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            <a 
              href="https://docs.google.com/spreadsheets/d/1SxRVyYIzKaNhQU5hDw7VHHVLYw3i7J8BrQx4dwesvRU/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors underline font-medium"
            >
              Legacy Tokenomics
            </a>
          </p>
        </section>
      </div>
    </PageContent>
  );
}
