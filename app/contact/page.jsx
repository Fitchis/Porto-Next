"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactPage() {
  const [state, handleSubmit] = useForm("xwpbojpk");
  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-gray-200 mb-2">Your message has been sent.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-200 font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="you@email.com"
              className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow transition"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-400 mt-1 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-200 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your message..."
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow transition"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-400 mt-1 text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 disabled:opacity-60"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
