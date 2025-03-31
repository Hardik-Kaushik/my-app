
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { cn } from "./lib/utils";
import HackathonLandingPage from './HackathonLandingPage'

function App() {
  return (
    <div className="relative flex min-h-screen h-full w-full items-center justify-center bg-black">
      <div
        className={cn(
          "fixed h-screen w-full inset-0",
          "[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none fixed h-screen inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>
      <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8">
      <HackathonLandingPage/>

      </div>
    </div>
  )
}

export default App
