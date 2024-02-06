import React, { useEffect, useState } from "react";

import TeethSvg from "components/TeethSelector/TeethSvg";


const TeethSelector = () => {
  const [selectedTeeth, setSelectedTeeth] = useState<string>("");

  return (
    <div>
      <TeethSvg selectedTeeth={selectedTeeth} onClick={setSelectedTeeth} />
      <div>Selected Tooth: {selectedTeeth || "none"}</div>
    </div>
  );
};

export default TeethSelector;
