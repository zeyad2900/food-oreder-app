import Card from "../UI/Card";
import classes from "./AvilableMeals.module.css";
import MealItem from "./MelasItem/MelaItem";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
    },
];

const AvailableMeals = () => {
    return (
        <Card className={classes.meals}>
            <ul>
                {DUMMY_MEALS.map((ele) => {
                    return <MealItem key={ele.id} id={ele.id} name={ele.name} des={ele.description} price={ele.price} />;
                })}
            </ul>
        </Card>
    );
};
export default AvailableMeals;
