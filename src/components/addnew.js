import React,{Component} from 'react';

class Addnew extends Component{
    state={
        task:'',
        desc:''
    }
    
 handleChange=(e)=>{
     this.setState({
        [e.target.id]:e.target.value

     });
 }
//  handleChange2=(e)=>{
//     this.setState({
//        desc:e.target.value

//     });

 handleSubmit=(e)=>{
     console.log('it works')
     e.preventDefault();
     console.log('it works again');
     this.props.addtask(this.state);
     this.setState({
         task:'',
         desc:''
     });
    
 
    };

    render()
    {
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="container green-text">
                    <label htmlFor="task" className="left purple-text font-size:40px">Add Another</label>
                    <input  id="task" onChange={this.handleChange} value={this.state.task}></input>
                    <label htmlFor="desc" className="left purple-text">Add description</label>
                    <input id="desc" onChange={this.handleChange} value={this.state.desc}></input>
                    <button >Submit</button>
                </form>

            </div>
        );
    };
    

}
console.log('hello')
export default Addnew;