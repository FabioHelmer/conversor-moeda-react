import React, { Component } from 'react'
import './Conversor.css';

class Conversor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0
        }

        this.converter = this.converter.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({moedaA_valor: event.target.value});
      }

    converter() {
        let de_para = this.props.moedaA + "_" + this.props.moedaB
        let url = "https://free.currconv.com/api/v7/convert?q=" + de_para + "&compact=ultra&apiKey=429571df82570f9cda08"

        fetch(url)
            .then(res => {
                return res.json();
            }).then(json => {
                try {
                    let cotacao = json[de_para];
                    let moedaB_valor = (cotacao * parseFloat(this.state.moedaA_valor)).toFixed(2);
                    console.log("valor b:"+ moedaB_valor)
                    this.setState({moedaB_valor})
                } catch (error) {
                    this.moedaB_valor = 0
                } finally {
                    this.moedaA_valor = ""
                }
            });

    }


    render() {
        return (
            
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input class="myInput" type="text" value={this.state.value} onChange={this.handleChange} />
                <input class="myButton" type="button" value="ok" onClick={this.converter} />
                <h2>valor:{this.state.moedaB_valor}</h2>
            </div>
        );
    }

  

}




export default Conversor