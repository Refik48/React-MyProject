const InternalStyle = () => {
  const styleParagraf = {
    color: "orange",
    fontSize: "2rem",
  };
  const styleSalih = {
    backgroundColor: "blue",
  };
  return (
    <div style={styleParagraf}>
      Hocam soyle somut projelerde gormek istiyor insan{" "}
      <span style={styleSalih}>(Salih B)</span>
    </div>
  );
};
export default InternalStyle;
