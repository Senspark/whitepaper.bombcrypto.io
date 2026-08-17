
import { PageContent } from "@/components/PageContent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function SenStaking() {
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
    <PageContent title="SEN Staking" emoji="💰">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">Staking SEN</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Staking your SEN tokens is a powerful way to both increase your holdings and contribute to the stability and growth of the Bomb Crypto ecosystem. By locking up your SEN through our user-friendly staking dashboard, you'll unlock a world of passive income potential and exclusive benefits. Staking is our way of expressing gratitude to the dedicated community that believes in the long-term vision of Bomb Crypto. When you stake your SEN, you're not just holding onto an asset; you're actively participating in securing the network and ensuring its smooth operation. In return, you'll be rewarded with additional SEN tokens, effectively allowing your holdings to grow effortlessly over time.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              One of the most appealing aspects of SEN staking is its simplicity. Once you've staked your tokens, you can sit back and watch your rewards accumulate passively. There's no need for active trading or complex strategies. Simply stake your SEN and let the power of compounding rewards work its magic. It's truly a way to earn while you sleep!
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The annual percentage yield (APY) of approximately 39,61%, translating to daily earnings of 0.1%. Your SEN rewards will be automatically deposited into your account each day, allowing for effortless and secure growth of your assets.
            </p>
            <p className="text-muted-foreground leading-relaxed font-medium">
              The more SEN you pledge, the higher the rewards you will receive
            </p>
            
            <div className="mb-6">
              <img 
                src="/lovable-uploads/27c18bf8-38f2-497e-90ba-f78fe78303c1.png" 
                alt="SEN Staking Dashboard" 
                className="w-full max-w-4xl mx-auto rounded-lg border shadow-lg"
              />
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Unstaking Fees</h3>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Similar to BCOIN, when you unstake SEN, you will also incur a withdrawal fee. The longer you staking, the withdrawal fee will decrease according to the table below:
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
