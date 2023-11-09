import { Head } from "@inertiajs/react"

export default function Homepage (props) {
    console.log(props)
    return (
        <div>
            <Head title={props.title}/>
            <h1>HOMEPAGE TEST</h1>
        </div>
    )

}