import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import AuthPage from "./pages/auth";
import PageLayout from "./layouts/PageLayout";
import ProfilePage from "./pages/profile";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase"
function App() {
  const [authUser, ,] = useAuthState(auth);
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
