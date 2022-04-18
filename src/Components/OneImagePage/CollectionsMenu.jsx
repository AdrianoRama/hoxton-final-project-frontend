import React, { useEffect, useState } from 'react'
import { useStore } from '../../Store'

export default function CollectionsMenu() {
    const user = useStore(store => store.user)
    const getCollectionsById = useStore(store => store.getCollectionsById)
    const userFoundCollections = useStore(store => store.userFoundCollections)
    const collectionsPerImage = useStore(store => store.collectionsPerImage)
    const [filteredCollections, setFilteredCollections] = useState([])

    useEffect(() => {
        if (user) {
            getCollectionsById(user.id)
            let filtered = []
            userFoundCollections.map(c => filtered.push(c.id))
            const result = collectionsPerImage.map(o => {
                if (filtered.includes(o.id)) {
                    return o;
                }
            })

            const match = userFoundCollections.filter(c => {
                const m = result.filter(o => o.id !== c.id)
                if (m.length > 0) {
                    return true;
                }
            })
            setFilteredCollections(match)

        }
    }, [user, userFoundCollections])
    console.log('filteredCollections:', filteredCollections)
    return (
        <div className="app__header-add__collection__menu">
            <div className={true ? 'add-drop__collection__menu' : 'add-drop-off__collection__menu'}>
                {filteredCollections.length > 0 ?
                    filteredCollections.map(collection => <div className='collection__container__list'>
                        <span className='collection__name'>{collection.name}</span>
                        <span className="collection__image__count">{collection._count.saved}</span>
                    </div>)
                    :
                    userFoundCollections.map(collection => <div className='collection__container__list'>
                        <span className='collection__name'>{collection.name}</span>
                        <span className="collection__image__count">{collection._count.saved}</span>
                    </div>)
                }



            </div>
        </div>
    )
}
