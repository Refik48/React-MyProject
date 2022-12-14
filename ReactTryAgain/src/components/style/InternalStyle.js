const InternalStyle = () => {

const styleParagraf = {
 color:"orange",
 fontSize:"1.8rem",
 border:"2px solid green",
}
const styleRefik={
 backgroundColor:"green",
 

}

  return (
    <div style={styleParagraf}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure dicta
      placeat beatae hic, suscipit repellat facere dignissimos delectus
      assumenda, sunt architecto dolore repudiandae debitis autem exercitationem
      ducimus alias. In, error?{" "}
      <span style={styleRefik} >React is a JavaScript library for building user interfaces.</span>
    </div>
  );
};

export default InternalStyle;
