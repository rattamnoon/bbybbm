"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

type Position = {
  row: number;
  col: number;
};

export default function Loves() {
  const rows = 13;
  const cols = 76; // Increased column count to fit the longer text
  const [snake, setSnake] = useState<Position[]>([]);
  const [completedCells, setCompletedCells] = useState<Position[]>([]);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Define the paths for "I LOVE BBYBBM" letters
  const letters = useMemo<Position[][]>(
    () => [
      // I shape
      [
        { row: 3, col: 3 },
        { row: 4, col: 3 },
        { row: 5, col: 3 },
        { row: 6, col: 3 },
        { row: 7, col: 3 },
        { row: 8, col: 3 },
        { row: 9, col: 3 },
      ],

      // L shape
      [
        { row: 3, col: 7 },
        { row: 4, col: 7 },
        { row: 5, col: 7 },
        { row: 6, col: 7 },
        { row: 7, col: 7 },
        { row: 8, col: 7 },
        { row: 9, col: 7 },
        { row: 9, col: 8 },
        { row: 9, col: 9 },
      ],

      // O shape
      [
        { row: 3, col: 12 },
        { row: 3, col: 13 },
        { row: 3, col: 14 },
        { row: 4, col: 11 },
        { row: 5, col: 11 },
        { row: 6, col: 11 },
        { row: 7, col: 11 },
        { row: 8, col: 11 },
        { row: 9, col: 12 },
        { row: 9, col: 13 },
        { row: 9, col: 14 },
        { row: 8, col: 15 },
        { row: 7, col: 15 },
        { row: 6, col: 15 },
        { row: 5, col: 15 },
        { row: 4, col: 15 },
      ],

      // V shape
      [
        { row: 3, col: 18 },
        { row: 4, col: 18 },
        { row: 5, col: 18 },
        { row: 6, col: 19 },
        { row: 7, col: 20 },
        { row: 8, col: 21 },
        { row: 9, col: 22 },
        { row: 8, col: 23 },
        { row: 7, col: 24 },
        { row: 6, col: 25 },
        { row: 5, col: 26 },
        { row: 4, col: 26 },
        { row: 3, col: 26 },
      ],

      // E shape
      [
        { row: 3, col: 29 },
        { row: 3, col: 30 },
        { row: 3, col: 31 },
        { row: 3, col: 32 },
        { row: 4, col: 29 },
        { row: 5, col: 29 },
        { row: 6, col: 29 },
        { row: 6, col: 30 },
        { row: 6, col: 31 },
        { row: 7, col: 29 },
        { row: 8, col: 29 },
        { row: 9, col: 29 },
        { row: 9, col: 30 },
        { row: 9, col: 31 },
        { row: 9, col: 32 },
      ],

      // B shape
      [
        { row: 3, col: 35 },
        { row: 4, col: 35 },
        { row: 5, col: 35 },
        { row: 6, col: 35 },
        { row: 7, col: 35 },
        { row: 8, col: 35 },
        { row: 9, col: 35 },
        { row: 3, col: 36 },
        { row: 3, col: 37 },
        { row: 4, col: 38 },
        { row: 5, col: 38 },
        { row: 6, col: 37 },
        { row: 6, col: 36 },
        { row: 7, col: 38 },
        { row: 8, col: 38 },
        { row: 9, col: 36 },
        { row: 9, col: 37 },
      ],

      // B shape (second B)
      [
        { row: 3, col: 41 },
        { row: 4, col: 41 },
        { row: 5, col: 41 },
        { row: 6, col: 41 },
        { row: 7, col: 41 },
        { row: 8, col: 41 },
        { row: 9, col: 41 },
        { row: 3, col: 42 },
        { row: 3, col: 43 },
        { row: 4, col: 44 },
        { row: 5, col: 44 },
        { row: 6, col: 43 },
        { row: 6, col: 42 },
        { row: 7, col: 44 },
        { row: 8, col: 44 },
        { row: 9, col: 42 },
        { row: 9, col: 43 },
      ],

      // Y shape
      [
        { row: 3, col: 47 },
        { row: 4, col: 47 },
        { row: 5, col: 48 },
        { row: 6, col: 49 },
        { row: 7, col: 49 },
        { row: 8, col: 49 },
        { row: 9, col: 49 },
        { row: 5, col: 50 },
        { row: 4, col: 51 },
        { row: 3, col: 51 },
      ],

      // B shape (second B)
      [
        { row: 3, col: 54 },
        { row: 4, col: 54 },
        { row: 5, col: 54 },
        { row: 6, col: 54 },
        { row: 7, col: 54 },
        { row: 8, col: 54 },
        { row: 9, col: 54 },
        { row: 3, col: 55 },
        { row: 3, col: 56 },
        { row: 4, col: 57 },
        { row: 5, col: 57 },
        { row: 6, col: 56 },
        { row: 6, col: 55 },
        { row: 7, col: 57 },
        { row: 8, col: 57 },
        { row: 9, col: 56 },
        { row: 9, col: 55 },
      ],

      // B shape (second B)
      [
        { row: 3, col: 60 },
        { row: 4, col: 60 },
        { row: 5, col: 60 },
        { row: 6, col: 60 },
        { row: 7, col: 60 },
        { row: 8, col: 60 },
        { row: 9, col: 60 },
        { row: 3, col: 61 },
        { row: 3, col: 62 },
        { row: 4, col: 63 },
        { row: 5, col: 63 },
        { row: 6, col: 62 },
        { row: 6, col: 61 },
        { row: 7, col: 63 },
        { row: 8, col: 63 },
        { row: 9, col: 62 },
        { row: 9, col: 61 },
      ],

      // M shape
      [
        { row: 3, col: 66 },
        { row: 4, col: 66 },
        { row: 5, col: 66 },
        { row: 6, col: 66 },
        { row: 7, col: 66 },
        { row: 8, col: 66 },
        { row: 9, col: 66 },
        { row: 4, col: 67 },
        { row: 5, col: 68 },
        { row: 6, col: 69 },
        { row: 5, col: 70 },
        { row: 4, col: 71 },
        { row: 3, col: 72 },
        { row: 4, col: 72 },
        { row: 5, col: 72 },
        { row: 6, col: 72 },
        { row: 7, col: 72 },
        { row: 8, col: 72 },
        { row: 9, col: 72 },
      ],
    ],
    []
  );

  // Start animation when component mounts
  useEffect(() => {
    if (letters.length === 0 || currentLetterIndex >= letters.length) return;

    const currentPath = letters[currentLetterIndex];
    let pathIndex = 0;
    const snakeLength = 10; // Length of the snake

    const interval = setInterval(() => {
      if (pathIndex < currentPath.length) {
        setSnake((prevSnake) => {
          // Add the next position to the front of the snake
          const newSnake = [currentPath[pathIndex], ...prevSnake];

          // Keep snake at a certain length
          if (newSnake.length > snakeLength) {
            newSnake.pop();
          }

          return newSnake;
        });

        pathIndex++;
      } else {
        // Letter completed
        clearInterval(interval);

        // Add all positions of current letter to completed cells
        setCompletedCells((prev) => [...prev, ...currentPath]);

        // Clear the snake
        setSnake([]);

        // Move to the next letter
        setCurrentLetterIndex((prevIndex) => prevIndex + 1);
      }
    }, 100); // Speed of the snake movement

    return () => clearInterval(interval);
  }, [letters, currentLetterIndex]);

  // Optional: Add a message or status when animation is complete
  useEffect(() => {
    if (currentLetterIndex >= letters.length) {
      // Animation is complete - no need to restart
      console.log("Animation complete!");
    }
  }, [currentLetterIndex, letters.length]);

  return (
    <div
      className={`flex flex-col items-center gap-4 my-8 ${
        isMobile ? "rotate-90 w-full h-full" : ""
      }`}
    >
      <div
        className={`p-4 rounded-lg ${
          isMobile ? "max-w-[900px] h-full" : "overflow-auto max-w-full"
        }`}
      >
        {Array.from({ length: rows }, (_, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex">
            {Array.from({ length: cols }, (_, colIndex) => {
              // Check if this cell is part of the current snake
              const isSnake = snake.some(
                (pos) => pos?.row === rowIndex && pos?.col === colIndex
              );

              // Check if this cell is part of a completed letter
              const isCompleted = completedCells.some(
                (pos) => pos?.row === rowIndex && pos?.col === colIndex
              );

              return (
                <motion.div
                  key={`cell-${rowIndex}-${colIndex}`}
                  className={`w-3 h-3 m-0.5 rounded-sm ${
                    isSnake
                      ? "bg-fuchsia-400"
                      : isCompleted
                      ? "bg-fuchsia-600"
                      : "bg-gray-200"
                  }`}
                  animate={{
                    scale: isSnake ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
