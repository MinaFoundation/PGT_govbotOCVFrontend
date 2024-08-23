import { VotingStep, VotingStore } from '../models/VotingState';

const store = new VotingStore();

function updateUI() {
  const progressSteps = document.querySelectorAll('.progress-step');
  progressSteps.forEach((step, index) => {
    if (index <= store.currentStep) {
      step.classList.add('bg-primary', 'text-white');
      step.classList.remove('bg-gray-300', 'text-gray-600');
    } else {
      step.classList.remove('bg-primary', 'text-white');
      step.classList.add('bg-gray-300', 'text-gray-600');
    }
  });

  const instructionElement = document.querySelector('.current-instruction');
  if (instructionElement) {
    instructionElement.textContent = getInstructionText(store.currentStep);
  }
}

function getInstructionText(step: VotingStep): string {
  switch (step) {
    case VotingStep.ConnectWallet:
      return "Connect your Auro wallet to begin the voting process.";
    case VotingStep.SwitchNetwork:
      return "Switch to the Mina testnet network in your wallet.";
    case VotingStep.Vote:
      return "Cast your vote to approve or reject the proposal.";
  }
}

// Listen for custom events to update the UI
document.addEventListener('votingStepChanged', ((event: CustomEvent) => {
  store.updateStep(event.detail.step);
  updateUI();
}) as EventListener);

// Initial UI update
updateUI();