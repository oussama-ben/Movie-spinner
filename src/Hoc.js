// HOC.js

import React, {Component} from 'react';
import {ClipLoader} from 'react-spinners';


const Loading = (WrappedComponent) => {
    return class Loading extends Component {
        
        render(){
            return this.props.loading ? 
             <ClipLoader />: <WrappedComponent {...this.props} />
            
        
    } 
}
}
export default Loading;