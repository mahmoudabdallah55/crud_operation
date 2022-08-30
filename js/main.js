let productContainer ;

if(localStorage.getItem("productData")==null)
{
  productContainer=[];
}
else
{
  productContainer = JSON.parse( localStorage.getItem("productData"));
  displaypoduct();
}

let inputs = document.getElementsByClassName("form-control")


function validationForm(username)
{
  let usernameRegExp = /^[A-Z][a-z]{3,8}/;

  if(usernameRegExp.test(username) == false)
  {
    document.getElementById("addbtn").disabled = "true";

  }
  else
  {
    document.getElementById("addbtn").removeAttribute("Disabled");
  }
}

function addproduct()
{
        let productName = document.getElementById("productNameInp").value ; 
        let productPrice = document.getElementById("productPriceInp").value ;
        let productCatogery = document.getElementById("productCatogeryInp").value ;
        let productCode = document.getElementById("productCodeInp").value;
        let dashPlace = productCode.search("-");
        let companyBrand = productCode.slice(0,dashPlace);
        let model = productCode.slice(dashPlace + 1,productCode.length);
        let desc = document.getElementById("productDesInp").value;
        console.log(desc)



      
     
          let product = 
          {
            name:productName,
            price:productPrice,
            catogery:productCatogery,
            // brand:companyBrand,
            model:model,
            des:desc,

          }
        
          


          productContainer.push(product);
          
        localStorage.setItem("productData",JSON.stringify(productContainer)) ;


          displaypoduct()
          
          clearForm();

      
   




      //   let product = 
      //   {
      //     name:productName,
      //     price:productPrice,
      //     catogery:productCatogery,
      //     // brand:companyBrand,
      //     model:model,
      //     des:desc,

      //   }
      
        


      //   productContainer.push(product);
        
      // localStorage.setItem("productData",JSON.stringify(productContainer)) ;


      //   displaypoduct()
        
      //   clearForm();







}
 
function displaypoduct()
{


    let temp = "";
    for(let i = 0; i<productContainer.length ;i++)
    {
      temp +=`  <div class="col-lg-3 col-md-3 ">
      <div class="product mb-5">
        <img class="img-fluid" src="images/work-04.jpg" alt="product image">
        <h4>`+productContainer[i].catogery+`<span class="badge bg-secondary ms-2 mt-1">`+productContainer[i].name+`</span></h4>
        <p>` + productContainer[i].des+`</p>
        <div class="price">`+productContainer[i].price+`</div>
        <button onclick="deleteProduct(`+i+`)" class=" btn btn-outline-danger btn-sm me-3 ">delete</button>
        <button onclick="updateDate(`+i+`)" class=" btn btn-outline-warning btn-sm ">updata</button>
        
        
      </div>
    </div>`
      
    }
    
    document.getElementById("productRow").innerHTML=temp;

}


function clearForm()
{
  for(let i = 0 ; i<inputs.length; i++)
  {
    inputs[i].value ="";
  }
}







function searchproduct(term)
{
  let temp  = ``;
  for(let i = 0 ; i < productContainer.length ; i++)
  {
    if( productContainer[i].name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
    {
      temp +=` 
       <div class="col-lg-3 col-md-3 ">
      <div class="product mb-5">
        <img class="img-fluid" src="images/work-04.jpg" alt="product image">
        <h4>`+productContainer[i].catogery+`<span class="badge bg-secondary ms-2 mt-1">`+productContainer[i].name+`</span></h4>
        <p>` + productContainer[i].des+`</p>
        <div class="price">`+productContainer[i].price+`</div>
        
        
      </div>
    </div>
    `
    }
  }
  document.getElementById("productRow").innerHTML=temp;
}






function deleteProduct(index)
{
  let deleted = productContainer.splice(index,1);
  localStorage.setItem("productData",JSON.stringify(productContainer)) ;

  displaypoduct();
 
}


function updateDate(i)
{
 document.getElementById("productNameInp").innerHTML=i;
 console.log(i)
  
}







/////////////////////////////////////////////////////////////////////////////////
// RegExp for validation input elemnts in js 
/*
/ a / must =a
/ abc/must =abc
/ [a-z]/from a to z or 
[ a-z]{5} from a to z five times
^[ a-z] must start with a to z
^[a-z][0-9]$ must start with char a to z and digit from 0 to 9 finaly 


















*/



















