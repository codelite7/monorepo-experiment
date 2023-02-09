import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { MainService } from '@main/main.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  notifications = [
    {
      iconColor: 'teal',
      icon: 'fas fa-tasks',
      title: 'From its medieval origins to the digital era',
      subtitle: '',
      time: 'Today',
      unread: false,
    },
    {
      iconColor: 'orange',
      icon: 'fas fa-cog',
      title: 'The passage experienced a surge in popularity',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      time: 'Today',
      unread: true,
    },
    {
      iconColor: 'info',
      icon: 'fas fa-air-freshener',
      title: 'Creation timelines for the standard lorem ipsum',
      subtitle: '',
      time: 'Today',
      unread: false,
    },
    {
      iconColor: 'pink',
      icon: 'fas fa-car-side',
      title: 'Lorem ipsum was purposefully designed to have ',
      subtitle: 'rehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      time: 'Today',
      unread: true,
    },
    {
      iconColor: 'dark',
      icon: 'fas fa-dragon',
      title: 'From its medieval origins to the digital era',
      subtitle: '',
      time: 'Today',
      unread: false,
    },
    {
      iconColor: 'orange',
      icon: 'fas fa-fax',
      title: 'The passage experienced a surge in popularity',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      time: 'Today',
      unread: false,
    },
    {
      iconColor: 'indigo',
      icon: 'fas fa-tasks',
      title: 'Creation timelines for the standard lorem ipsum',
      subtitle: '',
      time: 'Today',
      unread: true,
    },
    {
      iconColor: 'warning',
      icon: 'fas fa-cog',
      title: 'Lorem ipsum was purposefully designed to have ',
      subtitle: 'rehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      time: 'Today',
      unread: true,
    },
    {
      iconColor: 'pink',
      icon: 'fas fa-car-side',
      title: 'Lorem ipsum was purposefully designed to have ',
      subtitle: 'rehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      time: 'Today',
      unread: true,
    },
    {
      iconColor: 'dark',
      icon: 'fas fa-dragon',
      title: 'From its medieval origins to the digital era',
      subtitle: '',
      time: 'Today',
      unread: false,
    },
  ];

  constructor(public mainService: MainService, public mainNavService: MainNavService, private titleService: Title) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('extra-pages', 'nav-notifications');
    this.titleService.setTitle('Notifications - Swarm IO');
  }

  loadMore() {
    this.notifications.push({
      iconColor: 'teal',
      icon: 'fas fa-tasks',
      title: 'From its medieval origins to the digital era',
      subtitle: '',
      time: 'Today',
      unread: false,
    });
    this.notifications.push({
      iconColor: 'orange',
      icon: 'fas fa-cog',
      title: 'The passage experienced a surge in popularity',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      time: 'Today',
      unread: true,
    });
    this.notifications.push({
      iconColor: 'teal',
      icon: 'fas fa-tasks',
      title: 'From its medieval origins to the digital era',
      subtitle: '',
      time: 'Today',
      unread: false,
    });
    this.notifications.push({
      iconColor: 'orange',
      icon: 'fas fa-cog',
      title: 'The passage experienced a surge in popularity',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      time: 'Today',
      unread: true,
    });
    this.notifications.push({
      iconColor: 'teal',
      icon: 'fas fa-tasks',
      title: 'From its medieval origins to the digital era',
      subtitle: '',
      time: 'Today',
      unread: false,
    });
    this.notifications.push({
      iconColor: 'orange',
      icon: 'fas fa-cog',
      title: 'The passage experienced a surge in popularity',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      time: 'Today',
      unread: true,
    });
  }

  action(event) {
    event.unread = false;

    // redirect route here
    alert('link visited!');
  }

  readAll() {
    this.notifications.forEach((element) => (element.unread = false));
  }

  unreadAll() {
    this.notifications.forEach((element) => (element.unread = true));
  }

  get getAllRead() {
    let read = 0;
    this.notifications.forEach((element) => {
      if (!element.unread) {
        read++;
      }
    });
    return this.notifications.length === read ? true : false;
  }
}
