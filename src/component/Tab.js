export default function Tab({ label, isActive, onClick }) {
  return (
    <button
      className={`my-tab-button ${isActive ? 'active' : ''}`}

      // should be a function to run when button is clicked
      onClick={onClick}
    >
      {label}
    </button>
  );
};
