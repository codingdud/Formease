import './App.css';
// import Help from './components/help/help'
import Form from './components/form/form'
import List from './components/form/listform'
import Show from './components/formUpdate/formupdate'
import Showsform from './components/formUpdate/showsform';
import Createform from './components/createform/cform'
import Upadeform from './components/updatefrm/Updatefrom'
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import About from './components/Aboutus/About';
import Nomatch from './components/loder/Nomatch';
import Formlink from './components/formlink/Formlink';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { ChangeProvider } from './components/context';
function App() {
  const [sselect, setSselect] = useState("")
  const [uselect, setUselect] = useState("")
  return (
    <>
    <ChangeProvider>
      <Routes>
        <Route path="/" element={<Nav />} >
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="manage" element={<Form setSelectform={setUselect} selectform={uselect} />}>
        <Route path='fill' element={<List
            selectform={uselect}
          />} />
          <Route index element={<List
            selectform={uselect}
          />} />
          <Route path='update' element={<Upadeform
            uselect={uselect}
          />} />
          <Route path="create" element={<Createform />} />
        </Route>


        <Route path="/show" element={  <Show setSselect={setSselect}  sselect={sselect} />}>
          <Route index element={<Showsform sselect={sselect}/>}/>
          <Route path='datatable' element={<Showsform sselect={sselect}/>}/>
        </Route>
       <Route path="about" element={<About />} />
       <Route path='*' element={<Nomatch/>}></Route>
      </Route>
      <Route path='/link/:id' element={<Formlink/>}/>      
      </Routes>
      </ChangeProvider>
    </>
  );
}

export default App;
