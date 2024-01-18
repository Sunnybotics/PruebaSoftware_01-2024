import { NotFoundImage } from "../assets/not_found_image"

// Define the NotFound functional component
export function NotFound(){
    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <a href="/" className="font-bold text-7xl mt-9 text-yellow-500">Not <span className="text-orange-600">Found</span></a>
            <p className="text-white text-xl mt-3"> Click on 'NOT FOUND' to go back to the Home</p>
            <NotFoundImage />
        </main>
       
    ) 
}