import React from 'react'; // Added missing React import
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"> {/* Fixed 'ton' to 'to' */}
        <div className="WorkoutBuddy">Workout Buddy</div>
      </Link>
    </nav>
  );
  // Removed extra closing brace
};

export default Navbar;