import React from 'react'
import { Routes, Route } from 'react-router'
import GmailVerification from './GmailVerification'
import TestingScreen2 from './Testing/TestingScreen2'
import TestingScreen3 from './Testing/TestingScreen3'
const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<GmailVerification/>}/>
            <Route path="/home" element={<TestingScreen2/>}/>
            <Route path="/aboutus" element={<TestingScreen3/>}/>
            <Route path="/contactus" element={<TestingScreen3/>}/>
        </Routes>
    )
}
export default MainRouter