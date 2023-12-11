import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.init'
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import './Navbar.css'
import takaLogo from '../../Assets/Images/takawala.png';
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Advisors', href: '/', current: false },
  { name: 'Banks', href: '#', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    // <Disclosure as="nav" className="border-b border-gray-300">
    //   {({ open }) => (
    //     <>
    //       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
    //         <div className="relative flex h-16 items-center justify-between">
    //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //             {/* Mobile menu button*/}
    //             <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //               <span className="absolute -inset-0.5" />
    //               <span className="sr-only">Open main menu</span>
    //               {open ? (
    //                 <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    //               ) : (
    //                 <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
    //               )}
    //             </Disclosure.Button>
    //           </div>
    //           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //             <div className="flex flex-shrink-0 items-center">
    //               <Link to="/">
    //                 <img
    //                   className="h-8 w-auto"
    //                   src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
    //                   alt="Taka Wala"
    //                 />
    //               </Link>

    //             </div>
    //             <div className="hidden sm:ml-6 sm:block">
    //               <div className="flex space-x-4">
    //                 {navigation.map((item) => (
    //                   <Link
    //                     key={item.name}
    //                     to={item.href}
    //                     className={classNames(
    //                       item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
    //                       'rounded-md px-3 py-2 text-sm font-medium'
    //                     )}
    //                     aria-current={item.current ? 'page' : undefined}
    //                   >
    //                     {item.name}
    //                   </Link>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //           {
    //             user ? <>
    //               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //                 <button
    //                   type="button"
    //                   className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    //                 >
    //                   <span className="absolute -inset-1.5" />
    //                   <span className="sr-only">View notifications</span>
    //                   <BellIcon className="h-6 w-6" aria-hidden="true" />
    //                 </button>

    //                 {/* Profile dropdown */}
    //                 <Menu as="div" className="relative ml-3">
    //                   <div>
    //                     <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
    //                       <span className="absolute -inset-1.5" />
    //                       <span className="sr-only">Open user menu</span>
    //                       <img
    //                         className="h-8 w-8 rounded-full"
    //                         src={user?.photoURL}
    //                         alt=""
    //                       />
    //                     </Menu.Button>
    //                   </div>
    //                   <Transition
    //                     as={Fragment}
    //                     enter="transition ease-out duration-100"
    //                     enterFrom="transform opacity-0 scale-95"
    //                     enterTo="transform opacity-100 scale-100"
    //                     leave="transition ease-in duration-75"
    //                     leaveFrom="transform opacity-100 scale-100"
    //                     leaveTo="transform opacity-0 scale-95"
    //                   >
    //                     <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    //                       <Menu.Item>
    //                         {({ active }) => (
    //                           <h2> {user?.displayName}</h2>
    //                         )}

    //                       </Menu.Item>
    //                       <Menu.Item>
    //                         {({ active }) => (
    //                           <Link
    //                             to="/profile"
    //                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                           >
    //                             Your Profile
    //                           </Link>
    //                         )}
    //                       </Menu.Item>
    //                       <Menu.Item>
    //                         {({ active }) => (
    //                           <Link
    //                             to="setting"
    //                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                           >
    //                             Settings
    //                           </Link>
    //                         )}
    //                       </Menu.Item>
    //                       <Menu.Item>
    //                         {({ active }) => (
    //                           <Link
    //                             onClick={handleSignOut}
    //                             to="#"
    //                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                           >
    //                             Sign out
    //                           </Link>
    //                         )}
    //                       </Menu.Item>
    //                     </Menu.Items>
    //                   </Transition>
    //                 </Menu>
    //               </div>
    //             </> : <>
    //               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //               <Link

    //                     to={"/login"}
    //                     className={classNames(
    //                        'bg-gray-900 text-white',
    //                       'rounded-md px-3 py-2 text-sm font-medium'
    //                     )}
    //                     aria-current={'true' ? 'page' : undefined}
    //                   >
    //                     Login
    //                   </Link>  
    //               </div>
    //             </>
    //           }

    //         </div>
    //       </div>

    //       <Disclosure.Panel className="sm:hidden">
    //         <div className="space-y-1 px-2 pb-3 pt-2">
    //           {navigation.map((item) => (
    //             <Disclosure.Button
    //               key={item.name}
    //               as="a"
    //               href={item.href}
    //               className={classNames(
    //                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
    //                 'block rounded-md px-3 py-2 text-base font-medium'
    //               )}
    //               aria-current={item.current ? 'page' : undefined}
    //             >
    //               {item.name}
    //             </Disclosure.Button>
    //           ))}
    //         </div>
    //       </Disclosure.Panel>
    //     </>
    //   )}
    // </Disclosure>


    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-100 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="">
          <img src={takaLogo} class="h-10" alt="Flowbite Logo" />
        </a>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0FA76C] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Applicant</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0FA76C] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Bank</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0FA76C] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0FA76C] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" class=" text-black font-medium text-sm px-4 py-2 text-center flex items-center justify-center">
              <div className='mr-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22.4503 17.3503C22.2056 17.0897 21.3417 16.3191 19.7536 15.2995C18.1537 14.2711 16.9739 13.6298 16.6354 13.4803C16.6056 13.4671 16.5727 13.4622 16.5404 13.4663C16.508 13.4703 16.4773 13.4831 16.4517 13.5033C15.9065 13.9284 14.9887 14.7094 14.9395 14.7516C14.6217 15.0239 14.6217 15.0239 14.3615 14.9391C13.904 14.7891 12.4828 14.0344 11.2443 12.7931C10.0059 11.5519 9.21231 10.0955 9.06231 9.63844C8.97653 9.37781 8.97653 9.37782 9.24981 9.06C9.292 9.01078 10.0734 8.09297 10.4986 7.54828C10.5187 7.52263 10.5315 7.49197 10.5356 7.4596C10.5396 7.42722 10.5348 7.39436 10.5215 7.36453C10.372 7.02563 9.73075 5.84625 8.70231 4.24641C7.68137 2.65875 6.91168 1.79485 6.65106 1.55016C6.62714 1.52759 6.59758 1.51189 6.56549 1.50471C6.5334 1.49754 6.49997 1.49915 6.46871 1.50938C5.55769 1.82245 4.67869 2.22192 3.84371 2.70235C3.03766 3.17092 2.27455 3.70973 1.56325 4.3125C1.53842 4.33361 1.5198 4.36108 1.5094 4.39197C1.49899 4.42285 1.49719 4.45598 1.50418 4.48781C1.60215 4.94438 2.07043 6.85032 3.52356 9.49032C5.00621 12.1847 6.03371 13.5652 8.21106 15.735C10.3884 17.9048 11.8125 18.9942 14.5097 20.4769C17.1497 21.93 19.0565 22.3988 19.5122 22.4958C19.5441 22.5027 19.5772 22.5009 19.6082 22.4905C19.6391 22.4801 19.6667 22.4615 19.6879 22.4367C20.2906 21.7254 20.8293 20.9623 21.2976 20.1563C21.778 19.3212 22.1774 18.4422 22.4906 17.5313C22.5006 17.5002 22.5022 17.4671 22.4951 17.4353C22.488 17.4035 22.4725 17.3741 22.4503 17.3503Z" fill="#0FA76C" />
                </svg>
              </div>
              <div>
                <p className='text-start text-[#0FA76C] text-xs'>Hotline</p>
                <h4 className='text-sm'>01423546021</h4>
              </div>
            </button>
          </div>
          <div class="flex items-center justify-center md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse border-x border-black-500 mx-6 px-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M2 11.9999C2 17.5229 6.477 21.9999 12 21.9999C17.523 21.9999 22 17.5229 22 11.9999C22 6.47694 17.523 1.99994 12 1.99994C6.477 1.99994 2 6.47694 2 11.9999Z" stroke="#474747" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.0009 2.04993C13.0009 2.04993 16.0009 5.99993 16.0009 11.9999C16.0009 17.9999 13.0009 21.9499 13.0009 21.9499M11.0009 21.9499C11.0009 21.9499 8.00086 17.9999 8.00086 11.9999C8.00086 5.99993 11.0009 2.04993 11.0009 2.04993M2.63086 15.4999H21.3709M2.63086 8.49993H21.3709" stroke="#474747" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <button type="button" class=" text-black font-medium text-sm px-2 py-2 text-center">En</button>
          </div>

          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" class="login-btn text-white font-medium text-sm px-4 py-2 text-center">Login</button>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
        </div>


      </div>
    </nav>

  )
}
