import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ImageProvider } from './context/ImageContext';
import AppLayout from './components/AppLayout';
import Images from './pages/Images';
import Dashboard from './pages/Dashboard';
import Videos from './pages/Videos';
import Documents from './pages/Documents';
import AllFiles from './pages/AllFiles';
import Trash from './pages/Trash';

function App() {
  return (
    <ImageProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="/images" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="images" element={<Images />} />
            <Route path="videos" element={<Videos />} />
            <Route path="documents" element={<Documents />} />
            <Route path="all-files" element={<AllFiles />} />
            <Route path="trash" element={<Trash />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ImageProvider>
  );
}

export default App;