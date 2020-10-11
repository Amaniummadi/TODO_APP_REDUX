import React from 'react';
import 'antd/dist/antd.css';


import UserTab from './components/UserTab';

import { Tabs } from 'antd';
import Todotab from './components/TodoTab';
import Posts from './components/Posts';
import PostList from './components/PostList';

const { TabPane } = Tabs;


function App() {

  return (
    <div style={{ width: 600, margin: '100px auto' }} className="App">
         {/* <Posts/> */}
      <PostList/>
          <h2 style={{textAlign:"center"}}>Todo App By Using Redux</h2>
          <Tabs defaultActiveKey="User" style={{border:'1px solid #f1f1f1',padding:"20px"}} >
              <TabPane tab="Todo" key="Todo" >
           <Todotab/>
              </TabPane>
              <TabPane tab="User" key="User">
                <UserTab/>
            </TabPane>
          </Tabs>
    </div>
  );
}

export default App;
