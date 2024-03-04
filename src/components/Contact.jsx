import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen text-white bg-gradient-to-b from-black via-black to-gray-800 ">

      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">

        <div className="pt-10 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6 "> Submit the form to get in touch with me </p>
        </div>

        <div className="flex justify-center items-center h-3/4 ">
          <form action="https://getform.io/f/03b3eccd-ae44-494b-91aa-c183fb9f995f" method='POST' className="flex flex-col w-full md:w-1/2 ">
            <input type="text" name="name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" placeholder="Enter your name" required />
            <input type="email" name="email" className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" placeholder="Enter your email address" required />
            <textarea name="message" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" placeholder="Enter your message.." rows="8" required />
            <button type="submit" className="bg-gradient-to-r from-slate-300 to-slate-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300"> Let's talk </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact