import React,{Component} from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }
  componentDidCatch = (error,info) => {

  }
  render(){
    if(this.state.hasEror){
     return <h1>{this.state.errorMessage}</h1>
   } else {
     return this.props.children;
   }
  }


}

export default ErrorBoundary;
