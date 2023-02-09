import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as ace from 'ace-builds';
import { FormControl, FormGroup } from '@angular/forms';
import { Ace } from 'ace-builds';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/snippets/javascript';

@Component({
  selector: 'ace-editor',
  templateUrl: './ace-editor.component.html',
  styleUrls: ['./ace-editor.component.scss'],
})
export class AceEditorComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') private editor: ElementRef<HTMLElement>;
  @Input() theme: string = 'ace/theme/chrome';
  @Input() mode: string = 'ace/mode/javascript';
  @Input() initialValue: string = `function hello(name) {
    console.log("hello " + name);
}`;
  @Input() aceOptions: Map<string, any> = new Map<string, any>();
  @Input() editorOptions: Partial<Ace.EditorOptions>;
  // @Input() formControlName: string
  @Input() namey: number;
  @Input() control: FormControl;
  @Input() stepType: FormControl;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // set settings
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.14/src-noconflict');
    this.aceOptions.forEach((value, key) => {
      ace.config.set(key, value);
    });
    ace.config.set('enableBasicAutocompletion', true);
    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.setOptions(this.editorOptions);
    aceEditor.session.setValue(this.control.value);
    aceEditor.setTheme(this.theme);
    aceEditor.session.setMode(this.mode);
    aceEditor.on('blur', () => {
      this.control.setValue(aceEditor.getValue());
    });
  }
}
