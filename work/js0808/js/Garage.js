import Car from "./js/Car.js"

//차고 컴포넌트 구성부
function Garage() {
    return (
        <>
            <h1>Which car is in garage?</h1>
            <Car color="red" name="Genesis" />
            <Car color="blue" name="Sonata" />
            <Car color="pink" name="BMW" />
        </>
    )
}

export default Garage