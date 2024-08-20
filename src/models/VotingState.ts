export enum VotingStep {
    ConnectWallet,
    SwitchNetwork,
    Vote
  }
  
  export class VotingStore {
    currentStep: VotingStep = VotingStep.ConnectWallet;
    isWalletConnected: boolean = false;
    isCorrectNetwork: boolean = false;
    currentVote: 'yes' | 'no' | null = null;
  
    updateStep(step: VotingStep) {
      this.currentStep = step;
    }
  
    setWalletConnected(connected: boolean) {
      this.isWalletConnected = connected;
      if (connected && this.currentStep === VotingStep.ConnectWallet) {
        this.updateStep(VotingStep.SwitchNetwork);
      }
    }
  
    setCorrectNetwork(correct: boolean) {
      this.isCorrectNetwork = correct;
      if (correct && this.currentStep === VotingStep.SwitchNetwork) {
        this.updateStep(VotingStep.Vote);
      }
    }
  
    setVote(vote: 'yes' | 'no' | null) {
      this.currentVote = vote;
    }
  }