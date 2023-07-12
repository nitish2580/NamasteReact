import {useState } from "react";
import About from "./About";

const Section = ({title,description,isVisible,setIsVisible})=>{
    return(
        <div className="border border-black p-2 m-2">
            <h2>{title}</h2>
            {isVisible?(
                <>
                <button onClick={()=>setIsVisible(false)} className="cursor-pointer underline">Hide</button>
                <p>{description}</p>
                </>
            ):(
            <button 
            onClick={()=>setIsVisible(true)} className="cursor-pointer underline"
            >Show</button>
            )}
            </div>
    )
}

const Instamart = ()=>{
    const [visibleSection,setVisibleSection]=useState("about")
    const [flag,setFlag]=useState(true)
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">
                Instamart
            </h1>
            <Section
            title={"About Instamart"}
            description={"this is the aobut section of Instamart"}
            isVisible={"about"===visibleSection && flag}
            setIsVisible={(bool)=>{
                setFlag(bool)
                setVisibleSection("about")
            }}
            />
            <Section
            title={"Team Instamart"}
            description={"this is the team section of Instamart"}
            isVisible={"team"===visibleSection && flag}
            setIsVisible={(bool)=>{
                setFlag(bool)
                setVisibleSection("team")
            }}
            />
            <Section
            title={"Contact Instamart"}
            description={"this is the contact section of Instamart"}
            isVisible={"contact"===visibleSection && flag}
            setIsVisible={(bool)=>{
                setFlag(bool)
                setVisibleSection("contact")
            }}
            />
        </div>
    )
}
export default Instamart;