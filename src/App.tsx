import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import { PageOne } from './components/pages/PageOne';
import { PageThree } from './components/pages/PageThree';
import { PageTwo } from './components/pages/PageTwo';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Error404 } from './components/pages/Error404';
import { NavLink } from 'react-router-dom';
// import { S } from './components/pages/_styles'

const PATH = {
    PAGE1: 'page1',
    PAGE2: 'page2',
    PAGE3: 'page3',
    PAGEERROR: '/page/error',
} as const


function App() {

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div className={styles.navWrapper}>
                        <NavLink to={PATH.PAGE1}>Page 1</NavLink>
                    </div>
                    {/* <div>
                        <Link to={"/page1"}>Page 1</Link>
                    </div> */}
                    <div className={styles.navWrapper}>
                        <NavLink to={PATH.PAGE2}>Page 2</NavLink>
                    </div>
                    {/* <div>
                        <Link to={"/page2"}>Page 2</Link>
                    </div> */}
                    <div className={styles.navWrapper}>
                        <NavLink to={PATH.PAGE3} >Page 3</NavLink>
                    </div>
                    {/* <div>
                        <Link to={"/page3"}>Page 3</Link>
                    </div> */}
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to={PATH.PAGE2}/>} />

                        <Route path={PATH.PAGE1} element={<PageOne/>} />
                        <Route path={PATH.PAGE2} element={<PageTwo/>} />  
                        <Route path={PATH.PAGE3} element={<PageThree/>} />

                        {/* <Route path={PATH.PAGEERROR} element={<Error404/>} /> */}
                        {/* <Route path="*" element={<Navigate to={PATH.PAGEERROR}/>} /> */}
                        <Route path="*" element={<Error404 />} />

                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;

