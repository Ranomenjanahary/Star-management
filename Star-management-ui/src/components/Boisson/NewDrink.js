import React, {useEffect, useState} from 'react';
import Nav from "../TopNav/Nav";
import Card from "../Card/Card";
import Input from "../Useful/Input";
import Option from "../Useful/Option";
import Button from "../Useful/Button";
import axios from "axios";

const NewDrink = () => {
    const[drinkName, setDrinkName] = useState([])
    const[category, setCategory] = useState([])
    const[drinkCategory, setDrinkCategory] = useState()
    const[price, setPrice] = useState()

    const handleButton = async ()=>{
        try {
            const promise = axios.put(`http://localhost:8080/drinkings`,[
                {name: `${drinkName}`, price: `${price}`, category: `${drinkCategory}`}
            ]);
            promise.then((response)=>{
                console.log(response)
            }).catch((err)=>{
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }




    useEffect(()=>{
        try {
            const promise = axios.get(`http://localhost:8080/categories`);
            promise.then((response)=>{
                let cat = []
                response.data.map((element) =>
                    (cat.push(element.name))
                )
                setCategory(cat)
                console.log(cat)
            }).catch((err)=>{
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    },[])
    const categoryName = (e)=>{
        setDrinkCategory(e)
    }
    return (
        <>
            <div className='ListeContainer'>
                <Nav titre="LISTES DES BOISSONS"/>

                <Card>
                    <div className="LoginContainer__Forms">
                        <Input type="text" inputLabel="Drink name :" collectInfo={setDrinkName}/>
                        <Input type="text" inputLabel="price :" collectInfo={setPrice}/>

                        <Option
                                    select={category[0]}
                                    choiceAvaible={category}
                                    collectInfo={categoryName}
                                    optionLabel="Category:"
                            />

                        <Button buttonLabel="ENREGISTRER" OnClick={()=>{handleButton()}}/>
                    </div>


                </Card>
            </div>
        </>
    );
};

export default NewDrink;