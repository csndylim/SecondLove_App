import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export const AdminRoute = ({component : Component, ...rest }) => {

    return(
        <Route {...rest} render = {
            (props) => {
                //if user is authenticated and admin
                if(localStorage.usertype == "Admin"){
                    return <Component {...props}/>
                }
                else{
                    return <Redirect to = {
                        {
                            pathname: "/login",
                            state: {
                                from :props.location
                            }
                        }
                    }/>
                }

                
            }
        }/>
    )
}