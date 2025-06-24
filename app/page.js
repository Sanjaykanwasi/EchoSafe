import AddCard from "@/components/AddCard";
import AddPassword from "@/components/AddPassword";
import YourCard from "@/components/YourCard";
import YourPassword from "@/components/YourPassword";
import { CreditCard, Lock, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent mb-4">
            Password Manager
          </h1>
          <p className="text-slate-400 text-xl">Secure • Modern • Encrypted</p>
        </div>

        {/* Add Forms Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Add New Items
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 justify-center xl:justify-start">
                <CreditCard className="text-blue-400" size={28} />
                <h3 className="text-2xl font-semibold text-white">
                  Add Credit Card
                </h3>
              </div>
              <AddCard />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 justify-center xl:justify-start">
                <Shield className="text-green-400" size={28} />
                <h3 className="text-2xl font-semibold text-white">
                  Add Password
                </h3>
              </div>
              <AddPassword />
            </div>
          </div>
        </div>

        {/* Saved Items Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Your Saved Items
          </h2>

          <div className="space-y-16">
            {/* Your Cards Section */}
            <div>
              <div className="flex items-center gap-3 justify-center mb-8">
                <CreditCard className="text-blue-400" size={28} />
                <h3 className="text-2xl font-semibold text-white">
                  Your Cards
                </h3>
              </div>
              <YourCard />
            </div>

            {/* Your Passwords Section */}
            <div>
              <div className="flex items-center gap-3 justify-center mb-8">
                <Lock className="text-green-400" size={28} />
                <h3 className="text-2xl font-semibold text-white">
                  Your Passwords
                </h3>
              </div>
              <YourPassword />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
