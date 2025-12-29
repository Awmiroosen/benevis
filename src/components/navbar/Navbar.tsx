import Link from "next/link";
import Image from "next/image";
import { auth } from "@/lib/auth";
import { Home, Plus, User2, Github } from "lucide-react";
import ThemeBtn from "./ThemeBtn";
import "@/styles/navbar.css";

const Navbar = async () => {
  const navLinkClass =
    "navLink hover:bg-stone-300/70 hover:text-stone-950 dark:hover:bg-stone-900/70 dark:hover:text-stone-100";
  const navSpanClass =
    "itemLabel bg-stone-100 text-stone-950 dark:bg-stone-950 dark:text-stone-100 rounded-full";

  const session = await auth();

  return (
    <nav className="w-72 hover:w-80 h-12 fixed bottom-2 left-1/2 -translate-x-1/2 flex justify-center items-center rounded-full backdrop-blur-sm border border-stone-400/40 dark:border-stone-800/60 transition-all duration-300 z-999">
      <div className="navItem">
        <Link className={navLinkClass} href="/">
          <Home />
        </Link>
        <span className={navSpanClass}>خانه</span>
      </div>

      <div className="navItem">
        <Link className={navLinkClass} href="/write">
          <Plus />
        </Link>
        <span className={navSpanClass}>نوشتن</span>
      </div>

      <div className="navItem">
        <Link className={navLinkClass} href="/profile">
          {!session ? (
            <User2 />
          ) : (
            session.user?.image && (
              <Image
                src={session.user?.image}
                alt={`${session.user?.name} avatar`}
                width={26}
                height={26}
                className="rounded-full select-none border border-stone-400/50 dark:border-stone-800/50"
              />
            )
          )}
        </Link>
        <span className={navSpanClass}>پروفایل</span>
      </div>

      <div className="navItem">
        <a
          href="https://github.com/awmiroosen"
          target="_blank"
          className={navLinkClass}
        >
          <Github size={21} />
        </a>
        <span className={navSpanClass}>گیتهاب</span>
      </div>

      <div className="navItem">
        <ThemeBtn classes={navLinkClass} />
        <span className={navSpanClass}>تم</span>
      </div>
    </nav>
  );
};

export default Navbar;
