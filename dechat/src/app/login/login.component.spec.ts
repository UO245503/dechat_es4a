import {TestBed,async} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import { SolidProvider } from '../models/solid-provider.model';

describe('LoginComponent',() => {
	beforeEach(async(() => {
		TestBed.ConfigureTestingModule({
			declarations: [LoginComponent],
		}).compileComponents();
	}));
	
	beforeEach(() => {
		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create',async(() => { 
		expect(component).toBeTruthy();
	}));
	it('should have inrupt provider',async(() => {
		const inruptProvider : SolidProvider {
			name: 'Inrupt';
			image: '/assets/images/Inrupt.png',
			loginUrl: 'https://inrupt.net/auth',
			desc: 'Inrupt Inc. provider'
		};
		expect(component.identityProviders.include(inruptProvider)).toBeTruthy;
	}));
	it('should have solid community provider',async(() => {
		const solidCommunityProvider : SolidProvider {
			name: 'Solid Community';
			image: '/assets/images/Solid.png',
			loginUrl: 'https://solid.community',
			desc: 'A provider maintained by the Solid Community'
		};
		expect(component.identityProviders.include(inruptProvider)).toBeTruthy;
	}));
});