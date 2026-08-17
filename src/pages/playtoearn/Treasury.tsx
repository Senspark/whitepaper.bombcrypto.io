
import { PageContent } from "@/components/PageContent";

export default function Treasury() {
  return (
    <PageContent title="Treasury" emoji="🗳️">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            All BCOIN and SEN consumed in the game will be returned to Treasury and divided into 4 parts:
          </p>
          <ul className="space-y-3 text-muted-foreground leading-relaxed">
            <li><strong>80%</strong> will be returned to the Community Treasury. This part will be used as rewards for users.</li>
            <li><strong>5%</strong> will be returned to the Marketing Treasury. This will be used to pay for marketing and operational costs.</li>
            <li><strong>10%</strong> will be returned to the Dev. This part will be reserved for Devs as revenue and develop new game features.</li>
            <li><strong>5%</strong> will be returned to burn. Our periodic burning ensures sustainable value for BCOIN as well as the Bomb Crypto economy.</li>
          </ul>
          
          <div className="my-8 flex justify-center">
            <img 
              src="/lovable-uploads/b912a726-7df8-425b-aa08-28add69105dc.png" 
              alt="Bomb Crypto Treasury system diagram showing token flow: 80% to Community Treasury, 10% to Dev, 5% to Marketing, and 5% to Burn from players' spending"
              className="max-w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>
        </section>
      </div>
    </PageContent>
  );
}
