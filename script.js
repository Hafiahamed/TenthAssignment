

let income = 0;

let personalExpense = [];




const incomeForm = document.getElementById("income-form")

const incomeAmount = document.getElementById("income-amount")

const displayIncome = document.getElementById("displayIncome")

const displayBalance = document.getElementById("balance")

const  expenseForm = document.getElementById("expense-form")

const expenseName = document.getElementById("expenseName")

const expenseAmount = document.getElementById("expense-amount")

const expenseCategory = document.getElementById("expense-category")
const totalAmount = document.getElementById("total-amount")

const expenseDate = new Date().toLocaleDateString()




// // Income Section

 incomeForm.addEventListener("submit", (e)=>{

   e.preventDefault()
  
   income = parseInt(incomeAmount.value)




  


 })


// Expense Section


expenseForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const expense={
        date:expenseDate,
        name:expenseName.value,
        amount:parseFloat(expenseAmount.value),
        category:expenseCategory.value
    }
    
    personalExpense.push(expense)

    expenseName.value= "";
expenseAmount.value = ""

expenseCategory.value="Food"

 
    updateValue()
    updateExpenceTable()
})








const updateValue = ()=>{

  const totalExpenseAmount = personalExpense.reduce((sum, expense)=>sum + expense.amount, 0)
document.getElementById("total-amount").textContent = totalExpenseAmount.toFixed(1)
totalAmount.innerText = `Expense : ${totalExpenseAmount}`


const balance = income-totalExpenseAmount

displayBalance.textContent =`Balance is :${balance}`


  




}


  function updateExpenceTable(){

    const expenseList = document.getElementById("expense-list")
    expenseList.innerHTML = "";

    personalExpense.forEach((expense, index)=>{
        const row = document.createElement('tr');
        row.innerHTML=`
                
             <td>${expense.date}</td>
            <td>${expense.amount}</td>
          
            <td>${expense.category }</td>
            <td><button onclick="deleteExpense(${index})">Delete</button></td>;


        `;
        
      expenseList.appendChild(row)

    })

  }



function deleteExpense(index){
    personalExpense.splice(index, 1)
   
    updateValue()
    updateExpenceTable()


}


