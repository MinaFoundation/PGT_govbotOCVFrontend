import type { APIRoute } from "astro";
import { fetchProposal } from "../../../services/apiService";

export const GET: APIRoute = async ({ params }) => {
  const { id } = params;

  if (!id || isNaN(parseInt(id))) {
    return new Response(JSON.stringify({ error: "Invalid proposal ID" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const proposal = await fetchProposal(parseInt(id));
    return new Response(JSON.stringify(proposal), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching proposal:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch proposal" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
