import React from "react";

const ContentSplit = ({ children, className }: ContentSplitProps) => {
  return (
    <div className={`py-4 desktop:py-10 flex flex-col container-default h-full desktop:flex-row w-full gap-4 desktop:gap-20 ${className}`}>
      {children}
    </div>
  );
};

export default ContentSplit;
