import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// promise for the async calls
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// This loads both components

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <BrowserRouter>
//       <div>
//         <Route path='/' component={PostsIndex} />
//         <Route path='/posts/new' component={PostsNew} />
//       </div>
//     </BrowserRouter>
//   </Provider>
//   , document.querySelector('.container'));


// When adding Switch to fix this issue above, remember to put the most specific routes at the top and generic
// at the bototm
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/posts/new' component={PostsNew} />
          <Route path='/' component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
