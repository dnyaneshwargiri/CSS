function count(){
  return new Promise(resolve=>{
    setTimeout(()=>{
    console.log('3 seconds done !')
      resolve();
  }, 3000);
  });
}

async function makeAsync(){
  console.log('counting');
  const response= await count();
  console.log('end');
}
//makeAsync();

function submitForm(e){
     e.preventDefault();
  console.log(e)
}
