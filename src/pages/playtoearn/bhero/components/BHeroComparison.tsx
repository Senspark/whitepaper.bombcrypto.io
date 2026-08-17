
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function BHeroComparison() {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4 text-foreground">Feature Comparison Table</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Features</TableHead>
            <TableHead>Hero L</TableHead>
            <TableHead>Hero S</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Fusion</TableCell>
            <TableCell>Yes</TableCell>
            <TableCell>Yes</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Exchange material</TableCell>
            <TableCell>Yes</TableCell>
            <TableCell>Yes</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Repair Shield</TableCell>
            <TableCell>No</TableCell>
            <TableCell>Yes</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Upgrade Shield</TableCell>
            <TableCell>No</TableCell>
            <TableCell>Yes</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Mint token</TableCell>
            <TableCell>No</TableCell>
            <TableCell>Yes</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
