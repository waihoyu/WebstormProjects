
let i
for (i = 0; i <10; i++)
{
    (function (i) {
        let a = document.createElement('a')
        a.innerHTML = i + '<br>'
        a.addEventListener('click',function (e) {
            e.preventDefault()
            alert(i)
        })
        document.body.appendChild(a)
    })(i)
}
