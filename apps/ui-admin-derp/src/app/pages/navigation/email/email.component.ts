import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { FloatingCardService } from '@main/floating-card/floating-card.service';
import { SendEmailComponent } from '@shared/navigation/send-email/send-email.component';
import { MainService } from '@main/main.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

const message = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem.
<br><br>
In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem.
<br><br>
Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem.`;

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  emails = [
    {
      messageC: message,
      color: 'primary',
      read: false,
      email: 'test@test.com',
      date: '29 Abr',
      from: 'Pinterest',
      subject: 'The Fifty Shades Generator is a breakthrough in erotic fiction',
      message:
        'By now, my wizards sleeve was frothing like Augustus Gloops mouth at the sight of Willy Wonkas chocolate river',
    },
    {
      messageC: message,
      color: 'teal',
      read: false,
      email: 'test@test.com',
      date: '10 Mar',
      from: 'Adobe Creative Cloud',
      subject: 'The slamming of my mud',
      message:
        'The mixture of sewer trout and love mayonnaise in my old dirt road created the delicious rectoplasm that he was so fond of.',
    },
    {
      messageC: message,
      color: 'indigo',
      read: true,
      email: 'test@test.com',
      date: '10 Mar',
      from: 'Upwork ',
      subject: ' Leaving my panties sunny side up',
      message:
        'The seemingly never-ending streams of love piss emanating from his cunt stretcher soon had me coated like a plasterers radio',
    },
    {
      messageC: message,
      color: 'primary',
      read: true,
      email: 'test@test.com',
      date: '01 Feb',
      from: 'Google My Business',
      subject: 'I awoke the next morning with my fuck trench still frothing. ',
      message: 'Da Vinci load was haemorrhaging down my chin and onto my superdroopers',
    },
    {
      messageC: message,
      color: 'primary',
      read: false,
      email: 'test@test.com',
      date: '29 Jan',
      from: 'Facebook',
      subject: ' If I dont flick the bean',
      message: 'The unrelenting orgasms from his gristle missile slamming my birth cannon made me come so hard',
    },
    {
      messageC: message,
      color: 'orange',
      read: false,
      email: 'test@test.com',
      date: '29 Jan',
      from: 'PagBank',
      subject: 'The slamming of my chocolate',
      message: 'With his devils bagpipe fucking deep into my depravity cavity',
    },
    {
      messageC: message,
      color: 'info',
      read: false,
      email: 'test@test.com',
      date: '29 Jan',
      from: 'Youtube',
      subject: 'The thrusting of my rusty bullet hole was so vigorous',
      message: 'Is now the time to tell him I really need to cop a butt nugget, I wondered',
    },
    {
      messageC: message,
      color: 'purple',
      read: false,
      email: 'test@test.com',
      date: '29 Jan',
      from: 'Pinterest',
      subject: 'The feeling of his baby gravy seeping down',
      message:
        ' There was baby gravy sliming from his tallywacker and I was wetter than an otters pocket. We were ready for more',
    },
    {
      messageC: message,
      color: 'dark',
      read: false,
      email: 'test@test.com',
      date: '29 Jan',
      from: 'Pinterest',
      subject: 'The Fifty Shades Generator is a breakthrough in erotic fiction',
      message:
        'By now, my wizards sleeve was frothing like Augustus Gloops mouth at the sight of Willy Wonkas chocolate river',
    },
    {
      messageC: message,
      color: 'teal',
      read: false,
      email: 'test@test.com',
      date: '29 Jan',
      from: 'Adobe Creative Cloud',
      subject: 'The slamming of my mud',
      message:
        'The mixture of sewer trout and love mayonnaise in my old dirt road created the delicious rectoplasm that he was so fond of.',
    },
    {
      messageC: message,
      color: 'primary',
      read: false,
      email: 'test@test.com',
      date: '29 Jan',
      from: 'Upwork ',
      subject: ' Leaving my panties sunny side up',
      message:
        'The seemingly never-ending streams of love piss emanating from his cunt stretcher soon had me coated like a plasterers radio',
    },
    {
      messageC: message,
      color: 'danger',
      read: false,
      email: 'test@test.com',
      date: '29 Jan',
      from: 'Google My Business',
      subject: 'I awoke the next morning with my fuck trench still frothing. ',
      message: 'Da Vinci load was haemorrhaging down my chin and onto my superdroopers',
    },
    {
      messageC: message,
      color: 'warning',
      read: false,
      email: 'test@test.com',
      date: '29 Jan',
      from: 'Facebook',
      subject: ' If I dont flick the bean',
      message: 'The unrelenting orgasms from his gristle missile slamming my birth cannon made me come so hard',
    },
    {
      messageC: message,
      color: 'dark',
      read: true,
      email: 'test@test.com',
      date: '29 Jan',
      from: 'PagBank',
      subject: 'The slamming of my chocolate',
      message: 'With his devils bagpipe fucking deep into my depravity cavity',
    },
    {
      messageC: message,
      color: 'danger',
      read: true,
      email: 'test@test.com',
      date: '29 Jan',
      from: 'Youtube',
      subject: 'The thrusting of my rusty bullet hole was so vigorous',
      message: 'Is now the time to tell him I really need to cop a butt nugget, I wondered',
    },
    {
      messageC: message,
      color: 'primary',
      read: false,
      email: 'test@test.com',
      date: '29 Jan',
      from: 'Pinterest',
      subject: 'The feeling of his baby gravy seeping down',
      message:
        ' There was baby gravy sliming from his tallywacker and I was wetter than an otters pocket. We were ready for more',
    },
  ];

  pageArea = 1;

  details;

  constructor(
    public mainNavService: MainNavService,
    public mainService: MainService,
    public floatingCardService: FloatingCardService,
    public activeRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('extra-pages', 'nav-email');
    this.titleService.setTitle('Email - Swarm IO');

    if (this.activeRoute.snapshot.queryParams?.area) {
      this.pageArea = this.activeRoute.snapshot.queryParams.area;
    }

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && this.activeRoute.snapshot.queryParams?.area) {
        this.pageArea = this.activeRoute.snapshot.queryParams.area;
      }
    });
  }

  newEmail(email?) {
    this.floatingCardService.show();
    this.floatingCardService.load({
      component: SendEmailComponent,
      params: [
        { param: 'floatingCard', value: true },
        { param: 'email', value: email },
      ],
    });
  }

  deleteEmail(item) {
    this.emails = this.emails.filter((x) => x !== item);
    this.details = null;
  }

  read(item) {
    item.read = true;
  }

  unread(item) {
    item.read = false;
  }

  detail(item) {
    item.read = false;
    this.details = item;
  }

  reply(item) {
    this.newEmail();
  }

  forward(item) {
    this.newEmail();
  }
}
