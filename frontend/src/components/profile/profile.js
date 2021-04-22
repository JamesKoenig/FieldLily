import React from 'react';
// import HabitBox from '../habits/habit_box';
import "./profile.css"

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCurrentUserHabits();
    }

    render() {
      const {habits, currentUser} = this.props
      return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-xl-6 col-md-12">
                        <div className="card user-card-full">
                            <div className="row m-l-0 m-r-0">
                                <div className="col-sm-4 bg-c-lite-green user-profile">
                                    <div className="card-block text-center text-white">
                                        <h6 className="f-w-600">{currentUser.email}</h6>
                                        <h6 className="f-w-600">{currentUser.handle}</h6>
                                  </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-block">
                                        <h5 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Habits</h5>
                                        { habits.map(habit => (
                                          <div className="row" key={habit._id}>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Title</p>
                                                <h6 className="text-muted f-w-400">{habit.title}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Description</p>
                                                <h6 className="text-muted f-w-400">{habit.description}</h6>
                                            </div>
                                          </div>
                                        ))}
                                        <ul className="social-link list-unstyled m-t-40 m-b-10">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
      )
    }
} 

export default Profile;