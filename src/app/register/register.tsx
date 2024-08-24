import CoverBackground from "../../component/CoverBackground";
import FormReg from "./-components/FormReg";

function Register(){

  return (
    <div className="flex h-screen overflow-clip gap-0">
      <CoverBackground />
      <div className="flex flex-col gap-5 items-center justify-center grow">
        <div>
          <h1 className="text-4xl font-bold">Register</h1>
        </div>
        <FormReg />
      </div>
    </div>
  )
}

export default Register;