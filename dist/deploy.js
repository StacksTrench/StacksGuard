"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployContract = deployContract;
const transactions_1 = require("@stacks/transactions");
const types_1 = require("@stacks-helpers/types");
async function deployContract(options) {
    try {
        const tx = await (0, transactions_1.makeContractDeploy)({
            contractName: options.contractName,
            codeBody: options.codeBody,
            senderKey: options.senderKey,
            network: options.network ?? types_1.MAINNET,
            nonce: options.nonce,
            fee: options.fee,
            postConditionMode: transactions_1.PostConditionMode.Allow,
        });
        const result = await (0, transactions_1.broadcastTransaction)({
            transaction: tx,
            network: options.network ?? types_1.MAINNET,
        });
        const txid = typeof result === "string" ? result : result?.txid;
        if (txid && !result.error) {
            return { txid, success: true };
        }
        return { txid: "", success: false, error: JSON.stringify(result) };
    }
    catch (err) {
        return { txid: "", success: false, error: err.message };
    }
}
