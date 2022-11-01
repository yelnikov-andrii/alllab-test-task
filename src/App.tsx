import React from 'react';
import { JobList } from './Components/JobList/JobList';
import {Routes, Route, Navigate} from 'react-router-dom';
import { JobDetailed } from './Components/JobDetailed/JobDetailed';

function App() {
  const [jobs, setJobs] = React.useState([]);
  const [savedJob, setSavedJob] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
      .then(response => {
        response.json()
          .then(res => {
            setJobs(res);
          })
      })
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/jobs" element={
          <JobList jobs={jobs} savedJob={savedJob} setSavedJob={setSavedJob}/>
        }>
        </Route>
        <Route path="/" element={
          <Navigate replace to="/jobs" />
        }>
        </Route>
        <Route path='/jobs/:id' element={
          <JobDetailed jobs={jobs} savedJob={savedJob} setSavedJob={setSavedJob}/>
        }>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
