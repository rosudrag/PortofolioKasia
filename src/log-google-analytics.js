let logPageView = () => {};

if (typeof window !== 'undefined'){
    var ReactGA = require('react-ga');
    ReactGA.initialize('UA-77562801-1');

    logPageView = () => {
        ReactGA.set({ page: window.location.pathname + window.location.search });
        ReactGA.pageview(window.location.pathname + window.location.search);
    };
}

export default logPageView;
