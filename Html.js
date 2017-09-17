import * as React from "react";
import Head from "react-helmet";

export default ({ App, render }: PhenomicHtmlPropsType) => {
  // if needed, you can know if you are in development or in static rendering
  // const isDev = process.env.PHENOMIC_ENV === "development"
  const { Main, State, Script, Style } = render(<App />);
  const helmet = Head.renderStatic();
  return (
    <html {...helmet.htmlAttributes.toComponent()} className="no-js" class="no-js" lang="">
      <head>
        {helmet.meta.toComponent()}
        {helmet.title.toComponent()}
        {helmet.base.toComponent()}
        <Style />
        {helmet.link.toComponent()}
        {helmet.style.toComponent()}
        {helmet.script.toComponent()}
        {helmet.noscript.toComponent()}

        <link rel="stylesheet" href="css/vendor/font-awesome.min.css"/>
        <link rel="stylesheet" href="css/vendor/animate.min.css"/>
        <link rel="stylesheet" href="css/vendor/owl.carousel.css"/>
        <link rel="stylesheet" href="css/vendor/owl.transitions.css"/>
        <link rel="stylesheet" href="css/style.css"/>
        <script src="js/vendor/modernizr.js"></script>
      </head>
      <body {...helmet.bodyAttributes.toComponent()} class="single" className="single">
        <Main />
        <State />
        <Script />
        <script src="js/vendor/jquery.js"></script>
        <script src="js/vendor/grid.js"></script>
        <script src="js/vendor/owl.carousel.min.js"></script>
        <script src="js/vendor/wow.min.js"></script>
        <script src="js/vendor/jquery.nav.js"></script>
        <script src="js/vendor/typed.min.js"></script>
        <script src="js/vendor/jquery.scrollUp.min.js"></script>
        <script src="js/vendor/scroll.js"></script>
        <script src="js/vendor/jquery.sticky.js"></script>
        <script src="js/vendor/jquery.flexnav.min.js"></script>
        <script src="js/vendor/masonry.pkgd.min.js"></script>
        <script src="js/vendor/skrollr.js"></script>
        <script src="js/script.js"></script>
      </body>
    </html>
  );
};
