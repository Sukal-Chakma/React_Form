import { use, useState } from "react";


const ControlField = () => {
     const [password, setPassword] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const handlePasswordOnChange = e =>{
        console.log(e.target.value)
    }

    return (
        <div>
            <form onClick={handleSubmit}>
                <input type="email" name="email" id="" placeholder="Email" required />
                <br />
                <input type="password" id="" onChange={handlePasswordOnChange} defaultValue={password} name="password" placeholder="Password" required />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlField;