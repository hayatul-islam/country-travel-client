import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";
import useFirebase from "../../hooks/useFirebase";

function PrivateRoute({ children, ...rest }) {
    let { user } = useFirebase();
    console.log(user);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
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