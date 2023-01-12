import { useEffect, useState } from "react";

export default function Payment() {
  const [item1, setItem1] = useState();
  const [item2, setItem2] = useState();
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(parseFloat(item1) + parseFloat(item2));
  }, [item1, item2]);
  return <div>Payment</div>;
}
