class Draggable {
    constructor (data) {
        this.selector = data.selector;
        this.data = data.data;
        this.itemCount = data.data.length;
        this.itemView = 3;
        this.DOM = document.querySelector(`${data.selector}`);
        this.sliderDOM = null;

        this.init();
    }

    init() {
        this.render();
        this.addEvents();
    }

    generateContent() {
        let HTML = '';
        for (let item of this.data) {
            HTML += `<div class="container" style="width: ${100 / this.itemCount}%;">
            <div class="name">${item.name}</div>
            <div class="count">${item.count}</div>
        </div>`;
        }
        return HTML
    }

    render() {
        const HTML = `<div class="slider" style="width: ${100 * this.itemCount / this.itemView}%;">
            ${this.generateContent()}
        </div>`;
        this.DOM.innerHTML = HTML;
        this.sliderDOM = document.querySelector('.slider')
    }

    addEvents() {
        let state = 0;
        let pressPosition = 0;
        this.DOM.addEventListener('mousedown', e => {
            state = 1
            pressPosition = e.screenX;
            }
        );
        this.DOM.addEventListener('mouseup', () => {
            state = 0;
            }
        );
        this.DOM.addEventListener('mouseleave', () => {
            state = 0;
        });

        this.DOM.addEventListener('mousemove', e => {
            if (state === 1) {
                const relPosition = - pressPosition + e.screenX;
                this.sliderDOM.style.transform = `translateX(${relPosition}px)`;;
            } else {
                return
            }

        } )
    }

};

export { Draggable }