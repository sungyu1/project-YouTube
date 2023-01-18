const moreBtn=document.querySelector('.moreBtn');
const title =document.querySelector('.title');
// 좋아요 버튼
const resultElement = document.getElementById('result');
let number = resultElement.innerText;






moreBtn.addEventListener('click',()=>{
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});

function count(type)  {
  // 결과를 표시할 element
  
  // 현재 화면에 표시된 값
  
  // 더하기/빼기
  if(type === 'plus') {
    number = parseInt(number) + 1;
  }else if(type === 'minus')  {
    number = parseInt(number) - 1;
  }
  // 결과 출력
  resultElement.innerText = number;
}
