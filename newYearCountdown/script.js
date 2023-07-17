console.log("Esta conectado este pedo")

document.addEventListener('DOMContentLoaded', () => {
    const dateTarget = new Date('01/01/2024 0:01 AM')

    // Variables conectadas al DOM
    const days = document.querySelector('#days')
    const hours = document.querySelector('#hours')
    const minutes = document.querySelector('#minutes')
    const seconds = document.querySelector('#seconds')

    // Conteo de milisegundos para hacer los calculos
    const milisecondsOfASecond = 1000
    const milisecondsOfAMinute = milisecondsOfASecond * 60
    const milisecondsOfAnHour= milisecondsOfAMinute * 60
    const milisecondsOfADay = milisecondsOfAnHour * 24

    const updateCountdown = () => {
        const now = new Date()
        const duration = dateTarget - now
        const remainingDays = Math.floor(duration / milisecondsOfADay)
        const remainingHours = Math.floor((duration % milisecondsOfADay) / milisecondsOfAnHour)
        const remainingMinutes = Math.floor((duration % milisecondsOfAnHour) / milisecondsOfAMinute)
        const remainingSeconds = Math.floor((duration % milisecondsOfAMinute) / milisecondsOfASecond)
        // Render
        days.textContent = remainingDays
        hours.textContent = remainingHours
        minutes.textContent = remainingMinutes
        seconds.textContent = remainingSeconds
    }


    updateCountdown()
    setInterval(updateCountdown, milisecondsOfASecond)
})