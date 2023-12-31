import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { apiUrl,filterData } from "./data"; 
import { toast } from "react-toastify";

const App = () => {

  const [courses,setCourses] = useState(null)
  const [loading , setLoading]=useState(true)
  const [category,setCategory]=useState(filterData[0].title)

  
  const fetchData = async () => {
    setLoading(true);
    try{
      const res= await fetch(apiUrl);
      const output=await res.json();
       
      setCourses(output.data);

    }
    catch(error){
      toast.error("Network me koi dikkat hai ")
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

 
  return (
		<div className="flex flex-col min-h-screen bg-bgDark2">
			<Navbar />

			<div className="bg-bgDark2">
				<Filter
					filterData={filterData}
					category={category}
					setCategory={setCategory}
				/>

				<div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
					{loading ? (
						<Spinner />
					) : (
						<Cards courses={courses} category={category} />
					)}
				</div>
			</div>
		</div>
  );
};

export default App;
