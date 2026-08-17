
import { PageContent } from "@/components/PageContent";

export default function Account() {
  return (
    <PageContent title="Account" emoji="🕹️">
      <div className="space-y-6">
        <p className="text-muted-foreground text-lg leading-relaxed">
          Bomb Crypto offers a seamless and user-friendly account system that caters to both traditional gamers and cryptocurrency enthusiasts. Whether you prefer to create a dedicated account, use your existing social media credentials, or connect your crypto wallet, Bomb Crypto provides multiple options to suit your needs.
        </p>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Login Options</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Senspark Account</h4>
              <p className="text-muted-foreground leading-relaxed">
                For those who prefer a dedicated gaming account, Bomb Crypto allows you to create a Senspark account using your email address and a secure password. This provides a personalized experience and allows you to track your progress, achievements, and in-game assets.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">Play As Guest (mobile only)</h4>
              <p className="text-muted-foreground leading-relaxed">
                New to Bomb Crypto? No problem! You can start playing immediately as a guest without creating an account. This allows you to explore the game and its features before committing to a full account. However, keep in mind that guest progress is not saved, and you will need to create your own account to retain your in-game data.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">Wallet Connect</h4>
              <p className="text-muted-foreground leading-relaxed">
                For users who are already familiar with cryptocurrency wallets, Bomb Crypto offers a seamless Wallet Connect option. By connecting your wallet, you can access the game as a user-fi (User Finance) player and enjoy all the benefits of blockchain-based gaming.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Account Management</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Once you've logged in, you can manage your account settings and preferences through the user-friendly interface. This includes updating your profile information, linking your social media accounts, and managing your in-game assets.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For users who have logged in with a Senspark account, the option to connect a wallet is also available. This allows you to integrate your cryptocurrency holdings with your Bomb Crypto account, opening up additional features and functionalities.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Forgot Password</h3>
          <p className="text-muted-foreground leading-relaxed">
            If you forget your account password, don't worry! Bomb Crypto offers a simple and secure password recovery process. You can either use your linked Facebook account to regain access or enter your email address to receive a password reset code.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Guest Account Upgrade</h3>
          <p className="text-muted-foreground leading-relaxed">
            If you started playing as a guest and want to keep your progress, you can easily upgrade to a Senspark account. Simply navigate to the settings menu and provide the required information to create your account. This will transfer your guest progress to your new Senspark account, allowing you to continue your Bomb Crypto journey seamlessly.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">User Types</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Bomb Crypto distinguishes between two main types of users:
          </p>
          <div className="bg-card border rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">User-tr (Traditional)</h4>
              <p className="text-muted-foreground leading-relaxed">
                These users have logged in using a Senspark account. They are typically traditional gamers who may be new to the world of blockchain gaming. User TR cannot participate in Treasure Hunt mode yet.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">User-fi (Finance)</h4>
              <p className="text-muted-foreground leading-relaxed">
                These users have logged in using Wallet Connect and are likely familiar with cryptocurrency and blockchain technology. They are often more engaged with the financial aspects of the game, such as Earning, Farming, etc.
              </p>
            </div>
          </div>
        </section>

        <section>
          <p className="text-muted-foreground leading-relaxed">
            Bomb Crypto's account system is designed to be flexible, accessible, and secure, ensuring that all players can easily join the Bomb Crypto universe and embark on their mining adventures.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
