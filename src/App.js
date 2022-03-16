import './styles/App.css';
import './styles/home.css';
import './styles/production.css'
import './styles/montage.css'
import './styles/projekter.css'
import React, { Component, Suspense, useState } from 'react';
import './styles/Kontakt.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar_Footer from './sites/navbar';
import Home from './sites/Home';
import Footer from './sites/Footer';
import Produktion from './sites/Produktion';
import Montage from './sites/Montage';
import Projekter from './sites/Projekter';
import Kontakt from './sites/Kontakt';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import i18n from './translations/118n';
const countryOptions = [
  { key: 'de', value: 'de', flag: 'de', text: 'Germany' },
  { key: 'dk', value: 'dk', flag: 'dk', text: 'Denmark' },
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



  return (
    <div className="App">
    <Navbar_Footer handleChange={handleChange} t={t}/>
    <div className="content">
    <Routes>
      <Route path="/" element={<Home handleChange={handleChange} t={t}/>}/>
        <Route path="/Produktion" element={<Produktion/>} />
      
        <Route path="/Montage" element={<Montage/>} />
        <Route path="/Projekter" element={<Projekter/>} />

        <Route path="/Kontakt" element={<Kontakt/>} />
    </Routes>
    </div>

    <div className="footer">
        <Footer/>
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