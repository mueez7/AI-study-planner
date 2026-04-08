import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    college: "",
    department: "",
    program: "",
    semester: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Account created! (Demo)");
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
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
            <Link to="/login" className="flex-1 py-2 px-4 rounded-full font-semibold text-gray-600 hover:text-gray-800 transition">
              Login
            </Link>
            <button className="flex-1 py-2 px-4 rounded-full font-semibold text-white" style={{ backgroundColor: "#0891b2" }}>
              Register
            </button>
          </div>

          <h1 className="text-3xl font-bold mb-2" style={{ color: "#1f2937" }}>Create Account</h1>
          <p className="text-gray-500">Sign up to start planning your studies</p>
        </div>

        {/* Form - Scrollable */}
        <form onSubmit={handleSubmit} className="space-y-4 max-h-96 overflow-y-auto pr-2">
          <div>
            <Label className="block text-sm font-semibold mb-2" style={{ color: "#374151" }}>
              Full Name
            </Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <Label className="block text-sm font-semibold mb-2" style={{ color: "#374151" }}>
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <Label className="block text-sm font-semibold mb-2" style={{ color: "#374151" }}>
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 12345 67890"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <Label className="block text-sm font-semibold mb-2" style={{ color: "#374151" }}>
              College Name
            </Label>
            <Input
              id="college"
              placeholder="Your College"
              value={formData.college}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <Label className="block text-sm font-semibold mb-2" style={{ color: "#374151" }}>
              Department
            </Label>
            <Input
              id="department"
              placeholder="Computer Science"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <Label className="block text-sm font-semibold mb-2" style={{ color: "#374151" }}>
              Program
            </Label>
            <select
              id="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
              style={{ color: formData.program ? "#1f2937" : "#9ca3af" }}
            >
              <option value="">Select Program</option>
              <option value="BE/B.Tech">BE/B.Tech</option>
              <option value="M.Tech">M.Tech</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="B.Sc">B.Sc</option>
              <option value="MBA">MBA</option>
              <option value="Polytechnic">Polytechnic</option>
              <option value="B Com">B Com</option>
              <option value="Law">Law</option>
              <option value="Pharmacy">Pharmacy</option>
              <option value="BBA">BBA</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div>
            <Label className="block text-sm font-semibold mb-2" style={{ color: "#374151" }}>
              Semester
            </Label>
            <select
              id="semester"
              value={formData.semester}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
              style={{ color: formData.semester ? "#1f2937" : "#9ca3af" }}
            >
              <option value="">Select Semester</option>
              <option value="1st">1st Semester</option>
              <option value="2nd">2nd Semester</option>
              <option value="3rd">3rd Semester</option>
              <option value="4th">4th Semester</option>
              <option value="5th">5th Semester</option>
              <option value="6th">6th Semester</option>
              <option value="7th">7th Semester</option>
              <option value="8th">8th Semester</option>
            </select>
          </div>

          <div>
            <Label className="block text-sm font-semibold mb-2" style={{ color: "#374151" }}>
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full py-3 font-semibold text-white rounded-lg transition-all hover:shadow-lg mt-6"
            style={{ backgroundColor: "#0891b2" }}
          >
            Sign Up
          </Button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold hover:underline" style={{ color: "#0891b2" }}>
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
