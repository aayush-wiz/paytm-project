import { Link } from "react-router-dom";

function BottomWarning({ label, to, text }) {
  return (
    <div className="flex justify-center font-semibold text-sm pb-2">
      <div className="pr-1">{label}</div>
      <Link className="cursor-pointer underline font-semibold" to={to}>{text}</Link>
    </div>
  );
}

export default BottomWarning;
