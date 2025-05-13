import React from 'react'
import style from './About.module.css'
import image from 'C:/Users/vivek/OneDrive/Desktop/ReactJs/My_Project/src/assets/IMG_20241020_100722.jpg'

const About = () => {
    return (
        <>
        <div id={style.main}>
            <div id={style.image}>
                <img src={image} alt="" />
            </div>
            <div id={style.info}>
                <h1>Hii, I Am Vivek Chavan</h1>
                <p>
                    I'm just a curious guy who loves creating cool and fun stuff. I like to dive into different areas<br></br>
                    just because they intrigue me, and once I’ve got the hang of it, I move on to something new.<br/>
                    I’m all about crafting enjoyable experiences and finding creative, realistic solutions<br/>
                    that fit the context and work with the challenges at hand.<br/>
                </p>
            </div>
        </div>
        <div id = {style.main1}>
            <h1>Let Know More About Me</h1>
            <div >
            <div>
                <h3>Education</h3><br></br>
                <table>
                    <tr>
                        <th>Degree</th>
                        <th> CGPA/Percentage</th>
                        <th> PassOut Year</th>
                    </tr><br />
                    <tr>
                        <td>B.E in Computer Science And Engineering,Amaravati University</td>
                        <td>8.09 / 10</td>
                        <td>2024</td>
                    </tr><br />
                    <tr>
                        <td>HSC in Science,State Board of Maharashtra</td>
                        <td>61.38 %</td>
                        <td>2020</td>
                    </tr><br />
                    <tr>
                        <td>SSC , State Board of Maharashtra</td>
                        <td>79.60%</td>
                        <td>2018</td>
                    </tr>
                </table><br /><br />

            <div id={style.box1}>

                <h3>Skills</h3>
                <li>Core Java</li>
                <li>Web Technology</li>
                <li>React Js</li>
                <li>SQL</li>
                <li>JDBC</li>
                <li>Hibernate</li>
                <li>Spring Framework</li>

            </div>
            </div>

            </div>
        </div>
        </>
    )
}

export default About