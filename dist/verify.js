"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContractInfo = getContractInfo;
exports.isContractDeployed = isContractDeployed;
const types_1 = require("@stacks-helpers/types");
async function getContractInfo(contractAddress, contractName, networkUrl = types_1.API_URLS.mainnet) {
    try {
        const resp = await fetch(`${networkUrl}/v2/contracts/interface/${contractAddress}/${contractName}`);
        if (!resp.ok)
            return null;
        const sourceResp = await fetch(`${networkUrl}/v2/contracts/source/${contractAddress}/${contractName}`);
        const sourceData = sourceResp.ok ? await sourceResp.json() : null;
        return {
            source: sourceData?.source ?? "",
            publishHeight: sourceData?.publish_height ?? 0,
            clarityVersion: sourceData?.clarity_version?.toString() ?? "",
            txId: sourceData?.tx_id ?? "",
        };
    }
    catch {
        return null;
    }
}
async function isContractDeployed(contractAddress, contractName, networkUrl = types_1.API_URLS.mainnet) {
    const info = await getContractInfo(contractAddress, contractName, networkUrl);
    return info !== null;
}
