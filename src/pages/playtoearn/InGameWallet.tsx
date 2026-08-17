
import { PageContent } from "@/components/PageContent";

export default function InGameWallet() {
  return (
    <PageContent title="In-game Wallet" emoji="👝">
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Asset Management Interface in Bomb Crypto</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The In-game Wallet provides players with a comprehensive overview and control over their in-game tokens and NFTs. This Wallet is designed to be user-friendly and intuitive, allowing players to easily manage their in-game assets. The ability to select mining tokens, view detailed token information, and seamlessly deposit and withdraw funds enhances the overall gameplay experience and provides players with greater control over their Bomb Crypto assets.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This Wallet is divided into three main sections: Mine, Deposit, and Withdraw.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Mine display</h3>
          <p className="text-muted-foreground leading-relaxed">
            The Mine displays all tokens and NFTs that players have earned through mining activities in the game. This includes BCOIN, SEN, Star Core, and BHeroes when you rescue them from the Prison Chest. Players can select which token they want to mine in Treasure Mode from this wallet. Additionally, the Mine Wallet provides detailed information about each token, such as its current balance, status, and network.
          </p>
          
          <div className="my-8 flex justify-center">
            <img 
              src="/lovable-uploads/6289e3bc-e0f4-4ba9-a53a-8022bae2cf04.png" 
              alt="Bomb Crypto Mine wallet interface showing earned tokens including SEN (0.1801), BCOIN (0.5688), and STAR CORE (1.1071) across different networks"
              className="max-w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Deposit display</h3>
          <p className="text-muted-foreground leading-relaxed">
            The Deposit display shows all tokens that players have deposited into their Bomb Crypto account from external sources. This section serves as a space for users to deposit BCOIN and SEN token to wallet.
          </p>
          
          <div className="my-8 flex justify-center">
            <img 
              src="/lovable-uploads/a37adcd0-49ad-44db-b2a2-0d71349210eb.png" 
              alt="Bomb Crypto wallet interface showing Mine, Deposit, and Withdraw tabs with token balances for SEN and BCOIN across BNB and Polygon networks"
              className="max-w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Withdraw display</h3>
          <p className="text-muted-foreground leading-relaxed">
            The Withdraw display allows players to withdraw their tokens from the Bomb Crypto platform to external wallets or exchanges. This section displays the available balance of each token and BHero, provides a simple interface for initiating withdrawals. Remember, when you withdraw assets (including Token and BHero from Prison Chest) from your in-game wallet, you will incur a fee.
          </p>
          
          <div className="my-8 flex justify-center">
            <img 
              src="/lovable-uploads/296b862d-5572-4c52-81db-6694aa09895f.png" 
              alt="Bomb Crypto Withdraw wallet interface showing available balances for SEN, BCOIN, and BHERO S tokens across BNB and Polygon networks for withdrawal"
              className="max-w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>
        </section>
      </div>
    </PageContent>
  );
}
