import React,{Component} from'react';
class Front extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
            <h1>Header 1</h1>
                {this.props.children}
            <h1>footer 1</h1>
            </React.Fragment>
        )
    }
}
export default Front;