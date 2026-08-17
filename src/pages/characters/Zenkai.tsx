
import { PageContent } from "@/components/PageContent";

export default function Zenkai() {
  return <PageContent title="Zenkai - The Ninja" emoji="⚡">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">
        </h2>
        
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/c986ab17-7417-479b-a00a-904d0954a296.png" 
            alt="Zenkai - The Ninja character" 
            className="max-w-full h-auto rounded-lg"
          />
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          Zenkai was once a Ninja warrior from a hidden village deep within the jungle, where Ninjas were trained not for glory, but to silently protect peace.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          But one night, a mysterious army of monsters descended from the sky—bringing bombs, fire, and destruction. The village was wiped out.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Zenkai was the sole survivor. With no home left to return to, he set out to track down the monsters.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          With lightning-fast speed and masterful bomb skills, join Zenkai on his journey in the game Bomberland.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Let's wait to see how he fights in Bomberland.
        </p>
      </div>
    </PageContent>;
}
