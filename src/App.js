import React,{useState} from 'react';
import 'antd/dist/antd.css';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { addpost } from './redux/actions';
import { Tabs,Button } from 'antd';
import UserTab from './components/UserTab';



import Todotab from './components/TodoTab';
import Posts from './components/Posts';
import PostList from './components/PostList';
import OpenModal from './components/OpenModal'
import './App.js'
import PostForm from './components/PostForm';
const { TabPane } = Tabs;


function App() {
  const [visible, setVisible] = useState(false);
  const dispatch=useDispatch();
    const isDisplay=true;
  
    const onCreate = (values) => {
//   const datepicker=values['date-picker'].format('YYYY-MM-DD'));
      dispatch(addpost(
      {
          id:uuid(),
          title:values.title,
          thumbnailUrl:values.thumbnailUrl

      }
  ));
    
      setVisible(false);
    };

  return (
    <div style={{ width: 1050, margin: '100px auto' }} className="App">
       <h2 style={{textAlign:"center",marginBottom:"40px"}}>Todo App By Using Redux</h2>
       <Button type="primary" style={{marginBottom:'10px'}}
                onClick={() => {
                  setVisible(true);
                }}
              >
               Create post
              </Button>
              <PostForm 
            isDisplay={isDisplay}
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                  setVisible(false);
                }}
              />
         <Posts style={{textAlign:"center", margin: '100px auto' }}/>
      {/* <PostList/> */}
          {/* <h2 style={{textAlign:"center"}}>Todo App By Using Redux</h2> */}
          {/* <Tabs defaultActiveKey="User" style={{border:'1px solid #f1f1f1',padding:"20px"}} >
              <TabPane tab="Todo" key="Todo" >
           <Todotab/>
              </TabPane>
              <TabPane tab="User" key="User">
                <UserTab/>
            </TabPane>
          </Tabs> */}
    </div>
  );
}

export default App;
