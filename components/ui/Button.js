const Button = ({ type, variant, className, children }) => {
  let classes = `button font-semibold text-sm rounded ${className} transition-all py-2 px-4 `;

  switch (variant) {
    case "primary": {
      classes += "bg-primary hover:bg-primary-darker text-white";
      break;
    }

    default: {
      classes += "bg-primary hover:bg-primary-darker text-white";
      break;
    }
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
