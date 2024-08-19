interface SendPaymentArgs  {
  // to is the target address. require base58 address. 
  readonly to: string
  // amount is the send amount, with decimal. e.g. 1.1
  readonly amount: number
  // option. Auro Wallet also provide advance option to change fee.
  readonly fee?: number
  // option.
  readonly memo?:string
}

interface SendTransactionArgs  {
    // only sign with auro wallet, auro-extension-wallet support from V2.2.16. 
    readonly onlySign?: boolean; 
    // transaction is zk commond that create by contract.
    readonly transaction: string | object;
    // option. 
    readonly feePayer?: {
        // option. Auro Wallet also provide advance option to change fee.
        readonly fee?: number;
        // option.
        readonly memo?: string;
    };
}

interface Window {
    mina?: {
      requestAccounts: () => Promise<string[]>;
      getAccounts: () => Promise<string[]>;
      requestNetwork: () => Promise<{ networkID: string }>;
      switchChain: (args: { networkID: string }) => Promise<{ networkID: string }>;
      sendPayment: (args: SendPaymentArgs)  => Promise<{ hash: string }>;
      sendTransaction: (args: SendTransactionArgs) => Promise<{ hash: string }>;
    };
  }