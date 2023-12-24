import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import AuthPage from "./pages/auth";
import PageLayout from "./layouts/PageLayout";
import ProfilePage from "./pages/profile";
import useAuthStore from "./store/authStore";
function App() {
  const authUser = useAuthStore(state => state.user);
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/auth" />}></Route>
        <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to="/" />}></Route>
        <Route path="/u/:username" element={<ProfilePage />}></Route>
      </Routes>
    </PageLayout>
  )
}

export default App
