import React from "react";
import {
  Shield,
  Lock,
  CreditCard,
  Eye,
  Users,
  Smartphone,
  Globe,
  Check,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 blur-3xl opacity-30 rounded-full"></div>
            <h1 className="relative text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Digital
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Fortress
              </span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Securely store, manage, and access all your passwords and credit
            card information with military-grade encryption. Never forget a
            password again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href={"/password"}>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
              </button>
            </Link>
            <Link href={"/about"}>
              <button className="px-8 cursor-pointer py-4 border border-gray-600 text-white hover:bg-gray-900 hover:border-cyan-500 rounded-xl font-semibold transition-all flex items-center gap-2">
                About Us
              </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center gap-2 text-gray-400">
              <Shield className="h-5 w-5" />
              <span>256-bit AES Encryption</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Users className="h-5 w-5" />
              <span>Trusted by 1M+ Users</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Check className="h-5 w-5" />
              <span>Zero-Knowledge Architecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive security features designed to protect your digital
              life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Password Management */}
            <div className="bg-gray-900/60 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all group backdrop-blur-sm">
              <div className="bg-cyan-600/20 p-3 rounded-lg w-fit mb-4 group-hover:bg-cyan-600/30 transition-colors">
                <Lock className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Password Vault
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Store unlimited passwords with advanced encryption.
                Auto-generate strong passwords and fill them automatically
                across all your devices.
              </p>
            </div>

            {/* Credit Card Storage */}
            <div className="bg-gray-900/60 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all group backdrop-blur-sm">
              <div className="bg-blue-600/20 p-3 rounded-lg w-fit mb-4 group-hover:bg-blue-600/30 transition-colors">
                <CreditCard className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Payment Security
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Securely store credit card details, bank information, and
                payment methods. Quick checkout with encrypted autofill.
              </p>
            </div>

            {/* Multi-Platform */}
            <div className="bg-gray-900/60 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all group backdrop-blur-sm">
              <div className="bg-emerald-600/20 p-3 rounded-lg w-fit mb-4 group-hover:bg-emerald-600/30 transition-colors">
                <Smartphone className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Cross-Platform Sync
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Access your vault from any device. Native apps for iOS, Android,
                Windows, Mac, and browser extensions.
              </p>
            </div>

            {/* Security Monitoring */}
            <div className="bg-gray-900/60 p-8 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all group backdrop-blur-sm">
              <div className="bg-orange-600/20 p-3 rounded-lg w-fit mb-4 group-hover:bg-orange-600/30 transition-colors">
                <Eye className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Security Monitoring
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Dark web monitoring, breach alerts, and password health reports
                to keep your accounts secure.
              </p>
            </div>

            {/* Secure Sharing */}
            <div className="bg-gray-900/60 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all group backdrop-blur-sm">
              <div className="bg-purple-600/20 p-3 rounded-lg w-fit mb-4 group-hover:bg-purple-600/30 transition-colors">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Secure Sharing
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Share passwords and sensitive information with family or team
                members using encrypted sharing.
              </p>
            </div>

            {/* Global Access */}
            <div className="bg-gray-900/60 p-8 rounded-2xl border border-gray-700 hover:border-indigo-500/50 transition-all group backdrop-blur-sm">
              <div className="bg-indigo-600/20 p-3 rounded-lg w-fit mb-4 group-hover:bg-indigo-600/30 transition-colors">
                <Globe className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Global Infrastructure
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Lightning-fast access worldwide with our global server network
                and 99.9% uptime guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/80 p-12 rounded-3xl border border-cyan-500/20 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Secure Your Digital Life?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join millions of users who trust SecureVault to protect their most
              sensitive information. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"/password"}>
                {" "}
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Get Started Free
                </button>
              </Link>
              <Link href={"/contact"}>
                <button className="px-8 py-4 border border-gray-600 text-white hover:bg-gray-900 hover:border-cyan-500 rounded-xl font-semibold transition-all">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
