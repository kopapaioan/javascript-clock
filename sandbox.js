const clock = document.querySelector('.clock');

const tick = () => {

    const now = new Date();
    
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
        <span>${date}/${month}/${year}</span>
        -
        <span>${h}:${m}:${s}</span>
    `;

    clock.innerHTML = html;
};

setInterval(tick, 1000);