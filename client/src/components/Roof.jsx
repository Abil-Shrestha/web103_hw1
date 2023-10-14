import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';

const Colors = () => {
    const roofs = [{
        name:'Grafiiti',
        value:'https://i.pinimg.com/564x/20/7c/33/207c33743fd5c82f9288dad679552cab.jpg'
    },
    {
        name:'Sleek',
        value:'https://i.pinimg.com/564x/bd/56/95/bd56955c57aa1aba1f41dd0b70dec53e.jpg'
    },
    {
        name:'Stylish',
        value:'https://i.pinimg.com/564x/0b/43/7c/0b437cc430f29c5185b95320b5cea29d.jpg'
    },
    {
        name:'No Roof',
        value:'https://i.pinimg.com/564x/b5/2d/da/b52dda73ee34e20126acb6f505ef6e99.jpg'
    },{
        name:'Camper',
        value:'https://i.pinimg.com/564x/de/94/b1/de94b174b56f7c9dfc864268d2521f6d.jpg'
    },
    {
        name:'Adventurer',
        value:'https://i.pinimg.com/564x/4b/ab/ff/4babff35cecd1560ff873da03b1c8876.jpg'
    },]
    const updateCarRoof = useStoreActions(actions => actions.updateRoof);
    const car = useStoreState((state) => state.car);
    console.log(car)

    
  return (
    <div className="options-container" >
            <div className="options-grid">
            {roofs.map((color) => {
                return (
                    <div  onClick = {() => updateCarRoof(color.name)} className="option-item"style={{background: `url(${color.value}) center`,backgroundSize: "cover" }} key={color.name}>{color.name}</div>
                )
            })}
            </div>
    </div>
  )
}

export default Colors