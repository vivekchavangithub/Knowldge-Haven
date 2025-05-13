import styled from "styled-components"

// const StyledComponent = () =>{
//     const Logo = styled.div`
//       height:100px;
//       width:300px;
//       background-color:black;
//       & img{
//         height:100%;
//         width:100%;
//       }
//     `
//     return(

//         <Logo>

//             <img src="./src/assets/tcs-logo-1.svg" alt="" />

//         </Logo>


//     )
// }

// export default StyledComponent


//! --- Task

const StyledComponent = () => {

    const Main = styled.div`
        height:1000px;
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        padding:10px;
        background-color: darkseagreen;
         `

    const Sub = styled.div`
         
         height:30%;
         width:330px;
         background-color:white;
         display:flex;
         align-items: center;
         justify-content: center;   
    `
    const Header = styled.h3`
       
    `
    const Form = styled.form`
       background-color:white;
       display:flex;
       flex-direction:column;        
    `
    const Lable = styled.label`
        font-weight: bold;
    `
    const Button = styled.button`
        width:300px;
        height:50px;
        background-color:green;       
    `
    const Input = styled.input`
      width:300px;
      height:50px
         
    `
    const Br = styled.br`
    `
    return (
        <Main>
            <Header>
                CONTACT FORM
            </Header>
            <Sub>

                <Form>
                    <Lable forName="Email">
                        Email
                    </Lable>
                    <Input type="email" placeholder="Enter Email">

                    </Input>
                    <Br></Br>


                    <Lable>
                        Password
                    </Lable>


                    <Input type="password" placeholder="Enter Password">

                    </Input>
                    <Br></Br>

                    <Button>
                        Submit
                    </Button>
                </Form>

            </Sub>
        </Main>
    )
}

export default StyledComponent