
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Circle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-6">
        <Circle className="mx-auto h-16 w-16 text-destructive" />
        <h1 className="text-6xl font-extrabold">404</h1>
        <p className="text-2xl font-semibold text-muted-foreground">Oops! Page not found.</p>
        <p className="text-muted-foreground">
          The page you were looking for at <code className="bg-secondary px-2 py-1 rounded-md">{location.pathname}</code> does not exist.
        </p>
        <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
