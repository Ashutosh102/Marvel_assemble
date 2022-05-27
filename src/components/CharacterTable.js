import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterTable = ({items,isLoading}) => {
    return isLoading ? <h1>Loading</h1> :
    <section className="contents">
        {
            items.map(item=>(
                <CharacterItem key={item.id} item={item}></CharacterItem>
            ))
        }
    </section>
}

export default CharacterTable
