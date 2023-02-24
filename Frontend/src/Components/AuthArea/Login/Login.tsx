import CredentialModel from "../../../Models/CredentialModel";
import { useForm } from "react-hook-form";
import "./Login.css";

function Login(): JSX.Element {
    
    const {register, handleSubmit} = useForm<CredentialModel>();

    async function send(credentials: CredentialsModel) {
        try {
            //await auth
            alert("nice");
            window.location.reload();
            // navigate("/"); DOESNT WORK
        } catch (err: any) {
            alert(err.message);
        }
    }


    return (
        <div className="Login">
            <form onSubmit={handleSubmit(send)}>
                <input placeholder="JohnDoe123" type="text" {...register("username")} />
                <input placeholder="my_password" type="password" {...register("password")} />
                <button>Start Chatting!</button>
            </form >
        </div>
    );
}

export default Login;
