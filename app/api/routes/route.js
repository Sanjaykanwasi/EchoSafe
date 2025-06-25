import clientPromise from "@/lib/mongodb";

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const collections = await db.collections();

    console.log("✅ MongoDB connected!");
    return Response.json({
      ok: true,
      collections: collections.map((c) => c.collectionName),
    });
  } catch (e) {
    console.error("❌ MongoDB connection error:", e);
    return new Response(JSON.stringify({ ok: false, error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
