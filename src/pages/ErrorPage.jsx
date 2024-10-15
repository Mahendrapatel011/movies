import React from "react";
import { NavLink, useRouteError } from "react-router-dom";
import './ErrorPage.css';

export const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="error-page">
            {error?.status === 404 ? (
                <>
                    <img
                        src="https://media.istockphoto.com/id/687810238/photo/pug-dog-with-yellow-constructor-safety-helmet-and-cone-and-404-error-and-dead-end-sign-on.jpg?s=612x612&w=0&k=20&c=DbvLxH_RhgH90S12YOBuYD2TDBLuiRC7SUy69Enm_g4=" // Use your Google image URL here
                        alt="404 Error"
                        className="error-image"
                    />
                    <h1>The page you are looking for does not exist</h1>
                    <NavLink className="back-button" to="/">Go Back</NavLink>
                </>
            ) : (
                <h1>Something went wrong</h1>
                
            )}
        </div>
        
    );
};

export default ErrorPage;
