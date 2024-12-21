import styles from "./components/Site.module.css";
import { Adidas } from './components/pages/Adidas';
import { Abibas } from './components/pages/Abibas';
import { Puma } from './components/pages/Puma';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Error404 } from './components/pages/Error404';
import { NavLink } from 'react-router-dom';
import { Model } from './components/pages/Model';
// import { S } from './components/pages/_styles'

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    MODEL: '/:model/:id',
    PAGEERROR: '/page/error',
} as const


function App() {

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div className={styles.navWrapper}>
                        <NavLink to={PATH.ADIDAS}>Adidas</NavLink>
                    </div>
                    <div className={styles.navWrapper}>
                        <NavLink to={PATH.PUMA}>Puma</NavLink>
                    </div>
                    <div className={styles.navWrapper}>
                        <NavLink to={PATH.ABIBAS}>Abibas</NavLink>
                    </div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to={PATH.ADIDAS}/>} />

                        <Route path={PATH.ADIDAS} element={<Adidas/>} />
                        <Route path={PATH.PUMA} element={<Puma/>} />  
                        <Route path={PATH.ABIBAS} element={<Abibas/>} />
                        <Route path={PATH.MODEL} element={<Model/>} /> 
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

