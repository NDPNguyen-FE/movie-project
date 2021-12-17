import { Spin } from "antd";
import { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { userRouter } from "./Constant/Route";
import PublicRoute from "./Routes/PublicRoute.js";

function App() {
  // const auth = useSelector((state) => state.auth);

  return (
    <Suspense fallback={<Spin />}>
      <BrowserRouter>
        <Switch>
          {userRouter.map((user, index) => {
            const Component = user.component;
            return (
              <Route
                key={index}
                exact
                path={user.path}
                render={(propsRoute) => (
                  <PublicRoute>
                    <Component {...propsRoute}/>
                  </PublicRoute>
                )}
              ></Route>
            );
          })}
          {/* 
          {adminRouter.map((admin, index) => {
            const Component = admin.component;
            return (
              <Route
                exact
                key={index}
                path={admin.path}
                render={() => (
                  <PrivateRoute isAuth={auth.isAuthenticated}>
                    <Component />
                  </PrivateRoute>
                )}></Route>
            );
          })} */}
          {false ? <Redirect to="/admin" /> : <Redirect to="/" />}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
