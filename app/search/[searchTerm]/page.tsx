"use client";
import { useSearchRestaurants } from "@/api/RestaurantApi";
import CusineFilter from "@/components/CusineFilter";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import SortOptionDropdown from "@/components/SortOptionDropdown";
import { Loader } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
  sortOption: string;
};

const SearchPage = () => {
  const { searchTerm } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
    selectedCuisines: [],
    sortOption: "lastUpdated",
  });
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { results, isLoading } = useSearchRestaurants(searchState, searchTerm);

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
      page: 1,
    }));
  };

  const setSortOption = (sortOption: string) => {
    setSearchState((prevState) => ({
      ...prevState,
      sortOption,
      page: 1,
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
      page: 1,
    }));
  };

  const setSelectedCuisines = (selectedCuisines: string[]) => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedCuisines,
      page: 1,
    }));
  };

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin" size={48} />
      </div>
    );
  }
  if (!results?.data || !searchTerm) {
    return <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold ">No results found</h1>
      <p className="text-1xl text-center">Location available now are UK, Spain, Greece, Germany</p>
    </div>;
  }

  return (
    <div
      className={`container justify-center bg-gray-50 py-10 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-20 ${
        results.pagination.total < 3 ? "h-screen" : "h-full"
      }`}
    >
      <div id="cuisines-list">
        <CusineFilter
          selectedCuisines={searchState.selectedCuisines}
          onChange={setSelectedCuisines}
          isExpanded={isExpanded}
          onExpandedClick={() =>
            setIsExpanded((prevIsExpanded) => !prevIsExpanded)
          }
        />
      </div>
      <div id="main-content" className="flex gap-5 flex-col">
        <SearchBar
          searchQuery={searchState.searchQuery}
          onSubmit={setSearchQuery}
          placeHolder="Search by Cuisine or Restaurant Name"
          onReset={resetSearch}
        />
        <div className="flex justify-between items-center flex-col gap-3 lg:flex-row">
          <SearchResultInfo total={results.pagination.total} city={searchTerm} />
          <SortOptionDropdown
            sortOption={searchState.sortOption}
            onChange={(value) => setSortOption(value)}
          />
        </div>
        {results.data.map((restaurant, index) => (
          <SearchResultCard key={restaurant._id || index} restaurant={restaurant} />
        ))}
        <PaginationSelector
          page={results.pagination.page}
          pages={results.pagination.pages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default SearchPage;
