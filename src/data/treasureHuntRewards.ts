// Treasure Hunt reward data.
// "Hero's reward distribution in the same pool" values below are BCOIN.
// SEN reward = BCOIN reward x 2 (computed at render time).

export interface DailyPoolRow {
  rarity: string;
  bcoin: string;
  sen: string;
}

export interface BaseRewardStakeRow {
  rarity: string;
  bcoin: string;
  sen: string;
  timeLock: number;
}

// Base Reward — minimum staking requirements per rarity.
export const baseRewardStaking: BaseRewardStakeRow[] = [
  { rarity: "Common", bcoin: "60", sen: "300", timeLock: 30 },
  { rarity: "Rare", bcoin: "194", sen: "971", timeLock: 30 },
  { rarity: "Super Rare", bcoin: "388", sen: "1,942", timeLock: 30 },
  { rarity: "Epic", bcoin: "777", sen: "3,884", timeLock: 30 },
  { rarity: "Legend", bcoin: "1,942", sen: "9,709", timeLock: 30 },
  { rarity: "Super Legend", bcoin: "3,883", sen: "19,417", timeLock: 30 },
  { rarity: "Mega", bcoin: "7,766", sen: "38,834", timeLock: 30 },
  { rarity: "Super Mega", bcoin: "19,415", sen: "77,668", timeLock: 30 },
  { rarity: "Mystic", bcoin: "38,830", sen: "194,170", timeLock: 30 },
  { rarity: "Super Mystic", bcoin: "77,660", sen: "388,340", timeLock: 30 },
];

// The Total Daily Rewards Pool (largest pool first).
export const totalDailyPool: DailyPoolRow[] = [
  { rarity: "Super Mystic", bcoin: "6,250", sen: "12,500" },
  { rarity: "Mystic", bcoin: "5,000", sen: "10,000" },
  { rarity: "Super Mega", bcoin: "3,750", sen: "7,500" },
  { rarity: "Mega", bcoin: "2,500", sen: "5,000" },
  { rarity: "Super Legend", bcoin: "2,250", sen: "4,500" },
  { rarity: "Legend", bcoin: "2,000", sen: "4,000" },
  { rarity: "Epic", bcoin: "1,500", sen: "3,000" },
  { rarity: "Super Rare", bcoin: "1,000", sen: "2,000" },
  { rarity: "Rare", bcoin: "500", sen: "1,000" },
  { rarity: "Common", bcoin: "250", sen: "500" },
];

// Shared Rank / Total Heroes columns (identical across every pool).
export const rewardRanks: { rank: number; totalHeroes: number }[] = [
  { rank: 1, totalHeroes: 3 },
  { rank: 2, totalHeroes: 9 },
  { rank: 3, totalHeroes: 27 },
  { rank: 4, totalHeroes: 81 },
  { rank: 5, totalHeroes: 243 },
  { rank: 6, totalHeroes: 729 },
  { rank: 7, totalHeroes: 2187 },
  { rank: 8, totalHeroes: 6561 },
  { rank: 9, totalHeroes: 19683 },
  { rank: 10, totalHeroes: 59049 },
];

export interface RewardPool {
  name: string;
  // BCOIN reward per hero, indexed by rank (rank 1 = index 0).
  bcoin: number[];
}

// Hero's reward distribution in the same pool (BCOIN per hero), largest pool first.
export const rewardPools: RewardPool[] = [
  {
    name: "Super Mystic",
    bcoin: [
      0.7233796296, 0.1205632716, 0.0200938786, 0.0033489798, 0.0005581633,
      0.0000930272, 0.0000155045, 0.0000025841, 0.0000004307, 0.0000000718,
    ],
  },
  {
    name: "Mystic",
    bcoin: [
      0.5787037037, 0.0964506173, 0.0160751029, 0.0026791838, 0.0004465306,
      0.0000744218, 0.0000124036, 0.0000020673, 0.0000003445, 0.0000000574,
    ],
  },
  {
    name: "Super Mega",
    bcoin: [
      0.4340277778, 0.072337963, 0.0120563272, 0.0020093879, 0.000334898,
      0.0000558163, 0.0000093027, 0.0000015505, 0.0000002584, 0.0000000431,
    ],
  },
  {
    name: "Mega",
    bcoin: [
      0.2893518519, 0.0482253086, 0.0080375514, 0.0013395919, 0.0002232653,
      0.0000372109, 0.0000062018, 0.0000010336, 0.0000001723, 0.0000000287,
    ],
  },
  {
    name: "Super Legend",
    bcoin: [
      0.2604166667, 0.0434027778, 0.0072337963, 0.0012056327, 0.0002009388,
      0.0000334898, 0.0000055816, 0.0000009303, 0.000000155, 0.0000000258,
    ],
  },
  {
    name: "Legend",
    bcoin: [
      0.2314814815, 0.0385802469, 0.0064300412, 0.0010716735, 0.0001786123,
      0.0000297687, 0.0000049615, 0.0000008269, 0.0000001378, 0.000000023,
    ],
  },
  {
    name: "Epic",
    bcoin: [
      0.1736111111, 0.0289351852, 0.0048225309, 0.0008037551, 0.0001339592,
      0.0000223265, 0.0000037211, 0.0000006202, 0.0000001034, 0.0000000172,
    ],
  },
  {
    name: "Super Rare",
    bcoin: [
      0.1157407407, 0.0192901235, 0.0032150206, 0.0005358368, 0.0000893061,
      0.0000148844, 0.0000024807, 0.0000004135, 0.0000000689, 0.0000000115,
    ],
  },
  {
    name: "Rare",
    bcoin: [
      0.0578703704, 0.0096450617, 0.0016075103, 0.0002679184, 0.0000446531,
      0.0000074422, 0.0000012404, 0.0000002067, 0.0000000345, 0.0000000057,
    ],
  },
  {
    name: "Common",
    bcoin: [
      0.0289351852, 0.0048225309, 0.0008037551, 0.0001339592, 0.0000223265,
      0.0000037211, 0.0000006202, 0.0000001034, 0.0000000172, 0.0000000029,
    ],
  },
];

// Format a reward number with a fixed 10-decimal precision so columns align.
export const formatReward = (value: number): string => value.toFixed(10);
