import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Send booking email
    await sendContactEmail({
      ...body,
      message: `Booking Request\n\n${body.message || JSON.stringify(body, null, 2)}`,
    });
    
    return NextResponse.json(
      { message: "Booking request received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing booking:", error);
    return NextResponse.json(
      { error: "Failed to process booking request" },
      { status: 500 }
    );
  }
}
