//блок catch должен быть не в апи, а в индексе при вызове метода. 
class ApiFilm {
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
     getFilmInfo() {
        return fetch(`${this._url}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                  }
            })
            .then(this._checkResponse);
    }
}

export const apiFilm = new ApiFilm({
	url: 'https://api.nomoreparties.co/beatfilm-movies',
});
