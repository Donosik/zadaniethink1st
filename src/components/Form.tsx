import TextField from "./TextField.tsx";

export default function Form()
{
    return(
        <>
            <div className="flex justify-center">
                <form className="flex flex-col gap-4 group"
                      onSubmit={(e) =>
                      {
                          e.preventDefault()
                          console.log("dasdsa")
                      }} noValidate>
                    <div className="min-w-md flex content-start">
                    </div>
                    <TextField label={"First Name"}/>
                    <TextField label={"Last Name"}/>
                    <TextField label={"Email Address"} type={"email"} errorMessage={`Please use correct formatting.\nExample: address@email.com`} />
                    <button className="group-invalid:bg-pink-500" type={"submit"}>
                        dasdas
                    </button>
                </form>
            </div>
        </>
    )
}
