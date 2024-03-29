/*
 * @Author: heyong
 * @Date: 2024-03-29 17:44:03
 * @LastEditors: heyong
 * @LastEditTime: 2024-03-29 17:45:16
 */
import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import './global.css';
import Router from './pages/.cache/router';
import { browserHistory } from 'react-router';
import { handleScreenAuto } from './utils/screenAuto';

const App = () => {
  // React的生命周期 如果你是vue可以放到mountd或created中
  useEffect(() => {
    //初始化自适应  ----在刚显示的时候就开始适配一次
    handleScreenAuto();
    //绑定自适应函数   ---防止浏览器栏变化后不再适配
    window.onresize = () => handleScreenAuto();
    //退出大屏后自适应消失
    return () => (window.onresize = null);
  }, []);

  return <Router history={browserHistory} />;
};

export default hot(App);
