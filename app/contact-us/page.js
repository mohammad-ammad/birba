'use client';
import React, { useState } from "react";

const bannerStyles = {
  backgroundImage: "url('/assets/r2.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  textAlign: "center",
  padding: "50px 10px",
  width: "100%",
};

const cmStyles = {
  backgroundImage: "url('/assets/r4.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  textAlign: "center",
  padding: "50px 10px",
  width: "70%",
  height: "550px",
};
export default function ContactUs() {
  const [formObj, setFormObj] = useState({
    fullName:"",
    email:"",
    message:""
  });

  const onchangeHandler = (e) => {
    setFormObj({
      ...formObj,
      [e.target.name]:e.target.value
    })
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: `FullName: ${formObj.fullName}, Email:${formObj.email}, Message:${formObj.message}` }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      if(response.ok){
        setFormObj({
          fullName:"",
          email:"",
          message:""
        })

        alert("email sent successfully");
      }
    } catch (error) {
      console.error('Error submitting the form:', error.message);
    }
  }
  
  
  return (
    <div className="pt-20 bg-[#f8f8f8]">
      <div style={bannerStyles}>
        <div className="text-3xl font-bold">Contact Us</div>
      </div>

      <section className="hidden md:block md:px-48 mt-10 bg-[#f8f8f8]">
        <div style={cmStyles} className="relative z-30">
          <div
            className="w-[600px] bg-white absolute -right-1/2"
            style={{ boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.15)" }}
          >
            <div className="flex justify-center items-center p-10 h-full">
              <div className="w-[40%]">
                <ul>
                  <li className="flex justify-start items-center my-10">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 text-black"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </p>
                    <h2 className="text-black text-[10px] text-start font-semibold mx-2">
                      H9Q7+W9R, Sultan Qaboos St, Muscat, Oman
                    </h2>
                  </li>
                  <li className="flex justify-start items-center my-10">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 text-black"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </p>
                    <h2 className="text-black text-[10px] text-start font-semibold mx-2">
                      +968 91479315
                    </h2>
                  </li>
                  <li className="flex justify-start items-center my-10">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 text-black"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </p>
                    <h2 className="text-black text-[10px] text-start font-semibold mx-2">
                      info@birba.om
                    </h2>
                  </li>
                  <li className="flex justify-start items-center my-10">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 text-black"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </p>
                    <h2 className="text-black text-[10px] text-start font-semibold mx-2">
                      8:30am - 4:30pm
                    </h2>
                  </li>
                </ul>
              </div>
              <div className="w-[60%] flex justify-start items-center">
                <div className="bg-black w-[1px] h-[300px]"></div>
                <form className="px-5" onSubmit={submitHandler}>
                  <div className="flex justify-start items-start flex-col my-5">
                    <label className="text-black text-sm font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Write your full name"
                      name="fullName"
                      value={formObj.fullName}
                      onChange={(e)=>onchangeHandler(e)}
                      className="w-full h-[30px] outline-none border border-[#D1D5DB] px-2 py-5 rounded-md text-black text-sm"
                    />
                  </div>
                  <div className="flex justify-start items-start flex-col">
                    <label className="text-black text-sm font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Write your Email"
                      name="email"
                      value={formObj.email}
                      onChange={(e)=>onchangeHandler(e)}
                      className="w-full h-[30px] outline-none border border-[#D1D5DB] px-2 py-5 rounded-md text-black text-sm"
                    />
                  </div>
                  <div className="flex justify-start items-start flex-col my-5">
                    <label className="text-black text-sm font-semibold">
                      Message
                    </label>
                    <textarea
                      rows={2}
                      cols={5}
                      placeholder="Write your message here"
                      name="message"
                      value={formObj.message}
                      onChange={(e)=>onchangeHandler(e)}
                      className="w-full outline-none border border-[#D1D5DB] px-2 py-5 rounded-md text-black text-sm"
                    ></textarea>
                  </div>
                  <div className="flex justify-start items-center">
                    <button
                      type="submit"
                      className="bg-[#AE0243] w-[100px] h-[40px] shadow-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="block md:hidden px-5 mt-5 pb-5"
      >
        <div className="p-5 rounded-md bg-white" style={{ boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.15)" }}>
          <form className="px-5" onSubmit={submitHandler}>
            <div className="flex justify-start items-start flex-col my-5">
              <label className="text-black text-sm font-semibold">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Write your full name"
                name="fullName"
                value={formObj.fullName}
                      onChange={(e)=>onchangeHandler(e)}
                className="w-full h-[30px] outline-none border border-[#D1D5DB] px-2 py-5 rounded-md text-black text-sm"
              />
            </div>
            <div className="flex justify-start items-start flex-col">
              <label className="text-black text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formObj.email}
                      onChange={(e)=>onchangeHandler(e)}
                placeholder="Write your Email"
                className="w-full h-[30px] outline-none border border-[#D1D5DB] px-2 py-5 rounded-md text-black text-sm"
              />
            </div>
            <div className="flex justify-start items-start flex-col my-5">
              <label className="text-black text-sm font-semibold">
                Message
              </label>
              <textarea
                rows={2}
                cols={5}
                name="message"
                value={formObj.message}
                      onChange={(e)=>onchangeHandler(e)}
                placeholder="Write your message here"
                className="w-full outline-none border border-[#D1D5DB] px-2 py-5 rounded-md text-black text-sm"
              ></textarea>
            </div>
            <div className="flex justify-start items-center">
              <button
                type="submit"
                className="bg-[#AE0243] w-[100px] h-[40px] shadow-md text-white"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="w-full h-[1px] bg-[#8B8B8B] my-5"></div>

          <div className="">
                <ul>
                  <li className="flex justify-start items-center my-10">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 text-black"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </p>
                    <h2 className="text-black text-[10px] text-start font-semibold mx-2">
                      H9Q7+W9R, Sultan Qaboos St, Muscat, Oman
                    </h2>
                  </li>
                  <li className="flex justify-start items-center my-10">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 text-black"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </p>
                    <h2 className="text-black text-[10px] text-start font-semibold mx-2">
                      +968 91479315
                    </h2>
                  </li>
                  <li className="flex justify-start items-center my-10">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 text-black"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </p>
                    <h2 className="text-black text-[10px] text-start font-semibold mx-2">
                      info@birba.om
                    </h2>
                  </li>
                  <li className="flex justify-start items-center my-10">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 text-black"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </p>
                    <h2 className="text-black text-[10px] text-start font-semibold mx-2">
                      8:30am - 4:30pm
                    </h2>
                  </li>
                </ul>
              </div>
        </div>
      </section>
    </div>
  );
}
