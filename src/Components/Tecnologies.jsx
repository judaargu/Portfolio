import React from "react";
import Style from "./Styles/Tecnologies.module.css"

export const Tecnologies = () => {
    return (
        <div>
            <h2 className={Style.h2}>➡ Tecnologías</h2>
            <div className={Style.tecnology}>
                <span><img src="/src/Icons/js.png" alt="javascript" />Javascript</span>
                <span><img src="/src/Icons/typescript.png" alt="typescript" />Typescript</span>
                <span><img src="/src/Icons/firebase.png" alt="firebase" />Firebase</span>
                <span><img src="/src/Icons/react.png" alt="react" />ReactJS</span>
                <span><img src="/src/Icons/redux.png" alt="redux" />Redux</span>
                <span><img src="/src/Icons/HTML5.png" alt="HTML5" />HTML5</span>
                <span><img src="/src/Icons/CSS.png" alt="CSS" />CSS</span>
                <span><img src="/src/Icons/express.png" alt="express" />ExpressJS</span>
                <span><img src="/src/Icons/node.png" alt="NodeJS" />NodeJS</span>
                <span><img src="/src/Icons/git.png" alt="git" />git</span>
                <span><img src="/src/Icons/github.png" alt="github" />gitHub</span>
                <span><img src="/src/Icons/postgresql.png" alt="postgresql" />PostgreSQL</span>
                <span><img src="/src/Icons/mysql.png" alt="mysql" />MySQL</span>
                <span><img src="/src/Icons/python.png" alt="python" />Python</span>
            </div>
        </div>
    )
}