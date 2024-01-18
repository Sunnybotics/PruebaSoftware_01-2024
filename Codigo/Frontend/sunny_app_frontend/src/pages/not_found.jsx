import { NotFoundImage } from "../assets/not_found_image"

export function NotFound(){
    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <a href="/" className="font-bold text-7xl mt-9 text-purple-600">Not Found</a>
            <NotFoundImage />
        </main>
       
    ) 
}