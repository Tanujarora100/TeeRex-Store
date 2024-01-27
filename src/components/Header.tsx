import Logo from "../assets/v31LnDGyQOKNC7seAkIO_g.jpg";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Logo"
          className="h-8 w-12 cursor-pointer"
          onClick={() => window.location.reload()}
        />
        <h1 className="text-2xl font-bold ml-2">Teerex Store</h1>
      </div>

      <div>
        <a className="text-2xl font-bold cursor-pointer ml-2" href="/cart">
          <FaShoppingCart className="inline-block text-3xl" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
