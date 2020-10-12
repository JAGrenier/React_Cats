import React from 'react'
import CatCard from './CatCard'

export default function CatsContainer({cats, clickAction, killMyCat}) {

    const showCats = () => cats.map(cat => <CatCard cat={cat} key={cat.id} clickAction={clickAction} killMyCat={killMyCat}  /> )

    return (
        <section className="cat-container">
            {showCats()}
        </section>
    )
}
