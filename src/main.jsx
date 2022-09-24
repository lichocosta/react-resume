import React from 'react'
import ReactDOM from 'react-dom/client'
import UseCallback from './hooks/UseCallback'
import UseContext from './hooks/UseContext'
import UseEffect from './hooks/UseEffect'
import UseLayoutEffect from './hooks/UseLayoutEffect'
import UseMemo from './hooks/UseMemo'
import UseReducer from './hooks/UseReducer'
import UseRef from './hooks/UseRef'
import UseState from './hooks/useState'
// import App from './App'
// import List from './components/List'
// import UstateWObj from './components/UstateWObj'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <List /> */}
    {/* <UstateWObj /> */}
    <UseState />
    <UseEffect />
    <UseContext />
    <UseRef />
    <UseReducer />
    <UseMemo />
    <UseCallback />
    <UseLayoutEffect />
  </React.StrictMode>
)
