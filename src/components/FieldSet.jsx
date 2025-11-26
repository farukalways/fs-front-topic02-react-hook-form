const FieldSet = ({ label, children }) => {
  return (
    <div>
      {label && <legend className="text-md font-bold mb-2">{label}</legend>}

      <div className="flex flex-col justify-between self-start">{children}</div>
    </div>
  );
};

export default FieldSet;
