const contact = document.getElementById("contacts")
const about = document.getElementById("about")
const skills = document.getElementById("skills")
const code = document.getElementById("code")
const projects = document.getElementById("projects")
const education = document.getElementById("education")
const english = document.getElementById("english")



contact.addEventListener('click', () => {
   let element = document.querySelector('.contacts')
   element.classList.toggle('active')
   })
about.addEventListener('click', () => {
   let element = document.querySelector('.about')
   element.classList.toggle('active')
   })
skills.addEventListener('click', () => {
   let element = document.querySelector('.skills')
   element.classList.toggle('active')
   })
code.addEventListener('click', () => {
   let element = document.querySelector('.code')
   element.classList.toggle('active')
   })
projects.addEventListener('click', () => {
   let element = document.querySelector('.projects')
   element.classList.toggle('active')
   })
education.addEventListener('click', () => {
   let element = document.querySelector('.education')
   element.classList.toggle('active')
   })
english.addEventListener('click', () => {
   let element = document.querySelector('.english')
   element.classList.toggle('active')
   })