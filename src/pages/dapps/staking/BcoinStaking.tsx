
import { PageContent } from "@/components/PageContent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function BcoinStaking() {
  const withdrawFeeData = [
    { day: "Day 01", fee: "15%" },
    { day: "Day 02", fee: "14%" },
    { day: "Day 03", fee: "13%" },
    { day: "Day 04", fee: "12%" },
    { day: "Day 05", fee: "11%" },
    { day: "Day 06", fee: "10%" },
    { day: "Day 07", fee: "9%" },
    { day: "Day 08", fee: "8%" },
    { day: "Day 09", fee: "7%" },
    { day: "Day 10", fee: "6%" },
    { day: "Day 11", fee: "5%" },
    { day: "Day 12", fee: "4%" },
    { day: "Day 13", fee: "3%" },
    { day: "Day 14", fee: "2%" },
    { day: "Day 15", fee: "1%" },
    { day: "From Day 16", fee: "0%" }
  ];

  return (
    <PageContent title="BCOIN Staking" emoji="💰">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">BCOIN Staking Now Available: Earn up to 15% APY</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Maximize your BCOIN holdings by staking them on our platform. Enjoy a competitive annual percentage yield (APY) of approximately 15%, translating to daily earnings of 0.041%. Your BCOIN rewards will be automatically deposited into your account each day, allowing for effortless and secure growth of your assets.
          </p>
          
          <div className="mb-6">
            <img 
              src="/lovable-uploads/edd99c31-f853-4953-bef7-78dadb958d86.png" 
              alt="BCOIN Staking Dashboard" 
              className="w-full max-w-4xl mx-auto rounded-lg border shadow-lg"
            />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Unstaking Fees</h3>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              When unstaking tokens in Bomb Crypto, users are subject to a transaction fee based on the amount of tokens being unstaked. However, the fee structure is designed to incentivize long-term staking. The unstaking fee gradually decreases as the staking duration increases. This means that if you stake your tokens for a longer period, you'll pay a smaller fee when you decide to unstake them.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              To maximize your rewards and minimize fees, it is recommended to stake your tokens for at least 16 days. After this period, the unstaking fee reaches its lowest point, providing you with the most cost-effective way to access your tokens.
            </p>
            <p className="text-muted-foreground leading-relaxed font-medium">
              The longer you stake your tokens, the lower the unstaking fee will be.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Withdraw Fee Table</h3>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Day</TableHead>
                  <TableHead className="font-semibold">Withdraw Fee</TableHead>
                  <TableHead className="font-semibold">Day</TableHead>
                  <TableHead className="font-semibold">Withdraw Fee</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 8 }, (_, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{withdrawFeeData[i]?.day}</TableCell>
                    <TableCell>{withdrawFeeData[i]?.fee}</TableCell>
                    <TableCell className="font-medium">{withdrawFeeData[i + 8]?.day}</TableCell>
                    <TableCell>{withdrawFeeData[i + 8]?.fee}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </PageContent>
  );
}
