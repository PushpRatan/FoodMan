export const filtered = (searchText, restaurants) => {
    return restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
  };

