import styles from './DataView.module.css';

interface IDataViewProps {
  bill: number | null;
  tip: number | null;
  peopleCount: number | null;
  handleResetBtn: () => void;
  tipCurrencyCount: string;
  totalCurrencyCount: string;
}

export const DataView = ({ peopleCount, handleResetBtn, tip, bill, tipCurrencyCount, totalCurrencyCount }: IDataViewProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.dataView}>
        <div className={styles.dataViewRow}>
          <div className={styles.textBlock}>
            <div className={styles.header}>Tip Amount</div>
            <div className={styles.subHeader}>/ person</div>
          </div>
          <div className={styles.result}>
            {tipCurrencyCount}
          </div>
        </div>
        <div className={styles.dataViewRow}>
          <div className={styles.textBlock}>
            <div className={styles.header}>Total</div>
            <div className={styles.subHeader}>/ person</div>
          </div>
          <div className={styles.result}>
            {totalCurrencyCount}
          </div>
        </div>
      </div>
      <button
        className={styles.resetButton}
        onClick={handleResetBtn}
        disabled={(peopleCount === 1) && !tip && !bill}
      >
        Reset
      </button>
    </div>
  );
};
