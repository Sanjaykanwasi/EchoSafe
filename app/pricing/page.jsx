"use client";
import React, { useState } from "react";
import { Check, X, Shield, Zap, Crown, Users, Globe, Star } from "lucide-react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      icon: <Shield className="w-8 h-8 text-gray-400" />,
      price: { monthly: 0, annual: 0 },
      description: "Perfect for getting started with password security",
      gradient: "from-gray-400 to-gray-600",
      borderGradient: "from-gray-400/20 to-gray-600/20",
      features: [
        "Store up to 50 passwords",
        "Basic password generator",
        "Single device sync",
        "Email support",
        "Basic two-factor authentication",
      ],
      limitations: [
        "Limited to 1 credit card",
        "No secure file storage",
        "No advanced sharing",
      ],
      popular: false,
      cta: "Get Started Free",
    },
    {
      name: "Premium",
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      price: { monthly: 9.99, annual: 7.99 },
      description: "Everything you need for complete digital security",
      gradient: "from-blue-400 to-purple-500",
      borderGradient: "from-blue-400/30 to-purple-500/30",
      features: [
        "Unlimited passwords & credit cards",
        "Advanced password generator",
        "Multi-device sync",
        "Priority support",
        "Advanced two-factor authentication",
        "Secure file storage (1GB)",
        "Password sharing with 5 people",
        "Dark web monitoring",
        "Breach alerts",
      ],
      limitations: [],
      popular: true,
      cta: "Start Premium Trial",
    },
    {
      name: "Family",
      icon: <Users className="w-8 h-8 text-green-400" />,
      price: { monthly: 19.99, annual: 15.99 },
      description: "Protect your entire family with shared security",
      gradient: "from-green-400 to-emerald-500",
      borderGradient: "from-green-400/30 to-emerald-500/30",
      features: [
        "Everything in Premium",
        "Up to 6 family members",
        "Family password sharing",
        "Individual encrypted vaults",
        "Parental controls",
        "Secure file storage (5GB)",
        "Family breach monitoring",
        "Dedicated family support",
      ],
      limitations: [],
      popular: false,
      cta: "Protect Your Family",
    },
    {
      name: "Business",
      icon: <Crown className="w-8 h-8 text-yellow-400" />,
      price: { monthly: 49.99, annual: 39.99 },
      description: "Enterprise-grade security for teams",
      gradient: "from-yellow-400 to-orange-500",
      borderGradient: "from-yellow-400/30 to-orange-500/30",
      features: [
        "Everything in Family",
        "Up to 50 team members",
        "Advanced admin controls",
        "Team password policies",
        "SSO integration",
        "Unlimited secure storage",
        "Advanced reporting",
        "24/7 premium support",
        "Custom onboarding",
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales",
    },
  ];

  const faqs = [
    {
      question: "Can I switch plans anytime?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences.",
    },
    {
      question: "Is my data really secure?",
      answer:
        "Absolutely. We use AES-256 encryption and zero-knowledge architecture, meaning we can't access your data even if we wanted to.",
    },
    {
      question: "What happens if I cancel?",
      answer:
        "You'll retain access to your account until the end of your billing period. After that, you'll have read-only access to export your data.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 30-day money-back guarantee on all paid plans. No questions asked.",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Simple Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Choose the perfect plan for your security needs. All plans include
              our core security features.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center mb-16">
              <span
                className={`text-lg ${
                  !isAnnual ? "text-white" : "text-gray-400"
                } mr-4`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-transform ${
                    isAnnual ? "translate-x-9" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-lg ${
                  isAnnual ? "text-white" : "text-gray-400"
                } ml-4`}
              >
                Annual
                <span className="ml-2 px-2 py-1 text-xs bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${plan.popular ? "lg:scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular
                    ? "border-blue-500/50 shadow-2xl shadow-blue-500/20"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${plan.borderGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className="relative">
                  <div className="flex items-center mb-6">
                    {plan.icon}
                    <h3 className="text-2xl font-bold text-white ml-3">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-gray-400 ml-2">
                        {plan.price.monthly === 0 ? "" : "/month"}
                      </span>
                    </div>
                    {plan.price.monthly > 0 && isAnnual && (
                      <p className="text-sm text-gray-400 mt-1">
                        Billed annually (${(plan.price.annual * 12).toFixed(2)}
                        /year)
                      </p>
                    )}
                  </div>

                  <p className="text-gray-300 mb-8">{plan.description}</p>

                  <button
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 mb-8 ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg`
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    {plan.cta}
                  </button>

                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-start">
                        <X className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">
                          {limitation}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enterprise Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 text-center">
            <Globe className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Something Bigger?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              For enterprises with 50+ users, we offer custom solutions with
              dedicated support, advanced integrations, and tailored security
              features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Enterprise Sales
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-12">
            Trusted by millions worldwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                256-bit
              </div>
              <div className="text-gray-400">AES Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                99.9%
              </div>
              <div className="text-gray-400">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
              <div className="text-gray-400">Data Breaches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                24/7
              </div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
