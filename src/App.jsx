import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

import Vission from './components/About/Vission'
import Principal from  './components/About/PrincipalMessage'
import President from './components/About/PresidentMessage';

import Curriculum from './components/Academics/Curriculum';
import ExamSchedule from './components/Academics/ExamSchedule';

import ArtCraftRoom from './components/Facillities/ArtCraftRoom'
import ClassRoom from './components/Facillities/ClassRoom'
import Internet from './components/Facillities/Internet'
import LanguageLab from './components/Facillities/LanguageLab'
import Library from './components/Facillities/Library'
import MedicalRoom from './components/Facillities/MedicalRoom'
import ScienceLaboratory from './components/Facillities/ScienceLaboratory'

import Event from './components/Gallary/Events'
import Functions from './components/Gallary/Functions'
import AcademicActivities from './components/Gallary/AcademicActivities'

import Contact from './components/Contact';

import Footer from './components/Footer';

import ScrollToTop from './components/ScrollToTop';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<>
      <ScrollToTop />
      <Navbar /><Home/>
      </>
    },
    {
      path: "/Home",
      element:<>
      <ScrollToTop />
      <Navbar /><Home/>
      </>
      
    },
    // --------------- About Tab -----------------------------
    {
      path: "/about/vission",
      element:<><ScrollToTop /> <Navbar /><Vission /> </> 
    },
    {
      path: "/about/principal-message",
      element: <><ScrollToTop /> <Navbar /><Principal /> </>
    },
    {
      path: "/about/president-message",
      element: <><ScrollToTop /> <Navbar /><President /> </>
    },
    // --------------- Academcis -----------------------------
    {
      path: "/academics/curriculum",
      element: <><ScrollToTop /> <Navbar /><Curriculum /> </>
    },
    {
      path: "/academics/exam-schedule",
      element: <> <ScrollToTop /> <Navbar /><ExamSchedule /> </>
    },
    
    // --------------- Facilites -----------------------------
    {
      path: "/facilities/class-room",
      element: <><ScrollToTop /> <Navbar /> <ClassRoom /></>
    },
    {
      path: "/facilities/library",
      element: <><ScrollToTop /> <Navbar /> <Library /> </>
    },
    {
      path: "/facilities/science-laboratory",
      element: <><ScrollToTop /> <Navbar /> <ScienceLaboratory /> </>
    },
    {
      path: "/facilities/internet",
      element: <><ScrollToTop /> <Navbar /> <Internet /> </>
    },
    {
      path: "/facilities/language-lab",
      element: <><ScrollToTop /> <Navbar /> <LanguageLab /> </>
    },
    {
      path: "/facilities/art-craft-room",
      element: <><ScrollToTop /> <Navbar /> <ArtCraftRoom /></>
    },
    {
      path: "/facilities/medical-room",
      element: <><ScrollToTop /> <Navbar /> <MedicalRoom /> </>
    },
  
     // --------------- Gallary -----------------------------
    {
      path: "/gallary/events",
      element:<><ScrollToTop /><Navbar />  <Event/></>
    },
    {
      path: "/gallary/functions",
      element:<><ScrollToTop /><Navbar />  <Functions /></>
    },
    {
      path: "/gallary/academic-activities",
      element:<><ScrollToTop /><Navbar />  < AcademicActivities/></>
    },

    // --------------- contact -----------------------------
    {
      path:"/contactUs",
      element:<><ScrollToTop /> <Navbar/> <Contact /></>
    }


  ]);

  return (
    <>
      {/* Use RouterProvider to wrap the routing logic */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
