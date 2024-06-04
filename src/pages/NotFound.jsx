import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <p>Oops! Not found!</p>
      <Link to="/">Back to home page!</Link>
    </div>
  );
}
export default NotFound;
