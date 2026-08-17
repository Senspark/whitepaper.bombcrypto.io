
import { PageContent } from "@/components/PageContent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function TONTokenAllocation() {
  return (
    <PageContent title="TON Token Allocation" emoji="⚡">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Similar to BNB chain, Polygon will also have its own token allocation
          </p>
        </section>

        <section>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Allocations</TableHead>
                  <TableHead>Tokens</TableHead>
                  <TableHead>Cliff</TableHead>
                  <TableHead>Lock</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>TON Public Holders</TableCell>
                  <TableCell>5,000,000</TableCell>
                  <TableCell>NA</TableCell>
                  <TableCell>Unlocked</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bridge Abutment Supply</TableCell>
                  <TableCell>95,000,000</TableCell>
                  <TableCell>NA</TableCell>
                  <TableCell>Locked</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        <section>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>BCOIN (TON) Bridge Abutment Supply:</strong>
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            <a 
              href="https://tonviewer.com/EQCs3CZYU9h3RJ5SgrMCOHyfUmuAbYdAtPSlaC4OqekTT1_6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors underline"
            >
              https://tonviewer.com/EQCs3CZYU9h3RJ5SgrMCOHyfUmuAbYdAtPSlaC4OqekTT1_6
            </a>
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            You can see the total amount of distribution on the current Polygon chain through the following link:
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            <a 
              href="https://docs.google.com/spreadsheets/d/1SxRVyYIzKaNhQU5hDw7VHHVLYw3i7J8BrQx4dwesvRU/edit?gid=1841333495#gid=1841333495&range=B9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors underline font-medium"
            >
              TON Tokenomics
            </a>
          </p>
        </section>
      </div>
    </PageContent>
  );
}
