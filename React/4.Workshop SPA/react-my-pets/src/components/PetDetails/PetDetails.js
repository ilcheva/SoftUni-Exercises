/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
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

    const onPetButtonClickHandler = () => {
        let incrementedLikes = Number(pet.likes) + 1
        petService.pet(match.params.petId, incrementedLikes)
            .then(() => {
                setPet(state => ({ ...state, likes: incrementedLikes }))

                // setPet(updatePet)
            })
    }

    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>
                Pet counter: {pet.likes}

                <button className="button" onClick={onPetButtonClickHandler}>
                    <i className="fas fa-heart"></i> Pet
                </button>
            </p>
            <p className="img">
                <img src={pet.imageURL} />
            </p>
            <p className="description">{pet.description}</p>
            <div className="pet-info">
                <Link to={`/pets/details/${pet.id}/edit`}><button className="button">Edit</button></Link>
                <Link to="/"><button className="button">Delete</button></Link>
            </div>
        </section>
    )
}
export default PetDetails;