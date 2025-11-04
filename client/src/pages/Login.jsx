import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Login = () => {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {axios, setToken} = useAppContext()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = state === "login" ? '/api/user/login' : '/api/user/register'
    try {
        const {data} = await axios.post(url, {name, email, password})
        if(data.success){
            setToken(data.token)
            localStorage.setItem('token', data.token)
        }else{
            toast.error(data.message)
        }
        
    } catch (error) {
        toast(error.message)
        
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Animated background with floating orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              animation: 'grid-shift 20s ease-in-out infinite'
            }}
          ></div>
        </div>
      </div>

      {/* Glassmorphism container with enhanced effects */}
      <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-10 w-full max-w-md transform hover:scale-105 transition-all duration-500 hover:shadow-purple-500/25">
        
        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 pointer-events-none"></div>
        
        {/* Header with enhanced typography and animation */}
        <div className="relative z-10 text-center mb-8">
          <div className="inline-block">
            <h1 className="text-4xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-2 animate-pulse">
              {state === "login" ? "Welcome Back" : "Join Us"}
            </h1>
            <div className="text-6xl mb-4 animate-bounce">
              {state === "login" ? "🚀" : "✨"}
            </div>
            <p className="text-white/60 text-sm font-medium">
              {state === "login" ? "Enter your digital realm" : "Create your digital identity"}
            </p>
          </div>
        </div>

        <div className="space-y-6 relative z-10">
          {/* Enhanced input fields with floating labels */}
          {state === "register" && (
            <div className="relative group">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=" "
                className="w-full h-14 px-4 pt-6 pb-2 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-transparent outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 hover:bg-white/15 focus:ring-4 focus:ring-purple-500/20"
              />
              <label className="absolute left-4 top-2 text-xs font-semibold text-purple-300 transition-all duration-300 group-focus-within:text-purple-200">
                Full Name
              </label>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          )}

          <div className="relative group">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              className="w-full h-14 px-4 pt-6 pb-2 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-transparent outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 hover:bg-white/15 focus:ring-4 focus:ring-purple-500/20"
            />
            <label className="absolute left-4 top-2 text-xs font-semibold text-purple-300 transition-all duration-300 group-focus-within:text-purple-200">
              Email Address
            </label>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          <div className="relative group">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              className="w-full h-14 px-4 pt-6 pb-2 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-transparent outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 hover:bg-white/15 focus:ring-4 focus:ring-purple-500/20"
            />
            <label className="absolute left-4 top-2 text-xs font-semibold text-purple-300 transition-all duration-300 group-focus-within:text-purple-200">
              Password
            </label>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          {/* Enhanced submit button with gradient and animations */}
          <button
            onClick={handleSubmit}
            className="relative w-full h-14 bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 hover:from-purple-500 hover:via-purple-400 hover:to-cyan-400 rounded-2xl text-white font-bold text-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:-translate-y-1 active:scale-95 overflow-hidden group"
          >
            <span className="relative z-10">
              {state === "login" ? "Sign In" : "Create Account"}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>

        {/* Enhanced toggle section */}
        <div className="mt-8 text-center relative z-10">
          <div className="text-white/70 text-sm mb-3">
            {state === "register" ? "Already part of our community?" : "New to our platform?"}
          </div>
          <button
            onClick={() => setState(state === "login" ? "register" : "login")}
            className="inline-flex items-center px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            <span className="mr-2">
              {state === "register" ? "Sign In" : "Join Now"}
            </span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      </div>

      {/* Custom CSS for grid animation */}
      <style jsx>{`
        @keyframes grid-shift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(25px, 25px); }
        }
      `}</style>
    </div>
  );
};

export default Login;