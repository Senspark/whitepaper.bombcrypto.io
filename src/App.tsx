import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { MainContent } from "@/components/MainContent";

import Index from "./pages/Index";
import Introduction from "./pages/Introduction";
import NotFound from "./pages/NotFound";

// Story pages
import BomberlandStory from "./pages/BomberlandStory";
import Story from "./pages/Story";
import Zenkai from "./pages/characters/Zenkai";
import Henricus from "./pages/characters/Henricus";
import BullyFrog from "./pages/characters/BullyFrog";
import Richard from "./pages/characters/Richard";
import JasperVampire from "./pages/characters/JasperVampire";
import MagicYaga from "./pages/characters/MagicYaga";

// Free to Play pages
import FreeToPlay from "./pages/FreeToPlay";
import FreeToPlayOverview from "./pages/FreeToPlayOverview";
import AdventureMode from "./pages/freetoplay/AdventureMode";
import PvPMode from "./pages/freetoplay/PvPMode";
import SeasonRanking from "./pages/freetoplay/SeasonRanking";
import Tournaments from "./pages/freetoplay/Tournaments";

// Play to Earn pages
import PlayToEarn from "./pages/PlayToEarn";
import PlayToEarnOverview from "./pages/PlayToEarnOverview";
import BHero from "./pages/playtoearn/BHero";
import BHeroOverview from "./pages/playtoearn/BHeroOverview";
import StakeHero from "./pages/playtoearn/bhero/StakeHero";
import HowToCollect from "./pages/playtoearn/bhero/HowToCollect";
import HowToCollectOverview from "./pages/playtoearn/bhero/HowToCollectOverview";
import MintHero from "./pages/playtoearn/bhero/howtocollect/MintHero";
import BuyHero from "./pages/playtoearn/bhero/howtocollect/BuyHero";
import RescueHero from "./pages/playtoearn/bhero/howtocollect/RescueHero";
import Shield from "./pages/playtoearn/bhero/Shield";
import ShieldOverview from "./pages/playtoearn/bhero/ShieldOverview";
import RepairShield from "./pages/playtoearn/bhero/shield/RepairShield";
import UpgradeShield from "./pages/playtoearn/bhero/shield/UpgradeShield";
import BuyQuartz from "./pages/playtoearn/bhero/shield/BuyQuartz";
import Exchange from "./pages/playtoearn/bhero/shield/Exchange";
import Fusion from "./pages/playtoearn/bhero/Fusion";
import Inventory from "./pages/playtoearn/bhero/Inventory";
import ManageHero from "./pages/playtoearn/bhero/ManageHero";
import BHouse from "./pages/playtoearn/BHouse";
import Treasury from "./pages/playtoearn/Treasury";
import SwapGem from "./pages/playtoearn/SwapGem";
import GameEconomic from "./pages/playtoearn/GameEconomic";
import InGameWallet from "./pages/playtoearn/InGameWallet";
import P2PMarket from "./pages/playtoearn/P2PMarket";
import TreasureHunt from "./pages/playtoearn/TreasureHunt";
import AutoMine from "./pages/playtoearn/treasurehunt/AutoMine";
import BlockChest from "./pages/playtoearn/treasurehunt/BlockChest";

// Play to Airdrop pages
import PlayToAirdrop from "./pages/PlayToAirdrop";
import PlayToAirdropOverview from "./pages/PlayToAirdropOverview";
import GamePlay from "./pages/playtoardrop/GamePlay";
import TonTokenAllocation from "./pages/playtoardrop/TonTokenAllocation";
import SolTokenAllocation from "./pages/playtoardrop/SolTokenAllocation";
import RoninTokenAllocationAirdrop from "./pages/playtoardrop/RoninTokenAllocation";
import BaseTokenAllocationAirdrop from "./pages/playtoardrop/BaseTokenAllocation";

// Tokenomics pages
import Tokenomics from "./pages/Tokenomics";
import MultiChainTokenomicsOverview from "./pages/MultiChainTokenomicsOverview";
import WhatIsBcoin from "./pages/tokenomics/WhatIsBcoin";
import Burn from "./pages/tokenomics/Burn";
import MultiChainTokenomics from "./pages/tokenomics/MultiChainTokenomics";
import MultiChainTokenAllocation from "./pages/tokenomics/MultiChainTokenAllocation";
import BNBTokenAllocation from "./pages/tokenomics/BNBTokenAllocation";
import PolygonTokenAllocation from "./pages/tokenomics/PolygonTokenAllocation";
import TONTokenAllocation from "./pages/tokenomics/TONTokenAllocation";
import SolanaTokenAllocation from "./pages/tokenomics/SolanaTokenAllocation";
import RoninTokenAllocation from "./pages/tokenomics/RoninTokenAllocation";
import BaseTokenAllocation from "./pages/tokenomics/BaseTokenAllocation";
import LegacyAllocation from "./pages/tokenomics/LegacyAllocation";

// Dapps pages
import Dapps from "./pages/Dapps";
import DappsOverview from "./pages/DappsOverview";
import Bridge from "./pages/dapps/Bridge";
import Account from "./pages/dapps/Account";
import Marketplace from "./pages/dapps/Marketplace";
import Staking from "./pages/dapps/Staking";
import BcoinStaking from "./pages/dapps/staking/BcoinStaking";
import SenStaking from "./pages/dapps/staking/SenStaking";

// Roadmap pages
import Roadmap from "./pages/Roadmap";
import RoadmapOverview from "./pages/RoadmapOverview";
import OngoingOperationalPlan from "./pages/roadmap/OngoingOperationalPlan";
import FutureRoadmap from "./pages/roadmap/FutureRoadmap";
import LegacyRoadmap from "./pages/roadmap/LegacyRoadmap";

// Other pages
import SmartContracts from "./pages/SmartContracts";
import Database from "./pages/Database";
import Team from "./pages/Team";
import OfficialChannel from "./pages/OfficialChannel";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <SidebarProvider>
            <div className="min-h-screen w-full">
              <Header />
              <AppSidebar />
              <MainContent>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/introduction" element={<Introduction />} />
                  
                  {/* Story routes */}
                  <Route path="/story" element={<Story />} />
                  <Route path="/bomberland-story" element={<BomberlandStory />} />
                  <Route path="/story/zenkai" element={<Zenkai />} />
                  <Route path="/story/henricus" element={<Henricus />} />
                  <Route path="/story/bully-frog" element={<BullyFrog />} />
                  <Route path="/story/richard" element={<Richard />} />
                  <Route path="/story/jasper-vampire" element={<JasperVampire />} />
                  <Route path="/story/magic-yaga" element={<MagicYaga />} />
                  
                  {/* Free to Play routes */}
                  <Route path="/free-to-play" element={<FreeToPlayOverview />} />
                  <Route path="/free-to-play/adventure-mode" element={<AdventureMode />} />
                  <Route path="/free-to-play/pvp-mode" element={<PvPMode />} />
                  <Route path="/free-to-play/season-ranking" element={<SeasonRanking />} />
                  <Route path="/free-to-play/tournaments" element={<Tournaments />} />
                  
                  {/* Play to Earn routes */}
                  <Route path="/play-to-earn" element={<PlayToEarnOverview />} />
                   <Route path="/play-to-earn/bhero" element={<BHero />} />
                   <Route path="/play-to-earn/bhero/overview" element={<BHeroOverview />} />
                  <Route path="/play-to-earn/bhero/stake-hero" element={<StakeHero />} />
                  <Route path="/play-to-earn/bhero/how-to-collect" element={<HowToCollectOverview />} />
                  <Route path="/play-to-earn/bhero/how-to-collect/mint-hero" element={<MintHero />} />
                  <Route path="/play-to-earn/bhero/how-to-collect/buy-hero" element={<BuyHero />} />
                  <Route path="/play-to-earn/bhero/how-to-collect/rescue-hero" element={<RescueHero />} />
                  <Route path="/play-to-earn/bhero/shield" element={<ShieldOverview />} />
                  <Route path="/play-to-earn/bhero/shield/repair-shield" element={<RepairShield />} />
                  <Route path="/play-to-earn/bhero/shield/upgrade-shield" element={<UpgradeShield />} />
                  <Route path="/play-to-earn/bhero/shield/buy-quartz" element={<BuyQuartz />} />
                  <Route path="/play-to-earn/bhero/shield/exchange" element={<Exchange />} />
                  <Route path="/play-to-earn/bhero/fusion" element={<Fusion />} />
                  <Route path="/play-to-earn/bhero/inventory" element={<Inventory />} />
                  <Route path="/play-to-earn/bhero/manage-hero" element={<ManageHero />} />
                  <Route path="/play-to-earn/bhouse" element={<BHouse />} />
                  <Route path="/play-to-earn/treasury" element={<Treasury />} />
                  <Route path="/play-to-earn/swap-gem" element={<SwapGem />} />
                  <Route path="/play-to-earn/game-economic" element={<GameEconomic />} />
                  <Route path="/play-to-earn/in-game-wallet" element={<InGameWallet />} />
                  <Route path="/play-to-earn/p2p-market" element={<P2PMarket />} />
                  <Route path="/play-to-earn/treasure-hunt" element={<TreasureHunt />} />
                  <Route path="/play-to-earn/treasure-hunt/auto-mine" element={<AutoMine />} />
                  <Route path="/play-to-earn/treasure-hunt/block-chest" element={<BlockChest />} />
                  
                  {/* Play to Airdrop routes */}
                  <Route path="/play-to-airdrop" element={<PlayToAirdropOverview />} />
                  <Route path="/play-to-airdrop/game-play" element={<GamePlay />} />
                  <Route path="/airdrop/ton-token-allocation" element={<TonTokenAllocation />} />
                  <Route path="/airdrop/sol-token-allocation" element={<SolTokenAllocation />} />
                  <Route path="/airdrop/ronin-token-allocation" element={<RoninTokenAllocationAirdrop />} />
                  <Route path="/airdrop/base-token-allocation" element={<BaseTokenAllocationAirdrop />} />
                  
                  {/* Tokenomics routes */}
                  <Route path="/tokenomics" element={<MultiChainTokenomicsOverview />} />
                  <Route path="/tokenomics/what-is-bcoin" element={<WhatIsBcoin />} />
                  <Route path="/tokenomics/burn" element={<Burn />} />
                  <Route path="/tokenomics/multi-chain" element={<MultiChainTokenomics />} />
                  <Route path="/tokenomics/multi-chain-allocation" element={<MultiChainTokenAllocation />} />
                  <Route path="/tokenomics/bnb-allocation" element={<BNBTokenAllocation />} />
                  <Route path="/tokenomics/polygon-allocation" element={<PolygonTokenAllocation />} />
          <Route path="/tokenomics/ton-allocation" element={<TONTokenAllocation />} />
          <Route path="/tokenomics/solana-allocation" element={<SolanaTokenAllocation />} />
          <Route path="/multi-chain/ronin-token-allocation" element={<RoninTokenAllocation />} />
          <Route path="/multi-chain/base-token-allocation" element={<BaseTokenAllocation />} />
          <Route path="/tokenomics/legacy-allocation" element={<LegacyAllocation />} />
                  
                  {/* Dapps routes */}
                  <Route path="/dapps" element={<DappsOverview />} />
                  <Route path="/dapps/bridge" element={<Bridge />} />
                  <Route path="/dapps/account" element={<Account />} />
                  <Route path="/dapps/marketplace" element={<Marketplace />} />
                  <Route path="/dapps/staking" element={<Staking />} />
                  <Route path="/dapps/staking/bcoin" element={<BcoinStaking />} />
                  <Route path="/dapps/staking/sen" element={<SenStaking />} />
                  
                  {/* Roadmap routes */}
                  <Route path="/roadmap" element={<RoadmapOverview />} />
                  <Route path="/roadmap/ongoing-operational-plan" element={<OngoingOperationalPlan />} />
                  <Route path="/roadmap/future-roadmap" element={<FutureRoadmap />} />
                  <Route path="/roadmap/legacy-roadmap" element={<LegacyRoadmap />} />
                  
                  {/* Other routes */}
                  <Route path="/smart-contracts" element={<SmartContracts />} />
                  <Route path="/database" element={<Database />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/official-channel" element={<OfficialChannel />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </MainContent>
            </div>
          </SidebarProvider>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
