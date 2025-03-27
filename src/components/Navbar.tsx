
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">EcoChain Bonds</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Platform
          </Link>
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Partners
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">Sign In</Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
