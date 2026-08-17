
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface TournamentResult {
  rank: string;
  player: string;
  reward: string;
}

interface TournamentTableProps {
  results: TournamentResult[];
}

export function TournamentTable({ results }: TournamentTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Rank</TableHead>
          <TableHead>Player</TableHead>
          <TableHead>Reward</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {results.map((result, index) => (
          <TableRow key={index}>
            <TableCell>{result.rank}</TableCell>
            <TableCell>{result.player}</TableCell>
            <TableCell>{result.reward}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
