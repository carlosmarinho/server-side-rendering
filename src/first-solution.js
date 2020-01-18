const store = create();

//Initial render
renderToString(
    <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
            <Routes />
        </StaticRouter>
    </Provider>
);

//Somehow wait for all action creator
// requests to complete

//Render a second time, at this point, 'store' has alll
// of the data in it from the initial render!!!

const content = renderToString(
    <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
            <Routes />
        </StaticRouter>
    </Provider>
);