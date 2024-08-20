import { atom } from 'nanostores';
import { VotingStep } from '../models/VotingState';

export const currentStep = atom<VotingStep>(VotingStep.ConnectWallet);
export function updateStep(step: VotingStep) {
    currentStep.set(step);
  }