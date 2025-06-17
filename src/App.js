import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import DevsPage from './pages/dev/devs_page';
import QA from './pages/qa/qa';
import ProjectDev from './pages/dev/project_dev';
import BackFront from './pages/dev/backfrond';
import ApiPage from './pages/dev/api_page';
import DevVsQaPage from './pages/articles/devvsqa_page';
import TaskQA from './pages/qa/task_qa';
import MainTools from './pages/qa/main_tools';
import BeginQA from './pages/qa/begin_qa';
import QAModern from './pages/articles/qa_modern';
import './App.css';
import Navbar from './pages/components/navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/rol-dev" element={<DevsPage />} />
        <Route path="/blog/rol-qa" element={<QA />} />
        <Route path="/blog/proyecto-dev" element={<ProjectDev />} />
        <Route path="/blog/back-front" element={<BackFront />} />
        <Route path="/blog/dev-vs-qa" element={<DevVsQaPage />} />
        <Route path="/blog/que-hace-un-qa" element={<TaskQA />} />
        <Route path="/blog/herramientas-testing" element={<MainTools />} />
        <Route path="/blog/empezar-qa" element={<BeginQA />} />
        <Route path="/blog/herramientas-qa" element={<QAModern />} />
        <Route path="/blog/api" element={<ApiPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
