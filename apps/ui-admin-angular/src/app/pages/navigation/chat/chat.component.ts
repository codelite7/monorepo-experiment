import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { MainService } from '@main/main.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  listChats = [
    {
      name: 'Addie',
      profession: 'Programmer',
      total: 5,
      img: 'user-profile1',
      msg: 'send me the attachment of the pendencies',
      date: '23 de Abr',
      active: false,
    },
    {
      name: 'Francine',
      profession: 'Programmer',
      total: 0,
      img: 'user-profile2',
      msg: 'wow how good!',
      date: '23 de Abr',
      active: false,
    },
    {
      name: 'Becky',
      profession: 'Programmer',
      total: 0,
      img: 'user-profile3',
      msg: 'good studies!!',
      date: '23 de Abr',
      active: true,
    },
    {
      name: 'Adamm',
      profession: 'Programmer',
      total: 10,
      img: 'user-profile4',
      msg: 'congratulations 😍',
      date: '23 de Abr',
      active: false,
    },
    {
      name: 'Addie',
      profession: 'Programmer',
      total: 2,
      img: 'user-profile1',
      msg: 'Hello world...',
      date: '23 de Abr',
      active: false,
    },
    {
      name: 'Francine',
      profession: 'Programmer',
      total: 1,
      img: 'user-profile2',
      msg: 'test the input',
      date: '23 de Abr',
      active: false,
    },
    {
      name: 'Becky',
      profession: 'Programmer',
      total: 0,
      img: 'user-profile3',
      msg: 'woow',
      date: '23 de Abr',
      active: false,
    },
    {
      name: 'Adamm',
      profession: 'Programmer',
      total: 0,
      img: 'user-profile4',
      msg: 'Hello world...',
      date: '23 de Abr',
      active: false,
    },
    {
      name: 'Addie',
      profession: 'Programmer',
      total: 0,
      img: 'user-profile1',
      msg: 'wow how good!',
      date: '23 de Abr',
      active: false,
    },
    {
      name: 'Francine',
      profession: 'Programmer',
      total: 0,
      img: 'user-profile2',
      msg: 'almost ready',
      date: '23 de Abr',
      active: false,
    },
  ];

  chat = {
    name: 'Becky',
    profession: 'Programmer',
    img: 'user-profile3',
  };

  chatMessage = [];

  searchList;

  chatState = true;

  message;

  messageFocus = false;

  constructor(public mainService: MainService, public mainNavService: MainNavService, private titleService: Title) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('extra-pages', 'nav-chat');
    this.titleService.setTitle('Chat - Swarm IO');

    if (this.mainService.widthWindow > 990) {
      this.positionScrollTxtChat();
      this.messageFocus = true;
    }
  }

  calcHeightChatLat(value) {
    if (value.clientHeight) {
      return value.clientHeight - 47;
    }
    return '';
  }

  calcHeightTxtChat(value) {
    if (value.clientHeight) {
      return value.clientHeight - 58 - 60;
    }
    return '';
  }

  positionScrollTxtChat() {
    if (this.chatState) {
      let set;
      let cont = 0;
      clearInterval(set);
      set = setInterval(() => {
        const scrollbar = document.getElementById('chat-txt-bottom');
        if (scrollbar) {
          scrollbar.scrollIntoView({ block: 'center' });
        }
        cont++;
        if (cont === 4) {
          clearInterval(set);
        }
      }, 100);
    }
  }

  openChat(item) {
    this.resetActiveList();
    item.active = true;
    this.chatState = true;
    this.positionScrollTxtChat();
    this.messageFocus = true;

    // select chat
    this.chat.img = item.img;
    this.chat.name = item.name;
    this.chat.profession = item.profession;

    //
  }

  newMessage() {
    this.positionScrollTxtChat();
    this.chatMessage.push({ date: '07/05/2020', message: this.message });
    this.message = '';
  }

  resetActiveList() {
    this.listChats.forEach((element) => {
      element.active = false;
    });
  }
}
