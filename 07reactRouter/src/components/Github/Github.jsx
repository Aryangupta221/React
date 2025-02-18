import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data =useLoaderData()
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   fetch('https://api.github.com/users/Aryangupta221') // ✅ Correct API URL
  //     .then(response => response.json()) // ✅ Convert to JSON
  //     .then(data => {
  //       console.log(data);
  //       setData(data); // ✅ Store user data in state
  //     })
  //     .catch(error => console.error("Error fetching data:", error)); // ✅ Handle errors
  // }, []);

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
      My Github: {data.followers}
      <br />
      {data.avatar_url && <img src={data.avatar_url} alt="GitHub Profile" width="300" />} {/* ✅ Fix img syntax */}
    </div>
  );
}

export default Github;
export const githubInfoLoader = async ()=>{
   const response = await fetch('https://api.github.com/users/Aryangupta221')
   return response.json()
}
