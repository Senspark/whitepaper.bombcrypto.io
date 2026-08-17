
import { PageContent } from "@/components/PageContent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function UpgradeShield() {
  return (
    <PageContent title="Upgrade Shield" emoji="↗️">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed">
            To bolster your heroes' defenses, you have the option to upgrade their shields using Quartz. Upgrading a shield increases its maximum durability, allowing it to withstand more damage before requiring repairs. The cost of each upgrade is determined by the shield's current level and the rarity of Hero, and you can upgrade shields at any time, irrespective of their remaining durability.
          </p>
          <img src="/lovable-uploads/7684b4d9-0a34-461f-84ea-e16aa3ecfd43.png" alt="Shield upgrade interface" className="my-3" />
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Number of Quartz Required to Upgrade Shield</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rarity</TableHead>
                <TableHead>Lv1</TableHead>
                <TableHead>Lv2</TableHead>
                <TableHead>Lv3</TableHead>
                <TableHead>Lv4</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Common</TableCell>
                <TableCell>0</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Rare</TableCell>
                <TableCell>0</TableCell>
                <TableCell>2</TableCell>
                <TableCell>2</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Super Rare</TableCell>
                <TableCell>0</TableCell>
                <TableCell>4</TableCell>
                <TableCell>4</TableCell>
                <TableCell>4</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Epic</TableCell>
                <TableCell>0</TableCell>
                <TableCell>6</TableCell>
                <TableCell>6</TableCell>
                <TableCell>6</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Legend</TableCell>
                <TableCell>0</TableCell>
                <TableCell>8</TableCell>
                <TableCell>8</TableCell>
                <TableCell>8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Super Legend</TableCell>
                <TableCell>0</TableCell>
                <TableCell>10</TableCell>
                <TableCell>10</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Durability Points After Upgrade</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rarity</TableHead>
                <TableHead>Lv1</TableHead>
                <TableHead>Lv2</TableHead>
                <TableHead>Lv3</TableHead>
                <TableHead>Lv4</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Common</TableCell>
                <TableCell>1000</TableCell>
                <TableCell>2000</TableCell>
                <TableCell>3000</TableCell>
                <TableCell>4000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Rare</TableCell>
                <TableCell>1125</TableCell>
                <TableCell>2250</TableCell>
                <TableCell>3375</TableCell>
                <TableCell>4500</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Super Rare</TableCell>
                <TableCell>1250</TableCell>
                <TableCell>2500</TableCell>
                <TableCell>3750</TableCell>
                <TableCell>5000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Epic</TableCell>
                <TableCell>1500</TableCell>
                <TableCell>3000</TableCell>
                <TableCell>4500</TableCell>
                <TableCell>6000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Legend</TableCell>
                <TableCell>1750</TableCell>
                <TableCell>3500</TableCell>
                <TableCell>5250</TableCell>
                <TableCell>7000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Super Legend</TableCell>
                <TableCell>2000</TableCell>
                <TableCell>4000</TableCell>
                <TableCell>6000</TableCell>
                <TableCell>8000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>
    </PageContent>
  );
}
