import React, { useEffect, useState } from "react";

import TeethSvg from "components/TeethSelector/TeethSvg";


const TeethSelector = () => {
  const [selectedTeeth, setSelectedTeeth] = useState<string | null>(null);

  const DEFAULT_FILL_COLOR = "#E1F0ED";
  const SELECTED_FILL_COLOR = "#FF0000";

  const handleTeethClick = (event: React.MouseEvent<SVGElement>) => {
    const clickedTeethPath = event.target as HTMLDivElement;
    const teethId = clickedTeethPath?.getAttribute("data-select-id");

    if (teethId) {
      // Selects a teeth on click if it is not selected. And,
      // Unselects a teeth if the selected teeth is clicked again.
      setSelectedTeeth(prevSelectedTeeth =>
        prevSelectedTeeth === teethId ? null : teethId
      );
    }
  };

  useEffect(() => {
    const svgElement = document.getElementById("my-svg");

    if (svgElement) {
      const paths = Array.from(svgElement.getElementsByTagName("path"));

      paths.forEach((path) => {
        const pathSelectId = path.getAttribute("data-select-id");

        if (pathSelectId) {
          path.style.cursor = "pointer";
          path.setAttribute("fill", DEFAULT_FILL_COLOR);

          if (pathSelectId === selectedTeeth) {
            path.setAttribute("fill", SELECTED_FILL_COLOR);
          }
        }
      });
    }
  }, [selectedTeeth]);

  return (
    <div>
      <TeethSvg onClick={handleTeethClick} />
      <div>Selected Tooth: {selectedTeeth || "none"}</div>
    </div>
  );
};

export default TeethSelector;
