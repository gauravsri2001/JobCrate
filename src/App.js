import './App.css';
import Header from './components/Header';
import JobCard from './components/JobCard';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import jobData from "./JobDummyData";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      {jobData.map((job)=>(
        <JobCard key={job.id} {...job}/>
      ))}
      
    </div>
  );
}

export default App;
