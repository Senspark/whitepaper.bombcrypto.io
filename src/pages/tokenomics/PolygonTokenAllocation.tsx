
import { PageContent } from "@/components/PageContent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function PolygonTokenAllocation() {
  return (
    <PageContent title="Polygon Token Allocation" emoji="⚡">
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
                  <TableHead>Vest</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Polygon Public Holders</TableCell>
                  <TableCell>12,000,000</TableCell>
                  <TableCell>NA</TableCell>
                  <TableCell>Unlocked</TableCell>
                  <TableCell>None</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>BNB Bridge Abutment Supply</TableCell>
                  <TableCell>88,000,000</TableCell>
                  <TableCell>NA</TableCell>
                  <TableCell>Locked</TableCell>
                  <TableCell>None</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        <section>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>BNB BCOIN Bridge Abutment Supply:</strong>
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            <a 
              href="https://polygonscan.com/address/0x29ec66F95E2294CB383206e88931eE11c228b4C5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors underline"
            >
              https://polygonscan.com/address/0x29ec66F95E2294CB383206e88931eE11c228b4C5
            </a>
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            You can see the total amount of distribution on the current Polygon chain through the following link:
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            <a 
              href="https://docs.google.com/spreadsheets/d/1SxRVyYIzKaNhQU5hDw7VHHVLYw3i7J8BrQx4dwesvRU/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors underline font-medium"
            >
              Polygon Tokenomic
            </a>
          </p>
        </section>
      </div>
    </PageContent>
  );
}
