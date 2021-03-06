import {Switch, Route} from 'react-router-dom';

import Auth from './Components/Auth/Auth';
import Feed from './Components/Feed/Feed';
import Post from './Components/Post/Post';
import PostForm from './Components/Form/PostForm/PostForm';
import Comment from './Components/Comments/Comment';
import CommForm from './Components/Form/CommForm/CommForm';
import FunStories from './Components/FunStories/FunStories';
import Profile from './Components/Profile/Profile';

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/feed' component={Feed}/>
        <Route path='/posts/:id' component={Post}/>
        <Route path='/comments/:id' component={Comment}/>
        <Route path='/commform' component={CommForm}/>
        <Route path='/postform' component={PostForm}/>
        <Route path='/fun' component={FunStories}/>
        <Route path='/profile' component={Profile}/>
    </Switch>
)