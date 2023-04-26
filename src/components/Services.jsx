import React from 'react'
import './Services.css'
import kep from '/bg43.jpg'

const Services = () => {
    return (
        <div className='services' id='services'>
            <div className='container'>
                <h1 className='font-bold'>Szolgáltatások</h1>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={kep} alt="" />
                        <div className="details">
                            <h2>Lorem</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, aliquid!</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={kep} alt="" />
                        <div className="details">
                            <h2>Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus totam deserunt facere sapiente ab fugit.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={kep} alt="" />
                        <div className="details">
                            <h2>Dolor</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nihil aperiam rerum sit facere explicabo?</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={kep} alt="" />
                        <div className="details">
                            <h2>Sit</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus rerum illo incidunt, culpa deleniti.</p>
                        </div>
                    </div>
                </div>
                {/* <div className='content'>
                    <div className='card'>
                        <img src={gyogytorna} alt="3d scan" />
                        <div className="details">
                            <h2>Gyógytorna és<br />masszázs</h2>
                            <p>Fizioterapeutáink és masszőreink segítségével javíthatja mozgásszervi funkcióit és enyhíthet fájdalmain.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={eletmod} alt="cad tervezés" />
                        <div className="details">
                            <h2>Életmód tanácsadás</h2>
                            <p>Dietetikusunk segítséget nyújt Önnek, hogyan érezze magát jobban  a bőrében, legyen energikusabb és egészségesebb.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={laborvizsgalat} alt="3d nyomtató beállítás javítás" />
                        <div className="details">
                            <h2>Laborvizsgálatok</h2>
                            <p>A laborvizsgálatok során számos információhoz juthatunk szervezetünkkel kapcsolatban, így lehetőségünk van felismerni a különböző betegségeket.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={ultrahang} alt="3d nyomtató beállítás javítás" />
                        <div className="details">
                            <h2>Ultrahang és<br />röntgen vizsgálatok</h2>
                            <p>A modern képalkotó eljárásokkal fájdalommentesen mérjük fel a páciens egészségügyi állapotát.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Services
