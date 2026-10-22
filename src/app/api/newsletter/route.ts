import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email address is required" },
        { status: 400 }
      );
    }

    // If a real provider is configured via env
    if (siteConfig.newsletter.provider === "mailchimp" || siteConfig.newsletter.provider === "convertkit") {
      // Connect to external API endpoint if provided
      if (siteConfig.newsletter.endpoint) {
        try {
          const res = await fetch(siteConfig.newsletter.endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          });
          if (!res.ok) {
            throw new Error("Provider returned error status");
          }
        } catch {
          return NextResponse.json(
            { error: "Third-party newsletter provider error." },
            { status: 502 }
          );
        }
      }
    }

    // In unconfigured / local environment, return clean success state
    return NextResponse.json({
      success: true,
      message: `Successfully registered ${email}! Welcome to TechPilot engineering dispatches.`,
      provider: siteConfig.newsletter.provider,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process newsletter subscription" },
      { status: 500 }
    );
  }
}
