"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Plus, Sparkles, Shield } from "lucide-react";

export default function AddPassword() {
  const [passwordData, setPasswordData] = useState({
    title: "",
    username: "",
    password: "",
    website: "",
    notes: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 16; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPasswordData({ ...passwordData, password });
  };

  const handleSubmit = () => {
    // Here you would typically save to your database via API
    console.log("Password data:", passwordData);
    // Reset form
    setPasswordData({
      title: "",
      username: "",
      password: "",
      website: "",
      notes: "",
    });
    alert("Password added successfully!");
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl shadow-2xl border border-slate-700 max-w-md backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-green-500/20 rounded-lg">
          <Shield className="text-green-400" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-white">Add New Password</h3>
        <Sparkles className="text-yellow-400 ml-auto" size={16} />
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Title *
          </label>
          <input
            type="text"
            required
            value={passwordData.title}
            onChange={(e) =>
              setPasswordData({ ...passwordData, title: e.target.value })
            }
            placeholder="Gmail Account"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Username/Email *
          </label>
          <input
            type="text"
            required
            value={passwordData.username}
            onChange={(e) =>
              setPasswordData({ ...passwordData, username: e.target.value })
            }
            placeholder="john@example.com"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Password *
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={passwordData.password}
              onChange={(e) =>
                setPasswordData({ ...passwordData, password: e.target.value })
              }
              placeholder="Enter password"
              className="w-full px-4 py-3 pr-24 bg-slate-800/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200 font-mono"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="p-1 text-slate-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
              <button
                type="button"
                onClick={generatePassword}
                className="px-2 py-1 text-xs bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
              >
                Gen
              </button>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Website URL
          </label>
          <input
            type="url"
            value={passwordData.website}
            onChange={(e) =>
              setPasswordData({ ...passwordData, website: e.target.value })
            }
            placeholder="https://gmail.com"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200"
          />
        </div>

        {/* <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Notes
          </label>
          <textarea
            value={passwordData.notes}
            onChange={(e) =>
              setPasswordData({ ...passwordData, notes: e.target.value })
            }
            placeholder="Additional notes..."
            rows="3"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200 resize-none"
          />
        </div> */}

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-lg hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center justify-center gap-2 font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          <Plus size={18} />
          Add Password
        </button>
      </div>
    </div>
  );
}
