import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
    let { user, isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center p-5">
            <Spinner animation="border" variant="dark" />
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;