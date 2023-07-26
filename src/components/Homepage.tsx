"use client";
import React, { useState, useEffect } from "react";
import {
  add,
  subtract,
  multiply,
  divide,
  //   percentage,
  toggleSign,
} from "@/utils";

function Homepage() {
  const [userDisplay, setUserDisplay] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [current, setCurrent] = useState<string>("");
  const [operator, setOperator] = useState<string>("");
  const [isEqual, setIsEqual] = useState<boolean>(false);

  const handleInput = (e: any, flag: string) => {
    const { textContent } = e.currentTarget;
    if (flag === "op") {
      if (operator != "") {
        calculate();
      }
      setOperator(textContent);
      if (result === "") {
        setResult(current);
        setCurrent("");
      } else {
        setCurrent("");
      }
    } else if (flag === "num") {
      setCurrent(current + textContent);
    }
    setUserDisplay(userDisplay + textContent);
  };

  const handleErase = () => {
    setResult("");
    setCurrent("");
    setOperator("");
    setUserDisplay("");
  };

  const calculate = () => {
    if (operator === "" || current === "") {
      return;
    }
    const curr = parseFloat(current);
    let currResult: any = result === "" ? 0 : parseFloat(result);

    switch (operator) {
      case "+":
        currResult = add(parseFloat(result), curr);
        break;
      case "-":
        currResult = subtract(parseFloat(result), curr);
        break;
      case "*":
        currResult = multiply(parseFloat(result), curr);
        break;
      case "/":
        currResult = divide(parseFloat(result), curr);
        break;
      case "-/+":
        currResult = toggleSign(curr);
        break;

      default:
        console.log("something went wrong", curr, currResult, operator);
        break;
    }
    setResult(`${currResult}`);
  };

  return (
    <main className="w-full flex flex-col p-2">
      <div className="h-[150px] bg-[#ffffff0d] my-4 rounded-[40px] px-[50px] md:px-[90px] flex justify-end items-center">
        <div className="flex flex-col gap-[20px]">
          {isEqual ? (
            <div className="text-4xl">{result}</div>
          ) : (
            <>
              <div>{userDisplay}</div>
              <div className="text-gray-400 text-right">{result}</div>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 w-full gap-[20px]">
          <div className="flex justify-center items-center">
            <button onClick={handleErase} className="topCalculas text">
              AC
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={(e: any) => handleInput(e, "op")}
              className="topCalculas text"
            >
              -/+
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={(e: any) => handleInput(e, "op")}
              className="topCalculas text"
            >
              %
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={(e: any) => handleInput(e, "op")}
              className="leftCalculas text"
            >
              /
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={(e: any) => handleInput(e, "num")}
              className="calculas text"
            >
              7
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={(e: any) => handleInput(e, "num")}
              className="calculas text"
            >
              8
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={(e: any) => handleInput(e, "num")}
              className="calculas text"
            >
              9
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={(e: any) => handleInput(e, "op")}
              className="leftCalculas text"
            >
              *
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={(e: any) => handleInput(e, "num")}
              className="calculas text"
            >
              4
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={(e: any) => handleInput(e, "num")}
              className="calculas text"
            >
              5
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={(e: any) => handleInput(e, "num")}
              className="calculas text"
            >
              6
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={(e: any) => handleInput(e, "op")}
              className="leftCalculas text"
            >
              -
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={(e: any) => handleInput(e, "num")}
              className="calculas text"
            >
              1
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={(e: any) => handleInput(e, "num")}
              className="calculas text"
            >
              2
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={(e: any) => handleInput(e, "num")}
              className="calculas text"
            >
              3
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={(e: any) => handleInput(e, "op")}
              className="leftCalculas text"
            >
              +
            </button>
          </div>
          <div className="flex justify-center items-center col-span-2">
            <button
              onClick={(e: any) => handleInput(e, "num")}
              className="calculasZero text"
            >
              0
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button className="calculas text">.</button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => {
                calculate();
                setIsEqual(true);
              }}
              className="leftCalculas text"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
