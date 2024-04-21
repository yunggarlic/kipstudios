import React from "react";

const ContentSplit = ({ children, className }: ContentSplitProps) => {
  return (
    <div className={`py-10 desktop:py-20 flex flex-col container-default h-full desktop:flex-row w-full gap-4 desktop:gap-10 ${className}`}>
      {children}
    </div>
  );
};

export default ContentSplit;
