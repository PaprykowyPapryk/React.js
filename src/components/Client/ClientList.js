import React, { Component } from 'react';
import {Table,Button} from 'react-bootstrap';
import Client from './Client';
import { conf } from '../layout/config/config'


 class ClientList extends Component {




    state = {
        clients:[
        
        ]
        ,
        draft:''
    }

    componentDidMount = () =>
    {
       this.loadClients();
    }

    loadClients =  ()  =>
    {
        
        var nameS = conf.servername + "client/findAll"
        
          fetch(nameS,{
            method: 'GET',
            headers:{
                "Content-Type":'application/json',
                'Authorization': 'Bearer ' + this.getCookie("tokenWareHouse")
            }
        }
        ).then(response => {
            if(response.ok) {
                response.json().then(json => this.setState({clients:json}))
            }
        })
  
    }

    getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
      }
    
      sprawdzian = () =>
      {
          this.setState({clients:{'companyName':'LOLOLO'}})
      }

    render() {
        return (
            
        <div>
              <nav class="navbar navbar-light bg-light">
                            <span class="navbar-brand mb-0 h1 text-center" id="naglowek">Lista klientow</span>
                        </nav>
         <Table striped bordered hover >
         
         
            <thead >
                <tr>
                <th>#</th>
                <th>Nazwa firmy</th>
                <th>Nip</th>
                <th>Kod pocztowy</th>
                <th>Adres</th>
                <th>Numer telefonu</th>
                <th></th>
                </tr>
            </thead>

            <tbody>
                
               {this.state.clients.map((filtrowanyClient)=>
                {
                    return <Client client={filtrowanyClient} id={this.props.match.params.id}/>
                })}
              
                </tbody>

            </Table>
                   {console.log(this.props.match.params.id)} 
    </div>
        )}
}
export default ClientList