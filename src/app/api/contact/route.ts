import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    await sendContactEmail(body);

    return NextResponse.json(
      { message: "Contact request received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact:", error);
    return NextResponse.json(
      { error: "Failed to process contact request" },
      { status: 500 }
    );
  }
}
