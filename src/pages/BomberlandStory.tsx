
import { PageContent } from "@/components/PageContent";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function BomberlandStory() {
  return (
    <PageContent title="Bomberland Story" emoji="📖">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Once upon a time in the Bomberland.</h2>
        
        <div className="flex flex-col items-center space-y-3">
          <img 
            src="/lovable-uploads/86ef5e37-9490-4ce2-8f7b-e56a3016c94f.png" 
            alt="Bomb Crypto characters silhouettes" 
            className="max-w-full h-auto rounded-lg"
          />
          <p className="text-sm text-muted-foreground italic">Bomb Crypto: A story of Bomberland</p>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          Far away, far from Earth, there is a peaceful land called Bomberland, where the inhabitants are living extremely peacefully and happily.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          But one day, an evil force came to invade Bomberland.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          He burned down forests, destroyed houses, arrested people and stole BCOIN and SEN — the people's property.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          To bring peace to the land, the kingdom's scientists have researched and created heroic bombers so they can set up a team to rescue BCOIN, SEN and the people while destroying the henchmen of evil forces.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          And of course, no experiment went smoothly.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Scientists have had been through a lot of failures.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          They figured out that Bomb Crypto Heroes would have different rarity levels depending on their formula quantifications.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          The rarity is hierarchical from Common, Rare, Super Rare, Epic, Legend and Super Legend, the lower the success rate is.
        </p>

        <div className="flex justify-center mt-8">
          <div className="max-w-full w-full">
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/Du-AKIJZk1Y"
                title="Bomb Crypto Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </AspectRatio>
          </div>
        </div>
      </div>
    </PageContent>
  );
}
