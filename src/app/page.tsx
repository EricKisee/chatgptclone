import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
       <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

       <div className='flex space-x-2 text-center'>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/** Sun Icon */}
            <SunIcon className="h-8 w-8 "/>
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain something to me"</p>
            <p className="infoText">"What is the difference between a dog and a cat?"</p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>


        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/** Sun Icon */}
            <BoltIcon className="h-8 w-8 "/>
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Change the ChatGPT Model to use</p>
            <p className="infoText">Messages are store in Firebase's Firestore</p>
            <p className="infoText">Hot Toast notification when ChatGPT is thinking</p>
          </div>
        </div>


        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/** Sun Icon */}
            <ExclamationTriangleIcon className="h-8 w-8 "/>
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">May occationally generate incorrect information</p>
            <p className="infoText">May occationally produce harmfull instructions or biased content</p>
            <p className="infoText">Limited to knowledge of the world and events after 2021</p>
          </div>
        </div>
       </div>
    </div>
   
  )
}
