import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db("Password"); //  your actual DB name
    const collection = db.collection("cards");

    const result = await collection.insertOne(body);

    return Response.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error("❌ Error saving card:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
