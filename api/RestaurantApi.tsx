  import { SearchState } from "@/app/search/[searchTerm]/page";
  import { Restaurant, RestaurantSearchResponse } from "@/components/types";
  import { useQuery } from "react-query";

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  export const useGetRestaurant = (restaurantId?: string) => {
    const getRestaurantByIdRequest = async (): Promise<Restaurant> => {
      const response = await fetch(
        `${API_BASE_URL}/api/restaurant/${restaurantId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch restaurants");
      }
      return response.json();
    };

    const { data: restaurant, isLoading } = useQuery(
      "fetchRestaurant",
      getRestaurantByIdRequest, {
        enabled: !!restaurantId
      }
    );

    return { restaurant, isLoading };
  };

  export const useSearchRestaurants = (
    searchState: SearchState,
    searchTerm?: string | string[]
  ) => {
    const termParam = Array.isArray(searchTerm) ? searchTerm[0] : searchTerm;

    const fetchRestaurants = async (): Promise<RestaurantSearchResponse> => {
      const params = new URLSearchParams();
      params.set("searchQuery", searchState.searchQuery);
      params.set("page", searchState.page.toString());
      params.set("selectedCuisines", searchState.selectedCuisines.join(","));
      params.set("sortOption", searchState.sortOption);

      const response = await fetch(
        `${API_BASE_URL}/api/restaurant/search/${termParam}?${params.toString()}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch restaurants");
      }
      return response.json();
    };

    const { data: results, isLoading } = useQuery(
      ["searchRestaurants", searchState, termParam],
      fetchRestaurants,
      {
        enabled: !!termParam,
      }
    );

    return { results, isLoading };
  };
