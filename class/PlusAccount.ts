import { DioAccount } from "./DioAccount"

export class PlusAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    depositPlus = (value: number): void => {
        this.deposit(value+10)
    }

}
