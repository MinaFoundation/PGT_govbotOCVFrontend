import { atom } from 'nanostores';

export const currentProposalId = atom<number | null>(null);

export function setProposalId(id: number) {
    console.log("setting proposal id to ", id);
  currentProposalId.set(id);
}