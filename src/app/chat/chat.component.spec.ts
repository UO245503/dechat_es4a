import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';

// Models
import { SolidChatUser } from '../models/solid-chat-user.model';
import { SolidMessage } from '../models/solid-message.model';

import {ToastrModule, ToastrService} from "ngx-toastr";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {ShContextMenuModule} from "ng2-right-click-menu";
import {VgCoreModule} from "videogular2/core";
import {VgControlsModule} from "videogular2/controls";
import {VgOverlayPlayModule} from "videogular2/overlay-play";
import {VgBufferingModule} from "videogular2/buffering";
import {ColorSketchModule} from "ngx-color/sketch";
import {ColorTwitterModule} from "ngx-color/twitter";
import {VgStreamingModule} from "videogular2/streaming";
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import {RdfService} from "../services/rdf.service";
import { By } from '@angular/platform-browser';

describe('ChatComponent', () => {
    let component: ChatComponent;
    let fixture: ComponentFixture<ChatComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [  BrowserAnimationsModule, ToastrModule.forRoot(), ShContextMenuModule, VgCoreModule,
                VgControlsModule, VgOverlayPlayModule, VgBufferingModule, VgStreamingModule, RouterTestingModule,
            ],
            declarations: [ ChatComponent ],
            providers: [ ToastrService , RdfService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChatComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create an instance of Solid Chat User', () => {
        const user1 = new SolidChatUser("https://miau.solid.community/profile/card#me", 'miau',"https://miau.solid.community/profile/image.jpg");
        expect(user1).toBeTruthy();
    });

    it('should return values from Solid Chat User', () => {
        const user1 = new SolidChatUser("https://miau.solid.community/profile/card#me", 'miau', "https://miau.solid.community/profile/image.jpg");
        expect(user1).toBeTruthy();
        expect(user1.webId).toBe("https://miau.solid.community/profile/card#me");
        expect(user1.name).toBe('miau');
        expect(user1.urlPicture).toBe("https://miau.solid.community/profile/image.jpg");
    });

    it('should create an instance of Solid Message model', () => {
        const message = new SolidMessage('user1', 'Hola', (new Date()).toISOString());
        expect(message).toBeTruthy();
    });

    it('should return values from Solid Message model', () => {
        let date = (new Date()).toISOString()
        const message = new SolidMessage('user1', 'Hola', date);
        expect(message).toBeTruthy();
        expect(message.authorId).toBe('user1');
        expect(message.content).toBe('Hola');
        expect(message.time).toBe(date);
        expect(message.toString()).toBe('user1' + ": " + 'Hola');
    });

    it('should create an instance of Solid Chat model', () => {
        const message = new SolidMessage('user1', 'Hola', (new Date()).toISOString());
        expect(message).toBeTruthy();
    });

    it('should return values from Solid Chat model', () => {
        let date = (new Date()).toISOString()
        const message = new SolidMessage('user1', 'Hola', date);
        expect(message).toBeTruthy();
        expect(message.authorId).toBe('user1');
        expect(message.content).toBe('Hola');
        expect(message.time).toBe(date);
        expect(message.toString()).toBe('user1' + ": " + 'Hola');
    });

    it('should trigger click event for colors', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          let comp = fixture.componentInstance;
          spyOn(comp, 'changeComplete');
          let el = fixture.debugElement.query(By.css('dropdown-item')).nativeElement.click();
          expect(comp.changeComplete).toHaveBeenCalled();
        });
      });

    it('should change colors from element', () => {
        component.changeLetterColor("fa-user-plus","#0b3153");
    });
    
    it('should return name from id', () => {
        let user = "https://miau.solid.community/profile/card#me";
        let name = component.getUsernameFromId(user);
        expect(name).toBe("miau");
    });

    /*it('should change chat', () => {
        component.changeChat("feyre","https://feyre.solid.community/profile/image.jpg");
        expect(component.messages.length).toBe(0);
        expect(component.friendActive).toBe("feyre");
        expect(component.friendPhotoActive).toBe("https://feyre.solid.community/profile/image.jpg");
        expect(component.dateLastMessage).toBe(undefined);
    });*/

    afterEach(() => {
        if (fixture.nativeElement && 'remove' in fixture.nativeElement) {
            (fixture.nativeElement as HTMLElement).remove();
        }
    });
    afterEach(() => {
        TestBed.resetTestingModule();
      });
});
