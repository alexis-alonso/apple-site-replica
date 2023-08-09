// AccordionContent.js

const AccordionContent = ({ isActive, content }) => {
  return isActive ? <div className="accordion-content">{content}</div> : null;
};

export default AccordionContent;
    