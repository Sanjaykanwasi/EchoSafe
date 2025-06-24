import AddCard from "@/components/AddCard";
import AddPassword from "@/components/AddPassword";
import YourCard from "@/components/YourCard";
import YourPassword from "@/components/YourPassword";
import { CreditCard, Lock, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent mb-2 sm:mb-4">
            Password Manager
          </h1>
          <p className="text-slate-400 text-base sm:text-lg lg:text-xl">
            Secure • Modern • Encrypted
          </p>
        </div>

        {/* Add Forms Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-white mb-6 sm:mb-8 lg:mb-12">
            Add New Items
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <CreditCard className="text-blue-400" size={24} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                  Add Credit Card
                </h3>
              </div>
              <AddCard />
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Shield className="text-green-400" size={24} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                  Add Password
                </h3>
              </div>
              <AddPassword />
            </div>
          </div>
        </div>

        {/* Saved Items Section */}
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-white mb-6 sm:mb-8 lg:mb-12">
            Your Saved Items
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Your Cards Section */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <CreditCard className="text-blue-400" size={24} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                  Your Cards
                </h3>
              </div>
              <YourCard />
            </div>

            {/* Your Passwords Section */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Lock className="text-green-400" size={24} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
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
