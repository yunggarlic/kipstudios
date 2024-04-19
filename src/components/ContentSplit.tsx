import React from "react";

const ContentSplit = ({ children }: ContentSplitProps) => {
  return (
    <div className="flex flex-col container-default h-full desktop:flex-row w-full gap-4 desktop:gap-10">
      {children}
    </div>
  );
};

export default ContentSplit;
