import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import {resumes} from "../../constants"
import { resume } from "react-dom/server";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVision AI" },
    { name: "description", content: "Smart feedback for your dream job" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/public/images/bg-main.svg')] bg-cover " >

    <Navbar/>
    
    <section className="main-section" >

      <div className="page-heading py-16">
        <h1>Track your Application & Resume rating</h1>
        <h2>Review your submissions and check AI-powred feedback</h2>
      </div>

      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume)=>(
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}

    </section>









  </main> ;
}
