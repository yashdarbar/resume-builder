"use client";

import Image from "next/image";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyDocument/page";
import "@progress/kendo-theme-material/dist/all.css";
import { Button } from "@progress/kendo-react-buttons";
import { useRef, useState } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import Resume from "./Resume/page";
import "./page.css";

export default function Home(props) {
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
    }

    //const data = "Yash"

    return (
        // <main className="flex min-h-screen flex-col items-center justify-between p-24">
        //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        //       Get started by editing&nbsp;
        //       <code className="font-mono font-bold">app/page.js</code>
        //     </p>
        //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        //       <a
        //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //       >
        //         By{" "}
        //         <Image
        //           src="/vercel.svg"
        //           alt="Vercel Logo"
        //           className="dark:invert"
        //           width={100}
        //           height={24}
        //           priority
        //         />
        //       </a>
        //     </div>
        //   </div>

        //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        //     <Image
        //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        //       src="/next.svg"
        //       alt="Next.js Logo"
        //       width={180}
        //       height={37}
        //       priority
        //     />
        //   </div>

        //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        //     <a
        //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 className={`mb-3 text-2xl font-semibold`}>
        //         Docs{" "}
        //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Find in-depth information about Next.js features and API.
        //       </p>
        //     </a>

        //     <a
        //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 className={`mb-3 text-2xl font-semibold`}>
        //         Learn{" "}
        //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Learn about Next.js in an interactive course with&nbsp;quizzes!
        //       </p>
        //     </a>

        //     <a
        //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 className={`mb-3 text-2xl font-semibold`}>
        //         Templates{" "}
        //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Explore starter templates for Next.js.
        //       </p>
        //     </a>

        //     <a
        //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 className={`mb-3 text-2xl font-semibold`}>
        //         Deploy{" "}
        //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
        //         Instantly deploy your Next.js site to a shareable URL with Vercel.
        //       </p>
        //     </a>
        //   </div>
        // </main>
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
                    {/* <Button
                        className=" mx-auto text-center"
                        onClick={handler}
                        primary={true}
                    >
                        Primary Button
                    </Button> */}
                </div>
                {/* <Button
                    className="w-fit mt-6"
                    onClick={handler}
                    primary={true}
                >
                    Primary Button
                </Button> */}
            </div>
            <div className="flex flex-col text-left text-black  mt-8 min-h-screen max-h-fit w-1/2">
                <h1 className="text-center text-2xl mb-4">Resume</h1>
                <PDFExport ref={pdfconverter} paperSize="A4" >
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
                            Projects:{" "}
                        </h2>
                        <hr className="h-1" />
                        <p className="">{project}</p>
                        <h2 className="text-base mt-2 font-medium">
                            Education:
                        </h2>
                        <hr className="h-1" />
                        <span className="w-full"> {education}</span>
                        <h2 className="text-base mt-2 font-medium">
                            Languages:{" "}
                        </h2>
                        <hr className="h-1" />
                        <span>{languages}</span>
                        <h2 className="text-base mt-2 font-medium">
                            Frameworks:{" "}
                        </h2>
                        <hr className="h-1" />
                        <span>{frameworks}</span>
                        <h2 className="text-base mt-2 font-medium">Tools: </h2>
                        <hr className="h-1" />
                        <span>{tools}</span>
                        <h2 className="text-base mt-2 font-medium">
                            Experience:{" "}
                        </h2>
                        <hr className="h-1" />
                        <p>{experience}</p>
                        <h2 className="text-base mt-2 font-medium">Links: </h2>
                        <hr className="h-1" />
                        <span>{links}</span>
                        <p></p>
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

            {/* <Resume data={data}/> */}
        </div>
    );
}
