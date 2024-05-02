import { Fragment } from "react";

interface BlockquoteProps {
  quote: string;
  citation: string;
}

const Blockquote = ({ quote, citation }: BlockquoteProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <span aria-hidden className="leading-none text-4xl h-full">
          &quot;
        </span>
        <blockquote>{quote}&quot;</blockquote>
      </div>
      <cite>— {citation}</cite>
    </div>
  );
};

export default Blockquote;
