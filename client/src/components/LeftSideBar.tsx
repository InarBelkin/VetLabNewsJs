import React from 'react';
import s from './LeftSideBar.module.css'

const LeftSideBar: React.FC = () => {
    return (
        <div className={s.cAll}>
            <div className="sticky-top">
                <div className="nav flex-column">

                    <p>первый</p>
                    <p>втоойо</p>
                    <p>Д3афийо</p>
                    <p>Да что</p>
                    <a href="#_" className="nav-link">Link</a>
                    <a href="#_" className="nav-link">Link</a>
                    <a href="#_" className="nav-link">Link</a>
                    <a href="#_" className="nav-link">Link</a>
                    <a href="#_" className="nav-link">Link</a>
                </div>
            </div>
        </div>
    );
};

export default LeftSideBar;