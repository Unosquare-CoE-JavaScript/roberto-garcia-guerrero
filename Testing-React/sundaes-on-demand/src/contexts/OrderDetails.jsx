import { createContext, useContext, useState } from "react";
import { pricePerItem } from "../constants";

const OrderDetails = createContext();

// create custom hook to check whether we're inside a provider
export function useOrderDetails() {
  const context = useContext(OrderDetails);

  if (!context) {
    throw new Error('useOrderDetail must be used within an OrderDetailsProvider');
  }

  return context;
}

// Functional component
export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionsCounts] = useState({
    scoops: {},
    toppings: {},
  });

  function updateItemCount(itemName, newItemCount, optionType) {
    // make a copy of existing state
    const newOptionCounts = { ...optionCounts };

    // update the copy with the new information
    newOptionCounts[optionType][itemName] = newItemCount;

    // update state with the updated array
    setOptionsCounts(newOptionCounts);
  }

  function resetOrder() {
    setOptionsCounts({
      scoops: {},
      toppings: {},
    })
  }

  // utility function to derive totals from optionCounts state value
  function calculateTotal(optionType) {
    const countsArray = Object.values(optionCounts[optionType]);

    const totalCount = countsArray.reduce((total, value) => total + value, 0);

    return totalCount * pricePerItem[optionType];
  }

  const totals = {
    scoops: calculateTotal("scoops"),
    toppings: calculateTotal("toppings"),
  }

  const value = { optionCounts, totals, updateItemCount, resetOrder };

  return <OrderDetails.Provider value={value} {...props} />;
}
