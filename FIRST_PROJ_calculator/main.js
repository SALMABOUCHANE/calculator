(function(){

    // استدعاء العناصر التي نحتاجها مع اعتبارها كمتغير 
    
    let ecran = document.querySelector('.ecran');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    

    // استدعاء_العنصر-الذي نريده من المتغيرات الذي سنحدد المهام التي يجب عليه القيام بها
    //forEach لكل عنصر من المتغير هذا قم بهاته المهمة
    
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            ecran.value += value;

        })
    });

    equal.addEventListener('click', function(e){
        if (ecran.value === '') {
           ecran.value = "PLEASE ENTER";
        } else {
            let answer= eval(ecran.value);
            ecran.value = answer;
        }
    })

    clear.addEventListener('click',function(e){
        ecran.value = "";
    })
  
})();