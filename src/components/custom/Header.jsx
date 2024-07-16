import { Button } from "../ui/button"

const Header = () => {
  return (
    <div className="p-5 shadow-md flex justify-between items-center px-10">
        <h1 className="flex gap-2 items-center">
        <img src="/logo.png" height={60} width={60}/>
        <span className="text-2xl font-bold tracking-wider">Tour Titan</span>
        </h1>
        <Button>SignIn</Button>
    </div>
  )
}

export default Header