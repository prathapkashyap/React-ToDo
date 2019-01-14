import React from 'react';
import {Link} from 'react-router-dom';
import db from '../db.png'
const Show=({list,handleDelete})=>
{
    var newlist=list.map(task=>{
        return(
            <div className="posts">
            <div className=" post center container red-text " key={task.id}>
            <img  src={db} alt="a dragonball" onClick={()=>{handleDelete(task.id)}} ></img>
            <Link to={"/"+task.id}>
                <h3> {task.task}</h3>
            </Link>
               
                
            </div>
            </div>
        )
    })
    return(
        <div className='home '>
        <h1>Task list</h1>
        {newlist.length>=1?
        <div>
            {newlist}
        </div>
        :
        <div>
            <h1 className="pink-text ">This b!tc# empty YEET</h1>
        </div>
        }

        </div>
    )
}
export default Show;