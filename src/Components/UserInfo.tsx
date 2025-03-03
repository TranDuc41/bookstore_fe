import { Link } from "react-router-dom"
import { Button } from "./ui/button"

interface UserInfoProps {
    isLogin: boolean,
    username?: string
}

const UserInfo: React.FC<UserInfoProps> = ({ isLogin, username }) => {
  return (
    <>
      {isLogin ? (
        <div>{username}</div>
      ) : (
        <div>
          <Link to={'/login'}><Button className="hover:cursor-pointer">Đăng nhập</Button></Link>
        </div>
      )}
    </>
  )
}

export default UserInfo
