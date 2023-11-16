export const create_simple_post = (profile) => {
    const form = document.createElement('div');
    form.classList.add('create-post');
    form.innerHTML = `
        <div class="profile-photo">
            <img src="${profile.img_src}" alt="profile photo">
        </div>
        <input type="text" id="create-post" placeholder="What is on your mind, ${profile.name}?">
        <input type="submit" value="Post" class="btn btn-primary">
    `
    return form
}