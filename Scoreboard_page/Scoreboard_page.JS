let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 60;
let speed =20;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

// -------------------------------------


const count_array=document.querySelectorAll(".data");
count_array.forEach((count)=>{
    let initial_count=0;
    let final_count=count.dataset.count;
    setInterval(Counting,6);
function Counting()
{
    if (initial_count<=final_count) {
        if (initial_count >= 0 && initial_count < 1000) {
            initial_count += 1;
            count.innerText = `${initial_count}days`;
          }
        
    }
}
})