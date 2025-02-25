import TextField from "./TextField.tsx";
import Title from "./Title.tsx";
import Slider from "./Slider.tsx";
import Upload from "./Upload.tsx";
import Calendar from "./Calendar.tsx";
import Button from "./Button.tsx";
import {useMemo, useState} from "react";

interface formDataProps
{
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    photo: object | null,
    date: string,
    time: string
}

export default function Form()
{
    const [formData, setFormData] = useState<formDataProps>({
        firstName: "",
        lastName: "",
        email: "",
        age: 0,
        photo: null,
        date: "",
        time: ""
    })

    const isFormValid = useMemo(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        return Object.values(formData).every(value => value !== "" && value !== null && value !== 0) &&
            emailRegex.test(formData.email)
    }, [formData])

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    function handleChange(e)
    {
        const {name, value} = e.target;
        if (name in formData)
        {
            setFormData((prevState) => ({...prevState, [name]: value}))
        }
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    function handleSubmit(e)
    {
        e.preventDefault();
        if (isFormValid){
            console.log(formData)
        }
    }

    return (
        <div className="bg-think-white min-h-screen flex items-center justify-center w-full">
            <div className="flex justify-center">
                <form className="flex flex-col gap-4 group font-[Inter]"
                      onSubmit={handleSubmit} noValidate>
                    <Title text={"Personal info"}/>
                    <TextField label={"First Name"} onChange={handleChange} name={"firstName"}/>
                    <TextField label={"Last Name"} onChange={handleChange} name={"lastName"}/>
                    <TextField label={"Email Address"} type={"email"}
                               errorMessage={`Please use correct formatting.\nExample: address@email.com`}
                               onChange={handleChange} name={"email"}/>
                    <Slider label={"Age"} min={8} max={100} step={1} onChange={handleChange} name={"age"}/>
                    <Upload label={"Photo"} onChange={handleChange} name={"photo"} />
                    <Title text={"Your workout"}/>
                    <Calendar labelDate={"Date"} labelTime={"Time"} onChange={handleChange}/>
                    <Button isValid={isFormValid}/>
                </form>
            </div>
        </div>
    )
}
