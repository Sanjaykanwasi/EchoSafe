import clientPromise from "@/lib/mongodb";
import { getAuth } from "@clerk/nextjs/server";

export async function POST(req) {
  const { userId } = getAuth(req);

  if (!userId) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("Password");

    const result = await db.collection("passwords").insertOne({
      ...body,
      userId,
      createdAt: new Date(),
    });

    return Response.json({ success: true, insertedId: result.insertedId });
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      {
        status: 500,
      }
    );
  }
}
