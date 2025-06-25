import clientPromise from "@/lib/mongodb";
import { getAuth } from "@clerk/nextjs/server";

export async function GET(req) {
  const { userId } = getAuth(req);

  if (!userId) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db("Password");

    const passwords = await db
      .collection("passwords")
      .find({ userId })
      .sort({ createdAt: -1 })
      .toArray();

    return Response.json(passwords);
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
