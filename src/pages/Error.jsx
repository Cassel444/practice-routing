import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <p>Oops! Not found!</p>
      <Link to="/">Back to home page!</Link>
    </div>
  );
}
export default Error;
