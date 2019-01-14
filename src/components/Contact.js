import React from 'react';
import {Link} from 'react-router-dom'
import Rainbow from  '../HOC/rainbow'
const Contact=({mails})=>{

    var mailids=mails.map(mail=>{
        //console.log(mail)
        return(
            
            <div className="centre" key={mail.id}>
            <Link to={'/contact/'+mail.id}>
                <h3>{mail.email}</h3>
            </Link>
            </div>
        )
    })
        return(
            <div>
                <h3 className="centre" >Contact These guys{mailids} </h3>
            </div>
        )
    
}
export default Rainbow(Contact);