import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';

const Wheels = () => {
    const wheels = [{
        name:'Michelin',
        value:'https://ind-distribution.com/cdn/shop/products/BMW-CS-827M-Wheel_1024x1024.jpg?v=1679507398'
    },
    {
        name:'Euro Spec',
        value:'https://eurospecwheels.com/cdn/shop/products/ScreenShot2022-10-03at4.27.48PM.png?v=1664828900'
    },
    {
        name:'OEM',
        value:'https://www.bmw.ly/content/bmw/marketB4R1/bmw_ly/en_LY/topics/offers-and-services/original-bmw-accessories/bmw-wheels-tyres_2022/jcr:content/par/multicontent_1058093393/tabs/multicontenttab/items/smallteaser_1895034340/image.transform/smallteaser/image.1666264595579.jpg'
    },
    {
        name:'Ventus',
        value:'https://images.squarespace-cdn.com/content/v1/59335dc43e00bec37ebc95e1/1521567944652-6SK4K3HBTP34WY7XELJY/IMG_0416.jpg?format=1000w'
    },{
        name:"Michelin Sport",
        value:"https://assets.shopbmwusa.com/assets/images/highquality/a0263264_6628.jpg"
    }]
    const updateCarWheels = useStoreActions(actions => actions.updateWheels);
    const car = useStoreState((state) => state.car);
    console.log(car)

    
  return (
    <div className="options-container" >
            <div className="options-grid">
            {wheels.map((color) => {
                return (
                    <div  onClick = {() => updateCarWheels(color.name)} className="option-item"style={{background: `url(${color.value}) center`,backgroundSize: "cover" }} key={color.name}>{color.name}</div>
                )
            })}
            </div>
    </div>
  )
}

export default Wheels