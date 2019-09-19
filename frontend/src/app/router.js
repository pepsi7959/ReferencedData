// import external modules
import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Spinner from "../components/spinner/spinner";

// import internal(own) modules
import MainLayoutRoutes from "../layouts/routes/mainRoutes";
import FullPageLayout from "../layouts/routes/fullpageRoutes";
import ErrorLayoutRoute from "../layouts/routes/errorRoutes";

// Main Layout
const LazyAgency = lazy(() => import("../views/agency/agency"));
const LazyProcess = lazy(() => import("../views/process/process"));
const LazyDocument = lazy(() => import("../views/document/document"));
const LazyUploadFile = lazy(() => import("../views/upload/uploadFile"));

class Router extends Component {
    render() {
       return (
          // Set the directory path if you are deplying in sub-folder
          <BrowserRouter basename="/">
             <Switch>
                {/* Agency Views */}
                <MainLayoutRoutes
                   exact
                   path="/"
                   render={matchprops => (
                      <Suspense fallback={<Spinner />}>
                         <LazyAgency {...matchprops} />
                      </Suspense>
                   )}
                />
                {/* Agency Views */}
                <MainLayoutRoutes
                   exact
                   path="/agency"
                   render={matchprops => (
                      <Suspense fallback={<Spinner />}>
                         <LazyAgency {...matchprops} />
                      </Suspense>
                   )}
                />
                {/* Process Views */}
                <MainLayoutRoutes
                   exact
                   path="/process"
                   render={matchprops => (
                      <Suspense fallback={<Spinner />}>
                         <LazyProcess {...matchprops} />
                      </Suspense>
                   )}
                />
                {/* Document Views */}
                <MainLayoutRoutes
                   exact
                   path="/document"
                   render={matchprops => (
                      <Suspense fallback={<Spinner />}>
                         <LazyDocument {...matchprops} />
                      </Suspense>
                   )}
                />
                {/* Upload File */}
                <MainLayoutRoutes
                   exact
                   path="/upload"
                   render={matchprops => (
                      <Suspense fallback={<Spinner />}>
                         <LazyUploadFile {...matchprops} />
                      </Suspense>
                   )}
                />
             </Switch>
          </BrowserRouter>
       );
    }
}

export default Router;