import React, { Component } from 'react';
import { Button, Layout, Menu, Icon} from 'antd';
import {Route, Link} from 'react-router-dom'
import './App.css';

import Index from './pages/Index'
import Post from './pages/Post'
import Comment from './pages/Comment'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
class App extends Component {
  state = {
    current: 'home'
  }
  handleMenuClick = (e) => {
    this.setState({current: e.key})
  }
  render() {
    return (
      <div className="App">
        <Menu
          onClick={this.handleMenuClick}
          mode="horizontal"
          selectedKeys={[this.state.current]}
        >
          <Menu.Item key="home">
            <Link to="/"><Icon type="home"/>Home</Link>
          </Menu.Item>
          <Menu.Item key="post">
            <Link to="/post"><Icon type="post"/>Post</Link>
          </Menu.Item>
          <Menu.Item key="comment">
            <Link to="/comment"><Icon type=""/>Comment</Link>
          </Menu.Item>
        </Menu>
        <div className="content">
          <Route path='/' exact component={Index}/>
          <Route path='/post' component={Post}/>
          <Route path='/comment' component={Comment}/>
        </div>
      </div>
    );
  }
}

export default App;
