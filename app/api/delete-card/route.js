import clientPromise from "@/lib/mongodb";
import { getAuth } from "@clerk/nextjs/server";
import { ObjectId } from "mongodb";

export async function DELETE(req) {
  const { userId } = getAuth(req);

  if (!userId) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  const { searchParams } = new URL(req.url);
  const cardId = searchParams.get("id");

  if (!cardId) {
    return new Response(JSON.stringify({ error: "Missing card ID" }), {
      status: 400,
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db("Password");

    const result = await db.collection("cards").deleteOne({
      _id: new ObjectId(cardId),
      userId, // ✅ ensure users can only delete their own cards
    });

    if (result.deletedCount === 1) {
      return Response.json({ success: true });
    } else {
      return new Response(
        JSON.stringify({ error: "Card not found or not authorized" }),
        {
          status: 404,
        }
      );
    }
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
