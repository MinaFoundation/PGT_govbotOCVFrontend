import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export enum ProposalStatus {
  DRAFT = 'DRAFT',
  CONSIDERATION_PHASE = 'CONSIDERATION_VOTE',
  DELIBERATION_PHASE = 'DELIBERATION_VOTE',
  FUNDING_VOTING_PHASE = 'FUNDING_VOTE',
  FUNDED = 'FUNDED',
  CANCELLED = 'CANCELLED',
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
}

export class Proposal extends Model {
}

Proposal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    proposerDuid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    budget: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    uri: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    fundingRoundId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM(...Object.values(ProposalStatus)),
      allowNull: false,
      defaultValue: ProposalStatus.DRAFT,
    },
    forumThreadId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'proposals',
  }
);

export default Proposal;