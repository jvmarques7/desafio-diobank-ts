import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valor: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance +  valor
      console.log(`Voce pegou um empréstimo de D$${valor}\n`)
      this.getBalance()
    }else{
      this.validateStatus()
    }
  }
}
