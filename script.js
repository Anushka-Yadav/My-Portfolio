//header toggle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//typing

let typed = new Typed('.auto-input',{
    strings:['Front-End Developer!','UI Designer!','Logo Designer','Web Developer!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})

//active links state roll

let navLinks = document.querySelectorAll('nav ul li a')

let sections = document.querySelectorAll('section')
console.log(sections)
window.addEventListener('scroll',function(){
    const scrollpos = window.scrollY + 20
    sections.forEach(section =>{
        if(scrollpos > section.offsetTop && scrollpos<(section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            })
        }
    })
})
