import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import AuthPage from "./pages/auth";
import PageLayout from "./layouts/PageLayout";
import ProfilePage from "./pages/profile";
function App() {

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/auth" element={<AuthPage/>}></Route>
        <Route path="/u/:username" element={<ProfilePage/>}></Route>

      </Routes>
    </PageLayout>
  )
}

export default App
