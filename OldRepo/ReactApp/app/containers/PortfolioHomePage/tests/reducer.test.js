
import { fromJS } from 'immutable';
import portfolioHomePageReducer from '../reducer';

describe('portfolioHomePageReducer', () => {
  it('returns the initial state', () => {
    expect(portfolioHomePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
