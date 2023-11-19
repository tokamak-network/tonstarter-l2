type claimSchedule = {
  claimRound: number;
  ClaimTime: number;
  claimTokenAllocation: number;
};
type PublicVault = {
  addressForReceiving: string;
  vaultName: string;
  VaultType: string;
  tokenAllocation: number;
  vaultAdminAddress: string;
  vaultAddress: string;
  snapshot: number;
  whitelistStart: number;
  whitelistEnd: number;
  publicRound1: number;
  publicRound1End: number;
  publicRound2: number;
  publicRound2End: number;
  claimSchedule: claimSchedule[];
  isMandatory: boolean;
  index: number;
  stosTier: {
    oneTier: {
      requiredStos: number;
      allocatedToken: number;
    };
    twoTier: {
      requiredStos: number;
      allocatedToken: number;
    };
    threeTier: {
      requiredStos: number;
      allocatedToken: number;
    };
    fourTier: {
      requiredStos: number;
      allocatedToken: number;
    };
  };
  claimStart: number;
  tokenAllocationForLiquidity: number;
  hardCap: number;
};

type InitialLiquidityVault = {
  adminAddress: string;
  claimSchedule: claimSchedule[];
  isMandatory: boolean;
  startTime: number;
  tokenPair: string;
  vaultName: string;
  vaultTokenAllocation: number;
  vaultType: string;
};
type VestingVault = {
  adminAddress: string;
  claim: claimSchedule[];
  vaultName: string;
  vaultType: string;
  isMandatory: boolean;
};

type RewardsVault = {
  adminAddress: string;
  claim: claimSchedule[];
  vaultName: string;
  vaultType: string;
  vaultTokenAllocation: number;
  isMandatory: boolean;
};

type AirdropToStosHolderVault = {
  adminAddress: string;
  claim: claimSchedule[];
  vaultName: string;
  vaultType: string;
  vaultTokenAllocation: number;
  isMandatory: boolean;
};

type AirdropToTONStakerVault = {
  adminAddress: string;
  claim: claimSchedule[];
  vaultName: string;
  vaultType: string;
  vaultTokenAllocation: number;
  isMandatory: boolean;
};

type DAOVault = {
  adminAddress: string;
  claim: claimSchedule[];
  vaultName: string;
  vaultType: string;
  vaultTokenAllocation: number;
  isMandatory: boolean;
};

type TeamVault = {
  adminAddress: string;
  claim: claimSchedule[];
  vaultName: string;
  vaultType: string;
  vaultTokenAllocation: number;
  isMandatory: boolean;
};

type VaultAny =
  | PublicVault
  | InitialLiquidityVault
  | VestingVault
  | RewardsVault
  | AirdropToStosHolderVault
  | AirdropToTONStakerVault
  | DAOVault
  | TeamVault;

  interface ProjectType {
    projectName: string;
    projectKey: string;
    description: string;
    tokenName: string;
    tokenSymbol: string;
    tokenSymbolImage: string;
    timeZone: string;
    vaults: VaultAny[];
    adminAddress: string;
    l1TokenAddress: string;
    l2TokenAddress: string;
    totalSupply: string;
    isL1TokenDeployed: boolean;
    isL2TokenDeployed: boolean;
    fundingTarget: number;
    marketCap: number;
    projectTokenPrice: number;
    salePrice: number;
    stablePrice: number;
    tosPrice: number;
    totalTokenAllocation: number;
  }