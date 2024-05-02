"use client";

import Image from "next/image";

import "@progress/kendo-theme-material/dist/all.css";
import { Button } from "@progress/kendo-react-buttons";
import { useRef, useState } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import Link from "next/link";


export default function Resume() {
    const pdfconverter = useRef(null);
    const handler = (event) => {
        pdfconverter.current.save();
    };

    const [text, setText] = useState("");
    const [contact, setContact] = useState("");
    const [contactTwo, setContactTwo] = useState("");
    const [education, setEducation] = useState("");
    const [project, setProject] = useState("");
    const [languages, setLanguages] = useState("");
    const [tools, setTools] = useState("");
    const [frameworks, setFrameworks] = useState("");
    const [experience, setExperience] = useState("");
    const [links, setLinks] = useState("");

    const textHandler = (e) => {
        setText(e.target.value);
    };

    const contactHandler = (e) => {
        setContact(e.target.value);
    };

    const contactHandlerTwo = (e) => {
        setContactTwo(e.target.value);
    };

    const educationHandler = (e) => {
        setEducation(e.target.value);
    };

    const languagesHandler = (e) => {
        setLanguages(e.target.value);
    };

    const projectHandler = (e) => {
        setProject(e.target.value);
    };

    const toolsHandler = (e) => {
        setTools(e.target.value);
    };

    const frameworksHandler = (e) => {
        setFrameworks(e.target.value);
    };

    const experienceHandler = (e) => {
        setExperience(e.target.value);
    };

    const linksHandler = (e) => {
        setLinks(e.target.value);
    };

    //const data = "Yash"

    return (

        <div className="flex text-black bg-violet-400 font-semibold w-full">
            <div className="w-1/2 flex flex-col mt-8 min-h-screen max-h-fit mb-8       ">
                <div className="mx-auto flex flex-col">
                    <h1 className="text-center text-2xl mb-2">Add details</h1>
                    <div className="w-96 m-2 mt-4 bg-white rounded-md px-4 py-1">
                        <h2 className="text-sm mt-2">Name</h2>
                        <input
                            value={text}
                            message={text}
                            onChange={textHandler}
                            className="mb-2 w-full  p-1 bg-gray-200 rounded-md"
                        ></input>
                        <h2 className="text-sm">Contact</h2>
                        <div className="flex  w-full justify-between">
                            <input
                                value={contact}
                                //value={contact}
                                //message={text}
                                onChange={contactHandler}
                                className="mb-2 mr-2 w-1/2  p-1 bg-gray-200 rounded-md"
                            ></input>
                            <input
                                value={contactTwo}
                                //value={contact}
                                //message={text}
                                onChange={contactHandlerTwo}
                                className="mb-2 w-1/2  p-1 bg-gray-200 rounded-md"
                            ></input>
                        </div>
                        <h2 className="text-sm">Projects</h2>
                        <textarea
                            value={project}
                            //value={contact}
                            //message={text}
                            onChange={projectHandler}
                            className="mb-2 w-full  p-1 bg-gray-200 rounded-md"
                        />
                        <h2 className="text-sm">Education</h2>
                        <input
                            value={education}
                            //value={contact}
                            //message={text}
                            onChange={educationHandler}
                            className="mb-2 w-full  p-1 bg-gray-200 rounded-md"
                        ></input>
                        <h2 className="text-sm">Languages</h2>
                        <input
                            value={languages}
                            //value={contact}
                            //message={text}
                            onChange={languagesHandler}
                            className="mb-2 w-full p-1 bg-gray-200 rounded-md"
                        ></input>
                        <h2 className="text-sm">Frameworks</h2>
                        <input
                            value={frameworks}
                            //value={contact}
                            //message={text}
                            onChange={frameworksHandler}
                            className="mb-2 w-full  p-1 bg-gray-200 rounded-md"
                        ></input>
                        <h2 className="text-sm">Tools</h2>
                        <input
                            value={tools}
                            //value={contact}
                            //message={text}
                            onChange={toolsHandler}
                            className="mb-2 w-full  p-1 bg-gray-200 rounded-md"
                        ></input>
                        <h2 className="text-sm">Experience</h2>
                        <textarea
                            value={experience}
                            //value={contact}
                            //message={text}
                            onChange={experienceHandler}
                            className="mb-2 w-full  p-1 bg-gray-200 rounded-md"
                        />
                        <h2 className="text-sm">Links</h2>
                        <input
                            value={links}
                            //value={contact}
                            //message={text}
                            onChange={linksHandler}
                            className="mb-2 w-full  p-1 bg-gray-200 rounded-md"
                        ></input>
                    </div>
                    <div className="text-center text-sm text-white mt-0 underline decoration-solid ">
                        <Link href={"/"}>back to home page </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col text-left text-black  mt-8 min-h-screen max-h-fit w-1/2">
                <h1 className="text-center text-2xl mb-4">Resume</h1>
                <PDFExport ref={pdfconverter} paperSize="A4">
                    <div className="mx-auto my-2 w-4/5 bg-white text-xs p-4 rounded-md text-justify">
                        <span className="">
                            <h2 className="text-2xl">{text}</h2>
                            <h2 className="text-base mt-2 font-medium">
                                Contact:
                            </h2>
                            <hr className="h-1" />
                            <h2>{contact}</h2>
                            <h2>{contactTwo}</h2>
                        </span>
                        <h2 className="text-base mt-2 font-medium">
                            Projects:
                        </h2>
                        <hr className="h-1" />
                        <p className="">{project}</p>
                        <h2 className="text-base mt-2 font-medium">
                            Education:
                        </h2>
                        <hr className="h-1" />
                        <span className="w-full"> {education}</span>
                        <h2 className="text-base mt-2 font-medium">
                            Languages:
                        </h2>
                        <hr className="h-1" />
                        <span>{languages}</span>
                        <h2 className="text-base mt-2 font-medium">
                            Frameworks:
                        </h2>
                        <hr className="h-1" />
                        <span>{frameworks}</span>
                        <h2 className="text-base mt-2 font-medium">Tools: </h2>
                        <hr className="h-1" />
                        <span>{tools}</span>
                        <h2 className="text-base mt-2 font-medium text-justify">
                            Experience:
                        </h2>
                        <hr className="h-1" />
                        <p>{experience}</p>
                        <h2 className="text-base mt-2 font-medium">Links: </h2>
                        <hr className="h-1" />
                        <span>{links}</span>
                    </div>
                </PDFExport>
                <Button
                    className=" mx-auto mt-1 text-center"
                    onClick={handler}
                    primary={true}
                >
                    Download
                </Button>
            </div>
        </div>
    );
}
