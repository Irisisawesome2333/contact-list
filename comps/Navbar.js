import Link from "next/link";
import Image from "next/dist/client/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1> Welcome to Contact List</h1>
        <Image src="/logo.png" width={275} height={78}></Image>
      </div>
      <Link href="/">
        <a>Home / </a>
      </Link>

      <Link href="/about">
        <a>About /</a>
      </Link>

      <Link href="/contacts">
        <a>Contacts Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
