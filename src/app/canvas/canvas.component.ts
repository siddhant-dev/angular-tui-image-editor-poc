import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import ImageEditor from 'tui-image-editor';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements AfterViewInit{

  @ViewChild('imgEditor') imgEditor!: ElementRef<any>;
  constructor() {}
  options: any;
  instance: any;
  customTheme = {
    'common.bi.image': '',
    'common.bisize.width': '',
    'common.bisize.height': '0',
    'common.backgroundImage': 'none',
    'common.backgroundColor': '#fff',
    'common.border': '1px solid #1f346d',
  
    // header
    'header.backgroundImage': 'none',
    'header.backgroundColor': '#1f346d',
    'header.border': '5px',

  
    // main icons
    'menu.normalIcon.color': '#fff',
    'menu.activeIcon.color': '#1f346d',
    'menu.disabledIcon.color': '#434343',
    'menu.hoverIcon.color': '#1F346D',
    'menu.iconSize.width': '24px',
    'menu.iconSize.height': '24px',
  
    // submenu icons
    'submenu.normalIcon.color': '#fff',
    'submenu.activeIcon.color': '#fff',
    'submenu.iconSize.width': '32px',
    'submenu.iconSize.height': '32px',
  
    // submenu primary color
    'submenu.backgroundColor': '#1f346d',
    'submenu.partition.color': '#fff',
  
    // submenu labels
    'submenu.normalLabel.color': '#fff',
    'submenu.normalLabel.fontWeight': 'normal',
    'submenu.activeLabel.color': '#fff',
    'submenu.activeLabel.fontWeight': 'bold',
  
    // range style
    'range.pointer.color': '#fff',
    'range.bar.color': '#666',
    'range.subbar.color': '#CECECE',
  
    'range.disabledPointer.color': '#414141',
    'range.disabledBar.color': '#282828',
    'range.disabledSubbar.color': '#414141',
  
    'range.value.color': '#fff',
    'range.value.fontWeight': 'normal',
    'range.value.fontSize': '11px',
    'range.value.border': '1px solid #576791',
    'range.value.backgroundColor': '#576791',
    'range.title.color': '#fff',
    'range.title.fontWeight': 'normal',
  
    // colorpicker style
    'colorpicker.button.border': '1px solid #1e1e1e',
    'colorpicker.title.color': '#fff',
  };
  ngAfterViewInit(): void {
    const el = this.imgEditor.nativeElement;
    this.options = {
      includeUI: {
        loadImage: {
          path: 'https://th.bing.com/th/id/OIP.kMyg5UYHOwtBDaG4gIr_xAHaE7?pid=ImgDet&rs=1',
          name: 'Sample'
        },
        menu: ['draw', 'shape',],
        uiSize: {
          height: '70vh',
          width: '100%'
        },
        menuBarPosition: 'bottom',
        theme: this.customTheme
      },
      
      
      cssMaxWidth: 350,
      cssMaxHeight: 400,
      usageStatistics: false
    }
    this.instance = new ImageEditor(el, this.options);
    const btns: HTMLCollection = this.instance.ui._helpMenuBarElement.children;
    btns[0].remove();
    btns[0].remove();
    btns[0].remove();
    btns[0].remove();


    this.instance.ui._buttonElements.load.forEach((el: HTMLElement) => {el.parentElement?.remove(); el.remove()});
    this.instance.ui._buttonElements.download.forEach((el: HTMLElement) =>{ el.parentElement?.remove(); el.remove()});
    console.log(this.instance.ui);

    
  }

}
