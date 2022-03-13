import React, { useState } from "react";
import { gql,useMutation} from "@apollo/client";

const Login = () => {
  const [userData,setUserData] = useState({email:"",password:""})
  const handleChange = e=> setUserData({...userData,[e.target.name]:e.target.value})
  const LOGIN_MUTATION = gql`
    mutation loginUser($email:String!,$password:String!){
      loginUser(email:$email,password:$password){
        name,email,role,token
      }
    }
  `
  const [login,{loading}] = useMutation(LOGIN_MUTATION,{
    update(_,result){
      console.log(result.data.loginUser)
    },
    variables:userData
  })
  const onSubmit = e=>{
    e.preventDefault()
    login()
  }
  return (
    <>
      <div className="w-full max-w-xs h-full mx-auto py-[25vh]">
        <form className="bg-white shadow-md rounded flex flex-col px-8 pt-6 pb-8 mb-4 gap-4 " onSubmit={onSubmit}>
          <div className="flex flex-col gap-2 justify-center">
            <label
              className="block text-gray-700 text-sm font-bold "
              htmlFor="email"
            >
              email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="text"
              placeholder="email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <label
              className="block text-gray-700 text-sm font-bold "
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="******************"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
