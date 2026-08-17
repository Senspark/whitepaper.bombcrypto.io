
import { TournamentTable } from "./TournamentTable";

interface TournamentResult {
  rank: string;
  player: string;
  reward: string;
}

interface TournamentSectionProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  results?: TournamentResult[];
  additionalContent?: React.ReactNode;
}

export function TournamentSection({ 
  title, 
  description, 
  imageUrl, 
  imageAlt, 
  results, 
  additionalContent 
}: TournamentSectionProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      
      {imageUrl && (
        <div className="mt-6 flex justify-center">
          <img 
            src={imageUrl}
            alt={imageAlt || `${title} tournament image`}
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}
      
      <p className="text-muted-foreground mb-4">
        {description}
      </p>
      
      {results && <TournamentTable results={results} />}
      
      {additionalContent}
    </div>
  );
}
