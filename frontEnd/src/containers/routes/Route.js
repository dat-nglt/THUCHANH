import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import Group from '../../components/Group'
import Products from '../../components/Products'
import DetailsProduct from '../../components/DetailsProduct'

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
      }
    ]
  },
  {
    path: '*',
    element: <div>Không tìm thấy web theo yêu cầu</div>
  }
])
