const toggleButton  = document.querySelectorAll('.toggle');
const enableToggle = [];
let idx =0;
toggleButton.forEach((ele)=>{
  ele.addEventListener('input',(e)=>{
    let toggleButton = e.target;
    if(enableToggle.length==2){
      idx = Math.floor(Math.random()*2);
      const disableToggleButton = enableToggle[idx];
      disableToggleButton.checked = false;
      toggleButton.checked = true;
      enableToggle[idx] = toggleButton;
    }
    else{
       toggleButton.checked = true;
       enableToggle[idx++] = toggleButton;
    }
  });
});

