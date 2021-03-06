import React from 'react'
import Droplet from '../static/Logo/Drop.png'
import Wind from '../static/Logo/Wind.png'
import Electric from '../static/Logo/Electric.png'
import NonNatural from '../static/Logo/NonNatural.png'
import IndividualProject from './IndividualProject'
import ProjectsCSS from '../static/stylesheets/ProjectArea.css'

export default class ProjectArea extends React.Component{

    render(){

        return(
            <div className={"row"} id="PRODUCTS" style={{marginTop:100, paddingBottom: 50}}>
                <h1 style={{textAlign:"center",marginBottom:"25px"}}>
                    PRODUCTS
                </h1>

                <IndividualProject  image={Droplet} header={"WATER"} link={"/water"}>
                    <p> Imagine sustainability, not only of energy but also of water.
                        Taking atmospheric water generators to another level. Giving you
                        the ability to produce your water at home, extracting it directly from air.
                    </p>

                </IndividualProject>

                <IndividualProject image={Wind} header={"WIND"} link={"/naturalWind"}>
                    <p> Why limit yourself to produce energy
                        only on day hours when you can do it during
                        all day and all night? With our vertical wind turbines
                        we can give you a constant source of energy to decrease
                        your energy consumption at home.
                    </p>
                </IndividualProject>

                <IndividualProject image={NonNatural} header={"NON-NATURAL WIND"} link={"/nonNaturalWind"}>
                    <p> Have you ever felt the wind produced by the speed of a car? At Watric Energy Resources, we use
                        the wind produced by cars to generate energy. This energy is then used to illuminate our
                        highways, bringing energy sustainability to our roads.
                    </p>
                </IndividualProject>

                <IndividualProject image={Electric} header={"ILLUMINATION"} link={"/illumination"}>
                    <p>
                        Have you noticed that even if there is no
                        traffic flow, the lights on the road remain on?
                        With our smart lighting system, we eliminate the
                        waste of energy and save up to a 42% of the energy
                        used on illumination.
                    </p>
                </IndividualProject>

            </div>);
    }

}