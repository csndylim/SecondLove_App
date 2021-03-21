import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact'
import CarouselPage from '../components/CarouselPage'
import Card from '../components/Card'
import CategoriesBtn from '../components/CategoriesBtn'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { getItem, requestItem } from '../Redux/Actions/itemAction'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom';

class ItemDetails extends Component {

    constructor (props){
        super(props)
        this.requestItem = this.handleRequestItem.bind(this)
    }

    componentDidMount(){
        const { match } = this.props;
        const matchUrl = match.url;
        this.props.getItem(matchUrl)
    }

    handleRequestItem(){
        //can only request when user is login, <- enforce this in front-end
        const { match } = this.props;
        const matchUrl = match.url;
        this.props.requestItem(matchUrl)
        console.log(this.props.ui.notification)
        console.log(this.props.ui.errors)
        //look at dev tools
        //if successful, new notification state
        //if unsuccessful new error state
    }   

    render() {
        return (
            <div>
                <h1>Item Details</h1>
                <h3>{this.props.selectedItem.itemName}</h3>
                <h3>{this.props.selectedItem.category}</h3>
                <h3>{this.props.selectedItem.userHandle}</h3>
                <h3>{this.props.selectedItem.ballotTime}</h3>
                <h3>{this.props.selectedItem.itemCondition}</h3>
                <h3>{this.props.selectedItem.imageUrl}</h3>
                <button onClick = {() => {this.handleRequestItem}}>Request for item</button>
            
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // Assigning the state properties into our propname
        // propname  :  state.somefield
        user : state.user.user,
        selectedItem : state.item.selectedItem,
        ui : state.ui
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
        {getItem, requestItem}
    , dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails)
//export default ItemDetails;