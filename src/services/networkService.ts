export class NetworkService {
  static async getCurrentNetwork(): Promise<{ networkID: string }> {
    if (!window.mina) {
      throw new Error('Auro Wallet is not installed');
    }
    return await window.mina.requestNetwork();
  }

  static async switchNetwork(networkId: string): Promise<{ networkID: string }> {
    if (!window.mina) {
      throw new Error('Auro Wallet is not installed');
    }
    return await window.mina.switchChain({ networkID: networkId });
  }

  static async verifyCorrectNetwork(expectedNetwork: string): Promise<boolean> {
    const currentNetwork = await this.getCurrentNetwork();
    return currentNetwork.networkID === expectedNetwork;
  }
}