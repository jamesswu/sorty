import { randomInt } from "crypto";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });
  const [array, setArray] = useState<number[]>([]);

  function resetArray(): void {
    const temp: number[] = [];
    for (let i = 0; i < 100; i++) {
      temp.push(randomIntFromInterval(5, 1000));
    }
    setArray(temp);
  }

  useEffect(() => {
    resetArray();
  }, []);
  console.log(array);

  return (
    <>
      <div className="flex flex-col items-center">
        {array ? (
          array.map((value, index) => {
            return (
              <div className="array-bar-value" key={index}>
                {value}
              </div>
            );
          })
        ) : (
          <div></div>
        )}
        <p>hello world</p>
      </div>
    </>
  );
}

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
