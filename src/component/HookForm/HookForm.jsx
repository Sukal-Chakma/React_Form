import useInputField from "../../hooks/useInputField";


const HookForm = () => {

    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
     const [password, passwordOnChange] = useInputField('');



    const handleSubmit = e =>{
        e.preventDefault();
        console.log('Submit', name, email, password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={nameOnChange} defaultValue={name} placeholder="Your name" />
                <br />
                <input defaultValue={email} onChange={emailOnChange} type="email" name="email"  id="" />
                <br />
                <input type="password" name="password" defaultValue={password} placeholder="password" onChange={passwordOnChange} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;