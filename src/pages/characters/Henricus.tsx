
import { PageContent } from "@/components/PageContent";

export default function Henricus() {
  return (
    <PageContent title="Henricus - The Knight" emoji="⚡">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">
        </h2>
        
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/90449df8-12c7-460f-89e4-b60181800e2b.webp" 
            alt="Henricus - The Knight character" 
            className="max-w-full h-auto rounded-lg"
          />
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          The first revealed character in Bomb Crypto Hero of Bomberland.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          With the blood of a loyal knight who has always served to protect the land of Bomberland from ancient times.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Henricus fought countless battles, along with a sharp sword in his hand and a stud iron armor, plus technical upgrades from scientists.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          A chip has been attached to his brain so he can analyze the movement of the opponent and always strikes fatal blows.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          He is also the indestructible shield, protecting the team members.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          — He said: "Stand behind me, I'll get you to victory"
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Let's wait to see how he fights for Bomberland.
        </p>
      </div>
    </PageContent>
  );
}
