
import { PageContent } from "@/components/PageContent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function RepairShield() {
  return (
    <PageContent title="Repair Shield" emoji="⚒️">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Inevitably, shields will sustain damage in the heat of combat. But fear not, as damaged shields can be readily repaired using Quartz, a valuable in-game resource. The quantity of Quartz needed for repair varies depending on the rarity of the Hero and the level of shield, with rarer Hero and higher level shields requiring more resources for restoration.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">How to Obtain Quartz</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            There are 2 ways for you to own Quartz:
          </p>
          <ul className="text-muted-foreground space-y-2 ml-6">
            <li>• Buy Quartz in the shop with BCOIN or SEN</li>
            <li>• Burn heroes to own separated Quartz</li>
          </ul>
          <img src="/lovable-uploads/988192dd-91d3-415a-acfe-e67cb3b994fb.webp" alt="Shield repair interface" className="my-3" />
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Repair Costs</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For each type of Hero, it will cost a different amount of Quartz to repair the shield. The rarer the Hero, the higher the amount of Quartz needed. However, in return, the amount of damage absorbed by the shield is also much higher than that of low-level Heroes.
          </p>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rarity</TableHead>
                <TableHead>Quartz LV1</TableHead>
                <TableHead>Quartz LV2</TableHead>
                <TableHead>Quartz LV3</TableHead>
                <TableHead>Quartz LV4</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Common</TableCell>
                <TableCell>1</TableCell>
                <TableCell>2</TableCell>
                <TableCell>3</TableCell>
                <TableCell>4</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Rare</TableCell>
                <TableCell>2</TableCell>
                <TableCell>4</TableCell>
                <TableCell>6</TableCell>
                <TableCell>8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Super Rare</TableCell>
                <TableCell>4</TableCell>
                <TableCell>8</TableCell>
                <TableCell>12</TableCell>
                <TableCell>16</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Epic</TableCell>
                <TableCell>6</TableCell>
                <TableCell>12</TableCell>
                <TableCell>18</TableCell>
                <TableCell>24</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Legend</TableCell>
                <TableCell>8</TableCell>
                <TableCell>16</TableCell>
                <TableCell>24</TableCell>
                <TableCell>32</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Super Legend</TableCell>
                <TableCell>10</TableCell>
                <TableCell>20</TableCell>
                <TableCell>30</TableCell>
                <TableCell>40</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>
    </PageContent>
  );
}
