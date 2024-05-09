const Arrow = ({
  flip,
  hover = false,
}: {
  flip?: boolean;
  hover?: boolean;
}) => (
  <svg
    className={`${flip ? "rotate-180 ml-2 mr-0" : ""}  overflow-visible w-[18px] h-[18px] ml-0 mr-2 transition-all`}
  >
    <defs>
      <marker
        id="m"
        markerWidth="4"
        markerHeight="8"
        refX="0"
        refY="1"
        viewBox="0 0 1 2"
      >
        <polygon points="0,0 1,1 0,2" fill="black" />
      </marker>
    </defs>
    <line
      x1="0"
      y1="50%"
      x2="100%"
      y2="50%"
      strokeWidth="2"
      markerEnd="url(#m)"
      stroke="black"
    />
  </svg>
);

export default Arrow;
