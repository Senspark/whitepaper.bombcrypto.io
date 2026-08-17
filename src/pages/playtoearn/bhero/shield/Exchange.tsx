
import { PageContent } from "@/components/PageContent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Exchange() {
  return (
    <PageContent title="Exchange" emoji="🔄">
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Unleashing the Power of Your Heroes</h3>
          <img src="/lovable-uploads/1cd172d1-5b9a-4ec3-9904-26c3e8aa787c.png" alt="Hero exchange interface" className="my-3" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            Beyond their combat prowess, your Bomb Crypto Heroes possess another valuable asset: their very essence. By choosing to burn (or destroy) a hero NFT, you can extract valuable Quartzs. These Quartzs serve a variety of purposes within the Bomb Crypto ecosystem, allowing you to upgrade or repair shield for another heroes.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Quartz Exchange Table</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rarity</TableHead>
                <TableHead>Number (HeroS)</TableHead>
                <TableHead>Number (HeroL)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Common</TableCell>
                <TableCell>5</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Rare</TableCell>
                <TableCell>10</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Super Rare</TableCell>
                <TableCell>20</TableCell>
                <TableCell>4</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Epic</TableCell>
                <TableCell>35</TableCell>
                <TableCell>7</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Legend</TableCell>
                <TableCell>55</TableCell>
                <TableCell>11</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Super Legend</TableCell>
                <TableCell>80</TableCell>
                <TableCell>16</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>
    </PageContent>
  );
}
