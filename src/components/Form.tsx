import TextField from "./TextField.tsx";
import Title from "./Title.tsx";

export default function Form()
{
    return(
        <div className="min-h-screen flex items-center justify-center w-full">
            <div className="flex justify-center">
                <form className="flex flex-col gap-4 group font-[Inter]"
                      onSubmit={(e) =>
                      {
                          e.preventDefault()
                          console.log("dasdsa")
                      }} noValidate>
                    <Title text={"Personal info"}/>
                    <TextField label={"First Name"}/>
                    <TextField label={"Last Name"}/>
                    <TextField label={"Email Address"} type={"email"} errorMessage={`Please use correct formatting.\nExample: address@email.com`} />
                    <Title text={"Your workout"}/>
                    <button className="group-invalid:bg-pink-500" type={"submit"}>
                        dasdas
                    </button>
                </form>
            </div>
        </div>
    )
}
