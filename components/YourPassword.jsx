"use client";
import { useState } from "react";
import { Lock, Eye, EyeOff, Copy, Trash2 } from "lucide-react";

export default function YourPassword() {
  const [passwords, setPasswords] = useState([
    {
      id: 1,
      title: "Gmail Account",
      username: "john@example.com",
      password: "MySecurePass123!",
      website: "https://gmail.com",
      notes: "Main email account",
    },
    {
      id: 2,
      title: "Netflix",
      username: "johndoe",
      password: "NetflixPass456$",
      website: "https://netflix.com",
      notes: "Family subscription",
    },
  ]);

  const [showPasswords, setShowPasswords] = useState({});

  const togglePasswordVisibility = (passwordId) => {
    setShowPasswords((prev) => ({
      ...prev,
      [passwordId]: !prev[passwordId],
    }));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const deletePassword = (passwordId) => {
    if (confirm("Are you sure you want to delete this password?")) {
      setPasswords(passwords.filter((pass) => pass.id !== passwordId));
    }
  };

  const maskPassword = (password, show) => {
    return show ? password : "•".repeat(password.length);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 -mt-5">
          {passwords.length === 0 ? (
            <div className="text-center py-12 bg-slate-900/50 rounded-xl border border-slate-700">
              <div className="p-4 bg-green-500/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Lock size={36} className="text-green-400 opacity-60" />
              </div>
              <p className="text-slate-400 text-lg">No passwords saved yet</p>
              <p className="text-slate-500 text-sm mt-1">
                Add your first password to get started
              </p>
            </div>
          ) : (
            passwords.map((password) => (
              <div
                key={password.id}
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-5 rounded-xl shadow-xl border border-slate-700 backdrop-blur-sm hover:border-slate-600 transition-all duration-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Lock size={20} className="text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white">
                        {password.title}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {password.username}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => togglePasswordVisibility(password.id)}
                      className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200"
                      title="Toggle visibility"
                    >
                      {showPasswords[password.id] ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                    <button
                      onClick={() => copyToClipboard(password.password)}
                      className="p-2 text-green-400 hover:text-green-300 hover:bg-green-500/10 rounded-lg transition-all duration-200"
                      title="Copy password"
                    >
                      <Copy size={16} />
                    </button>
                    <button
                      onClick={() => deletePassword(password.id)}
                      className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all duration-200"
                      title="Delete password"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-400">Username</span>
                    <span className="text-white">{password.username}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-400">Password</span>
                    <span className="font-mono text-white">
                      {maskPassword(
                        password.password,
                        showPasswords[password.id]
                      )}
                    </span>
                  </div>
                  {password.website && (
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-slate-400">Website</span>
                      <a
                        href={password.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline transition-colors"
                      >
                        {password.website.replace("https://", "")}
                      </a>
                    </div>
                  )}
                  {/* {password.notes && (
                    <div className="p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-slate-400 block mb-1">Notes</span>
                      <span className="text-white text-sm">
                        {password.notes}
                      </span>
                    </div>
                  )} */}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
