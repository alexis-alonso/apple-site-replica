export default function Tab({ label, isActive, onClickFunction }) {
  const [activeAccordion, setActiveAccordion] = useState(false);

  const handleMouseEnter = () => {
    activeAccordion(true);
  };

  const handleMouseLeave = () => {
    setActiveAccordion(false);
  };
  
  return (
    <button
      // use the 'active' class too if 'isActive' prop is 'active'
      className={`my-tab-button ${isActive ? 'active' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      // should be a function to run when button is clicked
      onClick={onClickFunction}
    >
      {label}
    </button>
  );
};
