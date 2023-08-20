import Link from "next/link";
import "./mainHeader.css";
import React from "react";
const MainHeader = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/news'>News</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainHeader;
