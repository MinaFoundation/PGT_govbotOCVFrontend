interface SendPaymentArgs {
  to: string;
  amount: number;
  memo: string;
}

interface SendTransactionArgs {
  // Define the structure of transaction arguments
}

interface ChainInfoArgs {
  networkID: string;
}

interface MinaProvider {
  requestAccounts: () => Promise<string[]>;
  getAccounts: () => Promise<string[]>;
  requestNetwork: () => Promise<ChainInfoArgs>;
  switchChain: (args: { networkID: string }) => Promise<ChainInfoArgs>;
  sendPayment: (args: SendPaymentArgs) => Promise<{ hash: string }>;
  sendTransaction: (args: SendTransactionArgs) => Promise<{ hash: string }>;
}

interface Window {
  mina?: MinaProvider;
}
