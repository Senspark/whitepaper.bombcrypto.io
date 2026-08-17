
import { PageContent } from "@/components/PageContent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function MultiChainTokenAllocation() {
  return (
    <PageContent title="Multi-chain Token Allocation" emoji="⚡">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            The circulating supply of $BCOIN is designed to incentivize long-term growth and sustainability. The anticipated circulating supply schedule is illustrated below.
          </p>
        </section>

        <section>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Allocations</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Chain</TableHead>
                  <TableHead>Cliff</TableHead>
                  <TableHead>Lock</TableHead>
                  <TableHead>Vesting</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>BNB Public Holders</TableCell>
                  <TableCell>65,000,000</TableCell>
                  <TableCell>BNB</TableCell>
                  <TableCell>NA</TableCell>
                  <TableCell>Unlocked</TableCell>
                  <TableCell>–</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Polygon Public Holders</TableCell>
                  <TableCell>12,000,000</TableCell>
                  <TableCell>Polygon</TableCell>
                  <TableCell>NA</TableCell>
                  <TableCell>Unlocked</TableCell>
                  <TableCell>–</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Supply for New Blockchain Networks</TableCell>
                  <TableCell>10,000,000</TableCell>
                  <TableCell>BNB</TableCell>
                  <TableCell>4 months</TableCell>
                  <TableCell>16 months</TableCell>
                  <TableCell>Each 2 weeks</TableCell>
                  <TableCell>Vesting via Hedgey</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Staking Reward</TableCell>
                  <TableCell>5,000,000</TableCell>
                  <TableCell>BNB</TableCell>
                  <TableCell>0 months</TableCell>
                  <TableCell>24 months</TableCell>
                  <TableCell>Each 2 weeks</TableCell>
                  <TableCell>Vesting via Hedgey</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Play to Earn</TableCell>
                  <TableCell>2,500,000</TableCell>
                  <TableCell>BNB</TableCell>
                  <TableCell>0 months</TableCell>
                  <TableCell>24 months</TableCell>
                  <TableCell>Each 2 weeks</TableCell>
                  <TableCell>Vesting via Hedgey</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Token Sales</TableCell>
                  <TableCell>2,000,000</TableCell>
                  <TableCell>BNB</TableCell>
                  <TableCell>0 months</TableCell>
                  <TableCell>24 months</TableCell>
                  <TableCell>Each 2 weeks</TableCell>
                  <TableCell>Vesting via Hedgey</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Reserve from Legacy Tokenomics</TableCell>
                  <TableCell>3,500,000</TableCell>
                  <TableCell>BNB</TableCell>
                  <TableCell>0 months</TableCell>
                  <TableCell>6 months</TableCell>
                  <TableCell>Each month</TableCell>
                  <TableCell>Unlocked all on 21/9/2024</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-4 text-muted-foreground text-sm space-y-1">
            <p>- Tokenomics v2 created date Mar 5th 2024</p>
            <p>- 4 weeks = a month</p>
            <p className="text-xl font-semibold mb-4 text-slate-950">Lock and Vest are deployed at Hedgey Finance</p>
            
            <div className="space-y-4 mt-6">
              <img 
                src="/lovable-uploads/c99d22fd-c5f1-413d-a6e9-7a50250e1630.png" 
                alt="Hedgey Finance Vesting Schedule" 
                className="max-w-full h-auto border border-border rounded-lg"
              />
              <img 
                src="/lovable-uploads/77d05cd2-a47a-4118-a968-57ba7862aeee.png" 
                alt="Token Allocation Details" 
                className="max-w-full h-auto border border-border rounded-lg"
              />
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Detail</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In 2024, we started building the project on multichain, so keeping the game economic stable and sustainable is extremely important. You can learn more details through the information below:
          </p>
          
          <h4 className="text-lg font-medium text-foreground">
            <a href="https://docs.google.com/spreadsheets/d/1SxRVyYIzKaNhQU5hDw7VHHVLYw3i7J8BrQx4dwesvRU/edit?gid=364184334#gid=364184334" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 transition-colors underline">
              Multiple Chains Tokenomics
            </a>
          </h4>
        </section>
      </div>
    </PageContent>
  );
}
