
import { PageContent } from "@/components/PageContent";

export default function ManageHero() {
  return (
    <PageContent title="Manage Hero" emoji="💪">
      <div className="space-y-6">
        <section>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The "Hero" section within Treasure Hunt Mode serves as your command center for overseeing and optimizing the performance of your Bomb Crypto Heroes. This feature provides essential tools to manage your Heroes' activities, energy levels, and overall effectiveness in the treasure hunt.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Hero Status Categories</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Within the "Hero" section, each of your Heroes is categorized into one of three statuses, providing valuable insights into their current state and readiness for action:
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Work</h4>
              <p className="text-muted-foreground leading-relaxed">
                This status indicates that the Hero is actively engaged in the treasure hunt. You'll see them diligently placing bombs, strategically navigating the map, and collecting valuable rewards. Their energy is being consumed as they work, so it's important to monitor their levels.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Rest</h4>
              <p className="text-muted-foreground leading-relaxed">
                When a Hero's energy is depleted, they automatically enter the "Rest" status. This means they are taking a well-deserved break to recharge. During this time, they are inactive and cannot participate in the treasure hunt. The rest period is essential for their recovery, ensuring they can return to the hunt with renewed vigor.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Home</h4>
              <p className="text-muted-foreground leading-relaxed">
                Heroes in the "Home" status are actively recovering their energy. Placing Heroes in the house significantly speeds up their recovery compared to simply resting. This allows them to rejoin the treasure hunt much faster, maximizing their contribution to your rewards.
              </p>
            </div>
          </div>
          
          <div className="my-8 flex justify-center">
            <img 
              src="/lovable-uploads/875a2fb5-1832-46a5-9bce-b0c83a59f632.webp" 
              alt="Bomb Crypto hero management interface showing heroes with their energy levels and status (Work, Rest, Home) along with control buttons for managing hero activities"
              className="max-w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>
        </section>
      </div>
    </PageContent>
  );
}
