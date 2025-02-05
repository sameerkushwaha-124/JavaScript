const btn = document.getElementById('search_btn') 
const url = 'http://universities.hipolabs.com/search?country=United+States'
const input = document.getElementById('search_input')

btn.addEventListener('click', () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const search = input.value.toLowerCase()
        const filteredData = data.filter(item => item.name.toLowerCase().includes(search))
        console.log(filteredData)
    })
    .catch(error => console.error('Error:', error))
})

