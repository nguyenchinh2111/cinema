"use client";

import { useState } from "react";
import Link from "next/link";

interface ModeConfig {
  mode: "user" | "admin";
  headerIcon: string;
  title: string;
  subtitle: string;
  usernameIcon: string;
  passwordIcon: string;
  usernameLabel: string;
  passwordLabel: string;
  rememberLabel: string;
  forgotLink: string;
  registerText: string;
  registerLink: string;
  buttonText: string;
  securityText: string;
  showSecurity: boolean;
}

const LoginPage = () => {
  const [currentMode, setCurrentMode] = useState<"user" | "admin">("user");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const userConfig: ModeConfig = {
    mode: "user",
    headerIcon: "fas fa-users",
    title: "User Portal",
    subtitle: "Welcome Back",
    usernameIcon: "fas fa-user",
    passwordIcon: "fas fa-lock",
    usernameLabel: "Username",
    passwordLabel: "Password",
    rememberLabel: "Remember me",
    forgotLink: "Forgot Password?",
    registerText: "New user?",
    registerLink: "Create Account",
    buttonText: "Sign In",
    securityText: "Your data is protected with enterprise-grade security.",
    showSecurity: true,
  };

  const adminConfig: ModeConfig = {
    mode: "admin",
    headerIcon: "fas fa-shield-alt",
    title: "Admin Portal",
    subtitle: "Dashboard Access Control",
    usernameIcon: "fas fa-user-shield",
    passwordIcon: "fas fa-key",
    usernameLabel: "Administrator ID",
    passwordLabel: "Access Key",
    rememberLabel: "Keep me signed in",
    forgotLink: "Reset Access?",
    registerText: "Need admin access?",
    registerLink: "Contact IT Support",
    buttonText: "Access Dashboard",
    securityText: "Authorized personnel only. All access attempts are logged.",
    showSecurity: true,
  };

  const config = currentMode === "user" ? userConfig : adminConfig;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData, "Mode:", currentMode);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden font-sans transition-all duration-500">
      {/* Back to Home Link */}
      <Link
        href="/"
        className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20 flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 group"
      >
        <i className="fas fa-arrow-left text-base sm:text-lg group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="text-xs sm:text-sm font-medium">Back to Home</span>
      </Link>

      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 w-full h-full opacity-30 animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/5 left-1/10 text-blue-400/20 text-xl animate-float">
            ⚡
          </div>
          <div className="absolute top-3/5 right-1/6 text-blue-400/20 text-xl animate-float-delayed">
            🔒
          </div>
        </div>
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className={`
          relative z-10 w-[470px] max-w-[90%] p-10 sm:p-8 md:p-10
          bg-gradient-to-br from-slate-800/95 to-slate-700/95 
          backdrop-blur-3xl rounded-3xl
          border-2 transition-all duration-500 animate-entrance
          shadow-[0_25px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(59,130,246,0.1),inset_0_1px_0_rgba(59,130,246,0.2)]
          ${
            currentMode === "user"
              ? "border-emerald-500/30 shadow-[0_25px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(16,185,129,0.1),inset_0_1px_0_rgba(16,185,129,0.2)]"
              : "border-blue-500/30"
          }
        `}
      >
        {/* Mode Toggle */}
        <div className="relative flex bg-slate-900/60 rounded-full p-1 mb-8 border border-blue-500/20">
          <div
            className={`
              absolute top-1 left-1 w-[calc(50%-4px)] h-[calc(100%-8px)] 
              rounded-full transition-transform duration-300 shadow-lg
              ${
                currentMode === "user"
                  ? "bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-emerald-500/30"
                  : "bg-gradient-to-r from-blue-500 to-blue-600 shadow-blue-500/30"
              }
              ${currentMode === "admin" ? "translate-x-full" : "translate-x-0"}
            `}
          />
          <button
            type="button"
            onClick={() => setCurrentMode("user")}
            className={`
              flex-1 flex items-center justify-center gap-2 px-3 sm:px-5 py-3 rounded-full 
              cursor-pointer transition-all duration-300 relative z-10 text-xs sm:text-sm font-medium
              ${currentMode === "user" ? "text-white" : "text-white/60"}
            `}
          >
            <i className="fas fa-user text-sm sm:text-base" />
            <span>User</span>
          </button>
          <button
            type="button"
            onClick={() => setCurrentMode("admin")}
            className={`
              flex-1 flex items-center justify-center gap-2 px-3 sm:px-5 py-3 rounded-full 
              cursor-pointer transition-all duration-300 relative z-10 text-xs sm:text-sm font-medium
              ${currentMode === "admin" ? "text-white" : "text-white/60"}
            `}
          >
            <i className="fas fa-user-shield text-sm sm:text-base" />
            <span>Admin</span>
          </button>
        </div>

        {/* Header */}
        <div
          className={`text-center mb-8 transition-all duration-300 ${
            currentMode === "user" ? "text-emerald-400" : "text-blue-400"
          }`}
        >
          <i
            className={`
              ${config.headerIcon} text-5xl mb-4 bg-gradient-to-r 
              ${
                currentMode === "user"
                  ? "from-emerald-400 to-emerald-300"
                  : "from-blue-400 to-blue-300"
              } 
              bg-clip-text text-transparent
              drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300
            `}
          />
          <h2
            className={`
            text-2xl sm:text-3xl font-bold mb-2 uppercase tracking-[2px] transition-all duration-300
            ${
              currentMode === "user"
                ? "text-shadow-emerald"
                : "text-shadow-blue"
            }
          `}
          >
            {config.title}
          </h2>
          <p
            className={`
            text-sm italic tracking-wide transition-all duration-300
            ${
              currentMode === "user"
                ? "text-emerald-400/80"
                : "text-blue-400/80"
            }
          `}
          >
            {config.subtitle}
          </p>
        </div>

        {/* Form Content */}
        <div className="flex flex-col gap-5">
          {/* Username Input */}
          <div className="relative mb-6">
            <i
              className={`
              ${
                config.usernameIcon
              } absolute left-4 top-1/2 transform -translate-y-1/2 
              z-10 text-base transition-all duration-300
              ${
                currentMode === "user"
                  ? "text-emerald-400/70"
                  : "text-blue-400/70"
              }
            `}
            />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              className={`
                w-full bg-slate-900/50 rounded-xl pt-[18px] pb-2 px-5 pl-11 text-white text-base 
                outline-none transition-all duration-300 border-2
                ${
                  currentMode === "user"
                    ? "border-emerald-500/30 focus:border-emerald-500 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.1),0_10px_20px_rgba(0,0,0,0.3)]"
                    : "border-blue-500/30 focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1),0_10px_20px_rgba(0,0,0,0.3)]"
                }
                focus:bg-slate-900/80 active:scale-[1.02]
              `}
            />
            <label
              className={`
              absolute left-11 top-1/2 transform -translate-y-1/2 pointer-events-none 
              transition-all duration-300 text-base px-1
              ${
                formData.username
                  ? `top-0 left-10 text-xs rounded-lg px-2 py-1 bg-gradient-to-r from-slate-800 to-slate-700 ${
                      currentMode === "user"
                        ? "text-emerald-400"
                        : "text-blue-400"
                    }`
                  : `${
                      currentMode === "user"
                        ? "text-emerald-400/70"
                        : "text-blue-400/70"
                    }`
              }
            `}
            >
              {config.usernameLabel}
            </label>
          </div>

          {/* Password Input */}
          <div className="relative mb-6">
            <i
              className={`
              ${
                config.passwordIcon
              } absolute left-4 top-1/2 transform -translate-y-1/2 
              z-10 text-base transition-all duration-300
              ${
                currentMode === "user"
                  ? "text-emerald-400/70"
                  : "text-blue-400/70"
              }
            `}
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className={`
                w-full bg-slate-900/50 rounded-xl pt-[18px] pb-2 px-5 pl-11 text-white text-base 
                outline-none transition-all duration-300 border-2
                ${
                  currentMode === "user"
                    ? "border-emerald-500/30 focus:border-emerald-500 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.1),0_10px_20px_rgba(0,0,0,0.3)]"
                    : "border-blue-500/30 focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1),0_10px_20px_rgba(0,0,0,0.3)]"
                }
                focus:bg-slate-900/80 active:scale-[1.02]
              `}
            />
            <label
              className={`
              absolute left-11 top-1/2 transform -translate-y-1/2 pointer-events-none 
              transition-all duration-300 text-base px-1
              ${
                formData.password
                  ? `top-0 left-10 text-xs rounded-lg px-2 py-1 bg-gradient-to-r from-slate-800 to-slate-700 ${
                      currentMode === "user"
                        ? "text-emerald-400"
                        : "text-blue-400"
                    }`
                  : `${
                      currentMode === "user"
                        ? "text-emerald-400/70"
                        : "text-blue-400/70"
                    }`
              }
            `}
            >
              {config.passwordLabel}
            </label>
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center my-5">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className={`w-[18px] h-[18px] cursor-pointer ${
                  currentMode === "user"
                    ? "accent-emerald-500"
                    : "accent-blue-500"
                }`}
              />
              <label
                htmlFor="rememberMe"
                className={`text-sm cursor-pointer select-none ${
                  currentMode === "user"
                    ? "text-emerald-400/90"
                    : "text-blue-400/90"
                }`}
              >
                {config.rememberLabel}
              </label>
            </div>
            <Link
              href="#"
              className={`
                text-sm transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]
                ${
                  currentMode === "user"
                    ? "text-emerald-400/80 hover:text-emerald-400"
                    : "text-blue-400/80 hover:text-blue-400"
                }
              `}
            >
              {config.forgotLink}
            </Link>
          </div>

          {/* Register */}
          <p className="text-center text-sm my-4 text-white/70">
            {config.registerText}{" "}
            <Link
              href="#"
              className={`
                font-semibold transition-all duration-300 relative
                hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]
                after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 
                after:bg-gradient-to-r after:transition-all after:duration-300 hover:after:w-full
                ${
                  currentMode === "user"
                    ? "text-emerald-400 hover:text-emerald-300 after:from-emerald-400 after:to-emerald-300"
                    : "text-blue-400 hover:text-blue-300 after:from-blue-400 after:to-blue-300"
                }
              `}
            >
              {config.registerLink}
            </Link>
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className={`
              w-full rounded-xl py-[18px] px-8 text-white text-base font-bold 
              cursor-pointer transition-all duration-300 relative overflow-hidden 
              uppercase tracking-wide mt-3 border-none
              hover:-translate-y-1 active:-translate-y-0
              before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full 
              before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent 
              before:transition-all before:duration-500 hover:before:left-full
              ${
                currentMode === "user"
                  ? "bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-[0_10px_20px_rgba(16,185,129,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:from-emerald-600 hover:to-emerald-500 hover:shadow-[0_15px_30px_rgba(16,185,129,0.4),0_0_20px_rgba(16,185,129,0.3)]"
                  : "bg-gradient-to-r from-blue-500 to-blue-600 shadow-[0_10px_20px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:from-blue-600 hover:to-blue-500 hover:shadow-[0_15px_30px_rgba(59,130,246,0.4),0_0_20px_rgba(59,130,246,0.3)]"
              }
            `}
          >
            <i className="fas fa-sign-in-alt mr-3 text-lg" />
            <span>{config.buttonText}</span>
          </button>
        </div>

        {/* Security Notice */}
        {config.showSecurity && (
          <div
            className={`
            mt-5 p-3 rounded-lg flex items-center gap-3 text-xs transition-all duration-300
            ${
              currentMode === "user"
                ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400/90"
                : "bg-red-500/10 border border-red-500/30 text-red-400/90"
            }
          `}
          >
            <i
              className={`fas fa-info-circle text-sm ${
                currentMode === "user" ? "text-emerald-400" : "text-red-400"
              }`}
            />
            <span>{config.securityText}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
