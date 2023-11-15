export class HighLine {
    constructor(info = []) {
        this.info = info;
    }

    build() {
        this.dom = document.createElement('div');
        this.dom.classList.add('highline');
        this.info.forEach(item => {
            this.dom.appendChild(new Description(item).build());
        })
        return this.dom;
    }
}

class Description {
    constructor(info) {
        this.title = info.title || "";
        this.background = info.background || "";
        this.img_src = info.img_src || "";
    }

    build = () => {
        this.dom = document.createElement('div');
        this.dom.classList.add('description');
        this.dom.style.backgroundImage = `url(${this.background})`;
        this.dom.innerHTML = `
            <div class="profile-photo">
                <img src="${this.img_src}" alt="profile photo">
            </div>
            <p>${this.title}</p>
        `
        return this.dom;
    }

}