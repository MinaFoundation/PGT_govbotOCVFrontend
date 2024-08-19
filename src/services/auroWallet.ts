export class AuroWalletService {
  static async connect(): Promise<string[]> {
    if (!window.mina) {
      throw new Error('Auro Wallet is not installed');
    }
    return await window.mina.requestAccounts();
  }

  static async getAccounts(): Promise<string[]> {
    if (!window.mina) {
      throw new Error('Auro Wallet is not installed');
    }
    return await window.mina.getAccounts();
  }
}