import { createSelector } from 'reselect';

/**
 * Direct selector to the portfolioHomePage state domain
 */
const selectPortfolioHomePageDomain = () => (state) => state.get('portfolioHomePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PortfolioHomePage
 */

const makeSelectPortfolioHomePage = () => createSelector(
  selectPortfolioHomePageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPortfolioHomePage;
export {
  selectPortfolioHomePageDomain,
};
