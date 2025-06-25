import clientPromise from "@/lib/mongodb";
import { getAuth } from "@clerk/nextjs/server";

export async function GET(req) {
  const { userId } = getAuth(req); // ✅ get user from request headers/cookies

  if (!userId) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db("Password");
    const cards = await db.collection("cards").find({ userId }).toArray();

    return Response.json({ success: true, cards });
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      {
        status: 500,
      }
    );
  }
}
