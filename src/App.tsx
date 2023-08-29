import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Search from './pages/Search'
import Album from './pages/Album'
import Profile from './pages/Profile'
import ProfileEdit from './pages/ProfileEdit'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<Search />} />
      <Route path="/album/:id" element={<Album />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<ProfileEdit />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App
