import React, { useState } from 'react'

const Articles = ({articles}) => {
    const sortAticles = (copy)=>{
        return copy.sort((a,b)=> b.upvotes - a.upvotes);
    }
   const [data, setData] = useState(sortAticles(articles));
   const sortByVote = ()=>{
    const copy = [...articles];
    const sortByVotes = sortAticles(copy);
    setData(sortByVotes);
   }
   const sortByRecent = ()=>{
    const copy = [...articles];
    const sortByRecents = copy.sort((a,b) => 
        new Date(b.date) - new Date(a.date));
    setData(sortByRecents);
   }
   
   return (
    <>
    <div className="container mb-4">
        <label htmlFor=""> Sort by</label>
        <button className='btn btn-success mx-2 my-2' onClick={sortByVote}>Most Upvoted</button>
        <button className='btn btn-success mx-2 my-2' onClick={sortByRecent}>Most Recent</button>
    </div>
    <div className="container">
   <table className='container border'>
    <thead>
        <tr className='border'>
            <th className='border p-3'>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
        {data.map((i,index)=>{
            return (
        <tr key={index}>
            <td className='text-left border p-2'>{i.title}</td>
            <td>{i.upvotes}</td>
            <td>{i.date}</td>
        </tr>
            )
        })}
        
    </tbody>
   </table>
    </div>
    
    </>
  )
}

export default Articles