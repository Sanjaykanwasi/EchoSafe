"use client";
import React, { useState } from "react";
import { CreditCard, Plus, Sparkles } from "lucide-react";
import toast from "react-hot-toast";
import { addCardServer } from "@/actions/actions";
import { useUser } from "@clerk/nextjs";

// AddCard Component
export default function AddCard() {
  const user = useUser();

  const [cardData, setCardData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });

  const handleSubmit = () => {
    console.log("Card data:", cardData);

    setCardData({
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardholderName: "",
    });
    toast.success("Card added successfully!");
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl shadow-2xl border border-slate-700 max-w-md backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500/20 rounded-lg">
          <CreditCard className="text-blue-400" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-white">Add New Card</h3>
        <Sparkles className="text-yellow-400 ml-auto" size={16} />
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Card Name *
          </label>
          <input
            type="text"
            required
            value={cardData.cardName}
            onChange={(e) =>
              setCardData({ ...cardData, cardName: e.target.value })
            }
            placeholder="My Main Card"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Card Number *
          </label>
          <input
            type="text"
            required
            value={cardData.cardNumber}
            onChange={(e) =>
              setCardData({ ...cardData, cardNumber: e.target.value })
            }
            placeholder="1234 5678 9012 3456"
            maxLength="19"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200 font-mono"
          />
        </div>

        <div className="flex space-x-3">
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Expiry Date *
            </label>
            <input
              type="text"
              required
              value={cardData.expiryDate}
              onChange={(e) =>
                setCardData({ ...cardData, expiryDate: e.target.value })
              }
              placeholder="MM/YY"
              maxLength="5"
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              CVV *
            </label>
            <input
              type="password"
              required
              value={cardData.cvv}
              onChange={(e) =>
                setCardData({ ...cardData, cvv: e.target.value })
              }
              placeholder="123"
              maxLength="4"
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Cardholder Name *
          </label>
          <input
            type="text"
            required
            value={cardData.cardholderName}
            onChange={(e) =>
              setCardData({ ...cardData, cardholderName: e.target.value })
            }
            placeholder="John Doe"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center gap-2 font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          <Plus size={18} />
          Add Card
        </button>
      </div>
    </div>
  );
}
