class Cat
{
    constructor(food) {
        this.food = food;
    }

    feed() {
        this.food += 10;
        if (this.food >= 100) {
            this.food = 100;
        }
        document.querySelector('.food').textContent = cat.food;
    }

    checkState() {
        if (this.food > 50) {
            document.querySelector('.pet_img').src = 'good.png';
        } else {
            document.querySelector('.pet_img').src = 'bad.png';
        }

        document.querySelector('.food').textContent = cat.food;
    }
}

const cat = new Cat(100);

let intervalId = setInterval(() => {
    cat.food -= Math.floor(Math.random() * 10);
    if (cat.food <= 0) {
        clearInterval(intervalId);
    }
    cat.checkState();
}, 2000);

document.querySelector('.feed').addEventListener('click', () => {
    cat.feed();
});