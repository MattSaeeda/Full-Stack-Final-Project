//sending a request and gettin ether supply from Etherscan
 fetch("https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=284HQZMA5KNYGZC26WN1EPCZ4U8Q6XZPZG")
  .then(function(response) {
    return response.json();
  })
  .then(
    function setSupply(data) {
      let supply = document.getElementById('supply');
      supply.innerHTML = stringify(data.result);
      } )
  .catch(function(error) {
     console.log(JSON.stringify(error)) ;
   })

//sending a request and gettin ether last Ether price from Etherscan
   fetch("https://api.etherscan.io/api?module=stats&action=ethprice&apikey=284HQZMA5KNYGZC26WN1EPCZ4U8Q6XZPZG")
    .then(function(responce) {
    return responce.json();
     })
    .then(function ethLastPrice(data) {
    let ethPrice = document.getElementById('price');
    price.innerHTML = stringify(data.ethusd);
    })
   .catch(function(error) {
    console.log(JSON.stringify(error)) ;
    })

//sending a request and gettin acount balance from Etherscan
   fetch("https://api.etherscan.io/api?module=account&action=balance&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&tag=latest&apikey=284HQZMA5KNYGZC26WN1EPCZ4U8Q6XZPZG")
   .then(function(responce) {
     return respo.ce.json();
   })
   .then(function accountBalance(data) {
     let balance1 = document.getElementById("balance");
     balance1= stringify(data.result);
     return balance1.ce1;
   })

   function showBalance() {
     let bal = acountBalance();
     return bal;
   }