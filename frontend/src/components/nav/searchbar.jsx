import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux'; 
import { receiveSearch } from '../../actions/habit_actions';
import './searchbar.scss';

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.updateSearch = this.updateSearch.bind(this);
        this.state = {
            search: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateSearch(e) {
        this.setState({ search: e.target.value.substr(0, 50) });
    }

    handleSubmit(e) {
		e.preventDefault();
		this.props.setSearchTerm(this.state.search);
        this.props.history.push('/habits');
	}
    
    render() {
        return (
            <header className="nav-container">
                <div className="nav">
                    <div className="nav__left">
                        <Link to="/">
                            <span className="logo" href="#">
                            </span>
                        </Link>
                    </div>
                    <form className="nav__searchbar" onSubmit={this.handleSubmit}>
                        <input className="nav__searchbar__container__input" 
                        type="text" 
                        placeholder="Search..."
                        value={this.state.search} 
                        onChange={this.updateSearch}>
                        </input>
                    </form>
                    
                    </div>
            </header>
        )
        
    }
}

const mapStateToProps = () => {
    return {
    };
}; 

const mapDispatchToProps = dispatch => {
    return {
       setSearchTerm: (term) => dispatch(receiveSearch(term))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Searchbar));
