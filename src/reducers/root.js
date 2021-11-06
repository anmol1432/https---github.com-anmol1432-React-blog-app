import { combineReducers } from 'redux';
import Blog from "./Blog";

const rootReducers = combineReducers(
    {
        Blogs: Blog
    }
);


export default rootReducers;