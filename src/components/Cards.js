import React, { useState } from 'react'
import Card from './Card';

const Cards = (props) => {
  
  let courses=props.courses;
  let category=props.category;
  const [likedCourses,setLikedCourses] = useState([])
  
  let allCourses=[];

  // return you all lists of all courses recieved from api response
  function getCourses() {

    if(category=="All"){
      Object.values(courses).forEach((array)=>{
        array.forEach((courseData)=>{
          allCourses.push(courseData);
        })
      })
      
      return allCourses;
    }
    else{
      //sirf specific category ka data karunga 
      return courses[category]; 
    }
    
  }

  
    return (
    <div className='flex flex-wrap justify-center gap-4 mb-4' > 
      {
        getCourses().map((course)=>{
          return <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />

        })
      }
    </div>
  )
}

export default Cards
