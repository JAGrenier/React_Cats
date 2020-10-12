import React from 'react'

export default function CatCard ({cat, clickAction, killMyCat}) {

    function handleClick(){
        clickAction(cat)
    }

    function handleDelete(event){
        event.preventDefault()
        killMyCat(cat)
    }

        return (
            <ul className="card" >
                <h2>{cat.name}</h2>
                <li>Age: {cat.age}</li>
                <li>Chonkyness: {cat.weight}lbs</li>
                <img src={cat.image} 
                alt={`${cat.name}`}
                onClick={handleClick}
                />
                <button onClick={handleDelete}>💀</button >

            </ul>
        )
    
}
