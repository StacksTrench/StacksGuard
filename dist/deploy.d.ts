import type { BatchResult } from "@stacks-helpers/types";
export interface DeployOptions {
    contractName: string;
    codeBody: string;
    senderKey: string;
    network?: any;
    nonce?: bigint;
    fee?: number;
}
export declare function deployContract(options: DeployOptions): Promise<BatchResult>;
