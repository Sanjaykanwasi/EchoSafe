import clientPromise from "@/lib/mongodb";
import { getAuth } from "@clerk/nextjs/server";
import { ObjectId } from "mongodb";

export async function DELETE(req) {
  const { userId } = getAuth(req);
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!userId || !id) {
    return new Response(
      JSON.stringify({ error: "Unauthorized or Missing ID" }),
      {
        status: 401,
      }
    );
  }

  try {
    const client = await clientPromise;
    const db = client.db("Password");

    const result = await db.collection("passwords").deleteOne({
      _id: new ObjectId(id),
      userId,
    });

    if (result.deletedCount === 1) {
      return Response.json({ success: true });
    } else {
      return new Response(
        JSON.stringify({ error: "Not found or unauthorized" }),
        { status: 404 }
      );
    }
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
