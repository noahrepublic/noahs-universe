
import avatar from "../images/avatar.png";

const Body = () => { 
    return (
        <div className="about">
            <img id="avatar" src={avatar} alt="Avatar"/>
            <h1 id="txt">About Me</h1>
            <p id="txt">
                Hello! My name is Noah, I am an Canadian self-taught programmer. I started programming in late 2018-2019 on the platform "ROBLOX" (Lua). 
                I love technical back-end systems and work hard on keeping a clean code base!

                I am always thriving to try and learn new things in the world of technology.

                To keep up to date with my projects take a look at my Github and other socials!

                Here is a list of languages I know:
                

            </p>
            <br/>
            <ul>
                    <li>C#</li>
                    <li>C++</li>
                    <li>Python</li>
                    <li>Lua</li>
                    <li>JavaScript</li>
            </ul>
            <br/>
            <br/>
            <h4> "Creativity is intelligence having fun." - Albert Einstein</h4>
        </div>
    )
}

export default Body;