//блок catch должен быть не в апи, а в индексе при вызове метода. 
class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    //подгружаем данные пользователя с сервера
    getUserInfo(token) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
        })
            .then(this._checkResponse);
    }

    //обновляем данные пользователя
    setUserInfo(name, email, token) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
            .then(this._checkResponse);
    }


    addNewCard(movie, token) {
        return fetch(`${this._url}/movies`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(movie)
        })
            .then(this._checkResponse);
    }

    removeNewCard(movieId, token) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
        })
            .then(this._checkResponse);
    }

    //получаем залайканные фильмы с сервера?
    getLikeMovies(token) {
        return fetch(`${this._url}/movies`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
        })
            .then(this._checkResponse);
    }
}

export const api = new Api({
    url: 'http://api.malykhs-diplom.nomoredomains.rocks',
});
