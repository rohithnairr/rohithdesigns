"use client"
export default function Footer() {
    return (
        <>
            <footer className="bg-grey-900 rounded-lg shadow dark:bg-gray-900 mt-40">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                            <svg width="67" height="33" viewBox="0 0 67 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.02344 6.35742V18.6895H13.1895C14.0345 18.6895 14.8294 18.5319 15.5742 18.2168C16.319 17.8874 16.9707 17.4434 17.5293 16.8848C18.0879 16.3262 18.5247 15.6745 18.8398 14.9297C19.1693 14.1706 19.334 13.3685 19.334 12.5234C19.334 11.6784 19.1693 10.8835 18.8398 10.1387C18.5247 9.37956 18.0879 8.7207 17.5293 8.16211C16.9707 7.60352 16.319 7.16667 15.5742 6.85156C14.8294 6.52214 14.0345 6.35742 13.1895 6.35742H7.02344ZM7.02344 31H0.857422V0.191406H13.1895C14.321 0.191406 15.4095 0.341797 16.4551 0.642578C17.5007 0.929036 18.4746 1.3444 19.377 1.88867C20.2936 2.41862 21.1243 3.06315 21.8691 3.82227C22.6283 4.56706 23.2728 5.39779 23.8027 6.31445C24.347 7.23112 24.7624 8.21224 25.0488 9.25781C25.3496 10.3034 25.5 11.3919 25.5 12.5234C25.5 13.5833 25.3639 14.6146 25.0918 15.6172C24.834 16.6198 24.4544 17.5723 23.9531 18.4746C23.4661 19.377 22.8646 20.2077 22.1484 20.9668C21.4323 21.7259 20.6302 22.3848 19.7422 22.9434L23.1582 31H16.6055L13.9199 24.791L7.02344 24.834V31ZM54.2031 31H47.6074L35.7266 10.7188V31H29.5605V0.191406H36.1562L48.0371 20.4941V0.191406H54.2031V31ZM66.5352 28.8086C66.5352 29.3242 66.4421 29.8112 66.2559 30.2695C66.0697 30.7135 65.8118 31.1003 65.4824 31.4297C65.153 31.7591 64.7663 32.0169 64.3223 32.2031C63.8783 32.4036 63.3984 32.5039 62.8828 32.5039C62.3815 32.5039 61.9017 32.4036 61.4434 32.2031C60.9993 32.0169 60.6055 31.7591 60.2617 31.4297C59.9323 31.1003 59.6673 30.7135 59.4668 30.2695C59.2806 29.8112 59.1875 29.3242 59.1875 28.8086C59.1875 28.3073 59.2806 27.8346 59.4668 27.3906C59.6673 26.9466 59.9323 26.5599 60.2617 26.2305C60.6055 25.901 60.9993 25.6432 61.4434 25.457C61.9017 25.2565 62.3815 25.1562 62.8828 25.1562C63.3984 25.1562 63.8783 25.2565 64.3223 25.457C64.7663 25.6432 65.153 25.901 65.4824 26.2305C65.8118 26.5599 66.0697 26.9466 66.2559 27.3906C66.4421 27.8346 66.5352 28.3073 66.5352 28.8086Z" fill="white" />
                            </svg>

                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="https://drive.google.com/file/d/18nRO-PdHtWKZ9XHItEWcpN32-L5mGZOK/view?usp=drive_link" className="mr-4 hover:underline md:mr-6 ">Resume</a>
                            </li>
                            <li>
                                <a href="mailto:rohithnairreghu@gmail.com" className="mr-4 hover:underline md:mr-6">Contact Me</a>
                            </li>
                            <li>
                                <a href="https://github.com/rohithnairr" className="mr-4 hover:underline md:mr-6 ">Github</a>
                            </li>
                            <li>
                                <a href="https://medium.com/@rohithnairreghu" className="hover:underline">Medium</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Developed with Next.Js and Sanity.io</span>
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 RohithNair All Rights Reserved.</span>
                </div>
            </footer>


        </>

    )
}

