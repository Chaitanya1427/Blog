"use client";

import { useState } from "react";
import { Mail, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const isConfigured = siteConfig.newsletter.provider !== "unconfigured";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Thank you for subscribing to engineering dispatches!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Subscription request could not be completed.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again later.");
    }
  };

  return (
    <div className="rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 text-white p-6 sm:p-12 border border-zinc-800 shadow-xl relative overflow-hidden">
      {/* Background aesthetic emerald glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wide border border-emerald-400/30">
          <Mail className="w-3.5 h-3.5" />
          <span>Weekly Engineering Dispatch</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
          Architectural deep dives, benchmark reports & AI insights
        </h3>

        <p className="text-sm sm:text-base text-zinc-300">
          No spam, no vendor hype. Real code, latency benchmarks, and full-stack deployment guides delivered directly to your inbox every Thursday.
        </p>

        {!isConfigured && (
          <div className="inline-flex items-center gap-1.5 text-xs text-amber-300/90 bg-amber-950/40 border border-amber-500/30 px-3 py-1 rounded-md">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Newsletter provider is currently in demo/unconfigured mode. Submissions are safely logged.</span>
          </div>
        )}

        {status === "success" ? (
          <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-200 text-sm flex items-center justify-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              disabled={status === "loading"}
              className="px-4 py-3 rounded-lg bg-zinc-800/90 border border-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 flex-1 text-sm disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Joining...</span>
                </>
              ) : (
                <span>Subscribe</span>
              )}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-xs text-rose-400 mt-2">{message}</p>
        )}

        <p className="text-xs text-zinc-400 pt-1">
          Unsubscribe anytime with 1 click. We respect your privacy.
        </p>
      </div>
    </div>
  );
}
