import React from 'react';
import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'
import api from '../api'
import PageLoading from '../components/PageLoading'


class BadgeNew extends React.Component {

    state = { 
        loading: false,
        error: null,
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

    handleSubmit = async e =>{
        e.preventDefault()
        this.setState({ loading: true, error: null });

        try {
            await api.badges.create(this.state.form);
            this.setState({ loading: false });

            this.props.history.push('/badges')
        } catch(error){
            this.setState({ loading: false, error: error})
        }
    }

    render(){
        if(this.state.loading){
            return <PageLoading/>
        }
        return (
            <React.Fragment>
            <div>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                twitter={this.state.form.twitter || 'twiter'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                email={this.state.form.email || 'EMAIL'}
                                avatarUrl="https://vignette.wikia.nocookie.net/thehundred/images/6/6a/S2-cast-photos-lincoln.jpg/revision/latest?cb=20160804023904"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                onSubmit = {this.handleSubmit}
                                error={this.state.error}
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