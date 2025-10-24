
import { Link } from "react-router-dom";

export const Nav = () => {
 
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/category/Zapatillas"}>Zapatillas</Link>
        </li>
        <li>
          <Link to={"/category/Borcegos"}>Borcegos</Link>
        </li>
        <li>
          <Link to={"/category/Pantubotas&Botinetas"}>Pantubotas&Botinetas</Link>
        </li>
        <li>
          <Link to={"/category/Sandalias"}>Sandalias</Link>
        </li>
      </ul>
    </nav>
  );
};
