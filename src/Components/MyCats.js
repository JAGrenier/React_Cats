import React from 'react'
import CatCard from './CatCard'

export default function MyCats({myCats, clickAction}) {

    const showMyCats = () => myCats.map(cat => <CatCard clickAction={clickAction} key={cat.id} cat={cat}  /> )

    return (
        <ul className="my-cats">
            {showMyCats()}
        </ul>
    )
}
