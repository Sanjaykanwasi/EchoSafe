"use client";
import React, { useEffect, useState } from "react";
import { Eye, EyeOff, CreditCard, Trash2, Copy } from "lucide-react";

export default function YourCard() {
  // const [cards, setCards] = useState([
  //   {
  //     id: 1,
  //     cardName: "Main Visa Card",
  //     cardNumber: "4532 1234 5678 9012",
  //     expiryDate: "12/26",
  //     cardholderName: "John Doe",
  //     lastFour: "9012",
  //   },
  //   {
  //     id: 2,
  //     cardName: "Business MasterCard",
  //     cardNumber: "5555 6666 7777 8888",
  //     expiryDate: "03/25",
  //     cardholderName: "John Doe",
  //     lastFour: "8888",
  //   },
  // ]);
  const [cards, setCards] = useState([]);
  const [showCardNumbers, setShowCardNumbers] = useState({});

  useEffect(() => {
    const fetchCards = async () => {
      const res = await fetch("/api/get-cards", {
        method: "GET",
        credentials: "include", // send session cookies
      });
      const data = await res.json();
      if (data.success) {
        setCards(data.cards);
      } else {
        console.error("Failed to fetch cards:", data.error);
      }
    };

    fetchCards();
  }, []);

  const toggleCardVisibility = (cardId) => {
    setShowCardNumbers((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  // const deleteCard = (cardId) => {
  //   if (confirm("Are you sure you want to delete this card?")) {
  //     setCards(cards.filter((card) => card.id !== cardId));
  //   }
  // };
  const deleteCard = async (cardId) => {
    const confirmed = confirm("Are you sure you want to delete this card?");
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/delete-card?id=${cardId}`, {
        method: "DELETE",
        credentials: "include", // ✅ send session cookie
      });

      const result = await res.json();

      if (result.success) {
        setCards((prev) => prev.filter((card) => card._id !== cardId));
        alert("Card deleted successfully!");
      } else {
        alert("Failed to delete card: " + result.error);
      }
    } catch (error) {
      alert("Error deleting card.");
      console.error(error);
    }
  };

  const maskCardNumber = (cardNumber, show) => {
    if (show) return cardNumber;
    const lastFour = cardNumber.slice(-4);
    return `•••• •••• •••• ${lastFour}`;
  };

  return (
    <div className="space-y-4">
      {cards.length === 0 ? (
        <div className="text-center py-12 bg-slate-900/50 rounded-xl border border-slate-700">
          <div className="p-4 bg-blue-500/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <CreditCard size={36} className="text-blue-400 opacity-60" />
          </div>
          <p className="text-slate-400 text-lg">No cards saved yet</p>
          <p className="text-slate-500 text-sm mt-1">
            Add your first card to get started
          </p>
        </div>
      ) : (
        cards.map((card) => (
          <div
            key={card._id}
            className="bg-gradient-to-br from-slate-900 to-slate-800 p-5 rounded-xl shadow-xl border border-slate-700 backdrop-blur-sm hover:border-slate-600 transition-all duration-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <CreditCard size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">
                    {card.cardName}
                  </h3>
                  <p className="text-slate-400 text-sm">•••• {card.lastFour}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleCardVisibility(card.id)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200"
                  title="Toggle visibility"
                >
                  {showCardNumbers[card.id] ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
                <button
                  onClick={() =>
                    copyToClipboard(card.cardNumber.replace(/\s/g, ""))
                  }
                  className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-all duration-200"
                  title="Copy card number"
                >
                  <Copy size={16} />
                </button>
                <button
                  onClick={() => deleteCard(card._id)}
                  className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all duration-200"
                  title="Delete card"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                <span className="text-slate-400">Card Number</span>
                <span className="font-mono text-white">
                  {maskCardNumber(card.cardNumber, showCardNumbers[card.id])}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-400 block">Expires</span>
                  <span className="text-white font-medium">
                    {card.expiryDate}
                  </span>
                </div>
                <div className="p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-400 block">Cardholder</span>
                  <span className="text-white font-medium">
                    {card.cardholderName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
