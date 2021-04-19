import React from 'react';
import { Link } from 'react-router-dom';
class NotFoundPage extends React.Component{
    render(){
        return (
            <div>
                <p>
                    <Link 
                        to="/" 
                        style={{"textAlign":"center",
                           "color":"white",
                           "fontSize": "large"}}>Go to Home </Link>
                </p>
            </div>
        );
    }
}
export default NotFoundPage;