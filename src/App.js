
import { Button, Layout } from 'antd'
import 'antd/dist/antd.css'
import Footer from './views/layout/Footer';
import LayoutHeader from './views/layout/LayoutHeader';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux';
import { routeConfig } from './route/routeConfig';
import { removeAllToDoAction } from './redux/loginaction';
import { useAuthProvider } from './views/login/useAuthProvider';
import Login from './views/login/Login';
import { HomeLayout } from './views/login/HomeLayout';

const {Content} = Layout;
function App() {
  

  return (
    <>
    <Layout>
      <LayoutHeader/>
      <Content className='site-layout' style={{padding:'0 50px', marginTop: 64}}>
<div className='site-layout-background' style={{padding: 24, minHeight:300}}>
           
 
<Routes>
        {
          routeConfig && routeConfig.map((item, key) => {
            return <Route key={key} path={item.path} element={item.element} />

          })
        }
</Routes>    
</div>
      </Content>
      <Footer/>
    </Layout>
    </>
  );
}

export default App;

/*  const state = useSelector(state => state.loginReducer);
  let dispatch = useDispatch();
  const removeAll = () => {
    dispatch(removeAllToDoAction())
}
 */
// <Button onClick={() => removeAll()}>OUT</Button>