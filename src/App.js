import logo from "./logo.svg";
import "./App.css";
import { LandingView } from "./Views/LandingView";
import { ContactView } from "./Views/ContactView";
import { ExperienceView } from "./Views/ExperienceView";
import { ProjectsView } from "./Views/ProjectsView";
import { SkillsView } from "./Views/SkillsView";
import { NavigationBar } from "./Components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/">
          <Route index element={<LandingView />} />
          <Route path="experience" element={<ExperienceView />} />
          <Route path="skills" element={<SkillsView />} />
          <Route path="projects" element={<ProjectsView />} />
          <Route path="contact" element={<ContactView />} />
          <Route path="*" element={<LandingView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
