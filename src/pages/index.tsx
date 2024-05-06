import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [bombMap, setBombMap] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [userInputs, setUserInputs] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const Playing = userInputs.some((row) => row.some((input) => input !== 0));
  const Failure = userInputs.some((row, y) =>
     row.some((input, x) => input === 1 && bombMap[y][x] === 1),

   const borad: number[][] = [];
   const newBoard = structuredClone(userInputs);

   const clickHandler = (x: number, y: number) => {
     console.log(x, y);

  const [samplePos, setSamplePos] = useState(0);
  console.log(samplePos);
  return (
    <div className={styles.container}>
      <div className={styles.boardStyle}>
        {userInputs.map((row, y) =>
          row.map((color, x) => <div className={styles.cellStyle} key={`${x}-{y}`} />),
        )}

        {/* <div
        className={styles.sampleStyle}
        style={{ backgroundPosition: `-${30 * samplePos}px 0px` }}
      />
      <button onClick={() => setSamplePos((p) => (p + 1) % 14)}>sample</button> */}
      </div>
    </div>
  );
};

export default Home;
