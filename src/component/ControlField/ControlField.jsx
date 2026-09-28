import { use, useState } from "react";


const ControlField = () => {
     const [password, setPassword] = useState('');
     const [error, setError] = useState('');
     const [email, setEmail] = useState('');
     const [name, setName] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Name:',name, 'email:', email, 'password:', password)

    }

    const handlePasswordOnChange = e =>{
        console.log(e.target.value)
        setPassword(e.target.value)
        
        if(password.length < 6){
            setError('Set password must be 6 or longer!')
        }
        else{
            setError('')
        }
    }

    const handleEmailOnChange = (e)=>{
        // console.log()
        setEmail(e.target.value)
    }

    const handleNameChange = e =>{
        setName(e.target.value)
    }

    return (
        <div>
            <form onClick={handleSubmit}>
                <input type="text" onChange={handleNameChange} name="name" defaultValue={name} placeholder="name" />
                <br />
                <input type="email" onChange={handleEmailOnChange} defaultValue={email} name="email" id="" placeholder="Email" required />
                <br />
                <input type="password" id="" onChange={handlePasswordOnChange} defaultValue={password} name="password" placeholder="Password" required />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color: 'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ControlField;