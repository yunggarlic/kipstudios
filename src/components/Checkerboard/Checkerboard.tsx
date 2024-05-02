const Checkerboard = ({
  width = 40,
  height = 40,
  color = "black",
}: CheckerboardProps) => {
  const size = Math.min(width, height) / 3; // Calculate the size of each square

  return (
    <svg
      className="hover:rotate-90"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => {
          // Determine the fill color for the square
          const fill = row % 2 === col % 2 ? color : "white";
          // Adjust the placement based on the row and column indices
          const x = col * size;
          const y = row * size;

          return (
            <rect
              key={`${row}-${col}`}
              x={x}
              y={y}
              width={size}
              height={size}
              fill={fill}
            />
          );
        })
      )}
    </svg>
  );
};

export default Checkerboard;
