import WebSocket from 'ws';
import { WebSocketConnect, WebSocketConnectImpl } from './websocket-connect';

class LoggingWebSocket {
  private readonly url: string;
  private socket: WebSocketConnect | null;

  constructor(url: string) {
    this.url = url;
    this.socket = new WebSocketConnectImpl(url);
  }

  connect() {
    try {
      this.socket?.connect();
    } catch (e) {
      console.error(e);
    }
  }

  tranformTimereadableFormet(date = new Date()): string {
    // const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    };

    const formattedDate: string = new Intl
      .DateTimeFormat('en-US', options)
      .format(date);

    return formattedDate;
  }

  send(data: string) {
    if (this.socket) {
      if (data === 'now') {
        const formattedDate: string = this.tranformTimereadableFormet();
        const date = `${formattedDate}`;

        data = `${formattedDate}`;
      }
      this.socket.send(data);

      if (data === 'tomorrow') {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const formattedDate: string = this.tranformTimereadableFormet(tomorrow);
        data = formattedDate;
  
        data = `${formattedDate}`;
      }
      this.socket?.send(data);
    }

    else {
      console.error('WebSocket is not connected.');
    }
  }
}

export default LoggingWebSocket;
