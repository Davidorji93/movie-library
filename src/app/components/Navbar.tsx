import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/favorites">
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
