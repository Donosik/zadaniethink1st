import {TextField} from "./components/TextField.tsx";

export default function App()
{
    return (
        <>
            <div className="flex flex-col items-center justify-center">
              <div className="min-w-md flex content-start">
              </div>
                <TextField label={"First Name"}/>
            </div>
        </>
    )
}

