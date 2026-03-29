export interface ContractInfo {
    source: string;
    publishHeight: number;
    clarityVersion: string;
    txId: string;
}
export declare function getContractInfo(contractAddress: string, contractName: string, networkUrl?: string): Promise<ContractInfo | null>;
export declare function isContractDeployed(contractAddress: string, contractName: string, networkUrl?: string): Promise<boolean>;
