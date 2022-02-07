/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import * as petService from '../../services/petService';
const PetDetails = ({
    match
}) => {
    let [pet, setPet] = useState({})
    useEffect(() => {
        petService.getOne(match.params.petId)
            .then(res => setPet(res))
    }, [match])

    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>
                Pet counter: {pet.likes}
                <a href="#"
                ><button className="button">
                        <i className="fas fa-heart"></i> Pet
                    </button></a>
            </p>
            <p className="img">
                <img src={pet.imageURL} />
            </p>
            <p className="description">{pet.description}</p>
        </section>
    )
}
export default PetDetails;