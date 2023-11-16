const form = document.querySelector('#form');
    form.style.filter ='blur(4px)';
    form.style.zIndex = '-1';

const winWin = document.querySelector('#window-win');
    winWin.style.position = 'absolute';
    winWin.style.top='50%';
    winWin.style.left = '50%';
    winWin.style.transform = 'translate(-50%, -50%)';
    winWin.style.zIndex = '-1';
    winWin.style.opacity = 0;
    winWin.style.fontSize = '2.5vw';
    winWin.style.textAlign = 'center';
    winWin.style.alignItems = 'center';
    winWin.style.width = '50%';
    winWin.style.height = '75%';
    winWin.style.border='2px solid #000000';
    winWin.style.color = '#ffffff';
    winWin.style.display = 'flex'; 
    winWin.style.justifyContent = 'center'; 
    winWin.style.alignItems = 'center';

const rulesWindow = document.querySelector('#rules');
    rulesWindow.style.opacity = 0;
    rulesWindow.style.position = 'absolute';
    rulesWindow.style.top='50%';
    rulesWindow.style.left = '50%';
    rulesWindow.style.transform = 'translate(-50%, -50%)';
    rulesWindow.style.zIndex = '-1';
    rulesWindow.style.width = '35%';
    rulesWindow.style.height = '40%';
    rulesWindow.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    rulesWindow.style.boxShadow = '1px 5px 20px 10px rgba(0, 0, 0, 0.8)';
    rulesWindow.style.display = 'flex'; 
    rulesWindow.style.justifyContent = 'center'; 
    rulesWindow.style.alignItems = 'center';
    rulesWindow.style.textAlign = 'center';
    rulesWindow.style.fontSize = '2vw';
    rulesWindow.style.color = 'rgba(255, 255, 255, 0.418)';
    rulesWindow.style.transition = '0.5s';

const windowInput = document.querySelector('#window');
    windowInput.style.opacity = 1;
    windowInput.style.position = 'absolute';
    windowInput.style.top='50%';
    windowInput.style.left = '50%';
    windowInput.style.transform = 'translate(-50%, -50%)';
    windowInput.style.zIndex = '1';
    windowInput.style.width = '25%';
    windowInput.style.height = '35%';
    windowInput.style.border = '2px solid rgba(0, 0, 0, 1)';
    windowInput.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    windowInput.style.boxShadow = '1px 5px 20px 10px rgba(0, 0, 0, 0.8)';

const userNameWindow = document.querySelector('#name-for-user');
    userNameWindow.style.position = 'absolute';
    userNameWindow.style.top='35%';
    userNameWindow.style.left = '50%';
    userNameWindow.style.transform = 'translate(-50%, -50%)';
    userNameWindow.style.height = '15%';
    userNameWindow.style.width = '50%';
    userNameWindow.style.border = '2px solid rgba(0, 0, 0, 1)';
    userNameWindow.style.textAlign = 'center';
    userNameWindow.style.fontSize = '1.2vw';
    userNameWindow.style.backgroundColor = 'rgba(0,0,0,0.7)';
    userNameWindow.style.color = '#ffffff';
    userNameWindow.style.transition = '0.3s';

userNameWindow.addEventListener('mouseenter', ()=>{
        userNameWindow.style.backgroundColor='rgba(255, 255, 255, 0.6)';
        userNameWindow.style.color = '#000000';
        userNameWindow.style.width = '60%';
        userNameWindow.style.height='20%';
        userNameWindow.style.fontSize = '1.4vw';
    });
userNameWindow.addEventListener('mouseout', ()=>{
        userNameWindow.style.backgroundColor='rgba(0, 0, 0, 0.6)';
        userNameWindow.style.color = '#ffffff';
        userNameWindow.style.fontSize = '1.2vw';
        userNameWindow.style.height = '15%';
        userNameWindow.style.width = '50%';
    });

const userButton = document.querySelector('#save-name');    
    userButton.style.position = 'absolute';
    userButton.style.top='60%';
    userButton.style.left = '50%';
    userButton.style.transform = 'translate(-50%, -50%)';
    userButton.style.backgroundColor='rgba(0, 0, 0, 0.6)';
    userButton.style.border = '2px solid rgba(0, 0, 0, 1)';
    userButton.style.color='#ffffff';
    userButton.style.fontSize = '1vw';
    userButton.style.width='40%';
    userButton.style.height='15%';
    userButton.style.transition = '0.3s';

userButton.addEventListener('mouseenter', ()=>{
        userButton.style.backgroundColor='rgba(255, 255, 255, 0.6)';
        userButton.style.color='#000000';
        userButton.style.width = '50%';
        userButton.style.height='20%';
        userButton.style.fontSize = '1.5vw';
    });
userButton.addEventListener('mouseout', ()=>{
        userButton.style.backgroundColor='rgba(0, 0, 0, 0.6)';
        userButton.style.color='#ffffff';
        userButton.style.fontSize = '1vw';
        userButton.style.width='40%';
        userButton.style.height='15%';
    });

const windowError = document.querySelector('#error-window');
    windowError.style.opacity = 0;
    windowError.style.position = 'absolute';
    windowError.style.top='50%';
    windowError.style.left = '50%';
    windowError.style.transform = 'translate(-50%, -50%)';
    windowError.style.zIndex = '-1';
    windowError.style.width = '20%';
    windowError.style.height = '25%';
    windowError.style.border = '2px solid rgba(255, 50, 50, 1)';
    windowError.style.backgroundColor = 'rgba(255, 50, 30, 0.6)';
    windowError.style.display = 'flex'; 
    windowError.style.justifyContent = 'center'; 
    windowError.style.alignItems = 'center';
    windowError.style.color = '#ffffff';
    windowError.style.fontSize = '2vw';
    windowError.innerHTML = 'Ви не ввели своє ім\'я';

let nameUser = document.querySelector("#info");
    userButton.onclick=()=> {
        let name = userNameWindow.value;    
        if(!name){
            windowError.style.opacity = 1;
            windowError.style.zIndex = "1";
            setTimeout(() => {
                windowError.style.opacity = 0;
                windowError.style.zIndex = "-1";
            }, 2000);
        } else{
            showRules();
            nameUser.innerHTML = name;
            windowInput.style.opacity = 0;
            windowInput.style.zIndex = '-1';
        }
    }

function showRules(){
    rulesWindow.style.opacity = 1;
    rulesWindow.style.zIndex = '2';
    setTimeout(() => {
        rulesWindow.innerHTML += '<br>Натисніть на будь-яке місце, щоб продовжити';
        rulesWindow.onclick=()=>{
            clearRules()
        }
    }, 5000)
}

function clearRules(){
    rulesWindow.style.opacity = 0;
    rulesWindow.style.zIndex = '-1';
    form.style.filter ='blur(0px)';
    form.style.zIndex = '1';
}

let clickCount = 0;
const cells1 = document.querySelector('#cells1');
const cells2 = document.querySelector('#cells2');
const cells3 = document.querySelector('#cells3');
const button = document.querySelector('#button');

button.onclick = () => {
        if (clickCount < 3) {
            clickCount++;
        const images = [
            './img/bell-removebg-preview.png',
            './img/seven-removebg.png',
            './img/cherry-removebg-preview.png'
        ];
        const randomImages = getRandomImages(images);
        cells1.innerHTML = randomImages[0].map(image => `<img src="${image}">`).join('');
        cells2.innerHTML = randomImages[1].map(image => `<img src="${image}">`).join('');
        cells3.innerHTML = randomImages[2].map(image => `<img src="${image}">`).join('');
        const middleRowImages = [
            cells1.children[1].getAttribute('src'), 
            cells2.children[1].getAttribute('src'), 
            cells3.children[1].getAttribute('src')  
    ];

    if (middleRowImages.every((image, index, arr) => image === arr[0])) {
        gameResult('Ви перемогли!!!', 'rgba(0, 255, 0, 0.4)');
    }
    }

    if (clickCount === 3) {
        gameResult('Ви програли :(', 'rgba(255, 0, 0, 0.4)');
    }
}

function gameResult(message, bgColor) {
    winWin.innerHTML = message;
    winWin.style.backgroundColor = bgColor;
    winWin.style.zIndex = '3';
    winWin.style.opacity = 1;
    setTimeout(() => {
        winWin.style.zIndex = '-1';
        winWin.style.opacity = 0;
    }, 2000);
    clickCount = 0;
}

function getRandomImages(images) {
    const randomImages = Array.from({ length: 3 }, () => {
        const column = new Set();
        while (column.size < 3) {
            const randomImage = images[Math.floor(Math.random() * images.length)];
            column.add(randomImage);
        }
        return Array.from(column);
    });
    return randomImages;
}
