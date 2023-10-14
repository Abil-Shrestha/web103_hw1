import React, {useState, useEffect} from 'react'
import '../App.css'
import Colors from '../components/Colors'
import Roof from '../components/Roof'
import Wheels from '../components/Wheels'
import Interior from '../components/Interior';
import Car from '../components/Car'
import carsAPI from '../../services/api';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateCar = () => {
    const [elements,setElements] = useState(1)
    const [carName , setCarName ] = useState('')
    const updateCarName = useStoreActions((state) => state.updateName);
    const car = useStoreState((state) => state.car)
    const reset = useStoreActions ((state) => state.resetCar)

    
    const warn = () => toast.warn("Combo not possible!",{
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    const success = () => toast.success("Car created successfully!",{
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
   
    useEffect(() => {
        updateCarName(carName)
      },[carName]);
    
    const validate = () => {
        console.log(car)
        if (car.roof === "Camper" && car.wheels === "Michelin Sport"){
            return false
        }
        return true
    }
    const createCar = async (event) => {
        event.preventDefault();
        if(validate()){
            try {
                console.log("Creating car...");
                await carsAPI.createCars(car);
                success()
                reset()
            }
            catch (error) {
                console.error("Error creating car:", error.message);
            }
        } else {
            reset()
            warn()
        }
    };

    

    return (
        <>
        <div class="create-car">
            <div class="create-car-options">
                <div id="customization-options" class="car-options">
                    <div id="car-options" aria-hidden="true">
                        <button onClick={() =>setElements(1)}>Color</button></div>
                    <div id="car-options">
                        <button onClick={() =>setElements(2)}>roof</button>
                    </div>
                    <div id="car-options">
                        <button onClick={() =>setElements(3)}>wheels</button>
                    </div>
                    <div id="car-options" onClick={() =>setElements(4)}>
                        <button>interior</button>
                    </div>
                    <ToastContainer />
                    </div>
                </div>
                    <div class="create-car-name">
                        <form className="create-car-name" >
                            <input type="text" id="name" value ={carName} name="name" onChange={(e) => setCarName(e.target.value)} placeholder="M5 competition" />
                            <input type="submit" class="create-car-button" value="Create Car" onClick={createCar}/>
                        </form>
                    </div>
                    
        </div>
        {elements === 1 && <Colors />}
        {elements === 2 && <Roof />}
        {elements === 3 && <Wheels />}
        {elements === 4 && <Interior />}
        <Car />
        </>
                
    )
}

export default CreateCar