import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Home = (props) => {
    const [emailData, setEmailData] = useState([]);
    const history = useHistory()
    useEffect(()=>{
        fetch('http://localhost:8000/data').then(
            (response) => {
                return response.json()
            }
        ).then((data)=>{
            console.log(data);
            const email = data.map((d, index) => {
                return { 
                    id: index,
                    time: d.time,
                    subject: d.subject,
                    from: d.from,
                    message:d.message,
                    reply: d.replies
                }
            })
            console.log("email ",email)
        setEmailData(email);
        })
    },[])

    //console.log("emaildata " + emailData[0].time);
    const onClickHandler = (email) => {
        history.push(`/mails/${email.id}`)
        props.dataHandler(email)
    }
    return(
        <div>
            <h1>Mailbox</h1>
            <ul>
                {
                    emailData.map((email)=>(
                        <Card>
                             <li >
                                <h2>{email.from}</h2>
                                <h3>{email.subject}</h3>
                                <p>{email.message}</p>
                                <Button onClick={onClickHandler.bind(this,email)} > Full View </Button>
                            </li>
                        </Card>
                    ))
                }
            </ul>
        </div>
    )
}

export default Home;