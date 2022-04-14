import create from 'zustand'


export const useStore = create((set, get) => ({
    user: null,
    image: null,
    userFound: null,
    userFoundImages: [],
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
                }
            })
    },
    getUserImages: (username) => {
        fetch(`http://localhost:4001/saved/${username}`,
            { headers: { Authorization: localStorage.token } }
        ).then(resp => resp.json())
            .then(imagesFromServer =>
                set({ userFoundImages: imagesFromServer })
            )

    },



}))