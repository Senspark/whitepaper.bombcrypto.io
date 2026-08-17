
import { PageContent } from "@/components/PageContent";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function MintHero() {
  return (
    <PageContent title="Mint Hero" emoji="⚡">
      <div className="space-y-6">
        <div className="mb-6">
          <img 
            src="/lovable-uploads/903e2c73-140b-48d4-9937-a4aeba5f6d22.png" 
            alt="Buy Hero Interface" 
            className="w-full max-w-2xl mx-auto rounded-lg border"
          />
        </div>
        
        <p className="text-muted-foreground text-lg leading-relaxed">
          Users can Mint heroes through shops in Treasure Hunt Mode, there is no limit to the number of heroes that can be purchased, players can buy a large number of heroes at the same time by choosing the x1, x5, x10, x15 package.
        </p>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Mint Packages</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pack</TableHead>
                <TableHead>BCOIN</TableHead>
                <TableHead>SEN</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>x1</TableCell>
                <TableCell>45</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>x5</TableCell>
                <TableCell>225</TableCell>
                <TableCell>50</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>x10</TableCell>
                <TableCell>450</TableCell>
                <TableCell>100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>x15</TableCell>
                <TableCell>675</TableCell>
                <TableCell>150</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Fee Distribution</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The 20% minting fee is allocated as follows:
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Marketing (5%)</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                This portion of the fee is dedicated to funding marketing initiatives, promoting Bomb Crypto to a wider audience, and attracting new players to the game.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">Burning (5%)</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A portion of the fee is used to purchase and permanently remove BCOIN tokens from circulation. This process, known as token burning, helps control the token supply and potentially increase the value of the remaining tokens over time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">DEV (10%)</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The remaining portion of the fee is allocated to the Dev's wallet as revenue.
              </p>
            </div>
          </div>
          
          <div className="mt-6">
            <img 
              src="/lovable-uploads/875a2fb5-1832-46a5-9bce-b0c83a59f632.png" 
              alt="Fee Distribution Diagram" 
              className="w-full max-w-2xl mx-auto rounded-lg border"
            />
          </div>
        </section>
      </div>
    </PageContent>
  );
}
