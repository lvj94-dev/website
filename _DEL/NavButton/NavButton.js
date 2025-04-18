/*Author: Lucas Vincent Johanningmeier */

import { useNavigate } from "react-router-dom";

export default function NavButton({ to, children, ...props }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div>
      <button onClick={handleClick} {...props}>
        {children}
      </button>
    </div>
  );
}
