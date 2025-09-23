import { Button } from "@/components/ui/button";
import { Search, User, Bell } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/", active: true },
    { name: "Mock Tests", href: "/mock-tests" },
    { name: "Analysis", href: "/analysis" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="CompetetivePoint" className="h-10 w-10" />
            <h1 className="text-2xl font-bold font-poppins bg-gradient-primary bg-clip-text text-transparent">
              CompetetivePoint
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    item.active
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative hover:bg-button-blue/10 hover:text-button-blue">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-button-orange rounded-full text-xs flex items-center justify-center text-white">
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-button-green/10 hover:text-button-green">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;