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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/rol-dev" element={<DevsPage />} />
        <Route path="/blog/rol-qa" element={<QA />} />
        <Route path="/blog/proyecto-dev" element={<ProjectDev />} />
        <Route path="/blog/back-front" element={<BackFront />} />
        <Route path="/blog/dev-vs-qa" element={<DevVsQaPage />} />
        <Route path="/blog/api" element={<ApiPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
