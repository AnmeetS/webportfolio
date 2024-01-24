import React, { useEffect, useState, useRef } from 'react';

interface GridSize {
    rows: number;
    columns: number;
}

const Grid: React.FC = () => {
    const [gridSize, setGridSize] = useState<GridSize>({ rows: 0, columns: 0 });
    const gridRef = useRef<HTMLDivElement>(null);

    const updateGridSize = () => {
        setGridSize({
            columns: Math.floor(window.innerWidth / 80),
            rows: Math.floor(window.innerHeight / 80)
        });
    };

    useEffect(() => {
        updateGridSize();
        window.addEventListener('resize', updateGridSize);
        return () => window.removeEventListener('resize', updateGridSize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const cursor = document.querySelector('.custom-cursor');
            if (cursor && gridRef.current) {
                const cursorRect = cursor.getBoundingClientRect();
                const elementsUnderCursor = document.elementsFromPoint(cursorRect.left + cursorRect.width / 2, cursorRect.top + cursorRect.height / 2);

                const tile = elementsUnderCursor.find(el => el.parentElement === gridRef.current);
                if (tile && tile instanceof HTMLElement) {
                    tile.style.backgroundColor = "#d5cbe6";
                    setTimeout(() => {
                        tile.style.backgroundColor = 'transparent';
                    }, 2000);
                }
            }
        }, 1);

        return () => clearInterval(interval);
    }, []);

    return (
        <div 
            ref={gridRef}
            className="w-full h-full grid bg-background"
            style={{ 
                gridTemplateColumns: `repeat(${gridSize.columns}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${gridSize.rows}, minmax(0, 1fr))`
            }}
        >
            {Array.from({ length: gridSize.rows * gridSize.columns }).map((_, idx) => (
                <div 
                    key={idx}
                    className="outline outline-1 outline-foreground transition duration-300"
                />
            ))}
        </div>
    );
};

export default Grid;