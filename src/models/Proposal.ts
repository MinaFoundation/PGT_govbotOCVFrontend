export enum ProposalStatus {
  DRAFT = "DRAFT",
  CONSIDERATION_PHASE = "CONSIDERATION_VOTE",
  DELIBERATION_PHASE = "DELIBERATION_VOTE",
  FUNDING_VOTING_PHASE = "FUNDING_VOTE",
  FUNDED = "FUNDED",
  CANCELLED = "CANCELLED",
}

export interface ProposalAttributes {
  id: number;
  name: string;
  proposerDuid: string;
  budget: number;
  uri: string;
  fundingRoundId: number | null;
  forumThreadId: string | null;
  status: ProposalStatus;
  createdAt: string;
  updatedAt: string;
}
