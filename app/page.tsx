import Image from "next/image";

export default function Home() {
  return (
    <div className="my-5 ">
    <Image
    className="mx-auto mb-6"
    src={"https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"}
    width={200}
    height={100}
    alt="Facebook Logo Image"
    />
    <form>
     <div className="bg-white text-center items-center mx-auto py-2
       border rounded-xl  shadow-lg w-[60%]  2xl:w-1/4 xl:w-1/3">
        <h3 className="font-semibold text-2xl">Create a new account</h3>
        <p className="text-sm">It's quick and easy.</p>
        <hr className="my-3"/>
    
     <div className="flex flex-col">
      <input className="inpt" type="text" placeholder="First Name"/>
      <input className="inpt" type="text" placeholder="Surname"/>
      <input className="inpt" type="email" placeholder="Mobile number or email address"/>
      <input className="inpt" type="password" placeholder="New Password"/>
     </div>

     {/* Date of birth field */}
     <div>
      <p className="text-start ml-4 text-sm pt-2">Date of birth <span className="symbol">?</span></p>
      <label className="flex">
        <input className="inpt" id="inpt-2" type="text" placeholder="Day"/>
        <input className="inpt" id="inpt-2" type="text" placeholder="Month"/>
        <input className="inpt" id="inpt-2" type="text" placeholder="Year"/>
      </label>
     </div>

     {/* Gender field */}
     <div className="text-sm">
      <p className="text-start ml-4 pt-2">Gender <span className="symbol">?</span></p>
      <label className="label flex flex-row  w-full items-center">
        <div className="radio-field">
          <span className="radio-text">Female</span>
          <input className="radio-box" type="radio" name="gender" value={"female"} />
        </div>
        <div className="radio-field">
          <span className="radio-text">Male</span>
          <input className="radio-box" type="radio" name="gender" value={"male"} />
        </div>
        <div className="radio-field">
          <span className="radio-text">Custom</span>
          <input className="radio-box" type="radio" name="gender" value={"custom"} />
        </div>
      </label>
     </div>

     <p className="text-xs m-4 text-start">People who use our service may have uploaded your contact information to Facebook.
      <span className="link-text"> Learn more.</span></p>
      <p className="text-xs text-start m-4">By clicking Sign Up, you agree to our
      <span className="link-text"> Terms</span>,
      <span className="link-text"> Privacy Policy</span> and
      <span className="link-text"> Cookies Policy</span>. You may receive SMS notifications from us and can opt out at any time.
      </p>
      <button className="rounded-lg my-4 bg-green-600 text-white font-bold px-14 py-2">Sign Up</button>
      <span className="hover:cursor-pointer text-blue-600 block pb-4"> Already have an account?</span>
      </div>

    </form>
   </div>
  )
}