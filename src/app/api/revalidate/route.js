import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST() {
  // // Verify the request comes from Prismic (optional but recommended)
  // const prismicSecret = process.env.PRISMIC_WEBHOOK_SECRET;
  // const webhookSecret = request.headers.get("Prismic-Secret");
  // if (prismicSecret && webhookSecret !== prismicSecret) {
  //   return NextResponse.error("Unauthorized", { status: 401 });
  // }
  revalidateTag("prismic");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
