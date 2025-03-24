import React from 'react';
import { Link } from 'react-router-dom';
import SidebarItem from './SidebarItem';

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => setIsOpen(!isOpen);

  const navigationItems = [
    {
      title: 'Home',
      icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> <path d="M7.5 18.3333V10H12.5V18.3333M2.5 7.5L10 1.66667L17.5 7.5V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.5Z" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
    },
    {
      title: 'Notes',
      icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> <g clip-path="url(#clip0_2305_372)"> <path d="M9.16666 3.33333H3.33332C2.8913 3.33333 2.46737 3.50893 2.15481 3.82149C1.84225 4.13405 1.66666 4.55797 1.66666 5V16.6667C1.66666 17.1087 1.84225 17.5326 2.15481 17.8452C2.46737 18.1577 2.8913 18.3333 3.33332 18.3333H15C15.442 18.3333 15.8659 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667V10.8333M15.4167 2.08333C15.7482 1.75181 16.1978 1.56557 16.6667 1.56557C17.1355 1.56557 17.5851 1.75181 17.9167 2.08333C18.2482 2.41485 18.4344 2.86449 18.4344 3.33333C18.4344 3.80217 18.2482 4.25181 17.9167 4.58333L9.99999 12.5L6.66666 13.3333L7.49999 10L15.4167 2.08333Z" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_2305_372"> <rect width="20" height="20" fill="white"></rect> </clipPath> </defs> </svg>`,
    },
    {
      title: 'All Groups',
      icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
       xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> 
       <path d="M17.5 12.5C17.5 12.942 17.3244 13.366 17.0118 13.6785C16.6993
        13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 
        3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5
         4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244
          3.30072 17.5 3.72464 17.5 4.16667V12.5Z" stroke="#F5F5F5" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
    },
    {
      title: 'Profile',
      icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> <g clip-path="url(#clip0_2305_593)"> <path d="M6.66666 11.6667C6.66666 11.6667 7.91666 13.3333 9.99999 13.3333C12.0833 13.3333 13.3333 11.6667 13.3333 11.6667M7.49999 7.49999H7.50832M12.5 7.49999H12.5083M18.3333 9.99999C18.3333 14.6024 14.6024 18.3333 9.99999 18.3333C5.39762 18.3333 1.66666 14.6024 1.66666 9.99999C1.66666 5.39762 5.39762 1.66666 9.99999 1.66666C14.6024 1.66666 18.3333 5.39762 18.3333 9.99999Z" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_2305_593"> <rect width="20" height="20" fill="white"></rect> </clipPath> </defs> </svg>`,
    },
    {
      title: 'Make a Post',
      icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> <path d="M3.33334 9.99999V16.6667C3.33334 17.1087 3.50894 17.5326 3.8215 17.8452C4.13406 18.1577 4.55798 18.3333 5.00001 18.3333H15C15.442 18.3333 15.866 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667V9.99999M13.3333 4.99999L10 1.66666M10 1.66666L6.66668 4.99999M10 1.66666L10 12.5" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
    },
    {
      title: 'Settings',
      icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> <g clip-path="url(#clip0_2305_684)"> <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.6193 11.3807 7.50001 10 7.50001C8.6193 7.50001 7.50001 8.6193 7.50001 10C7.50001 11.3807 8.6193 12.5 10 12.5Z" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.1667 12.5C16.0557 12.7514 16.0227 13.0302 16.0717 13.3005C16.1207 13.5708 16.2496 13.8203 16.4417 14.0167L16.4917 14.0667C16.6466 14.2215 16.7696 14.4053 16.8534 14.6076C16.9373 14.8099 16.9805 15.0268 16.9805 15.2458C16.9805 15.4649 16.9373 15.6817 16.8534 15.8841C16.7696 16.0864 16.6466 16.2702 16.4917 16.425C16.3369 16.58 16.1531 16.7029 15.9507 16.7868C15.7484 16.8706 15.5315 16.9138 15.3125 16.9138C15.0935 16.9138 14.8766 16.8706 14.6743 16.7868C14.4719 16.7029 14.2881 16.58 14.1333 16.425L14.0833 16.375C13.8869 16.1829 13.6375 16.054 13.3672 16.005C13.0968 15.956 12.818 15.9891 12.5667 16.1C12.3202 16.2056 12.11 16.381 11.9619 16.6046C11.8139 16.8282 11.7344 17.0902 11.7333 17.3583V17.5C11.7333 17.942 11.5577 18.366 11.2452 18.6785C10.9326 18.9911 10.5087 19.1667 10.0667 19.1667C9.62465 19.1667 9.20073 18.9911 8.88817 18.6785C8.5756 18.366 8.40001 17.942 8.40001 17.5V17.425C8.39356 17.1492 8.30427 16.8817 8.14377 16.6573C7.98326 16.4328 7.75896 16.2619 7.50001 16.1667C7.24866 16.0557 6.96985 16.0227 6.69952 16.0717C6.42919 16.1207 6.17974 16.2496 5.98334 16.4417L5.93334 16.4917C5.77855 16.6466 5.59474 16.7696 5.39241 16.8534C5.19008 16.9373 4.9732 16.9805 4.75418 16.9805C4.53515 16.9805 4.31827 16.9373 4.11594 16.8534C3.91361 16.7696 3.7298 16.6466 3.57501 16.4917C3.42005 16.3369 3.29712 16.1531 3.21324 15.9507C3.12937 15.7484 3.0862 15.5315 3.0862 15.3125C3.0862 15.0935 3.12937 14.8766 3.21324 14.6743C3.29712 14.4719 3.42005 14.2881 3.57501 14.1333L3.62501 14.0833C3.81712 13.8869 3.946 13.6375 3.99501 13.3672C4.04403 13.0968 4.01094 12.818 3.90001 12.5667C3.79437 12.3202 3.61897 12.11 3.3954 11.9619C3.17182 11.8139 2.90983 11.7344 2.64168 11.7333H2.50001C2.05798 11.7333 1.63406 11.5577 1.3215 11.2452C1.00894 10.9326 0.833344 10.5087 0.833344 10.0667C0.833344 9.62465 1.00894 9.20073 1.3215 8.88817C1.63406 8.5756 2.05798 8.40001 2.50001 8.40001H2.57501C2.85084 8.39356 3.11835 8.30427 3.34276 8.14377C3.56717 7.98326 3.73811 7.75896 3.83334 7.50001C3.94427 7.24866 3.97736 6.96985 3.92835 6.69952C3.87933 6.42919 3.75046 6.17974 3.55834 5.98334L3.50834 5.93334C3.35338 5.77855 3.23045 5.59474 3.14658 5.39241C3.0627 5.19008 3.01953 4.9732 3.01953 4.75418C3.01953 4.53515 3.0627 4.31827 3.14658 4.11594C3.23045 3.91361 3.35338 3.7298 3.50834 3.57501C3.66313 3.42005 3.84695 3.29712 4.04928 3.21324C4.25161 3.12937 4.46848 3.0862 4.68751 3.0862C4.90654 3.0862 5.12341 3.12937 5.32574 3.21324C5.52807 3.29712 5.71189 3.42005 5.86668 3.57501L5.91668 3.62501C6.11308 3.81712 6.36252 3.946 6.63285 3.99501C6.90318 4.04403 7.182 4.01094 7.43334 3.90001H7.50001C7.74648 3.79437 7.95669 3.61897 8.10475 3.3954C8.25282 3.17182 8.33227 2.90983 8.33334 2.64168V2.50001C8.33334 2.05798 8.50894 1.63406 8.8215 1.3215C9.13406 1.00894 9.55798 0.833344 10 0.833344C10.442 0.833344 10.866 1.00894 11.1785 1.3215C11.4911 1.63406 11.6667 2.05798 11.6667 2.50001V2.57501C11.6677 2.84317 11.7472 3.10516 11.8953 3.32873C12.0433 3.55231 12.2535 3.72771 12.5 3.83334C12.7514 3.94427 13.0302 3.97736 13.3005 3.92835C13.5708 3.87933 13.8203 3.75046 14.0167 3.55834L14.0667 3.50834C14.2215 3.35338 14.4053 3.23045 14.6076 3.14658C14.8099 3.0627 15.0268 3.01953 15.2458 3.01953C15.4649 3.01953 15.6817 3.0627 15.8841 3.14658C16.0864 3.23045 16.2702 3.35338 16.425 3.50834C16.58 3.66313 16.7029 3.84695 16.7868 4.04928C16.8706 4.25161 16.9138 4.46848 16.9138 4.68751C16.9138 4.90654 16.8706 5.12341 16.7868 5.32574C16.7029 5.52807 16.58 5.71189 16.425 5.86668L16.375 5.91668C16.1829 6.11308 16.054 6.36252 16.005 6.63285C15.956 6.90318 15.9891 7.182 16.1 7.43334V7.50001C16.2056 7.74648 16.381 7.95669 16.6046 8.10475C16.8282 8.25282 17.0902 8.33227 17.3583 8.33334H17.5C17.942 8.33334 18.366 8.50894 18.6785 8.8215C18.9911 9.13406 19.1667 9.55798 19.1667 10C19.1667 10.442 18.9911 10.866 18.6785 11.1785C18.366 11.4911 17.942 11.6667 17.5 11.6667H17.425C17.1569 11.6677 16.8949 11.7472 16.6713 11.8953C16.4477 12.0433 16.2723 12.2535 16.1667 12.5Z" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_2305_684"> <rect width="20" height="20" fill="white"></rect> </clipPath> </defs> </svg>`,
    },
  ];

  // Prevent clicks inside the sidebar from propagating to the overlay
  // const handleSidebarClick = (e: React.MouseEvent<HTMLDivElement>) => {
  //   e.stopPropagation();
  // };

  return (
    <>
    <div
      className={`
        h-screen bg-blue-500 transition-all duration-300 overflow-hidden 
        ${isOpen ? 'w-64' : 'w-4'}
      `}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="w-11 h-11 flex justify-center items-center rounded-md border border-cyan-700 bg-cyan-700 m-2"
        aria-label="Toggle menu"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <path
            d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5"
            stroke="#EDEDED"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
        {isOpen && (
          <div className="mt-4">
            {/* Sidebar menu - occupies ~1/6 of the viewport width */}
            <div
              className="bg-white shadow-md p-4"
              style={{ width: '16.67%' }}
              onClick={handleSidebarClick}
            >
              {/* Sidebar items that eventually need to pop out from the side. */}
              <SidebarItem
                title="Menu"
                icon={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> <path d="M7.5 18.3333V10H12.5V18.3333M2.5 7.5L10 1.66667L17.5 7.5V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.5Z" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`}
              />

              <SidebarItem
                title="Notes"
                icon={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> <g clip-path="url(#clip0_2305_372)"> <path d="M9.16666 3.33333H3.33332C2.8913 3.33333 2.46737 3.50893 2.15481 3.82149C1.84225 4.13405 1.66666 4.55797 1.66666 5V16.6667C1.66666 17.1087 1.84225 17.5326 2.15481 17.8452C2.46737 18.1577 2.8913 18.3333 3.33332 18.3333H15C15.442 18.3333 15.8659 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667V10.8333M15.4167 2.08333C15.7482 1.75181 16.1978 1.56557 16.6667 1.56557C17.1355 1.56557 17.5851 1.75181 17.9167 2.08333C18.2482 2.41485 18.4344 2.86449 18.4344 3.33333C18.4344 3.80217 18.2482 4.25181 17.9167 4.58333L9.99999 12.5L6.66666 13.3333L7.49999 10L15.4167 2.08333Z" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_2305_372"> <rect width="20" height="20" fill="white"></rect> </clipPath> </defs> </svg>`}
              />

              <SidebarItem
                title="All Groups"
                icon={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> <path d="M17.5 12.5C17.5 12.942 17.3244 13.366 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`}
              />

              <SidebarItem
                title="Profile"
                icon={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> <g clip-path="url(#clip0_2305_593)"> <path d="M6.66666 11.6667C6.66666 11.6667 7.91666 13.3333 9.99999 13.3333C12.0833 13.3333 13.3333 11.6667 13.3333 11.6667M7.49999 7.49999H7.50832M12.5 7.49999H12.5083M18.3333 9.99999C18.3333 14.6024 14.6024 18.3333 9.99999 18.3333C5.39762 18.3333 1.66666 14.6024 1.66666 9.99999C1.66666 5.39762 5.39762 1.66666 9.99999 1.66666C14.6024 1.66666 18.3333 5.39762 18.3333 9.99999Z" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_2305_593"> <rect width="20" height="20" fill="white"></rect> </clipPath> </defs> </svg>`}
              />

              <SidebarItem
                title="Make a Post"
                icon={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> <path d="M3.33334 9.99999V16.6667C3.33334 17.1087 3.50894 17.5326 3.8215 17.8452C4.13406 18.1577 4.55798 18.3333 5.00001 18.3333H15C15.442 18.3333 15.866 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667V9.99999M13.3333 4.99999L10 1.66666M10 1.66666L6.66668 4.99999M10 1.66666L10 12.5" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`}
              />

              <SidebarItem
                title="Recent Chat"
                icon={`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 2H4C2.9 2 2 2.9 2 4V18C2 19.1 2.9 20 4 20H6V24L12 20H20C21.1 20 22 19.1 22 18V4C22 2.9 21.1 2 20 2Z" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>`}
              />
              {/* Add more links as needed */}
            </div>

            {/* Darkened overlay for the remainder of the screen */}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
