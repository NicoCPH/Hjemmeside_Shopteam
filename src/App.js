import './styles/App.css';
import './styles/home.css';
import './styles/production.css'
import './styles/montage.css'
import './styles/projekter.css'
import React, { useEffect, Suspense} from 'react';
import './styles/Kontakt.css'


import {
  Routes,
  Route,
} from "react-router-dom";
import NavbarFooter from './sites/navbar';
import Home from './sites/Home';
import Footer from './sites/Footer';
import Produktion from './sites/Produktion';
import Montage from './sites/Montage';
import Projekter from './sites/Projekter';
import Kontakt from './sites/Kontakt';
import { useTranslation } from 'react-i18next';
import i18n from './translations/118n';

const countryOptions = [
  { key: 'de', value: 'de', flag: 'de', text: 'Deutsch' },
  { key: 'en', value: 'en', flag: 'gb', text: 'English' },
]

function Page() {
  const handleChange = (event) => {
    let key = countryOptions.find((e) => e.text === event.target.textContent)
    changeLanguage(key.key)
    console.log(event.target.textContent)
}
const { t } = useTranslation();

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
}
useEffect(() => { 
  changeLanguage("en")  
  }, []);
  return (
    <div className="App">
    <NavbarFooter handleChange={handleChange} t={t} countryOptions={countryOptions}/>
    <div className="content">
    <Routes>
      <Route path="/" element={<Home handleChange={handleChange} t={t}/>}/>
        <Route path="/Produktion" element={<Produktion handleChange={handleChange} t={t}/>} />
      
        <Route path="/Montage" element={<Montage handleChange={handleChange} t={t}/>} />
        <Route path="/Projekter" element={<Projekter handleChange={handleChange} t={t}/>} />

        <Route path="/Kontakt" element={<Kontakt handleChange={handleChange} t={t}/>} />
    </Routes>
    </div>

    <div className="footer">
        <Footer handleChange={handleChange} t={t}/>
        </div>
    </div>
  );
}

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page/>
    </Suspense>
  );
}