import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Card from "../UI/Card";

const EmailDetails = (props) => {
  const params = useParams();
  const {data} = props;
  console.log("data " + data)
  return (
    <Fragment>
        <h1>Email Details</h1>
      <h3>Email</h3>
    <Card>
        <h2>{data.from}</h2>
        <h3>{data.subject}</h3>
        <p>{data.message}</p>
    </Card>
      <h3>Replies</h3>
      <ul>
            {
                data.reply.map((email)=>(
                        <Card>
                             <li >
                                <h2>{email.from}</h2>
                                <h3>{new Date(email.time).toDateString()} </h3>
                                <p>{email.message}</p>
                                {/* <input type="text" /> */} 
                            </li>
                        </Card>
                    ))
                }
            </ul>
    </Fragment>
  );
};
export default EmailDetails;
