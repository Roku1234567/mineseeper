import { useState } from 'react';
import styles from './index.module.css';
const directions = [
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    // const newBoard = structuredClone(board);
    // newBoard[y][x] = bombcount;

    //   if (board[y + 1 * dy] !== undefined && board[y + 1 * dy][x + 1 * dx] === 3 - bomb) {

    console.log(x, y);
    const newbombMap = structuredClone(bombMap);
    console.log(bombMap.flat());
    console.log(newbombMap.flat().includes(11));
    // for (const direction of directions) {
    //   const dx = direction[0];
    //   const dy = direction[1];
    //   let narebomb = 0
    //   if (newbombMap[y + 1 *dy].flat().includes(11) === false && undefined){
    //     narebomb++
    //     newbombMap[dx][dy] === narebomb
    //   }

    if (newbombMap.flat().includes(11) === false) {
      for (let n = 0; n < 10; n++) {
        const rx = Math.floor(Math.random() * 9);
        const ry = Math.floor(Math.random() * 9);
        if (newbombMap[rx][ry] === 11) {
          n--;
        }

        console.log(rx, ry);
        newbombMap[rx][ry] = 11;
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
          {bombMap.map((row, x) =>
            row.map((cell, y) => (
              <div
                className={styles.cellStyle}
                key={`${x}-${y}`}
                onClick={() => clickHandler(x, y)}
              >
                {cell !== 0 && (
                  <div
                    className={styles.bombStyle}
                    key={`${x}-${y}`}
                    style={{ backgroundPosition: `-${30 * cell - 30}px 0px` }}
                  />
                )}
                {/* <div className={styles.cell} /> */}

                {/* {userInputs[x][y] === 0 && <div className={styles.topsell} key={`${x}-${y}`} />} */}
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
