const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)){
        phoneInput.innerHTML = "OK"
        phoneResult.style.color = "green"
    }else{
        phoneResult.innerHTML = "Invalid phone number"
        phoneResult.style.color = "red"
    }
}



/// TAB SLIDER
const  tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let currentIndex = 0

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}
const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
    currentIndex = index
}
const auto = () => {
    setInterval(() => {
        currentIndex++
        if (currentIndex > tabContentBlocks.length - 1) {
            currentIndex = 0
        }
        hideTabContent()
        showTabContent(currentIndex)
    }, 3000)
}


hideTabContent()
showTabContent()
auto()


tabsParent.onclick = (event) => {
    if(event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item,index) => {
            if(event.target === item) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }

}

//CONVERTER
//kiss - keep it short and simple

const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const fetchData = async () => {
    try {
        const response = await fetch("../data/converter.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

const convert = async (elem, target, target2) => {
    elem.oninput = async () => {
        try {
            const response = await fetchData();

            target.forEach(e => {
                if (target2 === 'som') {
                    e.value = (elem.value / response[e.id]).toFixed(2);
                } else if (e === som) {
                    e.value = (elem.value * response[elem.id]).toFixed(2);
                } else {
                    e.value = ((elem.value * response[elem.id]) / response[e.id]).toFixed(2);
                }
            });

            if (elem.value === '') {
                target.forEach(e => e.value = '');
                elem.value === '' && (target.forEach(e => e.value = ''));
            }
        } catch (error) {
            console.error("Conversion error:", error);
        }
    };
};

convert(som, [usd, eur]);
convert(usd, [som, eur]);
convert(eur, [som, usd]);

//CARD SWITCHER

const cardBlock = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')

let cardId = 1



const fetchDataAsyncCardSwitcher=async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
    const data = await response.json();
    cardBlock.innerHTML = `
        <span>${data.id}</span>
    `
}
btnNext.onclick = (event) => {
    if(cardId++ && cardId >= 201 ) {
        cardId =1
    }
    fetchDataAsyncCardSwitcher()

}
btnPrev.onclick = (event) => {
    if (cardId-- && cardId === 0) {
        cardId =200
    }
    fetchDataAsyncCardSwitcher()
}




fetchDataAsyncCardSwitcher()


const fetchTwo = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json();
    console.log(data);
}

fetchTwo()

