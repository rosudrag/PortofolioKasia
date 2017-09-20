import {
  createApp,
  renderApp
} from '@phenomic/preset-react-app/lib/client';

import MainEntryPoint from './src/Main';

export default createApp(MainEntryPoint);

if (module.hot) {
	module.hot.accept(() => renderApp(MainEntryPoint));
}

//branch//
