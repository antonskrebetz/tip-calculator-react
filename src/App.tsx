import { useState, useEffect } from "react";
import logo from "./assets/logo.svg";
import { DataView } from "./components/DataView/DataView";
import { DataInput } from "./components/DataInput/DataInput";

export const App = () => {
  const [bill, setBill] = useState<number | null>(null);
  const [tip, setTip] = useState<number | null>(null);
  const [peopleCount, setPeopleCount] = useState<number | null>(1);
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (bill && peopleCount && tip && bill > 0 && peopleCount > 0 && tip > 0) {
      const tipAmount = bill * (tip / 100);
      const totalAmount = bill + tipAmount;
      setCalculatedTip(tipAmount);
      setTotal(totalAmount);
    }
  }, [bill, peopleCount, tip]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  }

  const tipCurrencyCount = () => {
    const value = calculatedTip && peopleCount ? calculatedTip / peopleCount : 0;
    return formatCurrency(value);
  }

  const totalCurrencyCount = () => {
    const value = total && peopleCount ? total / peopleCount : 0;
    return formatCurrency(value);
  }

  const handleResetBtn = () => {
    setBill(null);
    setTip(null);
    setCalculatedTip(0);
    setPeopleCount(1);
    setTotal(0);
  };

  return (
    <div className="wrapper">
      <img src={logo} alt="Splitter Logo" />
      <div className="container">
        <DataInput
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          peopleCount={peopleCount}
          setPeopleCount={setPeopleCount}
        />
        <DataView
          bill={bill}
          peopleCount={peopleCount}
          tip={tip}
          handleResetBtn={handleResetBtn}
          tipCurrencyCount={tipCurrencyCount()}
          totalCurrencyCount={totalCurrencyCount()}
        />
      </div>
    </div>
  );
}
