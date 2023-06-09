import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PlusAccount } from './class/PlusAccount'

console.log("##### PeopleAccount Implementation #####")
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Joao', 8484)
console.log(`\nDados da conta de ${peopleAccount.getName()} pré movimentações:`)
console.log(`Numero da conta: ${peopleAccount.getAccountNumber()}`)
peopleAccount.getBalance()
console.log("Início das movimentações:\n")
peopleAccount.deposit(500)
peopleAccount.withdraw(350)
peopleAccount.withdraw(200)
peopleAccount.deposit(100)
peopleAccount.withdraw(300)
peopleAccount.finish()

console.log("##### CompanyAccount Implementation #####")
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 65)
console.log(`\nDados da conta de ${companyAccount.getName()} pré movimentações:`)
console.log(`Numero da conta: ${companyAccount.getAccountNumber()}`)
companyAccount.getBalance()
console.log("Início das movimentações:\n")
companyAccount.deposit(5650)
companyAccount.withdraw(5000)
companyAccount.withdraw(1000)
companyAccount.getLoan(2000)
companyAccount.withdraw(1000)
companyAccount.finish()

console.log("##### PlusAccount Implementation #####")
const plusAccount: PlusAccount = new PlusAccount('Amanda', 99)
console.log(`\nDados da conta de ${plusAccount.getName()} pré movimentações:`)
console.log(`Numero da conta: ${plusAccount.getAccountNumber()}`)
plusAccount.getBalance()
console.log("Início das movimentações:\n")
plusAccount.deposit(50)
plusAccount.withdraw(20)
plusAccount.withdraw(40)
plusAccount.deposit(15)
plusAccount.withdraw(45)
plusAccount.finish()