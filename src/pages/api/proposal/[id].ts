import type { APIRoute } from 'astro';
import Proposal from '../../../models/Proposal';

export const get: APIRoute = async ({ params }) => {
  const { id } = params;
  
  try {
    const proposal = await Proposal.findByPk(id);
    if (proposal) {
      return new Response(JSON.stringify(proposal), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      });
    } else {
      return new Response(JSON.stringify({ error: 'Proposal not found' }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}