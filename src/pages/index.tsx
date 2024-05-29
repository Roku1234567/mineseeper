import { useState } from 'react';
import styles from './index.module.css';
const direction = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

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
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  // const Playing = userInputs.some((row) => row.some((input) => input !== 0));
  // const Failure = userInputs.some((row, y) =>
  //   row.some((input, x) => input === 1 && bombMap[y][x] === 1),
  // );

  // const board: number[][] = [];
  // const newBoard = structuredClone(board);
  // newBoard[y][x] = bomb;

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newbombMap = structuredClone(bombMap);
    let a = 0;
    if (a === 0) {
      for (let n = 0; n < 10; n++) {
        const rx = Math.floor(Math.random() * 9);
        const ry = Math.floor(Math.random() * 9);
        console.log(rx, ry);
        newbombMap[rx][ry] = 11;
        a++;
      }
    }
    setBombMap(newbombMap);
  };

  // const [samplePos, setSamplePos] = useState(0);
  // console.log(samplePos);
  return (
    <div className={styles.container}>
      <div className={styles.bigStyle}>
        <div className={styles.topBoard}>
          <div className={styles.faceStyle} />
          <div className={styles.leftStyle} />
          <div className={styles.rigthStyle} />
        </div>
        <div className={styles.centerStyle} />

        <div className={styles.boardStyle}>
          {board.map((row, x) =>
            row.map((cell, y) => (
              <div className={styles.cellStyle} key={`${x}-${y}`}>
                {cell !== 0 && <div className={styles.bombStyle} key={`${x}-${y}`} />}
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

// style={{ background: `-${30 * bombCounter}px 0px` }}
