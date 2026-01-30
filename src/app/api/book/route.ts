import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the booking request (in production, this would send an email or save to database)
    console.log("Booking request received:", body);
    
    // TODO: Integrate with email service (e.g., Resend, SendGrid) or database
    // Example:
    // await sendEmail({
    //   to: "info@perfectlypamperedparties.co.uk",
    //   subject: "New Booking Request",
    //   body: JSON.stringify(body, null, 2),
    // });
    
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
