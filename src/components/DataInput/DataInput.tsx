import { Dispatch, SetStateAction } from 'react';
import classnames from 'classnames';
import dollarIcon from "../../assets/icons/icon-dollar.svg";
import personIcon from "../../assets/icons/icon-person.svg";

import styles from './DataInput.module.css';

interface IDataInputProps {
  bill: number | null;
  setBill: Dispatch<SetStateAction<number | null>>;
  tip: number | null;
  setTip: Dispatch<SetStateAction<number | null>>;
  peopleCount: number | null;
  setPeopleCount: Dispatch<SetStateAction<number | null>>;
}

export const DataInput = ({ bill, setBill, tip, setTip, peopleCount, setPeopleCount }: IDataInputProps) => {
  const handleSelectedTip = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTip(+event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputGroup}>
        <div className={styles.labelWrapper}>
          <label className={styles.label} htmlFor="bill">Bill</label>
        </div>
        <div className={styles.numberInputWrapper}>
          <input
            min={0}
            max={90000}
            type="number"
            className={styles.numberInput}
            id="bill"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBill(+e.target.value)}
            value={bill || ''}
          />
          <img src={dollarIcon} className={styles.icon} />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <p className={styles.label}>Selected Tip %</p>
        <div className={styles.tipsWrapper}>
          <div className={styles.tip}>
            <input
              type="radio"
              onChange={handleSelectedTip}
              id="input5"
              className={styles.tipInput}
              value="5"
              checked={tip === 5}
            />
            <label className={styles.tipButton} htmlFor="input5">5%</label>
          </div>
          <div className={styles.tip}>
            <input
              type="radio"
              onChange={handleSelectedTip}
              id="input10"
              className={styles.tipInput}
              value="10"
              checked={tip === 10}
            />
            <label className={styles.tipButton} htmlFor="input10">10%</label>
          </div>
          <div className={styles.tip}>
            <input
              type="radio"
              onChange={handleSelectedTip}
              id="input15"
              className={styles.tipInput}
              value="15"
              checked={tip === 15}
            />
            <label className={styles.tipButton} htmlFor="input15">15%</label>
          </div>
          <div className={styles.tip}>
            <input
              type="radio"
              onChange={handleSelectedTip}
              id="input25"
              className={styles.tipInput}
              value="25"
              checked={tip === 25}
            />
            <label className={styles.tipButton} htmlFor="input25">25%</label>
          </div>
          <div className={styles.tip}>
            <input
              type="radio"
              onChange={handleSelectedTip}
              id="input50"
              className={styles.tipInput}
              value="50"
              checked={tip === 50}
            />
            <label className={styles.tipButton} htmlFor="input50">50%</label>
          </div>
          <div className={styles.customTipWrapper}>
            <input
              type="number"
              min={0}
              onChange={handleSelectedTip}
              onFocus={handleSelectedTip}
              id="inputCustom"
              className={classnames(styles.numberInput, styles.tipCustom)}
              placeholder="Custom"
            />
          </div>
        </div>
      </div>
      <div className={styles.inputGroup}>
        <div className={styles.labelWrapper}>
          <label className={styles.label} htmlFor="people">Number of People</label>
          <div className={styles.error}>{peopleCount === 0 ? "Can't be less than 1" : ""}</div>
        </div>
        <div className={styles.numberInputWrapper}>
          <input
            type="number"
            min={1}
            className={classnames(styles.numberInput, {
							[styles.numberError]: !peopleCount
						})}
            value={peopleCount || ''}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPeopleCount(+e.target.value)}
            placeholder="0"
          />
          <img src={personIcon} className={styles.icon} />
        </div>
      </div>
    </div>
  );
};
