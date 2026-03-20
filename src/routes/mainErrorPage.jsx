import { useRouteError } from "react-router"
import RootLayout from "../RootLayout"



export default function MainErrorPage(){
    const error = useRouteError()

    return(
    <RootLayout>
        <div className="flex w-full">
            <div className="flex flex-row gap-2 ">
                
                <h1 className="text-4xl font-semibold text-[#2F4F3A]">Error: </h1>
                <h2 className="text-stone-700 text-4xl font-semibold"> {error.status} { error.statusText || error.message}</h2>

                {/* <h2 className="text-stone-700 max-w-2xl">We could not find a park that matches what you are looking for</h2> */}
            </div>
        </div>
    </RootLayout>
    )
}