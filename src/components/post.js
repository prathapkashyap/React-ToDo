import React,{Component} from 'react';

export default class Post extends Component{

    state={
        content:'',
        title:''
    }
    componentDidMount(){
        
        console.log(this.props);
        
        if(this.props.match.path==='/Contact/:mail_id'){
        
            let id=this.props.match.params.mail_id;
            //console.log("neveer be enougj",this.props.match.params);
            //console.log(this.props.mails)
            const singled=this.props.mails.filter(mail=>{
                return(mail.id==id)
            })
        //if(id===this.)
        console.log(singled)
        singled.forEach(thing => {
            this.setState({
                content:thing.email
                
            })
           
        });
        }
        else if(this.props.match.path==='/:description'){
            console.log('crazy piece of shitbuckets');
            console.log(this.props.match.params)
            let id=this.props.match.params.description;
            console.log(id);
            let singled=this.props.list.filter(task=>{
                return task.id==id
            })
            console.log(singled)
            singled.forEach(thing => {
                this.setState({
                    content:thing.desc,
                    title:thing.task
                    
                })
            });


        }
       
    

    }   
    render(){
        var content=null;
        if(this.props.match.path==='/:description'){

            content=this.state.content?(
                <div className="center">
                    <h1 className="pink-text">{this.state.title}</h1>
                    <h3 className="center red-text darken-3">{this.state.content}</h3>
                </div>
            ):(
                <div className="pink-text">No description for this one</div>
            )
        }
        else if(this.props.match.path==='/Contact/:mail_id'){
            content=this.state.content?(
                <div className="center">
                    
                    <h3 className="center red-text darken-3">{this.state.content}</h3>
                </div>
            ):(
                <div className="pink-text">Nothing here biatch...</div>
            )

        }
        return(
            <div>
                {content}
            </div>
        )

        
    }
}   