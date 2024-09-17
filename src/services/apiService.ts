import type { ProposalAttributes } from "../models/Proposal";

const { API_BASE_URL } = process.env;

export async function fetchProposal(id: number): Promise<ProposalAttributes> {
  const response = await fetch(`${API_BASE_URL}/api/projects/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch proposal");
  }
  const data = await response.json();
  return data.proposal;
}

export async function fetchActiveProposals(): Promise<ProposalAttributes[]> {
  const response = await fetch(
    `${API_BASE_URL}/api/projects?status=FUNDING_VOTE`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch active proposals");
  }
  const data = await response.json();
  return data.proposals;
}
