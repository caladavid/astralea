import * as React from "react"
const LogoSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    viewBox="0 0 300 300"
    {...props}
  >
    <path d="M135 18c-31.7 3.3-59.7 16.7-82.5 39.5C34.1 75.9 22 98.1 16.4 124c-2.6 12-2.6 40 0 52 11.6 53.5 52.4 93.4 106.3 104 13.8 2.8 35.5 3 49.3.6 54.2-9.6 96.6-50.2 108.6-104.1 2.4-10.8 2.9-35 1-46.7-8.1-49.2-42.5-89.4-89.9-105.3-17.5-5.8-38.9-8.3-56.7-6.5zm40.5 10.5c24.3 5.4 46.3 17.3 63.3 34.4 23.6 23.6 36.2 54 36.2 87.1 0 32.1-12.2 62.5-34.2 85.1-7.1 7.4-17.2 15.9-18.8 15.9-.4 0-1.5-2.8-2.4-6.3-1-3.4-4.5-14.4-7.8-24.4l-6-18.1 7.1-8.3c3.9-4.5 7.1-8.6 7.1-9.1 0-5.1-10-15.6-18.8-19.6-4.8-2.2-7.1-2.6-13.9-2.5-5.1.1-8.3-.3-8.3-.9 0-.6-1.5-2.5-3.3-4.2l-3.3-3.1h5.3c4.5 0 5.7-.4 8-2.9 2.6-2.7 2.6-2.8.3-1.2-1.3.9-4 1.6-6 1.5-3.2 0-3.3-.1-1.1-1 1.3-.5 3.6-1.8 5.1-2.9 1.5-1.1 4-2 5.5-2 3.3 0 8.1 2.4 8.9 4.5.3.8 1.1 1.4 1.8 1.3.8-.2 1.5 1.3 1.9 4.2l.6 4.5.1-4.5c.2-5.5-2.2-9.9-7.2-13-4-2.4-4-2.7-.5-10.9 2.4-5.4 2.5-14.6.3-20.1-2.2-5.4-.7-7.3 2.9-3.8 5.7 5.8 8.7 22.3 5 27.8l-1.6 2.5 2.6-2.4c5.7-5.2 5.4-19.2-.7-29.1-2-3.2-3.6-6-3.6-6.3 0-.2 1.4-.7 3.2-1.1 1.7-.3 4-1.4 5-2.3 1.8-1.6 2.4-5.8 1-8-1-1.5-5.7-3.3-8.9-3.3-2.3 0-2.4-.2-1.7-2.8.5-1.5.9-7 .9-12.2 0-8.6-.3-10-3-14.8-1.6-3-4.3-6.3-5.9-7.5-1.7-1.1-3.3-2.4-3.6-2.8-1.1-1.3-5-2.9-7.4-2.9-1.4 0-4.6-1.1-7.2-2.5-8.4-4.5-14.7-3.2-24.6 4.9-4.7 3.8-5.8 5.3-5.8 7.7 0 1.6-.7 4-1.6 5.3-1.3 2.1-1.9 2.3-4.7 1.5-12.6-3.6-31.8 4.7-38.5 16.7-.9 1.5-1.2 1.6-2.6.5-1.3-1.1-2.4-1.2-5.4-.3-2 .7-4.8 1.3-6.2 1.4-1.9.2-2.6 1.1-3.2 4.3-.8 3.7-.1 9.5 1.7 13.8.7 1.6.3 1.8-2.6 1.5-2.6-.2-3.5-.8-3.7-2.6-.2-1.2-.8-2-1.3-1.7-1.4 1-1.1 5.7.6 7.5 1.4 1.6 1.4 2.1-.4 5.1-2.8 4.9-6.1 17.5-6.1 23.7 0 7.9 4.1 14.9 9.8 16.6 3 1 2.8-.2-.3-1.4-3.7-1.4-5.9-7.2-5-13.4.8-6 3.9-13.8 6.6-16.2 1.8-1.6 1.8-1.5.9 1.7-1.3 4.6-1.2 11 .3 13.5.7 1.1 3.3 3.9 5.9 6.2 5.6 5.2 8.2 10.3 7.4 14.6-.4 2.2-.3 2.7.4 1.6 1.4-2.2 1.2-8.2-.5-13-.8-2.3-1.5-4.4-1.5-4.5 0-.2 1.7 1.3 3.7 3.1 2 1.9 4.1 3.4 4.5 3.4 1.6 0 .7 4.8-1.7 9.3l-2.4 4.7 3.9 2c2.5 1.3 4 2.8 4.2 4.2.2 1.5 1.1 2.4 2.6 2.6 1.3.2 2.7 1.4 3.2 2.7.5 1.3 1.8 2.6 3 3 1.1.4 3.2 2.4 4.6 4.6 3.1 5 6.7 5.2 13.4.9 2.9-1.9 5.4-2.8 6.4-2.4 1.6.6 5.6 7.3 5.6 9.3 0 .6-3.6 3.6-7.9 6.6-4.4 3.1-10.3 8.1-13.2 11.3-4.7 5.1-34 43.6-38.4 50.4-.9 1.6-2.2 2.8-2.7 2.8-2 0-14.4-10-22-17.7C48.6 226.1 42 216.8 36 204.5 26.5 185 23.5 172.1 23.5 150c0-22.5 3.7-37.9 13.5-56.7 13.3-25.6 36.4-46.6 63.1-57.7 9.2-3.8 20.8-7 30.4-8.6 8.5-1.3 36.6-.4 45 1.5zm-4.4 13.1c1.7.8 2.9 1.8 2.6 2.1-.3.2-1.5-.1-2.7-.7-3.5-1.9-8.5-.4-11.9 3.6-1.7 1.9-3.1 4.2-3.1 5.2 0 .9-.5 2.4-1.1 3.2-1.2 1.8-.1-5.4 1.3-8.5.8-1.8.7-1.8-1 .2-1.1 1.2-2.2 2-2.5 1.7-.3-.3-1 1.4-1.5 3.8-.9 4.1-1 4.1-1.1 1-.2-5.2 2.4-10.1 6.1-11.7 4.4-1.9 11.2-1.9 14.9.1zm17.4 7.9c6 5.2 9.5 11.9 9.8 19.3.4 9.2-4 14.3-12.7 14.9l-5.1.3 4.9-1.4c2.7-.7 6.2-2.7 7.9-4.4 2.8-2.8 3-3.6 2.9-9.6-.1-4.8-.8-7.8-2.7-11.5-1.4-2.8-2.8-5.1-3-5.1-.3 0 .1 1.3 1 3 4.4 8.6-.6 19.4-10 21.5-2.5.6-2.2.3 1.4-1.6 5.5-2.9 8-6.2 8.7-11.4.4-2.9.3-3.6-.5-2.5-.9 1.3-1 1.3-1.5 0-2.2-6.9-2.4-7.4-2.6-5.5-.1 1.9-.2 1.8-1-.3-1.5-3.7-7.3-2.8-12.9 2.2-2.5 2.2-2.2 1.1 1.1-3.6 1.8-2.6 1.8-2.7.1-2.1-1.6.6-1.6.5-.4-1 .8-1 1.1-2 .8-2.3-.9-.9-4.2 1.3-7.6 5.1-3.6 4.1-4 3.7-1.1-1 2.4-3.9 9.1-7.5 13.8-7.5 2.6 0 4.7 1.1 8.7 4.5zm-39.9-1c-.9 1.3-1.6 3.2-1.6 4.2 0 1.4-.2 1.5-.9.4s-1-1-1.4.5c-.4 1.6-.5 1.5-.6-.4-.1-1.3 1-3.3 2.5-4.7 3.4-3.2 4.1-3.2 2 0zM144 59.9c0 1.1-.4 2.3-1 2.6-.5.3-1 1.7-1 3.1 0 1.4-.4 2.2-1 1.9-1.4-.9-1.3-5.1.2-7.5 1.6-2.5 2.8-2.6 2.8-.1zM129.7 62c-3.1.4-8.1 2-11 3.5-2.8 1.5-6.3 2.8-7.5 3-1.3.1-4.7 2.4-7.4 5.1-4 3.8-4.6 4.2-2.9 1.7 5.9-8.7 17.1-14.2 28.6-14.1l6 .1-5.8.7zm17.1 2.5c1.7 3.7 1.5 4.5-1.3 4.5-2.1 0-2.5-.5-2.5-2.8 0-4.8 2-5.6 3.8-1.7zm16.7 1.5c2.9 1.1 7.5 5.7 7.5 7.4-.1.6-1.3-.3-2.8-2.1-1.5-1.7-3.9-3.6-5.4-4.2-3.5-1.3-9.3.3-11.3 3.2-1.7 2.4-2.1 6.2-.5 5.2.6-.4 1 .6 1 2.2-.1 2.7-.1 2.7-1.5.9-5.5-7.2 3.8-16.1 13-12.6zM127 67.6l-2.5 1.5 2.8-.6c1.9-.4 2.6-.2 2.2.4-.4.7.9.9 3.7.5 2.4-.3 5.4-.1 6.8.5l2.5 1h-2.8c-3.6.1-8.3 2.5-12.6 6.5l-3.5 3.1 1.8-2.8c2.5-4.1 1.4-4.4-3.6-1-8.3 5.6-8 4.6.7-2.3l3-2.4-3 .9c-1.6.5-3.9 1.2-5 1.6-1.6.7-1.8.6-.7-.6 1.8-1.9 1.5-3.2-.5-2.5-1.6.6-1.6.5-.3-.8 1.7-1.8 8.6-4.4 11.5-4.5 1.8 0 1.7.1-.5 1.5zm27.8 4.3c-1.4 1.2-2.4 1.5-2.7.8-.2-.6.7-1.9 2-3 1.4-1.2 2.5-1.5 2.7-.8.2.6-.7 2-2 3zM164 69c1.2.8 1.3 1.3.3 2.9-.8 1.3-.9 2.2-.3 2.6 1.5.9 1.2 5.1-.5 6.5-1.1.9-1.2 1.7-.4 3.1.7 1.5.6 1.9-.6 1.9-.8 0-1.5-.9-1.5-2 0-1-.9-2.4-2.1-3-2.4-1.4-2.2-5.3.4-5.8 2.2-.4 3.5 2.7 1.6 4-1.2.8-1.1.9.1.5.8-.2 1.5-1.5 1.5-2.8 0-2-.5-2.4-3-2.4s-3.1.4-3.3 2.7c-.2 1.9.3 3.1 1.7 4 2 1.2 2.9 3.8 1.4 3.8-2 0-5.3-4.6-5.3-7.6 0-3.9 2.1-5.8 5.6-5 1.7.5 2.3.3 1.9-.4-.3-.5-1.3-1-2.1-1s-1.4-.7-1.4-1.5c0-1.7 3.7-2 6-.5zm4.9 5.4c.8 1.4 1 3.4.6 4.7-.7 2.3-.7 2.4.9.4 1.5-2 1.5-2 1.6.2 0 3.1-4.6 3.3-5.5.2-.4-1.1-.4-2.3-.1-2.6.3-.4.1-1.2-.5-1.9-1.1-1.3-.5-3.4 1-3.4.4 0 1.3 1.1 2 2.4zm-30 3.9c-2.5 1.9-1.3 3.8 1.8 2.6 2.2-.8 2.4-.8 1.4.5-1.3 1.6-9.4 6.6-10.7 6.6-.4 0 .2-1 1.4-2.3l2.1-2.2-4.5.2c-2.4.1-5 .5-5.6.9-.9.5-1 .4-.3-.4C126 82.6 137.3 77 139 77c1.3.1 1.3.2-.1 1.3zm-39.7 4.4c7.9 5.4 8.9 6.7 2.1 2.7-9.9-5.7-9.9-5.7-8.3-4.3 7.4 6.7 23.3 18.6 26.8 20.1 2.4 1.1 7.1 2.3 10.5 2.8l6.2.9-7-.2c-8.9-.3-13.5-2.5-24.3-11.7-4.6-3.8-9.3-7.5-10.5-8.1-2-1.1-2-1 .3 1.6l2.5 2.8-3.5-1.8-3.5-1.8 2.4 2.6c1.2 1.4 2 3 1.7 3.6-.4.5-.1 1.3.5 1.7.8.5.9.3.4-.6-.5-.9-.4-1.1.4-.6.6.4.9 1.2.5 1.7-.3.6.5 2.2 1.7 3.7l2.4 2.7-2.4-2c-1.3-1.1-4.4-4.7-6.9-8-6.1-8.3-7.6-7.9-6 1.5l.7 3.5-1.9-4c-1.1-2.2-2-5.7-2-7.8 0-3.4.2-3.7 2.8-3.7 1.5 0 3.4-.5 4.2-1 2.3-1.5 2.9-1.3 10.2 3.7zm67.8 1.7c-1.3 1.3-3.5-.7-2.5-2.4.5-.8 1.1-.8 2.1.1 1 .8 1.2 1.5.4 2.3zm-20 .1c-3.8 4.1-12 7.6-15.8 6.9-3.2-.6-3.1-.7 3-2.9 3.5-1.2 8.1-3.1 10.3-4.3 5.1-2.7 5.3-2.7 2.5.3zm22.6 1.4c-2.5 2.8-6.1 3.3-10.1 1.7-1.9-.8-3.5-1.8-3.5-2.1 0-.3.9-.1 1.9.5 3.3 1.7 8.6 1.2 10.6-1 1-1.1 2-1.8 2.3-1.5.3.3-.3 1.4-1.2 2.4zm23.5.2c-1.2 1-2.7 1.6-3.3 1.3-.5-.4.3-1.4 1.9-2.4 3.5-2.2 4.6-1.5 1.4 1.1zM110 89c.8.5 1.1 1 .5 1-.5 0-1.7-.5-2.5-1s-1-1-.5-1c.6 0 1.7.5 2.5 1zm43.1.7c-.9 1.8-3.7 4.5-7.5 7.3-1.3 1-1.7 1-1.2.2.9-1.5 1-1.5-3.9.3-2.2.8-5.3 1.4-7 1.4l-3-.1 3.5-1.1c2.7-.8 3.1-1.1 1.5-1.5-1.3-.3 1.5-1.8 8-4.2 5.5-2.1 10.1-3.9 10.3-3.9.1-.1-.2.7-.7 1.6zm47.5 4.4c1.1 1.9-2.9-.7-5.1-3.2l-2-2.3 3.2 2.3c1.8 1.2 3.5 2.7 3.9 3.2zm5.8-4.5c2.2.9 2 3.1-.4 3.9-1.7.6-8-2.6-8-4.1 0-.6 6.6-.5 8.4.2zm-92.7 1.1c-.4.3-1 .3-1.4 0-.3-.4 0-.7.7-.7s1 .3.7.7zm59.6 4.7c.4-.4.7 1.4.7 4 0 2.9-.4 4.5-1 4.1-.5-.3-1-1.2-1-1.9s-.7-2.7-1.6-4.4c-.8-1.8-1.3-3.6-.9-4.2.3-.5.1-1-.5-1s-.8-.5-.4-1.1c.4-.8 1.3 0 2.3 2 .9 1.7 2 2.9 2.4 2.5zm9.9-.2c.6-2.2.8-2.3 3.6-.8 3.6 1.8 5.2 6 5.2 13 0 6.9-1.4 11.5-5.3 17.3-3 4.5-11.5 11.3-14.1 11.3-.6 0 .3-.8 1.9-1.9 4.9-2.9 11.3-10.9 13.5-16.7 2.1-5.7 2.8-10.1 1.1-7.5-.6.9-1.2-.4-2.1-4-1.7-7.4-1.9-7.5-4.3-2.7-1.2 2.4-2.7 4.3-3.4 4.3-.6 0-1.5.3-1.9.7-.4.5-1.4.8-2.3.8-1.1 0-.8-.7 1.1-2.3 3.1-2.5 4.8-6.3 4.9-11 .1-3 .1-3 .8-.7l.7 2.5.6-2.3zm-5.5 3c-.3.7-.5.2-.5-1.2s.2-1.9.5-1.3c.2.7.2 1.9 0 2.5zm19.3-2c1.4.9 2.9 1 5.9.2 2.2-.6 3.8-.7 3.5-.3-.2.5-2.1 1.3-4.1 1.8-2.9.8-4.2.7-6-.4-3.6-2.4-2.9-3.5.7-1.3zm-66.2.5c-1.5.2-4.2.2-6 0-1.8-.2-.6-.4 2.7-.4 3.3 0 4.8.2 3.3.4zM77.5 100c.3.5.2 1-.4 1-.5 0-1.3-.5-1.6-1-.3-.6-.2-1 .4-1 .5 0 1.3.4 1.6 1zm3.9 1.2c-3.1 3.5-5.5 7.7-5.2 9.1.1.6-1 4.8-2.4 9.2-1.5 4.4-2.9 8.9-3.1 10-.3 1.1-.5.1-.6-2.1-.2-8 6.4-24.8 10.7-27.3 2.6-1.6 2.7-1.3.6 1.1zm73.4 2.3c-2.5 3.6-8.4 8.5-10.1 8.5-.6 0 .8-1.3 2.9-2.8 2.1-1.6 5-4.5 6.4-6.5 1.3-2 2.7-3.4 2.9-3.1.2.2-.7 2-2.1 3.9zm14.2 0c1.4 1.9 1.4 1.9-.2.6-1-.7-1.8-1.8-1.8-2.4 0-.6.1-.8.3-.6.1.2.9 1.3 1.7 2.4zm7.7-.8c-.4.3-.7 0-.7-.7s.3-1 .7-.7c.3.4.3 1 0 1.4zm-31.7-.3c0 .3-.5.8-1.2 1.2-.7.4-.8.3-.4-.4.7-1.2 1.6-1.6 1.6-.8zm-45.3 5.5c2.4 2.2 6.5 4.8 8.9 5.7l4.5 1.7-4.3 1.9c-4.5 2-8.3 5.1-9.9 8-1.5 2.8 1.8 1.5 5.9-2.4 6-5.8 8.9-6.8 17.1-6.1 9.1.8 12.6 3 16.5 10.6 2.7 5.3 2.8 6 1.7 9.8-1.5 4.9-5.7 7.3-10.3 5.7-1.5-.6-2.8-1.5-2.8-2.1 0-.6-.3-.8-.6-.5-1.2 1.3 1.7 4.7 5 5.8 4.4 1.4 9.1-.4 12.9-4.9 3.2-3.9 4.2-8.6 2.8-13.7-1.4-5.1-1.4-5.7.3-5.1.8.3 1.8-.5 2.5-1.9 2.4-5.3 9.9-4.9 12.9.6 3 5.8-1 15.9-7.9 19.9-1.9 1.1-2.9 2.4-2.9 4v2.4l2.5-2.3 2.5-2.4 5.1 5.5c4.3 4.5 9.9 14 9.9 16.7 0 .4-2.5 2-5.5 3.6-3 1.5-8.8 5.7-12.9 9.1l-7.4 6.4-1.7-4c-1.7-3.7-1.7-4-.1-5.8 1-1.1 1.9-2.5 2-3.3.1-.7.7-2.9 1.3-4.8 3.1-9.9 3-9.9-5.2-2.1-8.3 7.9-15.8 13.1-18.8 13.1-2.3 0-11.7-9.7-11.7-12.1 0-.9-.6-1.7-1.2-1.6-3.7.1-4.8-.5-4.8-2.3 0-1.3-1.2-2.6-3.5-3.7-2.6-1.2-3.4-2.1-2.9-3.2 4.2-9.9 4.1-11.9-1.7-20.4-4.8-7.3-5.9-11.1-5.9-20.9 0-7 .4-8.2 2.8-8.7.2-.1 2.4 1.7 4.9 3.8zm42.3-3.4c0 .6-5.6 3.5-6.7 3.5-.4-.1.8-.9 2.7-2 3.9-2.2 4-2.2 4-1.5zm30.3 6.7c-.2.4 1.4.8 3.5.9 3.7.1 3.7.1.9 1.1-4 1.4-9 .2-11.8-2.9l-2.4-2.6 3 1.9c2.1 1.3 2.7 1.4 1.9.4-.6-.8-1.4-2.5-1.7-3.8-.5-2.1-.2-2 3.1 1 2.1 1.7 3.6 3.6 3.5 4zm-57.8 1.3c3.3 1.3 5.3 2.5 4.5 2.5-2.4 0-13.3-5.5-15-7.5-1.2-1.5-.8-1.4 1.5.3 1.7 1.2 5.7 3.3 9 4.7zm92 6.7c.4 2.1-.1 1.3-1.3-2.2-3.2-9-3.3-9.7-1.2-5.3 1.1 2.3 2.3 5.7 2.5 7.5zm-56-5.2c-1.6 1.6-3.2 3-3.7 3-.8 0 5.3-5.9 6.1-6 .3 0-.8 1.3-2.4 3zm45.4 7.9c.1 5.1-.5 3.4-1.2-2.9-.4-3.6-.3-4.6.3-3 .4 1.4.8 4 .9 5.9zm-71.2-6.3c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-43 11.6c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm92-1.5c-.4.3-1 .3-1.4 0-.3-.4 0-.7.7-.7s1 .3.7.7zm-86 4.5c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm1 3.5c-.4.3-.7 0-.7-.7s.3-1 .7-.7c.3.4.3 1 0 1.4zm101.3-.4c0 .2-1.2 1.4-2.7 2.8l-2.8 2.4 2.4-2.8c2.3-2.5 3.1-3.2 3.1-2.4zm-46 6.1c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zm45 2.6c0 1.6-6.2 5-9 4.9-2.1-.1-1.9-.2.9-.9 1.8-.4 4.3-1.7 5.4-2.9 2.4-2.4 2.7-2.5 2.7-1.1zm-13.8 17.7c2.1 1.9 2.4 4.3.5 4.3-.7 0-1.8-1.4-2.4-3-1.3-3.4-.8-3.7 1.9-1.3zm25.6 8c7.4 3.6 16.2 12 16.2 15.5 0 2.2-3.4 6.8-12.1 16.2-.5.5-1.1.7-1.5.3-.3-.3 2.1-3.8 5.5-7.8s6.1-8 6.1-9c0-2.8-9.5-10.6-15.2-12.5-19.2-6.3-45.4 10.7-70 45.6-6.6 9.4-18.2 30.1-22.5 40.2-2 4.8-3.9 8.6-4.1 8.3-2-2 22.7-52 31.7-64.1 7.5-10.1 22.2-24.1 29.7-28.4 13.1-7.5 26.3-9.1 36.2-4.3zm-63.1 26c-7.8 9.7-14.2 20-19.2 30.9-2.5 5.1-4.6 9.4-4.9 9.4-.6 0 2.4-8.8 5.3-15.3 3.3-7.6 10.8-18.5 17.4-25.4 3.3-3.5 6.2-6.3 6.4-6.3.2 0-2.1 3-5 6.7zm44.2-.3c-.2.2-3.5 2.5-7.4 5-5.1 3.4-6 3.8-3.5 1.6 1.9-1.7 5.1-4 7-5 3.4-1.9 4.8-2.4 3.9-1.6zm13.8 3.5c5.6 2.6 8.5 7.3 13.3 21.6 4.5 13.5 4.6 13.6 2.5 10.9-.8-1-2.6-5.5-4-9.9-7-22.1-14.4-25.1-34.2-13.5l-3.8 2.2 3.5-3.1c4.1-3.6 3.3-4-1.9-1l-3.6 2.1 3.5-3.1c8.5-7.6 16.9-9.7 24.7-6.2zm-71.4 4.3c-.4.7-2.7 4.1-5.1 7.5-8.9 12.8-15.8 29.2-19.3 45.8l-1.8 9 .4-6.5c.6-8.1 3.6-19 7.6-27.8 3.7-8.3 3.7-8.2-10.1 11.1-6.2 8.7-11.5 15.6-11.8 15.3-.7-.7 2.1-4.9 16.7-24.6 16.6-22.5 23.1-31 23.7-31 .3 0 .2.6-.3 1.2zm56 9.5c-2.7 1-1.2 2.4 2 1.9 2.6-.5 2.3-.3-1.4 1.2-9.1 3.7-19.9 13.2-26.7 23.4-3 4.7-3.8 4.9-1.6.5 7.4-14.3 20.7-27.8 27.4-27.6 1 0 1.1.2.3.6zm-30.3 6.6c0 .2-1 1.2-2.2 2.3l-2.3 1.9 1.9-2.3c1.8-2.1 2.6-2.7 2.6-1.9zm-4 5.1c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zm-3 4c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zm49 3.5c-2 .6-1.3.9 3.2 1.3 9.6 1.1 9.3 2.3-.5 2.3-9.9.1-16.9 2.3-28.2 8.7-4.9 2.8-4.9 2.8-2 .3 9.2-7.9 20.3-13.5 26.5-13.4 3.1.1 3.2.2 1 .8zm-52 .5c0 .3-.5.8-1.2 1.2-.7.4-.8.3-.4-.4.7-1.2 1.6-1.6 1.6-.8zm73.7 3.3c-.4.3-.7 0-.7-.7s.3-1 .7-.7c.3.4.3 1 0 1.4zm-75.7-.3c0 .3-.5.8-1.2 1.2-.7.4-.8.3-.4-.4.7-1.2 1.6-1.6 1.6-.8zm-2 3c0 .3-.5.8-1.2 1.2-.7.4-.8.3-.4-.4.7-1.2 1.6-1.6 1.6-.8zm-4 6.6c-.6 1.1-1.3 2-1.6 2-.2 0 0-.9.6-2s1.3-2 1.6-2c.2 0 0 .9-.6 2zm62.6 7.5c2.7.8 6.5 2.8 8.4 4.4l3.5 3-6.3-3.1c-5.1-2.6-7.5-3.1-13.6-3.2-4.1-.1-7.3-.2-7.2-.3.3-.3 7.7-2.1 9.2-2.2.6-.1 3.3.6 6 1.4zm-70.9 9.2c-.4.3-.7 0-.7-.7s.3-1 .7-.7c.3.4.3 1 0 1.4zm-2 5c-.4.3-.7 0-.7-.7s.3-1 .7-.7c.3.4.3 1 0 1.4zm9 6c-.4.3-.7 0-.7-.7s.3-1 .7-.7c.3.4.3 1 0 1.4z" />
    <path d="M200 154c0 .7.3 1 .7.7.3-.4.3-1 0-1.4-.4-.3-.7 0-.7.7zM145 65c0 .7.3 1 .7.7.3-.4.3-1 0-1.4-.4-.3-.7 0-.7.7zM152.8 121.7c-2.6 3-3 5.5-1.2 7.4 1.1 1.3 1.5 2.8 1.1 4.9-.9 4 .6 3.8 3.3-.5 2.5-4 2.1-6.5-1.1-6.5-2.8 0-1.9-2.4 1-2.8 1.3-.2 3.2.5 4.3 1.5 2 1.8 2 1.8.6-1.7-1.7-4.1-5.5-5.2-8-2.3zM122.6 122.2c-3 1.7-8.6 2.7-8.6 1.6 0-.6-.6-.6-1.5.2-.8.6-2 .8-2.6.4-.7-.4-.9-.3-.6.3.4.6 0 1.4-.9 1.7-1 .4-1.3.2-.8-.7.5-.8.2-.7-.9.2-.9.7-1.7 1.9-1.7 2.6 0 .8-.4 1.5-.9 1.7-.5.2-.4 1.4.1 2.8 1 2.4 1.1 2.4 1.8.5.5-1.1.9-1.5.9-.9.1.6 1.6 3.2 3.5 5.8 3.4 4.8 3.4 4.8 4.7 2.5 1.1-2.2 1.1-2.3-.4-1.1-1.3 1.1-1.7 1-2.7-.7-.7-1.4-.7-2.1 0-2.1.5 0 1-.9 1-2.1 0-1.2.4-1.8 1.1-1.3.8.5 1-.3.7-2.5-.4-2.9-.2-3.1 2.5-3.1s2.9.2 2.4 3c-.4 1.6-.4 3-.2 3 .5 0 3.5-6.5 4.1-8.5.1-.6.5-1.8.9-2.8.8-2 .7-2-1.9-.5z" />
  </svg>
)
export default LogoSVG
