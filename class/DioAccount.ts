export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  // Removido para desafio
  // setName = (name: string): void => {
  //   this.name = name
  //   console.log('Nome alterado com sucesso!')
  // }

  getName = (): string => {
    return this.name
  }

  getAccountNumber = (): number => {
    return this.accountNumber
  }

  deposit = (value: number): void | boolean => {
    console.log(`Valor à depositar: D$${value}`)
    if(this.validateStatus()){
      this.balance = this.balance + value
      console.log(`Depósito realizado com sucesso!`)
      this.getBalance()
    }else{
      this.validateStatus()
    }
  }

  withdraw = (value: number): void => {
    console.log(`Valor à sacar: D$${value}.`)
    if(this.balance >= value && this.validateStatus()){
      this.balance = this.balance - value
      console.log(`Saque realizado com sucesso!`)
      this.getBalance()
    }else if(!this.validateStatus()){
      this.validateStatus()
    }else{
      console.log(`Seu saldo é insuficiente para o saque.`)
    }
  }

  getBalance = (): void => {
    console.log(`${this.getName()}, seu saldo é: D$${this.balance}\n`)
  }

  finish = (): void => {
    const text = 'Estamos finalizando...\n'+
    'Conta de '+this.getName()+ '.\n'+
    'Saldo Atual: D$'+ this.balance+'.00\n'+
    '#############################################\n\n'
    console.log(text)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
