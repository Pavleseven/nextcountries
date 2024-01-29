import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

function AccordionAbout({ setShowText, showText, id, cont, handleClick }) {
  return (
    <div className="about-text">
      {/* <h2 onClick={() => handleClick(id)}>{cont}</h2>
      {showText === id ? (
        <p id={id}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          totam, repellendus fuga commodi sit voluptatum accusamus itaque ab
          tempora doloribus, perferendis fugiat quod consequuntur iusto.
        </p>
      ) : (
        ""
      )} */}
      <Accordion className="text-emerald-700">
        <AccordionSummary aria-controls="panel1-content">
          {cont}
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionAbout;
