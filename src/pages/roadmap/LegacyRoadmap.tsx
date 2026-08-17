
import { PageContent } from "@/components/PageContent";

export default function LegacyRoadmap() {
  return (
    <PageContent title="Legacy Roadmap" emoji="📍">
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-500 mb-4">Legacy Achievements</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The Legacy Roadmap serves as a comprehensive archive of Bomb Crypto's milestones, achievements, and feature implementations over the past three years. It showcases the project's dedication to continuous improvement, innovation, and delivering a captivating gaming experience to our community. By exploring the roadmap, players can gain a deeper understanding of the project's evolution and the passion that drives our development.
          </p>
        </div>

        <section>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Development Timeline</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">Q3/2021</th>
                  <th className="border border-border p-3 text-left font-semibold">Q4/2021</th>
                  <th className="border border-border p-3 text-left font-semibold">Q1/2022</th>
                  <th className="border border-border p-3 text-left font-semibold">Q2/2022</th>
                  <th className="border border-border p-3 text-left font-semibold">Q3/2022</th>
                  <th className="border border-border p-3 text-left font-semibold">Q4/2022</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3 align-top">
                    <div className="space-y-2">
                      <div className="text-sm">Buy hero</div>
                      <div className="text-sm">Hero stats & upgrade</div>
                      <div className="text-sm">Hero rescue</div>
                      <div className="text-sm">Buy house</div>
                      <div className="text-sm">Treasure hunt mode</div>
                    </div>
                  </td>
                  <td className="border border-border p-3 align-top">
                    <div className="space-y-2">
                      <div className="text-sm">Add marketplace</div>
                      <div className="text-sm">Add story mode</div>
                      <div className="text-sm">Add new skins</div>
                    </div>
                  </td>
                  <td className="border border-border p-3 align-top">
                    <div className="space-y-2">
                      <div className="text-sm">VIP & stake</div>
                      <div className="text-sm">New story mode level</div>
                    </div>
                  </td>
                  <td className="border border-border p-3 align-top">
                    <div className="space-y-2">
                      <div className="text-sm">Add new battle mode</div>
                      <div className="text-sm">Add leaderboard</div>
                      <div className="text-sm">Add Amazon Survival</div>
                    </div>
                  </td>
                  <td className="border border-border p-3 align-top">
                    <div className="space-y-2">
                      <div className="text-sm">Add vote</div>
                      <div className="text-sm">Add Auto Mine</div>
                    </div>
                  </td>
                  <td className="border border-border p-3 align-top">
                    <div className="space-y-2">
                      <div className="text-sm">Add NFT Drop in PVP</div>
                      <div className="text-sm">Add Market NFT in game</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>


      </div>
    </PageContent>
  );
}
