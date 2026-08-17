import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const mainNavigationItems = [
  { title: "📑 Smart Contract and Github Report", url: "/smart-contracts", emoji: "📑" },
  { title: "🏆 Team", url: "/team", emoji: "🏆" },
  { title: "🔥 Official Channel", url: "/official-channel", emoji: "🔥" },
];

const storySubItems = [
  { title: "ZENKAI - THE NINJA", url: "/story/zenkai", emoji: "⚡" },
  { title: "HENRICUS - THE KNIGHT", url: "/story/henricus", emoji: "⚡" },
  { title: "BULLY FROG - FROG", url: "/story/bully-frog", emoji: "⚡" },
  { title: "RICHARD - MAN", url: "/story/richard", emoji: "⚡" },
  { title: "JASPER VAMPIRE - THE VAMPIRE", url: "/story/jasper-vampire", emoji: "⚡" },
  { title: "MAGIC YAGA - THE WITCH", url: "/story/magic-yaga", emoji: "⚡" },
];

const freeToPlaySubItems = [
  { title: "Adventure Mode", url: "/free-to-play/adventure-mode", emoji: "✨" },
];

const pvpModeSubItems = [
  { title: "Season Ranking", url: "/free-to-play/season-ranking", emoji: "⚡" },
];

const playToAirdropSubItems = [
  { title: "Game Play", url: "/play-to-airdrop/game-play", emoji: "🕹️" },
  { title: "TON Token Allocation", url: "/airdrop/ton-token-allocation", emoji: "⚡" },
  { title: "SOL Token Allocation", url: "/airdrop/sol-token-allocation", emoji: "⚡" },
  { title: "RONIN Token Allocation", url: "/airdrop/ronin-token-allocation", emoji: "⚡" },
  { title: "BASE Token Allocation", url: "/airdrop/base-token-allocation", emoji: "⚡" },
];

const howToCollectSubItems = [
  { title: "Mint Hero", url: "/play-to-earn/bhero/how-to-collect/mint-hero", emoji: "⚡" },
  { title: "Buy Hero", url: "/play-to-earn/bhero/how-to-collect/buy-hero", emoji: "⚡" },
  { title: "Rescue Hero", url: "/play-to-earn/bhero/how-to-collect/rescue-hero", emoji: "⚡" },
];

const shieldSubItems = [
  { title: "Repair Shield", url: "/play-to-earn/bhero/shield/repair-shield", emoji: "⚒️" },
  { title: "Upgrade Shield", url: "/play-to-earn/bhero/shield/upgrade-shield", emoji: "↗️" },
  { title: "Buy Quartz", url: "/play-to-earn/bhero/shield/buy-quartz", emoji: "💎" },
  { title: "Exchange", url: "/play-to-earn/bhero/shield/exchange", emoji: "💎" },
];

const bheroSubItems = [
  { title: "Stake Hero", url: "/play-to-earn/bhero/stake-hero", emoji: "💡" },
  { title: "Fusion", url: "/play-to-earn/bhero/fusion", emoji: "⚡" },
  { title: "Inventory", url: "/play-to-earn/bhero/inventory", emoji: "✨" },
  { title: "Manage Hero", url: "/play-to-earn/bhero/manage-hero", emoji: "💪" },
];

const playToEarnSubItems = [
  { title: "BHouse", url: "/play-to-earn/bhouse", emoji: "🏠" },
  { title: "Treasury", url: "/play-to-earn/treasury", emoji: "🗳️" },
  { title: "Swap Gem", url: "/play-to-earn/swap-gem", emoji: "💎" },
  { title: "Game Economic", url: "/play-to-earn/game-economic", emoji: "💸" },
  { title: "In-game Wallet", url: "/play-to-earn/in-game-wallet", emoji: "👝" },
  { title: "In-game P2P Market", url: "/play-to-earn/p2p-market", emoji: "🏚️" },
];

const treasureHuntSubItems = [
  { title: "Auto Mine", url: "/play-to-earn/treasure-hunt/auto-mine", emoji: "⚡" },
  { title: "Block Chest", url: "/play-to-earn/treasure-hunt/block-chest", emoji: "⚡" },
];

const tokenomicsSubItems = [
  { title: "What is BCOIN Token?", url: "/tokenomics/what-is-bcoin", emoji: "⚡" },
  { title: "Burn", url: "/tokenomics/burn", emoji: "⚡" },
];

const dappsSubItems = [
  { title: "Bridge", url: "/dapps/bridge", emoji: "🌉" },
  { title: "Account", url: "/dapps/account", emoji: "🕹️" },
  { title: "Marketplace", url: "/dapps/marketplace", emoji: "🏘️" },
];

const stakingSubItems = [
  { title: "BCOIN", url: "/dapps/staking/bcoin", emoji: "💰" },
  { title: "SEN", url: "/dapps/staking/sen", emoji: "💰" },
];

const roadmapSubItems = [
  { title: "Ongoing Operational Plan", url: "/roadmap/ongoing-operational-plan", emoji: "📍" },
  { title: "Future Roadmap", url: "/roadmap/future-roadmap", emoji: "📍" },
  { title: "Legacy Roadmap", url: "/roadmap/legacy-roadmap", emoji: "📍" },
];

const multiChainTokenomicsSubItems = [
  { title: "Multi-chain Token Allocation", url: "/tokenomics/multi-chain-allocation", emoji: "⚡" },
  { title: "BNB Token Allocation", url: "/tokenomics/bnb-allocation", emoji: "⚡" },
  { title: "Polygon Token Allocation", url: "/tokenomics/polygon-allocation", emoji: "⚡" },
  { title: "TON Token Allocation", url: "/tokenomics/ton-allocation", emoji: "⚡" },
  { title: "Solana Token Allocation", url: "/tokenomics/solana-allocation", emoji: "⚡" },
  { title: "RONIN Token Allocation", url: "/multi-chain/ronin-token-allocation", emoji: "⚡" },
  { title: "BASE Token Allocation", url: "/multi-chain/base-token-allocation", emoji: "⚡" },
  { title: "Legacy Allocation", url: "/tokenomics/legacy-allocation", emoji: "🪙" },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const isStoryActive = currentPath.startsWith("/story");
  const isFreeToPlayActive = currentPath.startsWith("/free-to-play");
  const isPlayToEarnActive = currentPath.startsWith("/play-to-earn");
  const isPlayToAirdropActive = currentPath.startsWith("/play-to-airdrop");
  const isTokenomicsActive = currentPath.startsWith("/tokenomics");
  const isDappsActive = currentPath.startsWith("/dapps");
  const isRoadmapActive = currentPath.startsWith("/roadmap");
  const isBHeroActive = currentPath.startsWith("/play-to-earn/bhero");
  const isTreasureHuntActive = currentPath.startsWith("/play-to-earn/treasure-hunt");
  const isHowToCollectActive = currentPath.startsWith("/play-to-earn/bhero/how-to-collect");
  const isShieldActive = currentPath.startsWith("/play-to-earn/bhero/shield");
  const isStakingActive = currentPath.startsWith("/dapps/staking");
  const isMultiChainTokenomicsActive = currentPath.startsWith("/tokenomics/multi-chain");
  const isPvPModeActive = currentPath.startsWith("/free-to-play/pvp-mode") || currentPath.startsWith("/free-to-play/season-ranking");
  
  const [isStoryOpen, setIsStoryOpen] = useState(isStoryActive);
  const [isFreeToPlayOpen, setIsFreeToPlayOpen] = useState(isFreeToPlayActive);
  const [isPlayToEarnOpen, setIsPlayToEarnOpen] = useState(isPlayToEarnActive);
  const [isPlayToAirdropOpen, setIsPlayToAirdropOpen] = useState(isPlayToAirdropActive);
  const [isTokenomicsOpen, setIsTokenomicsOpen] = useState(isTokenomicsActive);
  const [isDappsOpen, setIsDappsOpen] = useState(isDappsActive);
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(isRoadmapActive);
  const [isBHeroOpen, setIsBHeroOpen] = useState(isBHeroActive);
  const [isTreasureHuntOpen, setIsTreasureHuntOpen] = useState(isTreasureHuntActive);
  const [isHowToCollectOpen, setIsHowToCollectOpen] = useState(isHowToCollectActive);
  const [isShieldOpen, setIsShieldOpen] = useState(isShieldActive);
  const [isStakingOpen, setIsStakingOpen] = useState(isStakingActive);
  const [isMultiChainTokenomicsOpen, setIsMultiChainTokenomicsOpen] = useState(isMultiChainTokenomicsActive);
  const [isPvPModeOpen, setIsPvPModeOpen] = useState(isPvPModeActive);

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath === path) return true;
    return false;
  };

  // Unified color system for all sidebar items
  const getItemStyle = (path: string, showBorder: boolean = false) => {
    const active = isActive(path);
    const borderClass = showBorder && active ? "border-r-2 border-orange-500" : "";
    
    return active
      ? `bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 hover:text-orange-300 ${borderClass}`
      : "text-muted-foreground hover:text-foreground hover:bg-muted/50";
  };

  const getCategoryStyle = (isActiveCategory: boolean, showBorder: boolean = false) => {
    const borderClass = showBorder && isActiveCategory ? "border-r-2 border-orange-500" : "";
    
    return isActiveCategory
      ? `bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 hover:text-orange-300 ${borderClass}`
      : "text-muted-foreground hover:text-foreground hover:bg-muted/50";
  };

  return (
    <Sidebar className="w-[380px] min-w-[380px] max-w-[380px] h-full border-r border-border bg-card">
      <SidebarContent className="p-4 h-full overflow-y-auto">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 pb-16">
              {/* Introduction */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-auto p-0">
                  <NavLink
                    to="/"
                    end
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium ${getItemStyle("/", true)}`}
                  >
                    <span className="text-[13px] flex-shrink-0">💣</span>
                    <span>
                      Introduction
                    </span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              {/* Bomberland Story Category */}
              <SidebarMenuItem className="mt-4">
                <Collapsible open={isStoryOpen} onOpenChange={setIsStoryOpen}>
                  <div className={`flex items-center rounded-lg transition-all duration-200 ${getCategoryStyle(isStoryActive, true)}`}>
                    <NavLink
                      to="/story"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 flex-1 text-[13px] font-medium"
                    >
                      <span className="text-[13px] flex-shrink-0">🔥</span>
                      <span>
                        Bomberland Story
                      </span>
                    </NavLink>
                    
                    <CollapsibleTrigger asChild>
                      <button className="p-2 hover:bg-muted/50 rounded transition-colors">
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isStoryOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </CollapsibleTrigger>
                  </div>
                  
                  <CollapsibleContent>
                    <SidebarMenuSub className="mt-2 space-y-2">
                      {storySubItems.map((item) => (
                        <SidebarMenuSubItem key={item.url}>
                          <SidebarMenuSubButton asChild>
                            <NavLink
                              to={item.url}
                              className={`flex items-center gap-2 pl-3 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium ${getItemStyle(item.url)}`}
                            >
                              <span className="text-[13px] flex-shrink-0">{item.emoji}</span>
                              <span>{item.title}</span>
                            </NavLink>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              {/* Free to Play Category */}
              <SidebarMenuItem className="mt-4">
                <Collapsible open={isFreeToPlayOpen} onOpenChange={setIsFreeToPlayOpen}>
                  <div className={`flex items-center rounded-lg transition-all duration-200 ${getCategoryStyle(isFreeToPlayActive, true)}`}>
                    <NavLink
                      to="/free-to-play"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 flex-1 text-[13px] font-medium"
                    >
                      <span className="text-[13px] flex-shrink-0">🍿</span>
                      <span>
                        Free to Play
                      </span>
                    </NavLink>
                    
                    <CollapsibleTrigger asChild>
                      <button className="p-2 hover:bg-muted/50 rounded transition-colors">
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isFreeToPlayOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </CollapsibleTrigger>
                  </div>
                  
                  <CollapsibleContent>
                    <SidebarMenuSub className="mt-2 space-y-2">
                      {freeToPlaySubItems.map((item) => (
                        <SidebarMenuSubItem key={item.url}>
                          <SidebarMenuSubButton asChild>
                            <NavLink
                              to={item.url}
                              className={`flex items-center gap-2 pl-3 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium ${getItemStyle(item.url)}`}
                            >
                              <span className="text-[13px] flex-shrink-0">{item.emoji}</span>
                              <span>{item.title}</span>
                            </NavLink>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                      
                      {/* PvP Mode as a nested collapsible category with NavLink */}
                      <SidebarMenuSubItem className="mb-1">
                        <Collapsible open={isPvPModeOpen} onOpenChange={setIsPvPModeOpen}>
                          <div className={`flex items-center rounded-lg transition-all duration-200 ${getCategoryStyle(isPvPModeActive)}`}>
                            <NavLink
                              to="/free-to-play/pvp-mode"
                              className="flex items-center gap-2 pl-3 px-3 py-1.5 rounded-lg transition-all duration-200 flex-1 text-[13px] font-medium"
                            >
                              <span className="text-[13px] flex-shrink-0">✨</span>
                              <span>PvP Mode</span>
                            </NavLink>
                            <CollapsibleTrigger asChild>
                              <button className="p-2 hover:bg-muted/50 rounded transition-colors">
                                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isPvPModeOpen ? 'rotate-180' : ''}`} />
                              </button>
                            </CollapsibleTrigger>
                          </div>
                          <CollapsibleContent>
                            <SidebarMenuSub className="mt-2 space-y-2">
                              {pvpModeSubItems.map((item) => (
                                <SidebarMenuSubItem key={item.url}>
                                  <SidebarMenuSubButton asChild>
                                    <NavLink
                                      to={item.url}
                                      className={`flex items-center gap-2 pl-5 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium ${getItemStyle(item.url)}`}
                                    >
                                      <span className="text-[13px] flex-shrink-0">{item.emoji}</span>
                                      <span>{item.title}</span>
                                    </NavLink>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </Collapsible>
                      </SidebarMenuSubItem>

                      {/* Tournaments */}
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <NavLink
                            to="/free-to-play/tournaments"
                            className={`flex items-center gap-2 pl-3 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium ${getItemStyle("/free-to-play/tournaments")}`}
                          >
                            <span className="text-[13px] flex-shrink-0">🛣️</span>
                            <span>Tournaments</span>
                          </NavLink>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              {/* Play to Earn Category */}
              <SidebarMenuItem className="mt-4">
                <Collapsible open={isPlayToEarnOpen} onOpenChange={setIsPlayToEarnOpen}>
                  <div className={`flex items-center rounded-lg transition-all duration-200 ${getCategoryStyle(isPlayToEarnActive, true)}`}>
                    <NavLink
                      to="/play-to-earn"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 flex-1 text-[13px] font-medium"
                    >
                      <span className="text-lg flex-shrink-0">🎮</span>
                      <span>
                        Play to Earn
                      </span>
                    </NavLink>
                    
                    <CollapsibleTrigger asChild>
                      <button className="p-2 hover:bg-muted/50 rounded transition-colors">
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isPlayToEarnOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </CollapsibleTrigger>
                  </div>
                  
                  <CollapsibleContent>
                    <SidebarMenuSub className="mt-2 space-y-2">
                      {/* BHero as a nested collapsible category with NavLink */}
                      <SidebarMenuSubItem className="mb-1">
                        <Collapsible open={isBHeroOpen} onOpenChange={setIsBHeroOpen}>
                          <div className={`flex items-center rounded-lg transition-all duration-200 ${getCategoryStyle(isBHeroActive)}`}>
                            <NavLink
                              to="/play-to-earn/bhero"
                              className="flex items-center gap-2 pl-3 px-3 py-1.5 rounded-lg transition-all duration-200 flex-1 text-[13px] font-medium"
                            >
                              <span className="flex-shrink-0">🦸</span>
                              <span>BHero</span>
                            </NavLink>
                            <CollapsibleTrigger asChild>
                              <button className="p-1 hover:bg-muted/50 rounded transition-colors">
                                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isBHeroOpen ? 'rotate-180' : ''}`} />
                              </button>
                            </CollapsibleTrigger>
                          </div>
                          <CollapsibleContent>
                            <SidebarMenuSub className="mt-2 space-y-2">
                              {/* How to collect a Hero as a nested collapsible category with NavLink */}
                              <SidebarMenuSubItem className="mb-1">
                                <Collapsible open={isHowToCollectOpen} onOpenChange={setIsHowToCollectOpen}>
                                  <div className={`flex items-center rounded-lg transition-all duration-200 ${getCategoryStyle(isHowToCollectActive)}`}>
                                    <NavLink
                                      to="/play-to-earn/bhero/how-to-collect"
                                      className="flex items-center gap-2 pl-5 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium flex-1"
                                    >
                                      <span className="flex-shrink-0">💡</span>
                                      <span>How to collect a Hero</span>
                                    </NavLink>
                                    <CollapsibleTrigger asChild>
                                      <button className="p-1 hover:bg-muted/50 rounded transition-colors">
                                        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isHowToCollectOpen ? 'rotate-180' : ''}`} />
                                      </button>
                                    </CollapsibleTrigger>
                                  </div>
                                  <CollapsibleContent>
                                    <SidebarMenuSub className="mt-2 space-y-2">
                                      {howToCollectSubItems.map((item) => (
                                        <SidebarMenuSubItem key={item.url}>
                                          <SidebarMenuSubButton asChild>
                                            <NavLink
                                              to={item.url}
                                              className={`flex items-center gap-2 pl-7 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium ${getItemStyle(item.url)}`}
                                            >
                                              <span className="flex-shrink-0">{item.emoji}</span>
                                              <span>{item.title}</span>
                                            </NavLink>
                                          </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                      ))}
                                    </SidebarMenuSub>
                                  </CollapsibleContent>
                                </Collapsible>
                              </SidebarMenuSubItem>

                              {/* Shield as a nested collapsible category with NavLink */}
                              <SidebarMenuSubItem className="mb-1">
                                <Collapsible open={isShieldOpen} onOpenChange={setIsShieldOpen}>
                                  <div className={`flex items-center rounded-lg transition-all duration-200 ${getCategoryStyle(isShieldActive)}`}>
                                    <NavLink
                                      to="/play-to-earn/bhero/shield"
                                      className="flex items-center gap-2 pl-5 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium flex-1"
                                    >
                                      <span className="flex-shrink-0">🔰</span>
                                      <span>Shield</span>
                                    </NavLink>
                                    <CollapsibleTrigger asChild>
                                      <button className="p-1 hover:bg-muted/50 rounded transition-colors">
                                        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isShieldOpen ? 'rotate-180' : ''}`} />
                                      </button>
                                    </CollapsibleTrigger>
                                  </div>
                                  <CollapsibleContent>
                                    <SidebarMenuSub className="mt-2 space-y-2">
                                      {shieldSubItems.map((item) => (
                                        <SidebarMenuSubItem key={item.url}>
                                          <SidebarMenuSubButton asChild>
                                            <NavLink
                                              to={item.url}
                                              className={`flex items-center gap-2 pl-7 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium ${getItemStyle(item.url)}`}
                                            >
                                              <span className="flex-shrink-0">{item.emoji}</span>
                                              <span>{item.title}</span>
                                            </NavLink>
                                          </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                      ))}
                                    </SidebarMenuSub>
                                  </CollapsibleContent>
                                </Collapsible>
                              </SidebarMenuSubItem>

                              {/* All BHero items */}
                              {bheroSubItems.map((item) => (
                                <SidebarMenuSubItem key={item.url}>
                                  <SidebarMenuSubButton asChild>
                                    <NavLink
                                      to={item.url}
                                      className={`flex items-center gap-2 pl-5 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium ${getItemStyle(item.url)}`}
                                    >
                                      <span className="flex-shrink-0">{item.emoji}</span>
                                      <span>{item.title}</span>
                                    </NavLink>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </Collapsible>
                      </SidebarMenuSubItem>

                      {playToEarnSubItems.map((item) => (
                        <SidebarMenuSubItem key={item.url}>
                          <SidebarMenuSubButton asChild>
                            <NavLink
                              to={item.url}
                              className={`flex items-center gap-2 pl-3 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium ${getItemStyle(item.url)}`}
                            >
                              <span className="flex-shrink-0">{item.emoji}</span>
                              <span>{item.title}</span>
                            </NavLink>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                      
                      {/* Treasure Hunt Mode as a nested collapsible category with NavLink */}
                      <SidebarMenuSubItem className="mb-1">
                        <Collapsible open={isTreasureHuntOpen} onOpenChange={setIsTreasureHuntOpen}>
                          <div className={`flex items-center rounded-lg transition-all duration-200 ${getCategoryStyle(isTreasureHuntActive)}`}>
                            <NavLink
                              to="/play-to-earn/treasure-hunt"
                              className="flex items-center gap-2 pl-3 px-3 py-1.5 rounded-lg transition-all duration-200 flex-1 text-[13px] font-medium"
                            >
                              <span className="flex-shrink-0">✨</span>
                              <span>Treasure Hunt Mode</span>
                            </NavLink>
                            <CollapsibleTrigger asChild>
                              <button className="p-1 hover:bg-muted/50 rounded transition-colors">
                                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isTreasureHuntOpen ? 'rotate-180' : ''}`} />
                              </button>
                            </CollapsibleTrigger>
                          </div>
                          <CollapsibleContent>
                            <SidebarMenuSub className="mt-2 space-y-2">
                              {treasureHuntSubItems.map((item) => (
                                <SidebarMenuSubItem key={item.url}>
                                  <SidebarMenuSubButton asChild>
                                    <NavLink
                                      to={item.url}
                                      className={`flex items-center gap-2 pl-5 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium ${getItemStyle(item.url)}`}
                                    >
                                      <span className="flex-shrink-0">{item.emoji}</span>
                                      <span>{item.title}</span>
                                    </NavLink>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </Collapsible>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              {/* Play to Airdrop Category */}
              <SidebarMenuItem className="mt-4">
                <Collapsible open={isPlayToAirdropOpen} onOpenChange={setIsPlayToAirdropOpen}>
                  <div className={`flex items-center rounded-lg transition-all duration-200 ${getCategoryStyle(isPlayToAirdropActive, true)}`}>
                    <NavLink
                      to="/play-to-airdrop"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 flex-1 text-[13px] font-medium"
                    >
                      <span className="text-lg flex-shrink-0">📱</span>
                      <span>
                        Play to Airdrop
                      </span>
                    </NavLink>
                    
                    <CollapsibleTrigger asChild>
                      <button className="p-2 hover:bg-muted/50 rounded transition-colors">
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isPlayToAirdropOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </CollapsibleTrigger>
                  </div>
                  
                  <CollapsibleContent>
                    <SidebarMenuSub className="mt-2 space-y-2">
                      {playToAirdropSubItems.map((item) => (
                        <SidebarMenuSubItem key={item.url}>
                          <SidebarMenuSubButton asChild>
                            <NavLink
                              to={item.url}
                              className={`flex items-center gap-2 pl-3 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium ${getItemStyle(item.url)}`}
                            >
                              <span className="flex-shrink-0">{item.emoji}</span>
                              <span>{item.title}</span>
                            </NavLink>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              {/* Multi-chain Tokenomics Category */}
              <SidebarMenuItem className="mt-4">
                <Collapsible open={isTokenomicsOpen} onOpenChange={setIsTokenomicsOpen}>
                  <div className={`flex items-center rounded-lg transition-all duration-200 ${getCategoryStyle(isTokenomicsActive, true)}`}>
                    <NavLink
                      to="/tokenomics"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 flex-1 text-[13px] font-medium"
                    >
                      <span className="text-lg flex-shrink-0">💲</span>
                      <span>
                        Multi-chain Tokenomics
                      </span>
                    </NavLink>
                    
                    <CollapsibleTrigger asChild>
                      <button className="p-2 hover:bg-muted/50 rounded transition-colors">
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isTokenomicsOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </CollapsibleTrigger>
                  </div>
                  
                  <CollapsibleContent>
                    <SidebarMenuSub className="mt-2 space-y-2">
                      {tokenomicsSubItems.map((item) => (
                        <SidebarMenuSubItem key={item.url}>
                          <SidebarMenuSubButton asChild>
                            <NavLink
                              to={item.url}
                              className={`flex items-center gap-2 pl-3 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium ${getItemStyle(item.url)}`}
                            >
                              <span className="flex-shrink-0">{item.emoji}</span>
                              <span>{item.title}</span>
                            </NavLink>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                      
                      {/* Multi-chain Tokenomics as a nested collapsible category with NavLink */}
                      <SidebarMenuSubItem className="mb-1">
                        <Collapsible open={isMultiChainTokenomicsOpen} onOpenChange={setIsMultiChainTokenomicsOpen}>
                          <div className={`flex items-center rounded-lg transition-all duration-200 ${getCategoryStyle(isMultiChainTokenomicsActive)}`}>
                            <NavLink
                              to="/tokenomics/multi-chain"
                              className="flex items-center gap-2 pl-3 px-3 py-1.5 rounded-lg transition-all duration-200 flex-1 text-[13px] font-medium"
                            >
                              <span className="flex-shrink-0">🛜</span>
                              <span>Multi-chain Tokenomics</span>
                            </NavLink>
                            <CollapsibleTrigger asChild>
                              <button className="p-1 hover:bg-muted/50 rounded transition-colors">
                                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isMultiChainTokenomicsOpen ? 'rotate-180' : ''}`} />
                              </button>
                            </CollapsibleTrigger>
                          </div>
                          <CollapsibleContent>
                            <SidebarMenuSub className="mt-2 space-y-2">
                              {multiChainTokenomicsSubItems.map((item) => (
                                <SidebarMenuSubItem key={item.url}>
                                  <SidebarMenuSubButton asChild>
                                    <NavLink
                                      to={item.url}
                                      className={`flex items-center gap-2 pl-5 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium ${getItemStyle(item.url)}`}
                                    >
                                      <span className="flex-shrink-0">{item.emoji}</span>
                                      <span>{item.title}</span>
                                    </NavLink>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </Collapsible>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              {/* Dapps Category */}
              <SidebarMenuItem className="mt-4">
                <Collapsible open={isDappsOpen} onOpenChange={setIsDappsOpen}>
                  <div className={`flex items-center rounded-lg transition-all duration-200 ${getCategoryStyle(isDappsActive, true)}`}>
                    <NavLink
                      to="/dapps"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 flex-1 text-[13px] font-medium"
                    >
                      <span className="text-lg flex-shrink-0">💻</span>
                      <span>
                        Dapps
                      </span>
                    </NavLink>
                    
                    <CollapsibleTrigger asChild>
                      <button className="p-2 hover:bg-muted/50 rounded transition-colors">
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDappsOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </CollapsibleTrigger>
                  </div>
                  
                  <CollapsibleContent>
                    <SidebarMenuSub className="mt-2 space-y-2">
                      {dappsSubItems.map((item) => (
                        <SidebarMenuSubItem key={item.url}>
                          <SidebarMenuSubButton asChild>
                            <NavLink
                              to={item.url}
                              className={`flex items-center gap-2 pl-3 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium ${getItemStyle(item.url)}`}
                            >
                              <span className="flex-shrink-0">{item.emoji}</span>
                              <span>{item.title}</span>
                            </NavLink>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                      
                      {/* Staking as a separate NavLink and Collapsible */}
                      <SidebarMenuSubItem className="mb-1">
                        <Collapsible open={isStakingOpen} onOpenChange={setIsStakingOpen}>
                          <div className={`flex items-center rounded-lg transition-all duration-200 ${getCategoryStyle(isStakingActive)}`}>
                            <NavLink
                              to="/dapps/staking"
                              className="flex items-center gap-2 pl-3 px-3 py-1.5 rounded-lg transition-all duration-200 flex-1 text-[13px] font-medium"
                            >
                              <span className="flex-shrink-0">💰</span>
                              <span>Staking</span>
                            </NavLink>
                            <CollapsibleTrigger asChild>
                              <button className="p-1 hover:bg-muted/50 rounded transition-colors">
                                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isStakingOpen ? 'rotate-180' : ''}`} />
                              </button>
                            </CollapsibleTrigger>
                          </div>
                          <CollapsibleContent>
                            <SidebarMenuSub className="mt-2 space-y-2">
                              {stakingSubItems.map((item) => (
                                <SidebarMenuSubItem key={item.url}>
                                  <SidebarMenuSubButton asChild>
                                    <NavLink
                                      to={item.url}
                                      className={`flex items-center gap-2 pl-5 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium ${getItemStyle(item.url)}`}
                                    >
                                      <span className="flex-shrink-0">{item.emoji}</span>
                                      <span>{item.title}</span>
                                    </NavLink>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </Collapsible>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              {/* Roadmap Category */}
              <SidebarMenuItem className="mt-4">
                <Collapsible open={isRoadmapOpen} onOpenChange={setIsRoadmapOpen}>
                  <div className={`flex items-center rounded-lg transition-all duration-200 ${getCategoryStyle(isRoadmapActive, true)}`}>
                    <NavLink
                      to="/roadmap"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 flex-1 text-[13px] font-medium"
                    >
                      <span className="text-lg flex-shrink-0">📍</span>
                      <span>
                        Roadmap
                      </span>
                    </NavLink>
                    
                    <CollapsibleTrigger asChild>
                      <button className="p-2 hover:bg-muted/50 rounded transition-colors">
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isRoadmapOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </CollapsibleTrigger>
                  </div>
                  
                  <CollapsibleContent>
                    <SidebarMenuSub className="mt-2 space-y-2">
                      {roadmapSubItems.map((item) => (
                        <SidebarMenuSubItem key={item.url}>
                          <SidebarMenuSubButton asChild>
                            <NavLink
                              to={item.url}
                              className={`flex items-center gap-2 pl-3 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium ${getItemStyle(item.url)}`}
                            >
                              <span className="flex-shrink-0">{item.emoji}</span>
                              <span>{item.title}</span>
                            </NavLink>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

              {/* Rest of main navigation items */}
              {mainNavigationItems.map((item) => (
                <SidebarMenuItem key={item.url} className="mt-4">
                  <SidebarMenuButton asChild className="h-auto p-0">
                    <NavLink
                      to={item.url}
                      end
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 text-[13px] font-medium ${getItemStyle(item.url, true)}`}
                    >
                      <span className="text-lg flex-shrink-0">{item.emoji}</span>
                      <span>
                        {item.title.split(' ').slice(1).join(' ')}
                      </span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
