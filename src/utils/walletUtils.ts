export const sendVoteTransaction = async (
  vote: "yes" | "no",
  proposalId: number
): Promise<{ hash: string }> => {
  const memo = `${vote} ${proposalId}`;
  const burnAddress = "B62qiburnzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzmp7r7UN6X";

  if (!window.mina) {
    throw new Error("Auro Wallet is not installed");
  }

  return await window.mina.sendPayment({
    to: burnAddress,
    amount: 0.00001,
    memo: memo,
  });
};

export const verifyCorrectNetwork = async (
  expectedNetwork: string
): Promise<boolean> => {
  if (!window.mina) {
    throw new Error("Auro Wallet is not installed");
  }

  const currentNetwork = await window.mina.requestNetwork();
  return currentNetwork.networkID === expectedNetwork;
};
