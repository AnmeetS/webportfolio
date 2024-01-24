import React, { useEffect, useState, useRef } from 'react';

const Pattern = () => {
  const [isActive, setIsActive] = useState(true);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const movementTimeout = useRef<number | null>(null);
  const leaveTimeout = useRef<number | null>(null);

  const setCursorRef = (cursor: HTMLDivElement) => {
    cursorRef.current = cursor;
    document.body.appendChild(cursor);
  };

  useEffect(() => {
    // Delay the start of the pattern if mouse isnt there
    const startTimeout = window.setTimeout(() => {
      setIsActive(false);
    }, 4000); // Delay Time

    const cursor = document.createElement('div');
    cursor.className = 'fixed w-5 h-5 rounded-full bg-transparent pointer-events-none z-50 custom-cursor';
    setCursorRef(cursor);

    // Determines if mouse is moving
    const updateCursorPosition = (e: MouseEvent) => {
      if (leaveTimeout.current) {
        clearTimeout(leaveTimeout.current); 
      }
      cursor.style.left = `${e.clientX - 10}px`;
      cursor.style.top = `${e.clientY - 10}px`;
      setIsActive(true);
      if (movementTimeout.current) {
        clearTimeout(movementTimeout.current);
      }
      movementTimeout.current = window.setTimeout(() => {
        setIsActive(false);
      }, 2000); //Delay Time
    };

    // Determines if mouse left
    const handleMouseLeave = () => {
      leaveTimeout.current = window.setTimeout(() => {
        setIsActive(false);
      }, 2000); // Delay Time
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', updateCursorPosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (leaveTimeout.current) {
        clearTimeout(leaveTimeout.current);
      }
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', updateCursorPosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (movementTimeout.current) {
        clearTimeout(movementTimeout.current);
      }
      document.body.removeChild(cursor);
    };
  }, []);

  useEffect(() => {
    let row = 0, column = -1;
    const columns = Math.floor(window.innerWidth / 80);
    const rows = Math.floor(window.innerHeight / 80);

    const moveCursor = () => {
      if (!isActive && cursorRef.current) {
        if (column < columns) {
          column++;
        } else {
          column = 0;
          if (row < rows) {
            row++;
          } else {
            row = 0;
          }
        }
        cursorRef.current.style.left = `${column * 80}px`;
        cursorRef.current.style.top = `${row * 80}px`;
      }
    };

    const interval = setInterval(moveCursor, 150);

    return () => clearInterval(interval);
  }, [isActive]);

  return <div></div>;
};

export default Pattern;
