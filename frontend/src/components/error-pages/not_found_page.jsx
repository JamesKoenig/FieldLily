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
                <h1 style={{'font-size': '50px'}}>404 Not Found</h1>
            </div>
        );
    }
}
export default NotFoundPage;