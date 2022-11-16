window.addEventListener('load',()=>{
    let flag = false
    document.getElementById('nav').addEventListener('click',(e)=>{
        console.log('hay')
       if(!flag){
        document.getElementById('nav').classList.add('active');
        document.getElementById('buttonToggle').style.transform = 'rotate(315deg)'
        flag = true
       }else{
        document.getElementById('nav').classList.remove('active');
        document.getElementById('buttonToggle').style.transform = 'rotate(0)'
        flag = false
       }
        
      
    })

})