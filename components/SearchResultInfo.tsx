import Link from "next/link";
import React from "react";

type Props = {
  total: number;
  city: string | string[];
};

const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="text-sm md:text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row w-full">
      <span>
        {total} Restaurants found in {city}
        <Link
          href={"/"}
          className="ml-1 text-[12px] md:text-sm font-semibold underline cursor-pointer text-blue-500"
        >
          Change Location
        </Link>
      </span>
    </div>
  );
};

export default SearchResultInfo;
