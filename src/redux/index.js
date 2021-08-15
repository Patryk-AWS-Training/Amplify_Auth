import {configureStore} from '@reduxjs/toolkit';

import mainReducer from './features/main';
import authReducer from './features/auth';

export default configureStore({
  reducer: {
    main: mainReducer,
    auth: authReducer,
  },
});
