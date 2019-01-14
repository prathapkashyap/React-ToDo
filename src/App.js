import React, { Component } from 'react';
import Show from './components/showlist';
import Addnew from './components/addnew'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import About from './components/about'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Post from './components/post'


console.log('helllo')
class App extends Component {
  state={
    list:[
      {task:'Listen to Music',id:1,desc:"literally what it says"},
      {task:'take notes',id:2,desc:'like I said literally what it says'}
    ]
  }
  mails={
    emails:[
      {email:'prathapnk@gmail.com', id:1},
      {email:'mynameis@khan.com',id:2}
  ]
  }
  
handleDelete=(id)=>{
  
  var list=this.state.list.filter(task=>{
    return( task.id!==id)
  })
  this.setState({
    list
  });
}

addtask=(newone)=>
{
  newone.id=Math.random();
  
  var list=[...this.state.list,newone];
  console.log(list)
  this.setState({
    list:list
    
  });
  console.log(list)

}
  render() {
    return (
      <BrowserRouter>
        <div  className="center blue-text container">
        <Navbar/>
        
        <Route exact path="/" render={(props)=><Show {...props} handleDelete={this.handleDelete} list={this.state.list}/> }/>
        <Route exact path="/" render ={(props)=><Addnew {...props} addtask={this.addtask}/>}/>
        
        <Switch>
        <Route  exact path="/About" component={About}/>
        <Route  exact path="/Contact" render={(props)=><Contact {...props} mails={this.mails.emails} />}/>
        <Route exact path="/Contact/:mail_id" render={(props)=><Post {...props} mails={this.mails.emails}/>}/>
        <Route path="/:description" render={(props)=><Post {...props} list={this.state.list}/>}/>
        </Switch>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
