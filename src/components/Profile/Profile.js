import React, { useState, useEffect } from "react";
import { Navigation } from "../Navigation/Navigation";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { Header } from "../Header/Header";

export const Profile = ({ onEdit, onSignOut, onUpdateUser }) => {

  const userInfo = React.useContext(CurrentUserContext);
  //состояние для редактирования профиля
  const [editMode, setEditMode] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name: name,
      email: email,
    });
    setEditMode(false)
  }

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, []);

  return (
    <>
      <Header />
      <Navigation />
      <form className="profile" onSubmit={handleSubmit}>
        <div className="profile__container">
          <h2 className="profile__title">Привет, {userInfo.name}</h2>
          <div className="profile__user-data">
            <div className="profile__name-container">
              <label className="profile__name">Имя</label>
              {
                editMode
                  ? (<input type="text" name="name" className="profile__input" onChange={handleNameChange} value={name} required />)
                  : (<p className="profile__name-data">{userInfo.name}</p>)
              }
            </div>
            <div className="profile__email-container">
              <label className="profile__email">Email</label>
              {editMode
                ? (<input type="text" name="email" className="profile__input" onChange={handleEmailChange} value={email} required />)
                : (<p className="profile__email-data">{userInfo.email}</p>)
              }
            </div>
          </div>
          <div className="profile__links">
            {editMode
              ? (
                <>
                <p className="profile__error"></p>
                <button type="submit" className="profile__button-submit" disabled={!(name !== userInfo.name || email !== userInfo.email)}>Сохранить</button>
                </>
              )
              : (
                <>
                <button className="profile__register-link" onClick={() => setEditMode(true)} >
            Редактировать
          </button>
          <button onClick={onSignOut} className="profile__button-exit">
            Выйти из аккауна
          </button>
                </>  
          )}
          </div>
        </div>
      </form>
    </>
  );
};




// import React, { useState } from "react";
// import { Navigation } from "../Navigation/Navigation";
// import { CurrentUserContext } from "../../context/CurrentUserContext";
// import { Header } from "../Header/Header";

// export const Profile = ({ onEdit, onSignOut }) => {

//   const userInfo = React.useContext(CurrentUserContext);

//   //состояние для редактирования профиля
//   const [editMote, setEditMode] = useState(false);

  // return (
  //   <>
  //     <Header />
  //     <Navigation />
  //     {/* need to add onSubmit to form */}
  //     <form className="profile">"
  //       <div className="profile__container">
  //         <h2 className="profile__title">Привет, {userInfo.name}</h2>
  //         <div className="profile__user-data">
  //           <div className="profile__name-container">
  //             <p className="profile__name">Имя</p>
  //             <p className="profile__name-data">{userInfo.name}</p>
  //           </div>
  //           <div className="profile__email-container">
  //             <p className="profile__email">Email</p>
  //             <p className="profile__email-data">{userInfo.email}</p>
  //           </div>
  //         </div>
  //         <div className="profile__links">
  //           <button onClick={onEdit} className="profile__register-link">
  //             Редактировать
  //           </button>
  //           <button onClick={onSignOut} className="profile__button-exit">
  //             Выйти из аккауна
  //           </button>
  //         </div>
  //       </div>
  //     </form>
  //   </>
  // );
// };

