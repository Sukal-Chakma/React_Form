

const SimpleForm = () => {
    const handleForm = (e)=>{
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
     return (
        <div>
            <form onClick={handleForm}>
                <input type="text" value={``} name="name" placeholder="Your name "/>
                <br />
                <input type="email" value={``} email="email" placeholder="your Email" />
                <br />
                 <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;