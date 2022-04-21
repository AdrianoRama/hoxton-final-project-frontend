import create from 'zustand'


export const useStore = create((set, get) => ({
    user: null,
    users: [],
    image: null,
    userFound: null,
    userFoundImages: [],
    userFoundCollections: [],
    userFollows: false,
    clickedCollection: null,
    collectionImages: [],
    usersWhoSavedImage: [],
    showUserList: false,
    followUserFromList: null,
    collectionsPerImage: [],
    colors: [],
    changeHeaderColor: false,
    userSelected: false,
    imageSelected: true,
    searchValue: '',
    followingForUser: [],
    showUploadForm: false,

    setShowUploadForm: (val) => set({ showUploadForm: val }),
    togleUserSelected: (value) => set({ userSelected: value }),
    togleImageSelected: (value) => set({ imageSelected: value }),

    setSearchValue: (val) => set({ searchValue: val }),

    getUsers: () => {
        fetch('http://localhost:4001/suggested', {
            headers: {
                Authorization: localStorage.token
            }
        })
            .then(resp => resp.json())
            .then(usersFromServer => set({ users: usersFromServer }))
    },

    logIn: (email, password) => {
        fetch('http://localhost:4001/sign-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    localStorage.token = data.token
                    set({ user: data.user })
                }
            })
    },
    validate: () => {
        if (localStorage.token) {
            fetch('http://localhost:4001/validate', {
                headers: {
                    Authorization: localStorage.token
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.error) {
                        alert('Validation failed.')
                    } else {
                        set({ user: data })
                    }
                })
        }
    },
    signUp: (name, email, username, password) => {
        fetch('http://localhost:4001/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, username, password })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    localStorage.token = data.token
                    set({ user: data.user })
                }
            })
    },
    getImageById: (id) => {
        fetch(`http://localhost:4001/oneImage/${id}`)
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    set({ image: data })
                }
            })
    },
    getUserByUsername: (username) => {
        fetch(`http://localhost:4001/users/${username}`)
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    set({ userFound: data })
                    fetch(`http://localhost:4001/collections/${data.id}`)
                        .then(resp => resp.json())
                        .then(data => {
                            if (data.error) {
                                alert(data.error)
                            } else {
                                set({ userFoundCollections: data })
                            }
                        })
                }
            })
    },
    getUserImages: (username) => {
        fetch(`http://localhost:4001/saved/${username}`,

        ).then(resp => resp.json())
            .then(imagesFromServer =>
                set({ userFoundImages: imagesFromServer })
            )

    },

    getCollectionsById: (id) => {
        fetch(`http://localhost:4001/collections/${id}`)
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    set({ userFoundCollections: data })
                }
            })
    },
    createCollection: (name) => {
        return fetch('http://localhost:4001/collections', {
            method: 'POST',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        }).then(res => res.json())
    },

    followUser: (username) => {
        return fetch(`http://localhost:4001/follow`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.token
            },
            body: JSON.stringify({ username })
        }).then(res => res.json())
    },
    unfollowUser: (username) => {
        return fetch(`http://localhost:4001/unfollow`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.token
            },
            body: JSON.stringify({ username })
        }).then(res => res.json())
    },

    setUserFoundCollectionFunc: (data) => {
        set({ userFoundCollections: data })
    },
    setUserFollowsFunction: (val) => {
        set({ userFollows: val })
    },

    setClickedCollection: (data) => {
        set({ clickedCollection: data })
    },
    getCollectionImages: (id) => {
        fetch(`http://localhost:4001/collectionImages/${id}`).then(res => res.json())
            .then(data => {
                set({ collectionImages: data.saved })
            })
    },
    getUsersWhoSavedImage: (imageId) => {
        fetch(`http://localhost:4001/savedImages/${imageId}`, {
            headers: {
                Authorization: localStorage.token
            }
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    set({ usersWhoSavedImage: data })
                }

            })
    },
    setShowUserList: (val) => {
        set({ showUserList: val })
    },
    setFollowUserFromList: (user) => {
        set({ followUserFromList: user })
    },
    getCollectionsPerImage: (imageId) => {
        fetch(`http://localhost:4001/imageCollections/${imageId}`, {
            headers: {
                Authorization: localStorage.token
            }
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    set({ collectionsPerImage: data })
                }
            })
    },

    saveImageToCollection: (imageId, collectionId) => {
        return fetch(`http://localhost:4001/save`, {
            method: 'POST',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ imageId, collectionId })
        }).then(res => res.json())

    },
    setUserFoundCollections: (data) => {
        set({ userFoundCollections: data })
    },
    getColors: () => {
        fetch(`http://localhost:4001/colors`).then(res => res.json())
            .then(data => {
                set({ colors: data })
            })
    },
    editProfile: (name, email, username, password, avatar) => {
        return fetch('http://localhost:4001/update', {
            method: 'PATCH',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, username, password, avatar })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    set({ user: data })
                }
            })
    },
    setNewUser: (data) => {
        set({ user: data })
    },

    setChangeHeaderColor: (data) => {
        set({ changeHeaderColor: data })
    },
    getFollowingForUser: (id) => {
        fetch(`http://localhost:4001/getFollowing/${id}`)
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    set({ followingForUser: data })
                }
            })
    }
}))

