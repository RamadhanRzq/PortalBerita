import Newslist from "@/Components/Homepage/Newslist";
import Paginator from "@/Components/Homepage/Paginator";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-slate-50 text-white text-2xl">
            <Head title={props.title} />
            <Navbar user={props.auth.user}/>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                <Newslist news={props.news.data} />
            </div>
            <div className="text-black flex justify-center items-center">
            <Paginator meta={props.news.meta}/>
            </div>    
        </div>
    );
}
