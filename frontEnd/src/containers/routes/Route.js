import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import Group from '../../pages/Group'
import Products from '../../pages/Products'
import DetailsProduct from '../../pages/DetailsProduct'
import Login from '../../pages/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Group />
      },
      {
        path: '/danh-sach-nhom',
        element: <Group />
      },
      {
        path: '/danh-sach-san-pham',
        element: <Products />
      },
      {
        path: '/get-details-products/:id',
        element: <DetailsProduct />
      },
      {
        path: '/dang-nhap',
        element: <Login />
      }
    ]
  },
  {
    path: '*',
    element: <div>Không tìm thấy web theo yêu cầu</div>
  }
])
