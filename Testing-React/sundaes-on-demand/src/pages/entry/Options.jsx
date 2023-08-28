import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOptions from "./ScoopOptions";
import Row from "react-bootstrap/Row";
import ToppingOption from "./ToppingsOption";
import AlertBanner from "../common/AlertBanner";
import { pricePerItem } from "../../constants";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { formatCurrency } from "../../utilities";

export default function Options({ optionType }) {
  const [items, setitems] = useState([]);
  const [error, setError] = useState(false);
  const { totals } = useOrderDetails();

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    // create an abortController to attach to the network request
    const controller = new AbortController()
    axios
      .get(`http://localhost:3030/${optionType}`, {signal: controller.signal})
      .then((response) => setitems(response.data))
      .catch((error) => {
        if (error.name !== "CancelError") {
          setError(true);
        }
      });

    // abort axios call on component unmount
    return () => {
      controller.abort();
    }
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  // replace null with toppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOptions : ToppingOption;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>
        {title} total: {formatCurrency(totals[optionType])}
      </p>
      <Row>{optionItems}</Row>
    </>
  );
}
