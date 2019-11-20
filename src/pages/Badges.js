import React from 'react'

//import NavBar from '../components/Navbar'     no lo estoy usando
import confLogo from '../images/badge-header.svg'
import './styles/Badges.css'
import BadgeList from '../components/BadgeList'
import PageLoading from '../components/PageLoading'
import { Link } from 'react-router-dom'
import api from '../api'
import PageError from '../components/PageError'


class Badges extends  React.Component{

    state = {
        loading: true,
        error: null,
        data: undefined,
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () =>{
        this.setState({loading: true, error: null})

        try{
            const data = await api.badges.list()
            this.setState({loading: false, data: data})
        } catch (error){
            this.setState({loading: false, error: error})
        }
    }

    render()
    {
        if(this.state.loading === true){
            return <PageLoading/>
        }

        if(this.state.error){
            return <PageError error={this.state.error} />
        }
        console.log('2/4. render()')
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgeList badges={this.state.data} />
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Badges