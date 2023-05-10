import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {
  hubUrl = environment.hubUrl;
  private hubConnection?: HubConnection;

  constructor(private toastr: ToastrService) { }

  createHubConnection(user: User) {
    console.log('creating hub connection for ', user)
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.hubUrl + 'presence', {
        accessTokenFactory: () => user.token
      })
      .withAutomaticReconnect()
      .build()

    this.hubConnection.start().catch(error => console.log(error));

    this.hubConnection.on('UserIsOnline', username => {
      console.log('user is online ', user)
      this.toastr.info(username + ' has connected');
    })

    this.hubConnection.on('UserIsOffline', username => {
      console.log('user is offline ', user)
      this.toastr.info(username + ' has disconnected');
    })
  }

  stopHubConnection(){
    this.hubConnection?.stop().catch(error => console.log(error));

  }
}
