// import fuzzaldrin from "fuzzaldrin-plus";
import debounce from "lodash/debounce";
import { useEffect, useState } from "react";

const DEBOUNCE_TIME=500;

const mockData = [
  { name: "Red", hex: "#DB2D2D" },
  { name: "Orange", hex: "#F2994A" },
  { name: "Yellow", hex: "#F2C94C" },
  { name: "Green", hex: "#27AE60" },
  { name: "Blue", hex: "#2F80ED" },
  { name: "Violet", hex: "#602FED" },
  { name: "Rebecca Purple", hex: "#663399" },
];

// This function can be improved. for example, fuzzy search
const mockDatabaseResponse = (query) => {
  return mockData.filter(({ name }) => {
    return name.toLowerCase().indexOf(query) !== -1;
  });
};

// Emulates a slow API call, don't change this
const queryPromise = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDatabaseResponse(query));
    }, 500);
  });
};

const searchFunc = (query, setData, setLoading) => {
  queryPromise(query).then((response) => {
    setData(response);
    setLoading(false);
  });
};

const debouncedSearch = debounce(searchFunc, DEBOUNCE_TIME);

// This hook can be modified for cache, debounce, etc.
const useGetColor = ({ query = "" }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const search = debouncedSearch;

  useEffect(() => {
    setLoading(true);
    if (!query.length) {
      setData(null);
      setLoading(false);
      return;
    }
    search(query, setData, setLoading);
  }, [query, search]);

  return {
    data,
    loading,
  };
};

export default useGetColor;
