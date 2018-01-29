import React, { Component } from 'react';

export default class Account extends Component {

  constructor (props) {
    super()
    this.state = {
      balance: 0
    }
  }
  handleDeposit (e) {
    let currentValueAsNumber = Number(this.inputBox.value);
    let previousBalanceAsNumber = Number(this.state.balance);
    if (!(isNaN(currentValueAsNumber))) {
      this.setState({
        balance: previousBalanceAsNumber + currentValueAsNumber
      })
    }
    this.inputBox.value = "";
  }
  handleWithdraw (e) {
    let currentValueAsNumber = Number(this.inputBox.value);
    let previousBalanceAsNumber = Number(this.state.balance);
    if (!(isNaN(currentValueAsNumber))) {
      if (currentValueAsNumber > previousBalanceAsNumber) {
        this.setState({
          balance: 0
        })
      } else {
        this.setState({
          balance: previousBalanceAsNumber - currentValueAsNumber
        })
      }
    }
    this.inputBox.value = "";
  }
  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input}/>
        <input onClick={(e) => this.handleDeposit(e)} type="button" value="Deposit" />
        <input onClick={(e) => this.handleWithdraw(e)} type="button" value="Withdraw" />
      </div>
    )
  }
}
