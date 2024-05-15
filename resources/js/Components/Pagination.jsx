import { Link } from "@inertiajs/react";
import React from "react";

const Pagination = ({ links }) => {
  return (
    <nav className="text-center mx-4">
      {links.map((link) => (
        <Link
          preserveScroll
          key={link.label}
          href={link.url || ""}
          className={
            "inline-block py-2 px-3 rounded-lg text-gray-200 text-xs" +
            (link.active ? "bg-gray-950 " : " ") +
            (!link.url
              ? "!text-gray-950 cursor-not-allowed "
              : "hover:bg-gray-950 ")
          }
          dangerouslySetInnerHTML={{ __html: link.label }}
        ></Link>
      ))}
    </nav>
  );
};

export default Pagination;
