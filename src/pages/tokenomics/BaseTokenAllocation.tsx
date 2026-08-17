import { PageContent } from "@/components/PageContent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function BaseTokenAllocation() {
  return (
    <PageContent title="BASE Token Allocation" emoji="⚡">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Similar to BNB chain, Polygon and TON, BCOIN (BASE) will also have its own token allocation
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
                  <TableCell>BASE Public Holders</TableCell>
                  <TableCell>500,000</TableCell>
                  <TableCell>NA</TableCell>
                  <TableCell>Unlocked</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bridge Abutment Supply</TableCell>
                  <TableCell>99,500,000</TableCell>
                  <TableCell>NA</TableCell>
                  <TableCell>Locked</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        <section>
          <p className="text-muted-foreground leading-relaxed">
            <strong>BCOIN (BASE) Bridge Abutment Supply</strong> will be update later when the token release.
          </p>
        </section>
      </div>
    </PageContent>
  );
}