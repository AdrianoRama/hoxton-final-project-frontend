import { ExpandLessSharp } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useStore } from '../../Store'

export default function CollectionsMenu() {
    const user = useStore(store => store.user)
    const getCollectionsById = useStore(store => store.getCollectionsById)
    const userFoundCollections = useStore(store => store.userFoundCollections)
    const setUserFoundCollections = useStore(store => store.setUserFoundCollections)
    const collectionsPerImage = useStore(store => store.collectionsPerImage)
    const [filteredCollections, setFilteredCollections] = useState([])
    const image = useStore(store => store.image)
    const getCollectionsPerImage = useStore(store => store.getCollectionsPerImage)

    const saveImageToCollection = useStore(store => store.saveImageToCollection)



    useEffect(() => {
        if (user) {
            getCollectionsById(user.id)

            // if (collectionsPerImage.length === userFoundCollections.length) {
            //     setFilteredCollections([])
            // } else if (collectionsPerImage.length === 0) {
            //     setFilteredCollections(userFoundCollections)
            // }
            // else {
            //     let filtered = []
            //     userFoundCollections.map(c => filtered.push(c.id))
            //     const result = collectionsPerImage.map(o => {
            //         if (filtered.includes(o.id)) {
            //             return o;
            //         }
            //     })

            //     const match = userFoundCollections.filter(c => {
            //         const m = result.filter(o => o.id !== c.id)
            //         if (m.length > 0) {
            //             return true;
            //         }
            //     })
            //     setFilteredCollections(match)



            //         console.log('userFoundCollections:', userFoundCollections)
            //         console.log('collectionsPerImage: ', collectionsPerImage)
            //         console.log('match: ', match)
            //         console.log('result', result)


            // }
        }
    }, [])

    console.log('filteredCollections:', filteredCollections)
    console.log('userFoundColl...', userFoundCollections)
    //userFoundCollections delayed

    function saveImageToCollectionFunc(imageId, collectionId) {
        saveImageToCollection(imageId, collectionId).then(data => {
            getCollectionsPerImage(image?.id)
        })

    }



    return (
        <div className="app__header-add__collection__menu">
            <div className={true ? 'add-drop__collection__menu' : 'add-drop-off__collection__menu'}>

                {userFoundCollections.map(collection => <div onClick={() => {
                    saveImageToCollectionFunc(image?.id, collection.id)
                }} className='collection__container__list'>
                    <span className='collection__name'>{collection.name}</span>
                    <span className="collection__image__count">{collection._count.saved}</span>
                </div>)}


            </div>
        </div>
    )
}
