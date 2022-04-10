document.querySelector('#dark-mode-toggle').addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    const isDarkMode = document.body.classList.contains('dark')
    localStorage.setItem('darkmode', isDarkMode)

    // change mobile status bar color: address bar
    document.querySelector('meta[name="theme-color"').setAttribute('content', isDarkMode ? '#1a1a2e' : '#fff')

})

const init = () =>{
    const darkmode = JSON.parse(localStorage.getItem('darkmode'))
    if (darkmode) document.body.classList.add('dark')
    
    document.querySelector('meta[name="theme-color"').setAttribute('content', darkmode ? '#1a1a2e' : '#fff')
   
}

init()