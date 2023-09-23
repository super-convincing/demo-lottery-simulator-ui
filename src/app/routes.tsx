import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { Layout } from './layout';
import { PagePlay } from '../pages/PagePlay';

export const AppRoutes = () => {
  return <>
    <Routes>
      {/* <Route path="verify/:code" element={<PageVerify />} /> */}
      <Route path="/" element={<Layout children={<Outlet />} />}>
        <Route path="play" element={<PagePlay />} />
        <Route path="" element={<Navigate to="play" />} />
        <Route path="*" element={<Navigate to="play" />} />
      </Route>
    </Routes >
  </>

}