import { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 50) {
      setHidden(true);
    } else {
      setHidden(false)
    }
  })

  let { pathname } = useLocation()
  let subpage = pathname.split('/')?.[1]
  // console.log(subpage)

  function Linkness(type = null) {
    if (subpage === '') {
      subpage = 'home'
    }
    let classes = 'text-sm font-medium  hover:text-orange-600 '

    if (type === subpage) {
      classes += 'text-orange-600 rounded-3xl p-2'
    }
    else {
      classes += ' '
    }

    // console.log(classes)
    return classes
  }



  return (
    <motion.div className="sticky top-0 z-10"
      variants={{
        visible: { background: 'transparent',color:'black' },
        hidden: { background: 'white',boxShadow:'0px 0.01px 5px rgba(24, 22, 22, 0.155)',color:'black' },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.1,}}
    >
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-12">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 "
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flex flex-col w-full justify-center items-center space-y-8 my-5">
                    <Link to={'/'} className={Linkness('home')}>
                      HOME
                    </Link>
                    <Link to={'/about'} className={Linkness('about')}>
                      ABOUT US
                    </Link>
                    <Link to={'/services'} className={Linkness('services')}>
                      SERVICES
                    </Link>

                    <Link to={'/product'} className={Linkness('product')}>
                      OUR PRODUCT
                    </Link>

                    <Link to={'/project'} className={Linkness('project')}>
                      OUR PROJECT
                    </Link>

                    <Link to={'/contact'} className={Linkness('contact')}>
                      CONTACT US
                    </Link>
                  </div>
                  <div className="flex gap-5 items-center  justify-center pt-10">
                    <a href="https://www.instagram.com/" target='_blank' className='xl:w-12 hover:text-orange-600'><BsInstagram size={25} /></a>
                    <a href="https://www.facebook.com/" target='_blank' className='xl:w-12 hover:text-orange-600'><BsFacebook size={25} /></a>
                    <a href="https://in.linkedin.com/" target='_blank' className='xl:w-12 hover:text-orange-600'><BsLinkedin size={25} /></a>
                    <a href='https://wa.me/9153338951' target='_blank' className='xl:w-12 hover:text-orange-600'><BsWhatsapp size={25} /></a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <motion.header className="relative bg-transparent h-16 z-50" 

      >
        {/* <p className="flex h-5 items-center justify-center bg-pink-600 px-4 text-sm font-medium  sm:px-6 lg:px-8" style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
          Get free delivery on orders over ₹300
        </p> */}

        <nav aria-label="Top" className="h-full px-4 sm:px-6 lg:px-8  ">
          <div className="">
            <div className="flex h-16 items-center justify-between">
              <button
                type="button"
                className="rounded-md bg-transparent p-2  lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>



              {/* Logo */}
              <div className="flex justify-between items-center w-full">
                <motion.div className="ml-4 flex lg:ml-0"
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Link to={'/'} className='flex'>
                    <div className="flex ">
                      <h1 className=' text-3xl font-bold   px-2 py-1 rounded'>Siddhant <span className='text-orange-600'>Decor</span></h1>
                    </div>
                  </Link>
                </motion.div>

                {/* <div className="ml-auto flex items-center"> */}
                <motion.div className="hidden lg:flex lg:flex-1 lg:items-center justify-center xl:space-x-8 lg:space-x-6"
                // initial={{ opacity: 0, x: 500 }}
                // animate={{ opacity: 1, x: 0 }}
                // transition={{ duration: 0.5, delay: 0.8 }}
                >

                  <Link to={'/'} className={Linkness('home')}>
                    HOME
                  </Link>
                  <Link to={'/about'} className={Linkness('about')}>
                    ABOUT US
                  </Link>
                  <Link to={'/services'} className={Linkness('services')}>
                    SERVICES
                  </Link>
                  <Link to={'/product'} className={Linkness('product')}>
                    OUR PRODUCT
                  </Link>
                  <Link to={'/project'} className={Linkness('project')}>
                    OUR PROJECT
                  </Link>
                  <Link to={'/contact'} className={Linkness('contact')}>
                    CONTACT US
                  </Link>

                </motion.div>
              </div>

              <div className="flex lg:ml-6 items-center ">
                <a href="" target='_blank' className='hidden lg:inline xl:w-12 lg:w-10 hover:text-orange-600'><BsInstagram size={23} /></a>
                <a href="" target='_blank' className='hidden lg:inline xl:w-12 lg:w-10 hover:text-orange-600'><BsFacebook size={23} /></a>
                <a href="" target='_blank' className='hidden lg:inline xl:w-12 lg:w-10 hover:text-orange-600'><BsLinkedin size={23} /></a>
                <a href='https://wa.me/9153338951' target='_blank' className='hidden lg:inline xl:w-12 lg:w-10 hover:text-orange-600'><BsWhatsapp size={23} /></a>
              </div>
            </div>
          </div>
        </nav>
      </motion.header>
    </motion.div >
  )
}