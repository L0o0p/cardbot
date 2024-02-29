import { legacy_createStore } from 'redux'
import reducer from './reducer.ts'

const store = legacy_createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()/*浏览器插件配置语句*/
);

export default store