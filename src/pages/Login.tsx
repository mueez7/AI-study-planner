import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Logged in! (Demo)");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <Brain className="h-8 w-8" style={{ color: "#0891b2" }} />
            <span className="text-2xl font-bold" style={{ color: "#1f2937" }}>AI Study Planner</span>
          </Link>
          
          {/* Tabs */}
          <div className="flex gap-2 bg-gray-100 rounded-full p-1 mb-8">
            <button className="flex-1 py-2 px-4 rounded-full font-semibold text-white" style={{ backgroundColor: "#0891b2" }}>
              Login
            </button>
            <Link to="/signup" className="flex-1 py-2 px-4 rounded-full font-semibold text-gray-600 hover:text-gray-800 transition">
              Register
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-2" style={{ color: "#1f2937" }}>Login</h1>
          <p className="text-gray-500">Sign in to continue planning your studies</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label className="block text-sm font-semibold mb-2" style={{ color: "#374151" }}>
              Email Address
            </Label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <div>
            <Label className="block text-sm font-semibold mb-2" style={{ color: "#374151" }}>
              Password
            </Label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full py-3 font-semibold text-white rounded-lg transition-all hover:shadow-lg"
            style={{ backgroundColor: "#0891b2" }}
          >
            Login
          </Button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="font-semibold hover:underline" style={{ color: "#0891b2" }}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
