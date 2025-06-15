"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Send,
  CheckCircle,
  Mail,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Zap,
  Heart,
} from "lucide-react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xwpbojpk");

  if (state.succeeded) {
    return (
      <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-800/50 shadow-2xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Success CTA */}
          <div className="space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Thank you for reaching out! Your message has been received and
                I'll get back to you within 24 hours.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <Sparkles className="w-5 h-5" />
                <span>I'm excited to discuss your project!</span>
              </div>
            </div>
          </div>

          {/* Right - Success Action */}
          <div className="bg-gray-800/50 rounded-2xl p-8 text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mx-auto flex items-center justify-center">
              <Heart className="w-10 h-10 text-green-400 animate-pulse" />
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-white">What's Next?</h4>
              <p className="text-gray-400">
                I'll review your message and respond with next steps or
                questions.
              </p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-500 transition-all duration-300 transform hover:scale-105"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-800/50 shadow-2xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - CTA */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>

            <div className="space-y-4">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ready to turn your ideas into reality? I'm here to help you
                create exceptional digital experiences that make an impact.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-white font-semibold">Quick Response</h4>
                <p className="text-gray-400 text-sm">
                  Usually respond within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-white font-semibold">Free Consultation</h4>
                <p className="text-gray-400 text-sm">
                  Let's discuss your project needs
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-white font-semibold">Custom Solutions</h4>
                <p className="text-gray-400 text-sm">
                  Tailored to your specific requirements
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm">Ready to get started?</span>
            <ArrowRight className="w-4 h-4 animate-pulse" />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-gray-800/30 rounded-2xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h4 className="text-2xl font-bold text-white">Send Message</h4>
            <p className="text-gray-400">Tell me about your project</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="flex items-center space-x-2 text-gray-200 font-medium text-sm"
              >
                <Mail className="w-4 h-4" strokeWidth={2} />
                <span>Email Address</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-400 text-sm"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="flex items-center space-x-2 text-gray-200 font-medium text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell me about your project, timeline, and goals..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-400 text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={state.submitting}
              className="group relative w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold shadow-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <div className="relative flex items-center justify-center space-x-2">
                {state.submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Send Message</span>
                  </>
                )}
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
