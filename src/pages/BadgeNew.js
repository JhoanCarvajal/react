import React from 'react';
import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import NavBar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'


class BadgeNew extends React.Component {

    state = { 
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        } 
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    render(){
        return (
            <React.Fragment>
            <div>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                avatarUrl="https://vignette.wikia.nocookie.net/thehundred/images/6/6a/S2-cast-photos-lincoln.jpg/revision/latest?cb=20160804023904"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
        )
    }
}

export default BadgeNew;