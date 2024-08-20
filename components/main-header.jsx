"use client";

import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    // CLIENT COMPONENTS ARE BETTER TO BE OUTSOURCED SO WE HAVE MINIMAL CLIENT SIDE COMPONENTS
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href={"/news"}>News</NavLink>
          </li>
          <li>
            <NavLink href={"/archive"}>Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
