
import { PageContent } from "@/components/PageContent";
import { NavLink } from "react-router-dom";

const roadmapFeatures = [
  { title: "Ongoing Operational Plan", url: "/roadmap/ongoing-operational-plan", emoji: "📍", description: "Current active projects and milestones" },
  { title: "Future Roadmap", url: "/roadmap/future-roadmap", emoji: "📍", description: "Upcoming features and long-term vision" },
  { title: "Legacy Roadmap", url: "/roadmap/legacy-roadmap", emoji: "📍", description: "Historical achievements and completed milestones" },
];

export default function RoadmapOverview() {
  return (
    <PageContent title="Roadmap" emoji="📍">
      <div className="space-y-6">
        <div className="space-y-4">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Recently as we've delved into the world of crypto gaming, we've become familiar with concepts like play to earn, win to earn and play to airdrop. But as pioneers in the crypto gaming industry, we want to introduce a new concept: play to revolutionize. This is not just a game; it's a mission. Each of us, whether playing or developing games, is contributing to reshaping and innovating the gaming industry. This is also our new core development direction in the near future.
          </p>
          
          <div className="mt-6">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg border shadow-lg"
                src="https://www.youtube.com/embed/M-RwGuBTYek"
                title="Bomb Crypto Vision Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <section>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Roadmap Categories</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {roadmapFeatures.map((feature) => (
              <NavLink
                key={feature.url}
                to={feature.url}
                className="group bg-card border rounded-lg p-6 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{feature.emoji}</span>
                  <h4 className="font-semibold text-foreground group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </NavLink>
            ))}
          </div>
        </section>
      </div>
    </PageContent>
  );
}
