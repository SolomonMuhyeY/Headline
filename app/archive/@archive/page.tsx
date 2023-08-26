import React from "react";
import { getFullYear } from "../../../lib";
import Link from "next/link";

const ArchivePage = () => {
  const years = getFullYear()!;
  return (
    <div className='archive'>
      <div className='archive-year'>
        {years.map((year) => (
          <Link key={crypto.randomUUID()} href={`/archive/${year}`}>
            <small>{year}</small>
          </Link>
        ))}
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse
        ipsam architecto error asperiores laborum temporibus necessitatibus
        magnam eligendi voluptatibus, cum inventore repudiandae dolores
        incidunt, quis suscipit molestias distinctio corporis.
      </p>
    </div>
  );
};

export default ArchivePage;
