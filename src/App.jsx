import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import AuthPage from "./pages/auth";
import PageLayout from "./layouts/PageLayout";
function App() {

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/auth" element={<AuthPage/>}></Route>
      </Routes>
    </PageLayout>
  )
}

export default App
