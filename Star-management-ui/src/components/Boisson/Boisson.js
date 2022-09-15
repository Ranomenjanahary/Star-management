import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import './Boisson.css';
import Nav from '../TopNav/Nav';

function Boisson() {
    const [boissonPage, setBoissonPage] = useState([]);
    const [boissonDetails,setBoissonDetails] = useState()

    const getDrink = ()=>{  try {
        const promise = axios.get('http://localhost:8080/drinkings');
        promise.then((response)=>{
            console.log(response.data[0].categories[0].name)
            setBoissonPage(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    } catch (error) {
        console.log(error)
    }}
    useEffect(()=>{
        getDrink()
    },[])
    useEffect(()=>{
        if(boissonPage){
            setBoissonDetails(
                boissonPage
            )
        }
    },[boissonPage])
    const handleButton = async (id)=>{
        try {
            const promise = axios.delete(`http://localhost:8080/drinkings/${id}`);
            promise.then((response)=>{
                getDrink()
            }).catch((err)=>{
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='ListeContainer'>
            <Nav titre="LISTE DES BOISSONS" />
            <Card>
                <div className='ListeContainer__liste'>
                    <table className='ListeContainer__liste__table'>
                        <thead>
                            <th className="ResultContainer__body__item">Nom boisson</th>
                            <th className="ResultContainer__body__item">Prix</th>
                            <th className="ResultContainer__body__item">Catégorie</th>
                            <th className="ResultContainer__body__item">Option</th>
                        </thead>
                        <tbody>
                            {boissonDetails && boissonDetails.map((element)=> (
                                <>
                                    <tr className="ResultContainer__body" key={element.id}>
                                        <td className="ResultContainer__body__item">{element.name}</td>
                                        <td className="ResultContainer__body__item">{element.price} Ar</td>
                                        <td className="ResultContainer__body__item">{`${element.categories[0]?.name}`}</td>
                                        <td className="ResultContainer__body__item">
                                            <button className="deleteButton" onClick={()=>handleButton(element.id)}>Delete</button>
                                        </td>
                                    </tr>

                                </>
                            ))}
                            
                        </tbody>
                    </table>
                </div>

            </Card>
        </div>
    )
}

export default Boisson
