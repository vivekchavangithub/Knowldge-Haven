import { useState } from "react"

// const Form = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [formData, setFormdata] = useState();
//     const [password, setPassword] = useState("");
//     const [gender, setGender] = useState("");
//     const [qualific, setQualific] = useState("");

//     function handleSubmit(e) {

//         e.preventDefault();

//         let data = {
//             name,
//             email,
//             password,
//             gender,
//             qualific,
//         };
//         setName("");
//         setEmail("");
//         setPassword("");
//         setGender("");
//         setQualific("");
//         setFormdata([{...formData, data }]);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="">Name: </label>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//             <br />
//             <br />
//             <label htmlFor="">Email: </label>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             <br />
//             <br />

//             <label htmlFor="">Password: </label>
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             <br />
//             <br />

//             <label>Gender: </label>
//             <input type="radio" name="gender" value="Male" onChange={() => setGender("Male")}/>Male
//             <input type="radio" name="gender" value="Female" onChange={() => setGender("Female")}/>Female
//             <input type="radio" name="gender" value="Other" onChange={() => setGender("Other")}/>Other
//             <br />
//             <br />

//             <label htmlFor="">Qualification: </label>
//             <select value={qualific} onChange={(e)=>setQualific(e.target.value)}>
//                 <option value="">select</option>
//                 <option value="B.E">B.E</option>
//                 <option value="BSC" >BSC</option>
//                 <option value="B.Tech">B.Tech</option>
//             </select>
//             <br />
//             <br />

//             <button type="submit" >Submit</button>
//         </form>
//     )
// }

// export default Form


//! ---- Registration form


const Form = () => {

    const [name, setName] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [skills, setSkills] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")
    const [formData,setFormdata] = useState()

    function handle(e) {

        e.preventDefault();

        let data = {
            name,
            email,
            password,
            gender,
            qualification,
            skills,
        }

        setName("")
        setEmail("")
        setPassword("")
        setGender("")
        setSkills("")
        setQualification("")
        setFormdata([{...formData,data}])
    }

    function handlecheck(e){
       const skill = e.target.value;
       const isChecked = e.target.checked;

       setSkills((pre) =>{
        if(isChecked){
            return {...pre,[skill]: isChecked };
        }else{
            const unCheckedSkill = {...pre};
            delete unCheckedSkill[skill];
            return unCheckedSkill;
        }
       })
    }
    return (
        <div id="formdiv">

            {/* <h1>Registration Form</h1> */}
            <div id ="subform">
                
            <h5>Registration Form</h5>
            <form onSubmit={handle}>

                <label htmlFor="">Name</label><br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
                <label htmlFor="">Email</label><br />
                <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <label htmlFor="">Password</label><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br/>
                
                <label htmlFor="">Skills</label><br />
                <input type="checkbox" name="skills" value="HTML" checked={skills["HTML"]} onChange={handlecheck}/> HTML <br />
                <input type="checkbox" name="skills" value="CSS" checked={skills["CSS"]} onChange={handlecheck}/> CSS  <br />
                <input type="checkbox" name="skills" value="JavaScript" checked={skills["JavaScript"]} onChange={handlecheck}/> JavaScript <br /><br />

                <label htmlFor="">Gender</label><br />
                <input type="radio" name="gender" onChange={(e) => setGender("Male")} /> Male <br />
                <input type="radio" name="gender" onChange={(e) => setGender("FeMale")} /> FeMale <br />
                <input type="radio" name="gender" onChange={(e) => setGender("Other")} /> other <br /><br />

                <label htmlFor="">Qualification</label><br />
                <select value={qualification} onChange={(e) => setQualification(e.target.value)}>
                    <option value=""> Select..</option>
                    <option value="B.E"> B.E</option>
                    <option value="B.Tech"> B.Tech</option>
                    <option value="BSC"> BSC</option>
                </select><br /><br/>

                <button>Submit</button>
            </form>
            </div>
        </div>
    )
    
}

export default Form