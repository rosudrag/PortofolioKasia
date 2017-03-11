import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import makeSelectPortfolioHomePage from "./selectors";
import messages from "./messages";

export class PortfolioHomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
        <div>
          <Helmet
            title="PortfolioHomePage"
            meta={[
              { name: "description", content: "Description of PortfolioHomePage" },
            ]}
          />
          <FormattedMessage {...messages.header} />
        </div>
        );
    }
}

PortfolioHomePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
    PortfolioHomePage: makeSelectPortfolioHomePage(),
});

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioHomePage);
