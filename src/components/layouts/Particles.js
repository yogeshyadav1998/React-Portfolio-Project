import React from 'react'
import Particles from 'react-particles-js'
import { background } from '../../profile'

const ParticlesBackground = () => {
    return (
        <div className="particle">
            { background.type === 'Snow' && <Particles
            height="100vh"
            width="100%"
                params={{
                particles: {
                    number: {
                        value: 30,
                        density: {
                            enable: false,
                            value_area:900
                        }
                    },
                    color: {
                        value: "orange"
                    }
                }
            }}/>}
            { background.type === 'Particle' && <Particles
            height= "100vh"
            width= "100vw"
            params={{
            particles: {
                number: {
                    value: 30,
                    density: {
                        enable: false,
                        value_area:900
                    }
                },
                color: {
                    value: "#000000"
                }
                
            }
        }} />}
        </div>
    )
}

export default ParticlesBackground
