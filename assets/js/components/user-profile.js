const UserProfile = (props) => {
    return `
        <li class="user-menu__item" data-id="${props.id}">
            <div class="user-profile">
                <img class="user-profile__avatar" src="${props.avatar}" alt="Profile Image">
                <span class="user-profile__title">${props.name}</span>
            </div>
        </li>
    `
}

export default UserProfile;