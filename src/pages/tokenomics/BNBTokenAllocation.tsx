
import { PageContent } from "@/components/PageContent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function BNBTokenAllocation() {
  return (
    <PageContent title="BNB Token Allocation" emoji="⚡">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            As we explained in the Multiple Chains Tokenomics section, to distribute enough and quickly when users bridge between chains, each chain will always have real tokens and cloned tokens. This amount of cloned tokens will be locked and will only become real tokens when and only when there is a certain amount of real tokens bridged from another chain.
          </p>
        </section>

        <section>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Allocations</TableHead>
                  <TableHead>Amount</TableHead>
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
                  <TableCell>NA</TableCell>
                  <TableCell>Unlocked</TableCell>
                  <TableCell>–</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Polygon Bridge Abutment Supply</TableCell>
                  <TableCell>12,000,000</TableCell>
                  <TableCell>NA</TableCell>
                  <TableCell>Locked</TableCell>
                  <TableCell>–</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Supply for New Blockchain Networks</TableCell>
                  <TableCell>10,000,000</TableCell>
                  <TableCell>4 months</TableCell>
                  <TableCell>16 months</TableCell>
                  <TableCell>Each 2 weeks</TableCell>
                  <TableCell>Vesting via Hedgey</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Staking Reward</TableCell>
                  <TableCell>5,000,000</TableCell>
                  <TableCell>0 months</TableCell>
                  <TableCell>24 months</TableCell>
                  <TableCell>Each 2 weeks</TableCell>
                  <TableCell>Vesting via Hedgey</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Play to Earn</TableCell>
                  <TableCell>2,500,000</TableCell>
                  <TableCell>0 months</TableCell>
                  <TableCell>24 months</TableCell>
                  <TableCell>Each 2 weeks</TableCell>
                  <TableCell>Vesting via Hedgey</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Token Sales</TableCell>
                  <TableCell>2,000,000</TableCell>
                  <TableCell>0 months</TableCell>
                  <TableCell>24 months</TableCell>
                  <TableCell>Each 2 weeks</TableCell>
                  <TableCell>Vesting via Hedgey</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Reserve from Legacy Tokenomics</TableCell>
                  <TableCell>3,500,000</TableCell>
                  <TableCell>0 months</TableCell>
                  <TableCell>6 months</TableCell>
                  <TableCell>Each month</TableCell>
                  <TableCell>Unlocked all on 21/9/2024</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        <section>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>BNB Bridge Abutment Supply:</strong>{" "}
            <a 
              href="https://bscscan.com/address/0xb10942e761347936F5EeDF217c834dAeD5935893"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors underline"
            >
              https://bscscan.com/address/0xb10942e761347936F5EeDF217c834dAeD5935893
            </a>
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            You can see the total amount of distribution on the current BNB chain through the following link:
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            <a 
              href="https://docs.google.com/spreadsheets/d/1SxRVyYIzKaNhQU5hDw7VHHVLYw3i7J8BrQx4dwesvRU/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors underline font-medium"
            >
              BNB Tokenomic
            </a>
          </p>
        </section>
      </div>
    </PageContent>
  );
}
