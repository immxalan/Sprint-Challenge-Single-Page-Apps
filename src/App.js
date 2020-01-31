import React, { useState, useEffect } from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from "./components/CharacterList";
import Navigation from "./components/Navigation";
import SearchForm from "./components/SearchForm";

export default function App() {

  return (
    <main>
      <Navigation/>
        <Header />
        <Route exact path="/" component={WelcomePage}/>
            <Route path='/characters'>
                <CharacterList/>
            </Route>
            <Route path="/search">
            <SearchForm/>
            </Route>
    </main>
  );
}
