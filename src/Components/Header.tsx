import { Link, useLocation } from "react-router-dom"
import UserInfo from "./UserInfo"
import { Input } from "./ui/input"
import { ModeToggle } from "./mode-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/Components/ui/navigation-menu"
import Cart from "./Cart"


const menus = [
  {
    link: '/about',
    title: "Về chúng tôi"
  },
  {
    link: '/contact',
    title: "Liên hệ"
  }
]

const categories = [
  {
    name: 'Truyện Thiếu Nhi',
    slug: 'danh-muc',
    uid: '1'
  },
  {
    name: 'Kiến Thức - Kỹ Năng Sống Cho Trẻ',
    slug: 'danh-muc',
    uid: '2'
  },
  {
    name: 'Tô màu, luyện chữ',
    slug: 'danh-muc',
    uid: '3'
  },
]

const Header = () => {
  const location = useLocation()
  const isLogin = false
  const username = 'User Name'

  return (
    <header className="header flex justify-between items-center w-full py-6 border-b">
      <div>
        <Link to={'/'}>
          <h1 className="text-2xl font-bold text-red-600 dark:text-white">Book Store</h1>
        </Link>
      </div>
      <div className="flex gap-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Danh mục</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {categories.map((category) => (
                    <Link to={`/category/${category.slug}`} key={category.uid}
                      className="hover:bg-accent py-2 rounded-md">{category.name}</Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {menus.map((menu) => (
          <Link to={menu.link} key={menu.link}
            className={`hover:text-red-500 py-2 text-sm font-medium ${location.pathname === menu.link ? 'text-red-500 font-bold' : ''}`}>
            {menu.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <div>
          <Input type="text" placeholder="Nhập tên sách..." />
        </div>
        <UserInfo isLogin={isLogin} username={username} />
        <Cart />
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
