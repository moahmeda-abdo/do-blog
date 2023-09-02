// import { useState } from "react";

// const Home = () => {
//   const [name , setName] = useState("hamda")
//   const handleClick = ()=>{
//   setName("nano")
//   }
//   // const handleClickAgain = (name)=>{
//   // console.log("hello" +" "+ name)
//   // }
//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       <p>{ name }</p>
//       <button onClick={handleClick}>click me</button>
//       {/* <button onClick={()=>{handleClickAgain("mohamed")}}>click me again</button> */}

//     </div>
//   );
// };

// export default Home;
//-------------------------------------------------------
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8080/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;