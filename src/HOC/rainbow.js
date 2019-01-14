import React from 'react';

const Rainbow=(WrappedComponent)=>
{
    const colors=['red','green','blue','yellow','pink']
    const number=colors[Math.floor(Math.random()*4)]
    const classname=number+'-text'
    console.log(classname)

    return(props)=>{
        return(
            <div className={classname}>
                <WrappedComponent {...props}/>
            </div>
        )

    }


}
export default Rainbow;
