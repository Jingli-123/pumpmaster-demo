import { useLocation, useNavigate } from 'react-router-dom';

import Logo from '../ui/Logo';
import logo from '/src/assets/logo.png';
import Button from '../ui/Button';
import { logoutApi } from '../../api/auth';
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/dashboard';
  const handleLogout = () => {
    logoutApi();
    navigate('/');
  };
  return (
    <>
      <div className="flex items-center justify-start w-full border-b-2 border-gray-100 bg-white">
        <Logo
          navigation="/"
          logoImage={logo}
          logoSize={8}
          fontFamily="font-sans"
          fontWeight="font-bold"
          textColor="black"
          flexDirection={'row'}
        />
        {isAuthPage && (
          <>
            {' '}
            <div className="ml-4">
              <Button
                buttonClass="transparent hover:text-blue-600 text-black font-sans text-sm"
                text="Dashboard"
                onClick={() => {}}
              />
            </div>
            <div className="ml-4">
              <Button
                buttonClass="transparent hover:text-blue-600 text-black font-sans text-sm"
                text="Pumps"
                onClick={() => {}}
              />
            </div>
            <div className="ml-4">
              <Button
                buttonClass="transparent hover:text-blue-600 text-black font-sans text-sm"
                text="Reports"
                onClick={() => {}}
              />
            </div>
            <div className="ml-4">
              <Button
                buttonClass="transparent hover:text-blue-600 text-black font-sans text-sm"
                text="Alerts"
                onClick={() => {}}
              />
            </div>
            <div className="ml-4">
              <Button
                buttonClass="transparent hover:text-blue-600 text-black font-sans text-sm"
                text="Logout"
                onClick={handleLogout}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Header;
